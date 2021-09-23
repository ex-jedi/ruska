<?php include('perch/runtime.php'); ?>
<?php perch_layout('heads/main-head'); ?>
<?php perch_layout('headers/homepage-header'); ?>
<main class="main-content homepage-main-content" id="main-content">
	<?php perch_content("Section One"); ?>
	<?php perch_content("Section Two"); ?>
	<?php perch_content("Section Three"); ?>
	<?php perch_mailchimp_form('forms/subscribe'); ?>
	<!-- Featured articles  -->
	<?php
		perch_blog_custom(array(
			'sort'=>'postDateTime',
			'sort-order'=>'RAND',
			'template'=>'blog/homepage_featured_posts.html',
			'count'=>3,
			'filter-mode' => 'ungrouped',
			'filter' => array(
			array(
			'filter' => 'postSlug',
			'match' => 'neq',
			'value' => perch_get('s'),
			),
			array(
			'filter' => 'featuredPosts',
			'match' => 'eq',
			'value' => 'yes'
			)
			)
		));
	?>
	<?php perch_content("Instagram Feed"); ?>
</main>
<?php perch_layout('footers/main-footer'); ?>
<?php perch_layout('footer-ends/homepage-footer-end'); ?>
<!-- TODO: Remove debug -->
<?php PerchUtil::output_debug(); ?>
<!-- TODO: Validate HTML -->
<!-- TODO: Validate HTML -->
