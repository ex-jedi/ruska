<!-- Anything to include in head goes here  -->
</head>
	<body class="blog blog-post-page" >
		<!-- Cookie Warning -->
		<?php perch_content("Cookie Warning"); ?>
		<div class="blog-post-top-backround-image">
  		<img src="/images/pale-pink-circle.svg" alt="Pale Pink Circle" />
		</div>
		<!-- TODO: Delete if not using -->
		<div class="site-wrapper">
		<header class="header main-header">
			<!-- Skip to main content link  -->
			<a class="show-on-focus"  href="#main-content">Skip to main content</a>
			<!-- For SVG logo. Delete if not needed -->
			<?php perch_content("Hidden Logo"); ?>
			<div class="main-logo-wrapper">
				<a class="main-logo-link"  href="/">
				<?php perch_content("Main Logo"); ?>
			</a>
			</div>
			<?php perch_pages_navigation(array(
			'hide-extensions' => true,
			'levels'    => 1
			)); ?>
		</header>