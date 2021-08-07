<?php include('../perch/runtime.php'); ?>
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
					perch_blog_custom(array(
					'sort'=>'postDateTime',
					'sort-order'=>'RAND',
					'template'=>'blog/featured-posts.html',
					'count'=>3,
					'filter-mode' => 'ungrouped',
					'filter' => array(
					array(
					'filter' => 'postSlug',
					'match' => 'neq',
					'value' => perch_get('s'),
					),
					array(
					'filter' => 'featured',
					'match' => 'eq',
					'value' => 'yes'
					)
					)
				)); ?>
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

