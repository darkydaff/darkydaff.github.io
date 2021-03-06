<?php
/**
 * Hero Content Options
 *
 * @package Shutter_Up
 */

/**
 * Add hero content options to theme options
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function shutter_up_hero_content_options( $wp_customize ) {
	$wp_customize->add_section( 'shutter_up_hero_content_options', array(
			'title' => esc_html__( 'Hero Content', 'shutter-up' ),
			'panel' => 'shutter_up_theme_options',
		)
	);

	shutter_up_register_option( $wp_customize, array(
			'name'              => 'shutter_up_hero_content_visibility',
			'default'           => 'disabled',
			'sanitize_callback' => 'shutter_up_sanitize_select',
			'choices'           => shutter_up_section_visibility_options(),
			'label'             => esc_html__( 'Enable on', 'shutter-up' ),
			'section'           => 'shutter_up_hero_content_options',
			'type'              => 'select',
		)
	);

	shutter_up_register_option( $wp_customize, array(
			'name'              => 'shutter_up_hero_content',
			'default'           => '0',
			'sanitize_callback' => 'shutter_up_sanitize_post',
			'active_callback'   => 'shutter_up_is_hero_content_active',
			'label'             => esc_html__( 'Page', 'shutter-up' ),
			'section'           => 'shutter_up_hero_content_options',
			'type'              => 'dropdown-pages',
		)
	);

}
add_action( 'customize_register', 'shutter_up_hero_content_options' );

/** Active Callback Functions **/
if ( ! function_exists( 'shutter_up_is_hero_content_active' ) ) :
	/**
	* Return true if hero content is active
	*
	* @since Shutter Up 1.0
	*/
	function shutter_up_is_hero_content_active( $control ) {
		$enable = $control->manager->get_setting( 'shutter_up_hero_content_visibility' )->value();

		return shutter_up_check_section( $enable );
	}
endif;

