<?php

if ( ! defined( 'ABSPATH' ) ) exit;
class GMPQCW_API_Frontend {
    
    public function __construct() {
        add_action('rest_api_init', array($this, 'GMPQCW_rest_api_init'));
    }

    public function GMPQCW_rest_api_init() {
       
        register_rest_route('gmpqcw/v1', '/cart_items', array(
            'methods' => 'GET',
            'callback' => array($this,'gmpqcw_get_cart_items'),
            'permission_callback' => function () {
                return true; // Change this to require authentication if needed
            },
        ));
        register_rest_route('gmpqcw/v1', '/add_to_cart', array(
            'methods'  => 'POST',
            'callback' => array($this,'gmpqcw_rest_add_to_cart'),
            'permission_callback' => function () {
                return true; // Change this to require authentication if needed
            },
        ));
        register_rest_route('gmpqcw/v1', '/remove_from_cart', array(
            'methods'  => 'POST',
            'callback' => array($this,'gmpqcw_remove_from_cart'),
            'permission_callback' => function () {
                    return true; // Change this to require authentication if needed
                },
        ));
        register_rest_route('gmpqcw/v1', '/enquiry', array(
            'methods' => 'POST',
            'callback' => array($this,'gmpqcw_enquiry'),
            'permission_callback' => function () {
                return true; // Change this to require authentication if needed
            },
        ));
    }

    public function gmpqcw_get_cart_items() {
        if (isset($_COOKIE['gmpqcw_added_cart'])) {
            $cart_data = json_decode(stripslashes($_COOKIE['gmpqcw_added_cart']), true);
            
            if (!empty($cart_data)) {
                $cart_items = [];

                foreach ($cart_data as $product_id) {
                    $product = wc_get_product($product_id);
                    if (!$product) continue;

                    $image = wp_get_attachment_image_src(get_post_thumbnail_id($product->get_id()), 'shop_catalog');
                    $cart_items[] = [
                        'id' => $product->get_id(),
                        'name' => $product->get_name(),
                        'image' => $image ? $image[0] : wc_placeholder_img_src(),
                        'url' => get_permalink($product->get_id()),
                    ];
                }

                return rest_ensure_response($cart_items);
            }
        }
        return rest_ensure_response([]);
    }

    public function gmpqcw_rest_add_to_cart(WP_REST_Request $request) {
        global $gmpqcw_arr;

        $nonce = $request->get_header('X-WP-Nonce');
        if (!wp_verify_nonce($nonce, 'wp_rest')) {
            return new WP_REST_Response(['msg' => 'error', 'returnhtml' => 'Nonce verification failed'], 403);
        }

        $product_id = sanitize_text_field($request->get_param('add_id'));
        if (!$product_id) {
            return new WP_REST_Response(['msg' => 'error', 'returnhtml' => 'Invalid product ID'], 400);
        }

        // Retrieve existing cart from cookies
        $gmpqcw_added_cart = isset($_COOKIE['gmpqcw_added_cart']) ? json_decode(stripslashes($_COOKIE['gmpqcw_added_cart']), true) : [];

        // Add product if not already in cart
        if (!in_array($product_id, $gmpqcw_added_cart)) {
            $gmpqcw_added_cart[] = $product_id;
        }

        // Store back in the cookie
        setcookie("gmpqcw_added_cart", json_encode($gmpqcw_added_cart), time() + 7 * DAY_IN_SECONDS, "/");


        return new WP_REST_Response([
            "msg" => "success",
            
        ], 200);
    }

