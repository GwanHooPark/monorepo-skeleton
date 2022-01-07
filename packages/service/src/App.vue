<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link>
			|
			<router-link to="/about"> Common </router-link>
			|
			<router-link to="/roulette"> roulette </router-link>
			|
			<router-link to="/slide"> slide </router-link>
		</div>
		<router-view />
	</div>
</template>
<style></style>
