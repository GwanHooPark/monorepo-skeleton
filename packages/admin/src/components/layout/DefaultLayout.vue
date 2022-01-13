<template>
	<fragment>
		<Side></Side>
		<div class="wrapper d-flex flex-column min-vh-100 bg-light">
			<Header></Header>
			<div class="body flex-grow-1 px-3">
				<router-view></router-view>
			</div>
			<Footer></Footer>
		</div>
	</fragment>
</template>

<script>
export default {};
</script>

<style></style>
