<?php

if ( ! defined( 'ABSPATH' ) ) exit;
class GMPQCW_API {
    
    public function __construct() {
        // Register the REST API route on plugin activation
        add_action('rest_api_init', array($this, 'GMPQCW_rest_api_init'));
    }

    public function GMPQCW_rest_api_init() {
        // Register a custom route for saving settings
       

        register_rest_route('gmpqcw/v1', '/save-settings', array(
            'methods' => 'POST',
            'callback' => array($this, 'GMPQCW_save_multiple_settings'),
            'permission_callback' => array($this, 'GMPQCW_permission_callback'),
        ));

        register_rest_route('gmpqcw/v1', '/save-customfield', array(
            'methods' => 'POST',
            'callback' => array($this, 'GMPQCW_save_custom_field'),
            'permission_callback' => array($this, 'GMPQCW_permission_callback'),
        ));
        register_rest_route('gmpqcw/v1', '/delete-customfield', array(
            'methods' => 'POST',
            'callback' => array($this, 'GMPQCW_delete_custom_field'),
            'permission_callback' => array($this, 'GMPQCW_permission_callback'),
        ));

        register_rest_route('gmpqcw/v1', '/deleteallenquirys', array(
            'methods' => 'POST',
            'callback' => array($this, 'GMPQCW_deleteallenquirys'),
            'permission_callback' => array($this, 'GMPQCW_permission_callback'),
        ));

        // Register a custom route for fetching settings (GET)
        register_rest_route('gmpqcw/v1', '/get-settings', array(
            'methods' => 'GET',
            'callback' => array($this, 'GMPQCW_get_settings'),
            'permission_callback' => array($this, 'GMPQCW_permission_callback'),
        ));
        register_rest_route('gmpqcw/v1', '/get-enquiries', array(
            'methods'             => WP_REST_Server::READABLE, // Instead of 'GET', use predefined constant
            'callback'            => array($this, 'GMPQCW_get_enquirys'),
            'permission_callback' => array($this, 'GMPQCW_permission_callback'),
            'args'                => array(  // Define expected query parameters
                'page' => array(
                    'description'       => 'Current page number',
                    'type'              => 'integer',
                    'default'           => 1,
                    'sanitize_callback' => 'absint',
                    'validate_callback' => function($param, $request, $key) {
                        return $param > 0;
                    },
                ),
                'per_page' => array(
                    'description'       => 'Number of items per page',
                    'type'              => 'integer',
                    'default'           => 10,
                    'sanitize_callback' => 'absint',
                    'validate_callback' => function($param, $request, $key) {
                        return $param > 0 && $param <= 100; // Restrict max per_page to 100
                    },
                ),
            ),
        ));

    }
    
    
    // Save multiple settings
    public function GMPQCW_save_multiple_settings($request) {
         // Get nonce from request headers
        $nonce = $request->get_header('X-WP-Nonce');

        // Verify nonce
        if ( ! wp_verify_nonce( $nonce, 'wp_rest' ) ) {
            return new WP_REST_Response(array(
            'success' => false,
            'message' => 'Invalid nonce',
        ), 403); // Invalid nonce error
        }
        // Retrieve the settings array from the request body
        $settings = $request->get_param('settings');

        if (!is_array($settings)) {
            return new WP_Error('invalid_settings', 'Settings must be an array', array('status' => 400));
        }

        $response = array();

        // Loop through each setting and save it
        foreach ($settings as $option_name => $option_value) {
            // Sanitize the option name
            $option_name = sanitize_key($option_name);
           /* echo "<pre>";
            print_r($option_value);
            echo "</pre>";*/
            // Sanitize the option value based on your use case. Example:
            if (is_array($option_value)) {
                $option_value = array_map('sanitize_text_field', $option_value); // Sanitize array values
            } else {
                 if ($option_name=='gmpqcw_email_body') {
                    $option_value = wp_kses_post($option_value); // Sanitize single value
                }else{
                    $option_value = sanitize_text_field($option_value);
                }
            }

            // Save the option
            $result = update_option($option_name, $option_value);

            // Add the result to the response
            $response[$option_name] = $result ? 'saved' : 'failed';
        }

        return rest_ensure_response(array(
            'success' => true,
            'message' => 'Settings processed',
            'results' => $response,
        ));
    }

