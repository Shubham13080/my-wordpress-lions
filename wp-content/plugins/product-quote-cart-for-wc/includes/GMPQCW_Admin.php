<?php

/**
 * This class is loaded on the back-end since its main job is 
 * to display the Admin to box.
 */

class GMPQCW_Admin {
	public function __construct () {


		add_action( 'admin_menu', array( $this, 'GMPQCW_admin_menu' ) );
		add_action('admin_enqueue_scripts', array( $this, 'GMPQCW_admin_script' ));
		add_action( 'init', array( $this, 'GMPQCW_init' ) );
		if ( is_admin() ) {
			return;
		}
		
	}

	public function GMPQCW_admin_script ($hook) {
		if($hook=='toplevel_page_GMPQCW'){
			wp_enqueue_style('wp-components');
			wp_register_script(
	            'gmpqcw-react-admin',
	            GMPQCW_PLUGIN_URL.'/build/admin/admin.js', // Adjust the path if necessary
		        ['wp-element','wp-dom-ready','wp-components'], // Ensure this depends on WordPress's React
		        '1.0',
		        true

		        );

			global $gmpqcw_translation;
	        wp_localize_script('gmpqcw-react-admin', 'gmpqcw_wp_ajax', [
	            'nonce' => wp_create_nonce('wp_rest'), 
	            'getsettings' => rest_url('gmpqcw/v1/get-settings'),
	            'getenquirys' => rest_url('gmpqcw/v1/get-enquiries'),
	            'savedata' => rest_url('gmpqcw/v1/save-settings'),
	            'deleteallenquirys' => rest_url('gmpqcw/v1/deleteallenquirys'),
	            'savecustomfield' => rest_url('gmpqcw/v1/save-customfield'),
	            'deletecustomfield' => rest_url('gmpqcw/v1/delete-customfield'),
	            'site_url' => get_site_url(),
	            'gmpqcwcategory' => get_terms( 'product_cat', array(
                        'hide_empty' => false,
                    ) ),
	            'gmpqcwpages' => get_posts( array(
                              'posts_per_page' => -1,
                              'post_type'  => 'page',
                          ) ),
	            'gmpqcw_translation' => $gmpqcw_translation,
	        ]);

			wp_enqueue_script('gmpqcw-react-admin');

		    wp_enqueue_style(
		            'gmpqcw-react-admin-style',
		            GMPQCW_PLUGIN_URL.'/build/admin/admin.css',
		            array(),
		            1,
		        );

			
		}
	}

	public function GMPQCW_init () {
		$args = array(
				'label'               => __( 'gmpqcw_enquiry', 'gmpqcw' ),
				'show_ui'             => false,
				'show_in_menu'        => false,
				'show_in_nav_menus'   => false,
				'show_in_admin_bar'   => false,
				'menu_position'       => 5,
				'can_export'          => true,
				'has_archive'         => true,
				'exclude_from_search' => true,
				'publicly_queryable'  => true,
				);
	
		// Registering your Custom Post Type
		register_post_type( 'gmpqcw_enquiry', $args );
	}

	public function GMPQCW_admin_menu () {

		add_menu_page('Woo Quote Cart', 'Woo Quote Cart', 'manage_options', 'GMPQCW', array( $this, 'GMPQCW_page' ));
	}

	public function GMPQCW_page() {

		
	?>
	<div>
	  
	   <h2><?php _e('Woo Quote Cart', 'gmpqcw'); ?></h2>
	    <div class="about-text">
	        <p>
				Thank you for using our plugin! If you are satisfied, please reward it a full five-star <span style="color:#ffb900">★★★★★</span> rating.                        <br>
	            <a href="#" target="_blank">Reviews</a>
	            | <a href="https://www.codesmade.com/contact-us/" target="_blank">Support</a>
	        </p>
	    </div>
	    <?php
	   echo '<div id="GMPQCW-admin-root"></div>';
		?>
	   
	</div>
	<?php
	}

}

?>