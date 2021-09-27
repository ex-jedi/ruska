<?php include('../perch/runtime.php'); ?>
<?php perch_layout('heads/archive-index-head'); ?>
<?php perch_layout('headers/blog-index-header'); ?>
<main class="blog-main-content archive-main-content scrolltrigger-refresh-target" id="main-content">
<!-- TODO: Show archive title in meta title. -->
		    <?php
		        // defaults for all modes
		        $posts_per_page = 10;
		        $template 		= 'post_in_list.html';
		        $sort_order		= 'DESC';
		        $sort_by		= 'postDateTime';

		        // Have we displayed any posts yet?
		        $posts_displayed = false;

		        /* --------------------------- POSTS BY CATEGORY --------------------------- */
		        if (perch_get('cat')) {
		            echo '<h1>'.perch_blog_category(perch_get('cat'), true).'</h1>';

		            perch_blog_custom(array(
							'category'   => perch_get('cat'),
							'template'   => $template,
							'count'      => $posts_per_page,
							'sort'       => $sort_by,
							'sort-order' => $sort_order,
		                    ));

		            $posts_displayed = true;
		        }



		      	/* --------------------------- DEFAULT: ALL POSTS --------------------------- */

		      	if ($posts_displayed == false) {

		      		// No other options have been used; no posts have been displayed yet.
		      		// So display all posts.

		      		echo '<h1>Archive</h1>';

		      		perch_blog_custom(array(
							'template'   => $template,
							'count'      => $posts_per_page,
							'sort'       => $sort_by,
							'sort-order' => $sort_order,
		                    ));
		      	}

		    ?>
			<section class="blog-archive-meta-wrapper scrolltrigger-refresh-target">
		    <h2>Category Archive</h2>
		    <!--  By category listing -->
		    <?php
						perch_blog_categories(array(
								'template' => 'archive_category_link.html',
						));
				?>
			</section>
		</main>
		<?php perch_mailchimp_form('forms/subscribe'); ?>
		<?php perch_content("Instagram Feed"); ?>
<?php perch_layout('footers/main-footer'); ?>
<?php perch_layout('footer-ends/blog-archive-footer-end'); ?>