<?php include('../perch/runtime.php'); ?>
<?php perch_layout('heads/blog-post-head'); ?>
<?php perch_layout('headers/blog-post-header'); ?>
	<main class="blog-main-content blog-post-main-content" id="main-content">
		<article class="blog-post-article scrolltrigger-refresh-target" itemscope itemtype="https://schema.org/BlogPosting" itemprop="blogPost">
			<section class="blog-post-section">
				<?php perch_blog_post(perch_get('s')); ?>
				<div class="previous-and-next-posts body-text-medium simple-fade-in">
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
						$next = perch_blog_custom([
								'count'=>1,
								'filter'=>'postDateTime',
								'match'=>'lt',
								'sort'=>'postDateTime',
								'sort-order'=>'DESC',
								'value'=>$date,
								'template'=>'blog/post_next.html'
									], true); // stores prev post in a variable to use later
					$prev = perch_blog_custom([
								'count'=>1,
								'filter'=>'postDateTime',
								'match'=>'gt',
								'sort'=>'postDateTime',
								'sort-order'=>'ASC',
								'value'=>$date,
								'template'=>'blog/post_prev.html'
								], true); // stores next post in a variable to use later

							// Previous and next post navigation
							if (empty($prev)){
							echo '<p></p>';
							} else {
							echo $prev;
							}
							if (empty($next)){
							echo '<p></p>';
							} else {
							echo $next;
							}
					?>
				</div>
			</section>
			<section class="featured-posts-section scrolltrigger-refresh-target">
				<!-- Allmost there
				Filter through array below to cet cat then set to variables
				https://www.cvwdesign.com/blog/how-to-show-related-posts-with-perch-blog -->
				<?php
					perch_blog_custom(array(
					'sort'=>'postDateTime',
					'sort-order'=>'RAND',
					'template'=>'blog/featured_posts.html',
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
				)); ?>
			</section>
		</article>
		<?php perch_content("Contact Form"); ?>
		<?php perch_content("Instagram Feed"); ?>
	</main>
	<?php perch_layout('footers/main-footer'); ?>
<?php perch_layout('footer-ends/blog-post-footer-end'); ?>
<!-- TODO: Validate HTML -->