<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- Snipcart-->
  <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css" />
	<link rel="stylesheet" href="/css/main.css?v=<?= filemtime($_SERVER['DOCUMENT_ROOT'].'/css/main.css');?>">
	<link rel="stylesheet" href="/css/shop.css?v=<?= filemtime($_SERVER['DOCUMENT_ROOT'].'/css/shop.css');?>">
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


	$product =  perch_content_custom('Products', array(
		'page' => '/shop/index.php',
		'skip-template' => 'true',
		'filter' => 'slug',
		'match' => 'eq',
		'value' => perch_get('s'),
		'count' => 1,
));

	$title= $product['0']['productHeading'];
	$description = $product['0']['cartDescription'];
	$sharing_image = $product['0']['shopCoverImage'];

	PerchSystem::set_var('productTitle',$title);
	PerchSystem::set_var('productDescription',$description);
	PerchSystem::set_var('domain',$domain);
	PerchSystem::set_var('mainurl',$mainurl);
	PerchSystem::set_var('mainsitename',$mainsitename);
	PerchSystem::set_var('pagetitlename',$pagetitlename);
	PerchSystem::set_var('sharing_image',$sharing_image);

	perch_page_attributes(array(
		'template' => 'product_detail.html'
	));
	?>
	<?php perch_content("Analytics"); ?>
  <!-- Head end tag in relevant header file  -->

