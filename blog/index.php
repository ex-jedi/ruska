<?php include('../perch/runtime.php'); ?>
<?php perch_layout('heads/blog-index-head'); ?>
<?php perch_layout('headers/blog-index-header'); ?>
  <main class="blog-main-content blog-index-main-content" id="main-content">
  <?php perch_content("Blog Index Heading"); ?>
      <?php
      $categories = perch_blog_categories(array(
        'template' => 'index_category_link.html',
        'count' => '5'
      ));
      ?>
    <?php perch_blog_recent_posts(); ?>
    <?php perch_mailchimp_form('forms/subscribe'); ?>
    <?php perch_content("Instagram Feed"); ?>
  </main>
<?php perch_layout('footers/main-footer'); ?>
<?php perch_layout('footer-ends/blog-footer-end'); ?>