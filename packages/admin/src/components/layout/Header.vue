<template>
	<header class="header header-sticky mb-4">
		<div class="container-fluid">
			<button
				class="header-toggler px-md-0 me-md-3"
				type="button"
				@click="menuBarClick()"
			>
				<svg class="icon icon-lg">
					<use
						xlink:href="@/assets/icon/coreui/free-symbol-defs.svg#cui-menu"
					></use>
				</svg></button
			><a class="header-brand d-md-none" href="#">
				<svg width="118" height="46" alt="CoreUI Logo">
					<use xlink:href="assets/brand/coreui.svg#full"></use></svg
			></a>
			<ul class="header-nav d-none d-md-flex">
				<li class="nav-item">
					<a class="nav-link" href="#">Dashboard</a>
				</li>
				<li class="nav-item"><a class="nav-link" href="#">Users</a></li>
				<li class="nav-item">
					<a class="nav-link" href="#">Settings</a>
				</li>
			</ul>
			<ul class="header-nav ms-auto">
				<li class="nav-item">
					<a class="nav-link" href="#">
						<svg class="icon icon-lg">
							<use
								xlink:href="node_modules/@coreui/icons/sprites/free.svg#cil-bell"
							></use></svg
					></a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">
						<svg class="icon icon-lg">
							<use
								xlink:href="node_modules/@coreui/icons/sprites/free.svg#cil-list-rich"
							></use></svg
					></a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">
						<svg class="icon icon-lg">
							<use
								xlink:href="node_modules/@coreui/icons/sprites/free.svg#cil-envelope-open"
							></use></svg
					></a>
				</li>
			</ul>
			<ul class="header-nav ms-3">
				<li class="nav-item dropdown">
					<a
						class="nav-link py-0"
						data-coreui-toggle="dropdown"
						href="#"
						role="button"
						aria-haspopup="true"
						aria-expanded="false"
					>
						<div class="avatar avatar-md">
							<img
								class="avatar-img"
								src="assets/img/avatars/8.jpg"
							/></div
					></a>
				</li>
			</ul>
		</div>
		<div class="header-divider"></div>
		<div class="container-fluid">
			<nav aria-label="breadcrumb">
				<ol class="breadcrumb my-0 ms-2">
					<li class="breadcrumb-item">
						<!-- if breadcrumb is single--><a href="#">Home</a>
					</li>
					<li class="breadcrumb-item">
						<!-- if breadcrumb is single--><a href="#"
							>Components</a
						>
					</li>
					<li class="breadcrumb-item">
						<!-- if breadcrumb is single--><a href="#">Base</a>
					</li>
					<li class="breadcrumb-item active"><span>Cards</span></li>
				</ol>
			</nav>
		</div>
	</header>
</template>

<script>
export default {
	name: 'Header',
	methods: {
		menuBarClick() {},
	},
};
</script>

<style></style>
