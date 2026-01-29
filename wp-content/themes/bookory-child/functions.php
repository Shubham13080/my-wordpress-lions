<?php
/**
 * Theme functions and definitions.
 */
	add_action('admin_menu', 'gmpqcw_add_enquiry_menu');

function gmpqcw_add_enquiry_menu() {
    add_menu_page(
        'Product Enquiries',
        'Product Enquiries',
        'manage_woocommerce',
        'gmpqcw-enquiries',
        'gmpqcw_render_enquiry_page',
        'dashicons-email-alt',
        56
    );
}
function gmpqcw_render_enquiry_page() {
    ?>
    <div class="wrap">
        <h1>Product Enquiries</h1>

        <table class="widefat fixed striped">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Email</th>
					 <th>Phone</th>
    <th>Subject</th>
                    <th>Product</th>
                    <th>Message</th>
                </tr>
            </thead>
            <tbody>

            <?php
            $args = array(
                'post_type'      => 'gmpqcw_enquiry',
                'posts_per_page' => -1,
                'post_status'    => 'publish'
            );

            $query = new WP_Query($args);

            if ($query->have_posts()) :
                while ($query->have_posts()) : $query->the_post();

                    $enquiry_id = get_the_ID();

               $name    = get_post_meta($enquiry_id, 'customer_name', true);
$email   = get_post_meta($enquiry_id, 'customer_email', true);
$phone   = get_post_meta($enquiry_id, 'customer_phone', true);
$subject = get_post_meta($enquiry_id, 'subject', true);
$message = get_post_meta($enquiry_id, 'message', true);
$product = get_post_meta($enquiry_id, 'product_id', true);

echo '<tr>';
echo '<td>' . esc_html(get_the_date()) . '</td>';
echo '<td>' . esc_html($name ?: '-') . '</td>';
echo '<td>' . esc_html($email ?: '-') . '</td>';
echo '<td>' . esc_html($phone ?: '-') . '</td>';
echo '<td>' . esc_html($subject ?: '-') . '</td>';
echo '<td>' . esc_html($product ? get_the_title($product) : '-') . '</td>';
echo '<td>' . esc_html($message ?: '-') . '</td>';
echo '</tr>';



                endwhile;
                wp_reset_postdata();
            else :
                echo '<tr><td colspan="5">No enquiries found</td></tr>';
            endif;
            ?>

            </tbody>
        </table>
    </div>
    <?php
}
/**
 * Save WisdmLabs Product Enquiry (FREE) into Database
 */
add_action(
    'pefree_product_enquiry_sent_success',
    'store_product_enquiry_in_database',
    10,
    9
);

function store_product_enquiry_in_database(
    $product_id,
    $variation_id,
    $name,
    $email,
    $phone,
    $subject,
    $message,
    $author_email,
    $post_data
) {

    // Create enquiry post
    $enquiry_id = wp_insert_post(array(
        'post_type'   => 'gmpqcw_enquiry',
        'post_status' => 'publish',
        'post_title'  => 'Enquiry - ' . sanitize_text_field($name),
    ));

    // Save enquiry meta
    if ( $enquiry_id && ! is_wp_error($enquiry_id) ) {

        update_post_meta($enquiry_id, 'product_id', $product_id);
        update_post_meta($enquiry_id, 'variation_id', $variation_id);
        update_post_meta($enquiry_id, 'customer_name', $name);
        update_post_meta($enquiry_id, 'customer_email', $email);
        update_post_meta($enquiry_id, 'customer_phone', $phone);
        update_post_meta($enquiry_id, 'subject', $subject);
        update_post_meta($enquiry_id, 'message', $message);

        if ( isset($post_data['wdm_product_name']) ) {
            update_post_meta($enquiry_id, 'product_name', sanitize_text_field($post_data['wdm_product_name']));
        }

        if ( isset($post_data['wdm_product_url']) ) {
            update_post_meta($enquiry_id, 'product_url', esc_url_raw($post_data['wdm_product_url']));
        }
    }
}


add_action('wp_footer', 'force_enquiry_now_text');
function force_enquiry_now_text() {
?>
<script>
(function(){

    function forceText() {
        document.querySelectorAll('.gmpqcw_inq_addtocart').forEach(function(btn){
            if (btn.innerText.trim() !== 'ENQUIRY NOW') {
                btn.innerText = 'ENQUIRY NOW';
            }
        });
    }

    // Initial load
    document.addEventListener("DOMContentLoaded", function(){
        forceText();
    });

    // Observe DOM changes (AJAX / Modal / Plugin JS)
    const observer = new MutationObserver(function(mutations){
        mutations.forEach(function(mutation){
            forceText();
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true
    });

})();
</script>
<?php
}
