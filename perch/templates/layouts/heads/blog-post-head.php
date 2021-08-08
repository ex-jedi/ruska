<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="/css/main.css?v=<?= filemtime($_SERVER['DOCUMENT_ROOT'].'/css/main.css');?>">
		<link rel="stylesheet" href="/css/blog.css?v=<?= filemtime($_SERVER['DOCUMENT_ROOT'].'/css/blog.css');?>">
		<!-- Typekit -->
	  <link rel="stylesheet" href="https://use.typekit.net/qpt3ahb.css">
			<!-- Perch Meta -->

			<?php
				$categories = perch_blog_post_categories(perch_get('s'), array(
				'skip-template' => 'true',
				), true);
				foreach($categories as $cat) {
				$post_cat = $cat['catSlug'];
				}
				PerchSystem::set_var('postCat',$post_cat);
			perch_blog_post_meta(perch_get('s'));
			perch_page_attributes(array(
				'template' => 'favicons.html'
			));
			?>
			<!-- Head end tag in relevant header file  -->