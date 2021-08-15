<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="stylesheet" href="/css/main.css?v=<?= filemtime($_SERVER['DOCUMENT_ROOT'].'/css/main.css');?>">
	<link rel="stylesheet" href="/css/blog.css?v=<?= filemtime($_SERVER['DOCUMENT_ROOT'].'/css/blog.css');?>">
	<!-- Typekit  -->
	<link rel="stylesheet" href="https://use.typekit.net/qpt3ahb.css">
	<!-- Perch Meta -->
	<?php
	$domain = 'https://'.$_SERVER["HTTP_HOST"];
	$mainurl           = perch_page_url(array(
											'hide-extensions'    => true,
											'hide-default-doc'   => true,
											'add-trailing-slash' => false,
											'include-domain'     => true,
									), true);
	$mainsitename      = "Ruska";
	$pagetitlename = " - Ruska";
	$sharing_image = '/images/default-sharing-image.png';
	$cat_title = perch_blog_category(perch_get('cat'), true);

	PerchSystem::set_var('domain',$domain);
	PerchSystem::set_var('mainurl',$mainurl);
	PerchSystem::set_var('mainsitename',$mainsitename);
	PerchSystem::set_var('pagetitlename',$pagetitlename);
	PerchSystem::set_var('sharing_image',$sharing_image);
	PerchSystem::set_var('archivePageMetaTitle',$cat_title);
	perch_page_attributes(array(
		'template' => 'blog_archive/blog_archive.html'
	));
	?>
	<?php perch_content("Analytics"); ?>

  <!-- Head end tag in relevant header file  -->