    public function gmpqcw_remove_from_cart(WP_REST_Request $request) {
        // Validate Nonce
        $nonce = $request->get_header('X-WP-Nonce');
        if (!wp_verify_nonce($nonce, 'wp_rest')) {
            return new WP_REST_Response(['msg' => 'error', 'returnhtml' => 'Nonce verification failed'], 403);
        }

        // Validate Product ID
        $product_id = sanitize_text_field($request->get_param('product_id'));
        if (!$product_id) {
            return new WP_REST_Response(['msg' => 'error', 'returnhtml' => 'Invalid product ID'], 400);
        }

        // Retrieve existing cart from cookies
        $gmpqcw_added_cart = isset($_COOKIE['gmpqcw_added_cart']) ? json_decode(stripslashes($_COOKIE['gmpqcw_added_cart']), true) : [];

        // Remove product if it exists in the cart
        if (($key = array_search($product_id, $gmpqcw_added_cart)) !== false) {
            unset($gmpqcw_added_cart[$key]);
        }

        // Save updated cart back to cookies
        setcookie("gmpqcw_added_cart", json_encode(array_values($gmpqcw_added_cart)), time() + 7 * DAY_IN_SECONDS, "/");

        return new WP_REST_Response([
            "msg" => "success",
            "returnhtml" => "<div class='gmpqcwmsgc gmwsuc'><div>Product removed from enquiry cart!</div></div>"
        ], 200);
    }
    public function gmpqcw_enquiry(WP_REST_Request $request) {
        global $gmpqcw_arr;
        $gmpqcw_redirect_form_sub = $gmpqcw_arr['gmpqcw_redirect_form_sub'];
        $gmpqcw_redirect_form_sub_page = $gmpqcw_arr['gmpqcw_redirect_form_sub_page'];
        $gmpqcw_customer_email_subject = $gmpqcw_arr['gmpqcw_customer_email_subject'];
        $gmpqcw_send_enquiry_email_cutomer = $gmpqcw_arr['gmpqcw_send_enquiry_email_cutomer'];
        // Verify Nonce
        $nonce = $request->get_header('X-WP-Nonce');
        if (!wp_verify_nonce($nonce, 'wp_rest')) {
            return new WP_REST_Response(['msg' => 'error', 'returnhtml' => 'Nonce verification failed'], 403);
        }

        $msg = '';
        foreach ($gmpqcw_arr['gmpqcw_field_customizer_field'] as $keylooparrm => $valuelooparrm) {
            if ($gmpqcw_arr['gmpqcw_field_customizer_enble'][$keylooparrm] === "yes") {
                if (empty($request->get_param($keylooparrm)) && $gmpqcw_arr['gmpqcw_field_customizer_required'][$keylooparrm] === "yes") {
                    $msg .= '<div>' . __($gmpqcw_arr['gmpqcw_trasnlation_form_required'] . ' ' . $valuelooparrm . '!', 'gmpqcw') . '</div>';
                }
            }
        }

        if ($msg !== '') {
            return new WP_REST_Response(['msg' => 'error', 'returnhtml' => "<div class='gmpqcwmsgc gmwerr'>$msg</div>"], 400);
        }

        // Retrieve and format email data
        $to = !empty($gmpqcw_arr['gmpqcw_reci_email']) ? sanitize_text_field($gmpqcw_arr['gmpqcw_reci_email']) : get_option('admin_email');
        $body = $gmpqcw_arr['gmpqcw_email_body'];
        $post_id = wp_insert_post([
            'post_type' => 'gmpqcw_enquiry',
            'post_title' => sanitize_text_field($request->get_param('name')),
            'post_status' => 'publish'
        ]);
        foreach ($gmpqcw_arr['gmpqcw_field_customizer_field'] as $keylooparrm => $valuelooparrm) {
            if ($gmpqcw_arr['gmpqcw_field_customizer_enble'][$keylooparrm] === "yes") {
                $field_value = $request->get_param($keylooparrm);

                if (is_array($field_value)) {
                    $field_value = implode(", ", $field_value);
                }

                // Safely coalesce null to empty string
                $safe_value = $field_value ?? '';

                $body = str_ireplace("[$keylooparrm]", $safe_value, $body);
                update_post_meta($post_id, $keylooparrm, $safe_value);
            }
        }

        // Retrieve cart data from cookies
        $gmpqcw_added_cart = isset($_COOKIE['gmpqcw_added_cart']) ? json_decode(stripslashes($_COOKIE['gmpqcw_added_cart']), true) : [];
        $namearr = [];

        if (!empty($gmpqcw_added_cart)) {
            foreach ($gmpqcw_added_cart as $product_id) {
                $product = wc_get_product($product_id);
                if ($product) {
                    $namearr[] = $product->get_name();
                }
            }
        }

        // Save product names to post meta
        $prodnameformail = implode(", ", $namearr);
        update_post_meta($post_id, 'product_gmpqcw', $prodnameformail);
        $body = str_ireplace("[product]", $prodnameformail ?? '', $body);

        // Send email
        wp_mail($to, $gmpqcw_arr['gmpqcw_email_sub'], $body, ['Content-Type: text/html; charset=UTF-8']);
        $gmpqcw_email = sanitize_text_field($request->get_param('email'));
        if($gmpqcw_send_enquiry_email_cutomer=='yes' && $gmpqcw_email!=''){
                 wp_mail( $gmpqcw_email, $gmpqcw_customer_email_subject, $body ,['Content-Type: text/html; charset=UTF-8']);
         }

        // Clear the cart by deleting the cookie
        setcookie('gmpqcw_added_cart', '', time() - 3600, '/');
        $returnarr = array();
        $returnarr['msg']="success";
        $returnarr['returnhtml']="<div class='gmpqcwmsgc gmwsuc'><div>" . $gmpqcw_arr['gmpqcw_trasnlation_email_sucesemsg'] . "</div></div>";
        if($gmpqcw_redirect_form_sub=='yes'){
                 $returnarr['redirect']="yes";
                 $returnarr['redirect_to'] = get_permalink($gmpqcw_redirect_form_sub_page);
         }else{
                 $returnarr['redirect']="no";
         }

        return new WP_REST_Response($returnarr, 200);
    }



}