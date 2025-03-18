<?php
/**
 * Plugin Name: Custom fast gallery
 * Plugin URI:  https://yourwebsite.com
 * Description: Быстрая галерея WordPress, с поддержкой базовой галереи.
 * Version:     1.0.0
 * Author:      Egor Mironov
 * Author URI:  https://yourwebsite.com
 * License:     GPL2
 * Text Domain: custom-fast-gallery

 */

if (!defined('ABSPATH')) {
	exit; // Защита от прямого доступа
}

// Подключение файлов
require_once plugin_dir_path(__FILE__) . 'includes/init.php';
