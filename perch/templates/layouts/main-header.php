<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="stylesheet" href="/css/main.css?v=<?= filemtime($_SERVER['DOCUMENT_ROOT'].'/css/main.css');?>">
	<?php $page_css_file	=  perch_page_attribute('css', array('template' => 'bits.html'), true); ?>
	<link rel="stylesheet" href="<?php echo $page_css_file ?>?v=<?= filemtime($_SERVER['DOCUMENT_ROOT'].$page_css_file);?>">
	<!-- Typekit  -->
	<link rel="stylesheet" href="https://use.typekit.net/qpt3ahb.css">
	<!-- Perch Meta -->
	<?php
	$domain        = 'https://'.$_SERVER["HTTP_HOST"];
	$mainurl           = perch_page_url(array(
										    'hide-extensions'    => true,
										    'hide-default-doc'   => true,
										    'add-trailing-slash' => false,
										    'include-domain'     => true,
										), true);
	$mainsitename      = "Ruska";
	$pagetitlename = " - Ruska";
	$sharing_image = '/images/default-sharing-image.jpg';

	PerchSystem::set_var('domain',$domain);
	PerchSystem::set_var('mainurl',$mainurl);
	PerchSystem::set_var('mainsitename',$mainsitename);
	PerchSystem::set_var('pagetitlename',$pagetitlename);
	PerchSystem::set_var('sharing_image',$sharing_image);

	perch_page_attributes(array(
		'template' => 'default.html'
	));
	?>
	<?php perch_content("Analytics"); ?>
</head>
	<body class="<?php perch_page_attribute('bodyClass', array('template' => 'bits.html' )); ?>">
<!-- Cookie Warning -->
<?php perch_content("Cookie Warning"); ?>
				<div class="site-wrapper" itemscope itemtype="http://schema.org/LocalBusiness">
			<header class="header main-header">
				<!-- Skip to main content link  -->
				<a class="show-on-focus"  href="#main-content">Skip to main content</a>
				<!-- For SVG logo. Delete if not needed -->
				<div class="main-logo-wrapper">
					<!-- TODO: Restore link -->
					<!-- <a class="main-logo-wrapper" itemprop="url" href="<?php echo $domain ?>"> -->
					<img class="hidden-main-logo" aria-hidden="true" itemprop="logo" src="/images/main-logo.png" alt="XXXX main logo">
					<?php perch_content("Main Logo"); ?>
				<!-- </a> -->
				</div>
					<?php perch_pages_navigation(array(
							'hide-extensions' => true,
							'levels'    => 1
					)); ?>
        <?php perch_content("Header Content"); ?>
			</header>
