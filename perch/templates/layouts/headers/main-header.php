<!-- Anything to include in head goes here  -->
</head>
	<body class="<?php perch_page_attribute('bodyClass', array('template' => 'bits.html' )); ?>">
<!-- Cookie Warning -->
<?php perch_content("Cookie Warning"); ?>
				<div class="site-wrapper" itemscope itemtype="http://schema.org/LocalBusiness">
			<header class="header main-header">
				<!-- Skip to main content link  -->
				<a class="show-on-focus"  href="#main-content">Skip to main content</a>
				<!-- For SVG logo. Delete if not needed -->
				<div class="main-logo-wrapper">
					<!-- TODO: Restore link -->
					<!-- <a class="main-logo-wrapper" itemprop="url" href="<?php echo $domain ?>"> -->
					<img class="hidden-main-logo" aria-hidden="true" itemprop="logo" src="/images/main-logo.png" alt="XXXX main logo">
					<?php perch_content("Main Logo"); ?>
				<!-- </a> -->
				</div>
					<?php perch_pages_navigation(array(
							'hide-extensions' => true,
							'levels'    => 1
					)); ?>
        <?php perch_content("Header Content"); ?>
			</header>
