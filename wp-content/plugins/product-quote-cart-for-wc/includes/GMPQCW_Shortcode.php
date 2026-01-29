<?php

class GMPQCW_Shortcode {
	
	public function __construct () {

		add_action( 'wp_footer', array( $this, 'gm_woo_enquiry_cart' ) );
	
	}

	public function gm_woo_enquiry_cart () {
		global $gmpqcw_arr;
		
		?>
		<style type="text/css">
			:root {
				  --gm-btn-color: <?php echo $gmpqcw_arr['gmpqcw_enquiry_btn_bg_color'];?>;
				  --gm-btn-text-color: <?php echo $gmpqcw_arr['gmpqcw_enquiry_btn_text_color'];?>;
				  --gm-hover-btn-color: <?php echo $gmpqcw_arr['gmpqcw_enquiry_btn_bg_hover_color'];?>;
				  --gm-hover-btn-text-color: <?php echo $gmpqcw_arr['gmpqcw_enquiry_btn_text_hover_color'];?>;
			}
		</style>
		<?php
	}

	
	
}

