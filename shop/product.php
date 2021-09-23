<?php include('../perch/runtime.php'); ?>
<?php perch_layout('heads/shop-head'); ?>
<?php perch_layout('headers/shop-header'); ?>
<main class="main-content about-me-main-content" id="main-content">
	<!-- Display product  -->
	<?php
      perch_content_custom('Products', array(
        'page' => '/shop/index.php',
        'template' => 'shop/product_detail.html',
        'filter' => 'slug',
        'match' => 'eq',
        'value' => perch_get('s'),
        'count' => 1,
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