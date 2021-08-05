<?php include('../perch/runtime.php'); ?>
<?php perch_layout('heads/blog-index-head'); ?>
<?php perch_layout('headers/blog-index-header'); ?>
  <main class="blog-main-content blog-index-main-content" id="main-content">
    <?php perch_blog_recent_posts(5); ?>
  </main>
<?php perch_layout('footers/main-footer'); ?>
<?php perch_layout('footer-ends/blog-footer-end'); ?>
