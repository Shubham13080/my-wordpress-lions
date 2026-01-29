<?php

if ( !defined( 'ABSPATH' ) ) {
    exit;
}

if ( !class_exists( 'WModes_WOOCS' ) && class_exists( 'WOOCS' ) && !defined( 'WMODES_PREMIUM_ADDON' ) ) {

    class WModes_WOOCS {

        private static $instance;

        public static function get_instance(): self {

            if ( is_null( self::$instance ) ) {

                self::$instance = new self();
            }

            return self::$instance;
        }

        public function convert_amount( $amount ) {

            return apply_filters( 'woocs_convert_price', $amount, false );
        }

        public function revert_amount( $amount ) {

            return apply_filters( 'woocs_back_convert_price', $amount, false );
        }

        public function can_convert_amount( $amount_id ) {

            return true;
        }

        public function can_revert_amount( $amount_id ) {

            return true;
        }

    }

}