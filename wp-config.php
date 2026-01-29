<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'iwebsoul_lionsdb' );

/** Database username */
define( 'DB_USER', 'iwebsoul_lionsusr' );

/** Database password */
define( 'DB_PASSWORD', '5pBBjsRyhUKSSGe6NQGb' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'J Mls&[{Iq(y7sl f#G#;>DVGXsyCMo:%%r&jD0?2Rlnt;p8s2m+_Zl]}GwD`.;H' );
define( 'SECURE_AUTH_KEY',  'wR9PwbzD>UoCT?A3]i@MZdaU.D[*[X[lmmwc:Pn`W5]>6E7{2S#L6XTKb-7Sh!h5' );
define( 'LOGGED_IN_KEY',    'bB,0kCc|fIx*(A{[LdJ|r4h[ng`irNn)_UuUqW1]wOfO-{|o$Nfg}I@aW-n@eJ[+' );
define( 'NONCE_KEY',        '.;-D*-Rrm/)`mc^z2MkqguR:fAYUZ q7T35@ <`v[i/~p)-~&qw_MR:1feFji%CA' );
define( 'AUTH_SALT',        't^(OdQ27f<b!S.VpfWKUk=$1zQOl2P&;bHqIs|C{ZLoRjelsLIo&b}|M^N,M>TD0' );
define( 'SECURE_AUTH_SALT', 'duzBx9,(Vaxs[]8R0.I8%+/[=Wn!LBEQLUtW(!.H/LJ9-o)`y~G[$996+S{Ff<le' );
define( 'LOGGED_IN_SALT',   '9tOh(-M~hKw6@B6zYH`D~O>F+LA.=62lpm~.TW.XCID1ytSL;u~g8E,O]op .|aG' );
define( 'NONCE_SALT',       '$C?)C389~S`b~CaOq$E0H@5bp+CNYY3+yddx)FT73VsUuPpek@te<ZLL:oPn1j7U' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
