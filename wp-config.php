<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'darkydaff_db' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'r)})9_F:wC8FgJ:fgxw2f4 >u7Uqu%B)KS1>Hik5nI~|@8?X=lpmQ/hc|M%Dw:]_' );
define( 'SECURE_AUTH_KEY',  'x_^fXO(sY);$&DA/W Q~0%R e]1/ucjIn>Z^zNivFTCAkSz nYUt&|E3Sm0%B1Cx' );
define( 'LOGGED_IN_KEY',    'W-lq`1606L)?I!5EVG&I7or8|.lWD%i>yFQbX}G5oQA;:a&q9.&|1%`W7RX9+O~>' );
define( 'NONCE_KEY',        '0B^dHOjYy4+e^grlZO.0* vx_Z^hAM4&vME|!8yTCxKfB86WbojNv$/`![x0p&I5' );
define( 'AUTH_SALT',        '{-@Kfu^ab4|gw(iR=di_=oM: (2GZM4;r+B|9/dR[H,uZZIdu6oTE)+CQ1]&t.Wg' );
define( 'SECURE_AUTH_SALT', '~_DMU)=_@,kpAA29U>AI7QTkXVm(>OSN[XpYRm41uK?.d-uD.E0M7k^4|41sc v6' );
define( 'LOGGED_IN_SALT',   'a0aaTM.}> $o;tU0`DAEfEkD&*M[YBiyit[ybG^s8A;Z9%s<M_d$;4@%ZL-Y:UO}' );
define( 'NONCE_SALT',       'aS14_Y:QCLrxFOD3AzaAIEVqX^ud-KE8]1,JT;$4hHJ=LhI^?%n(}<X]vgVqnQl8' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
