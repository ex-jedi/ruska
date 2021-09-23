<?php include('../perch/runtime.php'); ?>
<?php perch_layout('heads/shop-head'); ?>
<?php perch_layout('headers/shop-header'); ?>
<main class="main-content about-me-main-content" id="main-content">
	<!-- Create product region -->
	<?php
		perch_content_create('Products', array(
		'template'   => 'product_detail.html',
		'multiple'    => true,
		'edit-mode' => 'listdetail',
		));
	?>
	<!-- Display list  -->
	<?php
		perch_content_custom('Products', array(
		'template' => 'shop/product_listing.html',
		));
	?>
	<?php perch_mailchimp_form('forms/subscribe'); ?>
	<?php perch_content("Instagram Feed"); ?>
</main>
<?php perch_layout('footers/main-footer'); ?>
<?php perch_layout('footer-ends/shop-footer-end'); ?>
<!-- TODO: Remove debug -->
<?php PerchUtil::output_debug(); ?>
<!-- TODO: Validate HTML -->
