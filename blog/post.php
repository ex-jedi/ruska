<?php include('../perch/runtime.php'); ?>

<!-- Data for previous and next posts  -->
<?php
// get the post data, put it into $post variable
$post = perch_blog_custom([
  'filter'        => 'postSlug',
  'match'         => 'eq',
  'value'         => perch_get('s'),
  'skip-template' => true,
  'return-html'   => true
]);

// write the values from the array stored in $post to variables
  $date  = $post[0]['postDateTime'];

	$prev = perch_blog_custom([
      'count'=>1,
      'filter'=>'postDateTime',
      'match'=>'lt',
      'sort'=>'postDateTime',
      'sort-order'=>'DESC',
      'value'=>$date,
      'template'=>'blog/post_prev.html'
        ], true); // stores prev post in a variable to use later

$next = perch_blog_custom([
      'count'=>1,
      'filter'=>'postDateTime',
      'match'=>'gt',
      'sort'=>'postDateTime',
      'sort-order'=>'ASC',
      'value'=>$date,
      'template'=>'blog/post_next.html'
      ], true); // stores next post in a variable to use later
?>
<!-- Data for previous and next posts  -->

<?php perch_layout('heads/blog-post-head'); ?>
<?php perch_layout('headers/blog-post-header'); ?>
	<main class="blog-main-content blog-post-main-content" id="main-content">
		<article class="blog-post-article" itemscope itemtype="https://schema.org/BlogPosting" itemprop="blogPost">
			<section class="blog-post-section">
				<?php perch_blog_post_categories(perch_get('s')); ?>
				<?php perch_blog_post(perch_get('s')); ?>
			</section>
			<section class="blog-section featured-posts-section">
				<?php
						// Previous and next post navigation
						if (empty($prev)){
						echo '<ul>';
						} else {
						echo $prev;
						}
						if (empty($next)){
						echo '</ul>';
						} else {
						echo $next;
						}
				?>
			</section>
		</article>
		<?php perch_content("Contact Form"); ?>
		<?php perch_content("Instagram Feed"); ?>
	</main>
	<?php perch_layout('footers/main-footer'); ?>
<?php perch_layout('footer-ends/blog-post-footer-end'); ?>
<!-- TODO: Remove debug -->
	<?php PerchUtil::output_debug(); ?>
<!-- TODO: Validate HTML -->

