<?php

class GMPQCW_Cron {
	
	public function __construct () {

		add_action( 'init', array( $this, 'GMPQCW_default' ) );
		
		
	}

	public function gmpqcw_default(){
		global $gmpqcw_arr,$gmpqcw_translation;
		$defalarr = array(
			'gmpqcw_cart_enable_setting' => 'yes',
			
			'gmpqcw_display' => 'all',

			'gmpqcw_page_created' => '',
			'gmpqcw_sp_bl' => 'after_add_cart',

			'gmpqcw_email_sub' => 'Get Quote',
			'gmpqcw_customer_email_subject' => 'Get Quote Customer',
			'gmpqcw_remove_price' => 'no',
			'gmpqcw_disable_cart_checkout_page' => 'no',
			'gmpqcw_redirect_disable_cart_checkout_page' => '',
			'gmpqcw_show_product_outofstock' => '',
			'gmpqcw_hide_add_to_cart' => 'no',
			'gmpqcw_redirect_form_sub' => 'no',
			'gmpqcw_redirect_form_sub_page' => '',
			'gmpqcw_send_enquiry_email_cutomer' => 'no',
			'gmpqcw_cart_display' => 'all',

			'gmpqcw_usershow' => 'all',
			'gmpqcw_content_beforeform' => '',
			'gmpqcw_content_afterform' => '',
			'gmpqcw_email_body' => '<table><tr><th>Name</th><td>[name]</td></tr>
<tr><th>Email</th><td>[email]</td></tr>
<tr><th>Subject</th><td>[subject]</td></tr>
<tr><th>Mobile</th><td>[mobile]</td></tr>
<tr><th>Enquiry</th><td>[enquiry]</td></tr>
<tr><th>Product</th><td>[product]</td></tr></table>',
			
			'gmpqcw_reci_email'=>get_bloginfo('admin_email'),
			'gmpqcw_include_exclude' => 'all',

			'gmpqcw_trasnlation_button_label' => 'ENQUIRY!',
			'gmpqcw_trasnlation_form_required' => 'Please Enter',
			'gmpqcw_trasnlation_popup_title' => 'Your Enquiry Cart',
			'gmpqcw_trasnlation_cart_button_label' => 'ADD TO ENQUIRY CART!',
			'gmpqcw_trasnlation_email_sucesemsg' => 'Your Message Successfully Sent!',


			'gmpqcw_enquiry_btn_bg_color' =>'#000000',
			'gmpqcw_enquiry_btn_text_color' =>'#ffffff',
			'gmpqcw_enquiry_btn_bg_hover_color' =>'#eeeeee',
			'gmpqcw_enquiry_btn_text_hover_color' =>'#000000',


			
			
		);
		
		foreach ($defalarr as $keya => $valuea) {
			if (get_option( $keya )=='') {
				$gmpqcw_arr[$keya]=$defalarr[$keya];
			}else{
				$gmpqcw_arr[$keya]=get_option($keya);
			}
		}


		$arrin = array(
			'gmpqcw_field_customizer_field' => array(
					'name' => 'Name',
					'email' => 'Email',
					'subject' => 'Subject',
					'mobile' => 'Mobile Number',
					'enquiry' => 'Enquiry',
				),
			'gmpqcw_field_customizer_enble' => array(
					'name' => 'yes',
					'email' => 'yes',
					'subject' => 'yes',
					'mobile' => 'yes',
					'enquiry' => 'yes',
				),
			'gmpqcw_field_customizer_required' => array(
					'name' => 'yes',
					'email' => 'yes',
					'subject' => 'yes',
					'mobile' => 'yes',
					'enquiry' => 'yes',
				),
			'gmpqcw_field_customizer_type' => array(
					'name' => 'text',
					'email' => 'email',
					'subject' => 'text',
					'mobile' => 'text',
					'enquiry' => 'textarea',
				),
			'gmpqcw_field_customizer_order' => array(
					'name' => '1',
					'email' => '2',
					'subject' => '3',
					'mobile' => '4',
					'enquiry' => '5',
				),
			'gmpqcw_field_customizer_option' => array(
					'name' => '',
					'email' => '',
					'subject' => '',
					'mobile' => '',
					'enquiry' => '',
				),
			
		);
		foreach ($arrin as $keya => $valuea) {
			if (get_option( $keya )=='') {
				$gmpqcw_arr[$keya]=$arrin[$keya];
			}else{
				$gmpqcw_arr[$keya]=get_option($keya);
			}
			
		}
		$gmpqcw_translation_arr = array(
			'gmpqcw_trasnlation_button_label',
			'gmpqcw_trasnlation_popup_title',
			'gmpqcw_trasnlation_form_required',
			'gmpqcw_trasnlation_cart_button_label',
			'gmpqcw_trasnlation_email_sucesemsg',
		);
		foreach ($gmpqcw_translation_arr as $keya => $valuea) {
			$gmpqcw_translation[$valuea]['label'] = $defalarr[$valuea];
			$gmpqcw_translation[$valuea]['val']=$gmpqcw_arr[$valuea];
			
		}
	}

}

?>