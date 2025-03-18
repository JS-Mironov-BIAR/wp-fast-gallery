<?php
if (!defined('ABSPATH')) {
	exit;
}

function cfg_enqueue_assets(): void {
	wp_enqueue_style('cfg-style', plugins_url('../assets/css/main.css', __FILE__));
	wp_enqueue_script('cfg-script', plugins_url('../assets/dist/main.js', __FILE__), [], null, true);
}
add_action('wp_enqueue_scripts', 'cfg_enqueue_assets');
