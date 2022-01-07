<template>
	<div class="about">
		<h3>공통함수(@apps/core/components/alertCore.js)</h3>
		<button @click="clickButton()">버튼</button>
	</div>
</template>
<script>
import { alertCore } from '@apps/core/lib/alertCore.js';
export default {
	name: 'About',
	methods: {
		clickButton() {
			alertCore('@apps/core/lib/alertCore 함수 호출');
		},
	},
};
</script>
