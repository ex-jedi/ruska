<?php include('perch/runtime.php'); ?>
<?php perch_layout('heads/main-head'); ?>
<?php perch_layout('headers/main-header'); ?>
<main class="main-content about-me-main-content" id="main-content">
	<?php perch_content("Bio"); ?>
	<?php perch_mailchimp_form('forms/subscribe'); ?>
	<?php perch_content("Instagram Feed"); ?>
</main>
<?php perch_layout('footers/main-footer'); ?>
<?php perch_layout('footer-ends/about-me-footer-end'); ?>
<!-- TODO: Validate HTML -->
