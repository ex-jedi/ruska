<!-- Anything to include in head goes here  -->
</head>
	<body class="<?php perch_page_attribute('bodyClass', array('template' => 'attribute_files/bits.html' )); ?>">
<!-- Cookie Warning -->
<?php perch_content("Cookie Warning"); ?>
	<!-- TODO: Maybe take 👇🏾 out of region and put here directly? -->
	<div class="site-wrapper" itemscope itemtype="http://schema.org/LocalBusiness">
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

		<div class="snipcart-header-summary">
				<a href="#" class="snipcart-checkout">
					<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" alt="" title="" class="snipcart-cart-header__icon snipcart__icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M51.714 20.47L55 60H9l3.286-39.53h9.857v-6.588C22.143 8.424 26.556 4 32 4c5.444 0 9.857 4.424 9.857 9.882v6.589h9.857zM25.43 13.883v16.47h-3.286v-6.587h-6.834l-2.737 32.94h38.856l-2.737-32.94h-6.834v6.588h-3.286v-16.47c0-3.634-2.947-6.589-6.571-6.589-3.624 0-6.571 2.955-6.571 6.588zm3.285 9.883V20.47h6.572v3.294h-6.572z" fill="currentColor"></path></svg>
					<div class="snipcart-count-wrapper">
						<span class="snipcart-items-count"></span>
					</div>
				</a>
			</div>
			</header>
