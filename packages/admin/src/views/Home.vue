<template>
	<div class="sidebar sidebar-dark sidebar-fixed" id="sidebar">
		<div class="sidebar-brand d-none d-md-flex">
			<svg
				class="sidebar-brand-full"
				width="118"
				height="46"
				alt="CoreUI Logo"
			>
				<use xlink:href="assets/brand/coreui.svg#full"></use>
			</svg>
			<svg
				class="sidebar-brand-narrow"
				width="46"
				height="46"
				alt="CoreUI Logo"
			>
				<use xlink:href="assets/brand/coreui.svg#signet"></use>
			</svg>
		</div>
		<ul class="sidebar-nav" data-coreui="navigation" data-simplebar>
			<li class="nav-group">
				<a class="nav-link nav-group-toggle">
					<svg class="nav-icon">
						<use
							xlink:href="@/assets/icon/coreui/free-symbol-defs.svg#cui-star"
						></use>
					</svg>
					Icons
				</a>
				<ul class="nav-group-items">
					<li class="nav-item">
						<a class="nav-link" href="icons/coreui-icons-free.html">
							CoreUI Icons<span
								class="badge badge-sm bg-success ms-auto"
								>Free</span
							></a
						>
					</li>
					<li class="nav-item">
						<a
							class="nav-link"
							href="icons/coreui-icons-brand.html"
						>
							CoreUI Icons - Brand</a
						>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="icons/coreui-icons-flag.html">
							CoreUI Icons - Flag</a
						>
					</li>
				</ul>
			</li>
		</ul>
		<button
			class="sidebar-toggler"
			type="button"
			data-coreui-toggle="unfoldable"
		></button>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