    // Save multiple settings
    public function GMPQCW_save_custom_field($request) {
         // Get nonce from request headers
        $nonce = $request->get_header('X-WP-Nonce');

        // Verify nonce
        if ( ! wp_verify_nonce( $nonce, 'wp_rest' ) ) {
            return new WP_REST_Response(array(
                'success' => false,
                'message' => 'Invalid nonce',
            ), 403); // Invalid nonce error
        }
        global $gmpqcw_arr;
        $settings = $request->get_param('settings');
        // Sanitize and retrieve the data from the AJAX request
        $field_name = isset($settings['name']) && $settings['name'] != 'null' ? sanitize_text_field($settings['name']) : '';
        $field_label = sanitize_text_field($settings['label']);
        $field_order = sanitize_text_field($settings['order']);
        $field_type = sanitize_text_field($settings['type']);
        $field_required = sanitize_text_field($settings['required']);
        $field_enable = sanitize_text_field($settings['enable']);
        $field_options = sanitize_textarea_field($settings['options']);
        // Validate the required fields
        if (empty($field_label)) {
            return new WP_REST_Response(array(
                'success' => false,
                'message' => 'Field label is required.',
            ), 403);
        }
        if (empty($field_order) ) {
             return new WP_REST_Response(array(
                'success' => false,
                'message' => 'Field order is required.',
            ), 403);
        }
        if (empty($field_type) ) {
             return new WP_REST_Response(array(
                'success' => false,
                'message' => 'Field type is required.',
            ), 403);
        }
        if (empty($field_required) ) {
             return new WP_REST_Response(array(
                'success' => false,
                'message' => 'Field required is required.',
            ), 403);
        }
        if (empty($field_enable) ) {
             return new WP_REST_Response(array(
                'success' => false,
                'message' => 'Field enable is required.',
            ), 403);
        }

        $gmpqcw_field_customizer_enble = $gmpqcw_arr['gmpqcw_field_customizer_enble'];
        $gmpqcw_field_customizer_required = $gmpqcw_arr['gmpqcw_field_customizer_required'];
        $gmpqcw_field_customizer_field = $gmpqcw_arr['gmpqcw_field_customizer_field'];
        $gmpqcw_field_customizer_type = $gmpqcw_arr['gmpqcw_field_customizer_type'];
        $gmpqcw_field_customizer_order = $gmpqcw_arr['gmpqcw_field_customizer_order'];
        $gmpqcw_field_customizer_option = $gmpqcw_arr['gmpqcw_field_customizer_option'];
        if (!is_array($gmpqcw_field_customizer_option)) {
            $gmpqcw_field_customizer_option = []; 
        }
        if($field_name!=''){
            $unid = $field_name;
        }else{
            $unid = 'field_'.uniqid();
        }
        
        $gmpqcw_field_customizer_required[$unid]=$field_required;
        $gmpqcw_field_customizer_field[$unid]=$field_label;
        $gmpqcw_field_customizer_type[$unid]=$field_type;
        $gmpqcw_field_customizer_order[$unid]=$field_order;
        $gmpqcw_field_customizer_option[$unid] = $field_options;
        $gmpqcw_field_customizer_enble[$unid]=$field_enable;

        update_option( 'gmpqcw_field_customizer_enble', $gmpqcw_field_customizer_enble );
        update_option( 'gmpqcw_field_customizer_required', $gmpqcw_field_customizer_required );
        update_option( 'gmpqcw_field_customizer_field', $gmpqcw_field_customizer_field );
        update_option( 'gmpqcw_field_customizer_type', $gmpqcw_field_customizer_type );
        update_option( 'gmpqcw_field_customizer_order', $gmpqcw_field_customizer_order );
        update_option( 'gmpqcw_field_customizer_option', $gmpqcw_field_customizer_option );

        return rest_ensure_response(array(
            'success' => true,
            'message' => 'Settings processed',
        ));
    }
    
