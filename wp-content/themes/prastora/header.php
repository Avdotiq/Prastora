<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<header id="masthead" class="site-header" role="banner">
    <?php
    wp_nav_menu(array(
        'theme_location' => 'main',
        'menu_id' => 'main',
        'container' => 'nav',
    ));
    ?>
</header>

<div id="content" class="site-content">
