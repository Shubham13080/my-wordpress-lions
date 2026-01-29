<?php

/**
 * This class is loaded on the front-end since its main job is 
 * to display the Admin to box.
 */

class GMPQCW_Frontend  extends GMPQCW_Shortcode{

	
	public function __construct () {
		add_filter( 'init', array( $this, 'initcut' ));
		add_filter( 'wp', array( $this, 'wpcut' ));
		add_action( 'wp_enqueue_scripts',  array( $this, 'gmpqcw_insta_scritps' ) );
		
	}


	public function gmpqcw_insta_scritps () {
		//wp_enqueue_style('gmpqcw-stylee', GMPQCW_PLUGIN_URL . '/assents/css/style.css', array(), '1.0.0', 'all');
		
		
		
		global $gmpqcw_translation;
		global $gmpqcw_arr;
		
		$gmpqcw_field_customizer_enble = $gmpqcw_arr['gmpqcw_field_customizer_enble'];
		$gmpqcw_field_customizer_required = $gmpqcw_arr['gmpqcw_field_customizer_required'];
		$gmpqcw_field_customizer_field = $gmpqcw_arr['gmpqcw_field_customizer_field'];
		$gmpqcw_field_customizer_type = $gmpqcw_arr['gmpqcw_field_customizer_type'];
		$gmpqcw_field_customizer_order = $gmpqcw_arr['gmpqcw_field_customizer_order'];
		$gmpqcw_field_customizer_option = $gmpqcw_arr['gmpqcw_field_customizer_option'];
		$gmpqcw_content_beforeform = $gmpqcw_arr['gmpqcw_content_beforeform'];
		$gmpqcw_content_afterform = $gmpqcw_arr['gmpqcw_content_afterform'];
		//echo "<pre>";
		//print_r($gmpqcw_field_customizer_order);
		//$fruits = array("d" => "lemon", "a" => "orange", "b" => "banana", "c" => "apple");
		asort($gmpqcw_field_customizer_order);
		//print_r($gmpqcw_field_customizer_order);
		//echo "</pre>";
		$gmpqcw_fields = array();
		foreach ($gmpqcw_field_customizer_order as $keylooparrm => $valuelooparrm) {
			if($gmpqcw_field_customizer_enble[$keylooparrm]=="yes"){
				$fieldssetup =array();
				$fieldssetup['position']="full";
				$fieldssetup['name']=$keylooparrm;
				$fieldssetup['type']=$gmpqcw_field_customizer_type[$keylooparrm];
				$fieldssetup['label']=$gmpqcw_field_customizer_field[$keylooparrm];
				$fieldssetup['required']=(isset($gmpqcw_field_customizer_required[$keylooparrm]))?$gmpqcw_field_customizer_required[$keylooparrm]:'';
				$fromtype = array("select", "radio", "multiselect", "checkbox");
         		if (in_array( $gmpqcw_field_customizer_type[$keylooparrm], $fromtype)){
         			$fieldssetup['options']=explode("\n",$gmpqcw_field_customizer_option[$keylooparrm]);
         		}
				$gmpqcw_fields[]=$fieldssetup;
			}
			
		}
        
		$ajax_nonce = wp_create_nonce('gmpqcw_ajax_action');

		
		wp_register_script( 'gmpqcw-script', GMPQCW_PLUGIN_URL.'build/frontend/frontend.js',  ['wp-element', 'wp-dom-ready','wp-components']);
		wp_localize_script('gmpqcw-script', 'gmpqcw_wp_ajax', [
            'nonce' => wp_create_nonce('wp_rest'), 
            'cart_items' => rest_url('gmpqcw/v1/cart_items'),
            'add_to_cart' => rest_url('gmpqcw/v1/add_to_cart'),
            'remove_from_cart' => rest_url('gmpqcw/v1/remove_from_cart'),
            'enquiry' => rest_url('gmpqcw/v1/enquiry'),
            'site_url' => get_site_url(),
            'gmpqcw_translation' => $gmpqcw_translation,
            'gmpqcw_fields' => $gmpqcw_fields,
            'gmpqcw_content_beforeform'=>$gmpqcw_arr['gmpqcw_content_beforeform'],
            'gmpqcw_content_afterform'=>$gmpqcw_arr['gmpqcw_content_afterform'],
            'ajax_url' => admin_url('admin-ajax.php'),
		    'ajax_nonce' => $ajax_nonce,
        ]);
		wp_enqueue_script( 'gmpqcw-script' );
		wp_enqueue_script('gmpqcw2-script', GMPQCW_PLUGIN_URL . '/assents/js/script.js', array(), '1.0.0', true );
		// Enqueue the CSS file
		wp_enqueue_style( 'gmpqcw-style', GMPQCW_PLUGIN_URL.'build/frontend/frontend.css', [], false, 'all' );

	}
	public function wpcut(){
		global $gmpqcw_arr;
		$gmpqcw_disable_cart_checkout_page = $gmpqcw_arr['gmpqcw_disable_cart_checkout_page'];
		$gmpqcw_redirect_disable_cart_checkout_page = $gmpqcw_arr['gmpqcw_redirect_disable_cart_checkout_page'];
		if($gmpqcw_disable_cart_checkout_page == 'yes'){
			if(is_cart() || is_checkout()){
				
				wp_redirect(get_permalink($gmpqcw_redirect_disable_cart_checkout_page));
				exit;
			}	
		}
		
	}

