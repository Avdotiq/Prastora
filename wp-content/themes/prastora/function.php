<?php

function register_my_menu() {
    register_nav_menu('main-menu', __('Main Menu', 'textdomain'));
}
add_action('after_setup_theme', 'register_my_menu');

?>