   public function GMPQCW_deleteallenquirys($request) {
        // Get nonce from request headers
        $nonce = $request->get_header('X-WP-Nonce');

        // Verify nonce
        if ( ! wp_verify_nonce( $nonce, 'wp_rest' ) ) {
            return new WP_REST_Response(array(
                'success' => false,
                'message' => 'Invalid nonce',
            ), 403); // Invalid nonce error
        }

        global $wpdb;
        
        // Get the 'settings' parameter from the request
        $settings = $request->get_param('settings');
        // Get the ID parameter from the settings
        $id = isset($settings['id']) ? $settings['id'] : null;

        if ($id) {
            // Delete meta data for the specific post (enquiry) by ID
            $wpdb->query($wpdb->prepare("DELETE FROM {$wpdb->postmeta} WHERE post_id = %d", $id));

            // Delete the specific post (enquiry) by ID
            $result = $wpdb->query($wpdb->prepare("DELETE FROM {$wpdb->posts} WHERE ID = %d AND post_type = 'gmpqcw_enquiry'", $id));

            // Check if the specific post was deleted
            if ($result === false) {
                return new WP_REST_Response(array(
                    'success' => false,
                    'message' => 'Error deleting the enquiry.',
                ), 500);
            }

            // Return success message for single enquiry deletion
            return new WP_REST_Response(array(
                'success' => true,
                'message' => 'Enquiry deleted successfully.',
            ), 200);
        } else {
            // If no ID is provided, delete all enquiries and their meta data
            $wpdb->query("DELETE pm FROM {$wpdb->postmeta} pm
                          INNER JOIN {$wpdb->posts} p ON p.ID = pm.post_id
                          WHERE p.post_type = 'gmpqcw_enquiry'");

            // Delete all posts of type 'gmpqcw_enquiry'
            $result = $wpdb->query("DELETE FROM {$wpdb->posts} WHERE post_type = 'gmpqcw_enquiry'");

            // Check if posts were deleted
            if ($result === false) {
                return new WP_REST_Response(array(
                    'success' => false,
                    'message' => 'Error deleting enquiries.',
                ), 500);
            }

            // Return success message for deleting all enquiries
            return new WP_REST_Response(array(
                'success' => true,
                'message' => 'All enquiries and their related meta data deleted successfully.',
            ), 200);
        }
    }



    // Save multiple settings
    public function GMPQCW_delete_custom_field($request) {
         // Get nonce from request headers
        $nonce = $request->get_header('X-WP-Nonce');

        // Verify nonce
        if ( ! wp_verify_nonce( $nonce, 'wp_rest' ) ) {
            return new WP_REST_Response(array(
                'success' => false,
                'message' => 'Invalid nonce',
            ), 403); // Invalid nonce error
        }
        $settings = $request->get_param('settings');
        global $gmpqcw_arr;
        $field_name = sanitize_text_field($settings['name']);

        // Validate the required fields
        if (empty($field_name)) {
            return new WP_REST_Response(array(
                'success' => false,
                'message' => 'Field name is required.',
            ), 403);
        }
        $gmpqcw_field_customizer_enble = $gmpqcw_arr['gmpqcw_field_customizer_enble'];
        $gmpqcw_field_customizer_required = $gmpqcw_arr['gmpqcw_field_customizer_required'];
        $gmpqcw_field_customizer_field = $gmpqcw_arr['gmpqcw_field_customizer_field'];
        $gmpqcw_field_customizer_type = $gmpqcw_arr['gmpqcw_field_customizer_type'];
        $gmpqcw_field_customizer_order = $gmpqcw_arr['gmpqcw_field_customizer_order'];
        $gmpqcw_field_customizer_option = $gmpqcw_arr['gmpqcw_field_customizer_option'];


        if(!is_array($gmpqcw_field_customizer_option) && trim($gmpqcw_field_customizer_option)==''){
            $gmpqcw_field_customizer_option = array();
        }
        if(array_key_exists($field_name,$gmpqcw_field_customizer_enble)){
            unset($gmpqcw_field_customizer_enble[$field_name]);
        }
        if(array_key_exists($field_name,$gmpqcw_field_customizer_required)){
            unset($gmpqcw_field_customizer_required[$field_name]);
        }
        if(array_key_exists($field_name,$gmpqcw_field_customizer_field)){
            unset($gmpqcw_field_customizer_field[$field_name]);
        }
        if(array_key_exists($field_name,$gmpqcw_field_customizer_type)){
            unset($gmpqcw_field_customizer_type[$field_name]);
        }
        if(array_key_exists($field_name,$gmpqcw_field_customizer_order)){
            unset($gmpqcw_field_customizer_order[$field_name]);
        }
        if(array_key_exists($field_name,$gmpqcw_field_customizer_option)){
            unset($gmpqcw_field_customizer_option[$field_name]);
        }
        //print_r($gmpqcw_field_customizer_type);
        
        update_option( 'gmpqcw_field_customizer_enble', $gmpqcw_field_customizer_enble );
        update_option( 'gmpqcw_field_customizer_required', $gmpqcw_field_customizer_required );
        update_option( 'gmpqcw_field_customizer_field', $gmpqcw_field_customizer_field );
        update_option( 'gmpqcw_field_customizer_type', $gmpqcw_field_customizer_type );
        update_option( 'gmpqcw_field_customizer_order', $gmpqcw_field_customizer_order );
        update_option( 'gmpqcw_field_customizer_option', $gmpqcw_field_customizer_option );
         return rest_ensure_response(array(
            'success' => true,
            'message' => 'Field deleted successfully.',
        ));
    }

    // Retrieve settings
    public function GMPQCW_get_settings($request) {
        global $gmpqcw_arr,$gmpqcw_translation;
         // Get nonce from request headers
        $nonce = $request->get_header('X-WP-Nonce');

        // Verify nonce
        if ( ! wp_verify_nonce( $nonce, 'wp_rest' ) ) {
            return new WP_REST_Response(array(
                'success' => false,
                'message' => 'Invalid nonce',
            ), 403); // Invalid nonce error
        }
        $response = array();

        // Retrieve each option and add it to the response array
        foreach ($gmpqcw_arr as $key_option=>$value_option) {
            $response[$key_option] = $value_option;
        }
        
        $gmpqcw_field_customizer_enble = $gmpqcw_arr['gmpqcw_field_customizer_enble'];
        $gmpqcw_field_customizer_required = $gmpqcw_arr['gmpqcw_field_customizer_required'];
        $gmpqcw_field_customizer_field = $gmpqcw_arr['gmpqcw_field_customizer_field'];
        $gmpqcw_field_customizer_type = $gmpqcw_arr['gmpqcw_field_customizer_type'];
        $gmpqcw_field_customizer_order = $gmpqcw_arr['gmpqcw_field_customizer_order'];
        $gmpqcw_field_customizer_option = $gmpqcw_arr['gmpqcw_field_customizer_option'];
        $gmpqcw_fields =array();
        foreach ($gmpqcw_field_customizer_enble as $keylooparrm => $valuelooparrm) {
           
                $fieldssetup =array();
                $fieldssetup['enable']=$gmpqcw_field_customizer_enble[$keylooparrm];
                $fieldssetup['name']=$keylooparrm;
                $fieldssetup['type']=$gmpqcw_field_customizer_type[$keylooparrm];
                $fieldssetup['order']=$gmpqcw_field_customizer_order[$keylooparrm];
                $fieldssetup['label']=esc_html($gmpqcw_field_customizer_field[$keylooparrm]);
                $fieldssetup['required']=(isset($gmpqcw_field_customizer_required[$keylooparrm]))?$gmpqcw_field_customizer_required[$keylooparrm]:'';
                $fromtype = array("select", "radio", "multiselect", "checkbox");
                if (in_array( $gmpqcw_field_customizer_type[$keylooparrm], $fromtype)){
                    $fieldssetup['options']=explode("\n",$gmpqcw_field_customizer_option[$keylooparrm]);
                }else{
                    $fieldssetup['options'] = array();
                }
                $gmpqcw_fields[]=$fieldssetup;
           
            
        }
        $response['custom_fields'] = $gmpqcw_fields;
        return rest_ensure_response($response);
    }

    // Retrieve settings
    public function GMPQCW_get_enquirys($request) {
        global $gmpqcw_arr, $gmpqcw_translation;
        
        // Get nonce from request headers
        $nonce = $request->get_header('X-WP-Nonce');

        // Verify nonce
        if (!wp_verify_nonce($nonce, 'wp_rest')) {
            return new WP_REST_Response(array(
                'success' => false,
                'message' => 'Invalid nonce',
            ), 403); // Invalid nonce error
        }

        $response = [];

        // Pagination parameters
        $page      = max(1, intval($request->get_param('page'))); // Default to page 1
        $per_page  = max(1, intval($request->get_param('per_page'))); // Default to 10
        $offset    = ($page - 1) * $per_page;

        // Fetch total posts count
        $total_posts = wp_count_posts('gmpqcw_enquiry')->publish;
        $total_pages = ceil($total_posts / $per_page);

        // Fetch fields from the database with pagination
        $fields = get_posts(array(
            'post_type'      => 'gmpqcw_enquiry',
            'post_status'    => 'publish',
            'posts_per_page' => $per_page,
            'paged'          => $page,
            'offset'         => $offset,
        ));

        $gmpqcw_field_customizer_field = $gmpqcw_arr['gmpqcw_field_customizer_field'];

        // Ensure the option is an array
        if (!is_array($gmpqcw_field_customizer_field)) {
            $gmpqcw_field_customizer_field = [];
        }

        // Initialize data array
        $data = array_map(function ($field) use ($gmpqcw_field_customizer_field) {
            $item = [
                'id'    => $field->ID,
            ];

            // Retrieve custom meta fields
            foreach ($gmpqcw_field_customizer_field as $keymk => $valuemk) {
                $valuekey = get_post_meta($field->ID, $keymk, true);
                $item[$keymk] = is_array($valuekey) ? implode(",", $valuekey) : esc_html($valuekey);
            }
            $valuekey = get_post_meta($field->ID, 'product_gmpqcw', true);
            $item['product_gmpqcw'] = is_array($valuekey) ? implode(",", $valuekey) : esc_html($valuekey);

            return $item;
        }, $fields);

        // Add data and pagination info to the response
        $response['enquiry'] = $data;
        $response['pagination'] = [
            'total_items' => $total_posts,
            'total_pages' => $total_pages,
            'current_page' => $page,
            'per_page' => $per_page,
        ];
        $response['header'] = [
        ];
         $response['header']['id'] ='Id';
        foreach ($gmpqcw_field_customizer_field as $keymk => $valuemk) {
             $response['header'][$keymk] = $valuemk;
        }
        $response['header']['product_gmpqcw'] = 'Products';
        return rest_ensure_response($response);
    }


    // Permission callback: only allow admins
    public function GMPQCW_permission_callback($request) {
        return current_user_can('manage_options'); // Allow only admins
    }
}