	public function initcut(){
		global $gmpqcw_arr;
		$gmpqcw_display = $gmpqcw_arr['gmpqcw_display'];
		$gmpqcw_sp_bl = $gmpqcw_arr['gmpqcw_sp_bl'];
		$gmpqcw_cart_enable_setting = $gmpqcw_arr['gmpqcw_cart_enable_setting'];
		$gmpqcw_cart_display = $gmpqcw_arr['gmpqcw_cart_display'];
		$gmpqcw_usershow = $gmpqcw_arr['gmpqcw_usershow'];
		$showforuser = 'yes';
		if($gmpqcw_usershow=='logged_user' && !is_user_logged_in()){
			$showforuser = 'no';
		}
		if($gmpqcw_usershow=='logged_out' && is_user_logged_in()){
			$showforuser = 'no';
		}
		add_filter( 'woocommerce_after_shop_loop_item', array( $this, 'gmpqcw_addcssloop' ), 10, 3 );
		add_action( 'woocommerce_single_product_summary', array( $this, 'gmpqcw_addcsssingle' ) ,35);

		
		if($gmpqcw_cart_enable_setting=='yes' && $showforuser == 'yes'){
			if($gmpqcw_cart_display=='all'){
				add_filter( 'woocommerce_after_shop_loop_item', array( $this, 'gmpqcw_after_button_cart' ), 10, 3 );
			}
			add_action( 'woocommerce_single_product_summary', array( $this, 'gmpqcw_after_addtocart_enquiry' ) ,35);
		}
		
		add_shortcode('gmpqcw_enquiry_single_product', array( $this, 'gmpqcw_enquiry_single_product_shortcode' ));
	}



	function gmpqcw_enquiry_single_product_shortcode($atts){
		ob_start();
		global $post,$gmpqcw_arr;
		if (isset($atts['id']) && $atts['id']!='') {
			$product_id = $atts['id'];
			$product = wc_get_product( $product_id );
		}else{
			$product_id = $post->ID;
			$product = wc_get_product( $product_id );
		}
		if(!empty($product)){
			$this->gmpqcw_button_add_to_cart($product);
		}
		$output = ob_get_contents();
		ob_end_clean();
		return $output;
	}
	
	public function gmpqcw_after_addtocart_enquiry() {
		global $product;
		$this->gmpqcw_button_add_to_cart($product);
	}

	public  function gmpqcw_button_add_to_cart($product) {
		global $gmpqcw_arr;
		$gmpqcw_trasnlation_cart_button_label = $gmpqcw_arr['gmpqcw_trasnlation_cart_button_label'];
		if($this->gmpqcw_is_exclude($product->get_id())==true){
			return;
		}
		?>
		<div class="gmpqcw_inquirybtn">
			<a href="#" class="button gmpqcw_inq_addtocart wp-block-button__link" add_id="<?php echo $product->get_id();?>" title="<?php echo $product->get_name(); ?>"><?php echo $gmpqcw_trasnlation_cart_button_label;?></a>
		</div>
		<?php

	}
	

	

	
	public function gmpqcw_after_button_cart(  ){
		global $product;
		$this->gmpqcw_button_add_to_cart($product);
	}

	
	
	public function gmpqcw_addcssloop(  ){
		global $product,$gmpqcw_arr;
		if($this->gmpqcw_is_exclude($product->get_id())==true){
			return;
		}
		?>
		<style type="text/css">
			<?php
			if ($gmpqcw_arr['gmpqcw_remove_price'] == "yes") {
			?>
			.post-<?php echo  $product->get_id();?> .price{
				display: none !important;
			}
			<?php 
			}
			?>
		</style>
		<?php
	}
	public function gmpqcw_addcsssingle(  ){
		global $product,$gmpqcw_arr;
		if($this->gmpqcw_is_exclude($product->get_id())==true){
			return;
		}
		?>
		<style type="text/css">
			<?php
			if ($gmpqcw_arr['gmpqcw_remove_price'] == "yes") {
			?>
			.post-<?php echo  $product->get_id();?> .price{
				display: none !important;
			}
			<?php 
			}
			?>
		</style>
		<?php
	}
	

	

	

	public function gmpqcw_is_exclude($product_id){
		global $gmpqcw_arr;
		$gmpqcw_include_exclude = $gmpqcw_arr['gmpqcw_include_exclude'];
		$gmpqcw_show_product_outofstock = $gmpqcw_arr['gmpqcw_show_product_outofstock'];
		$product = wc_get_product( $product_id );
		$isretus = false;
		$product_cats_ids = wc_get_product_term_ids( $product_id, 'product_cat' );
		if ($gmpqcw_include_exclude=='include') {
			$includeids = (empty($gmpqcw_arr['global_include_category']))?array():$gmpqcw_arr['global_include_category'];
			$is_include = array_intersect($includeids,$product_cats_ids);
			if(count($is_include)==0){
				$isretus = true;
			}
		}elseif($gmpqcw_include_exclude=='exlude'){
			$exludeids = (empty($gmpqcw_arr['global_exclude_category']))?array():$gmpqcw_arr['global_exclude_category'];
			$is_exclude = array_intersect($exludeids,$product_cats_ids);
			if(count($is_exclude)>0){
				$isretus = true;
			}
		}else{
			$isretus = false;
		}
		if($gmpqcw_show_product_outofstock=='yes'){
			if ( ! $product->managing_stock() && ! $product->is_in_stock() ){
				//echo "ggg";
			}else{
				//echo "bb";
				$isretus = true;
			}
		}
		//echo $isretus;
		
		return $isretus;
	}

}



 
