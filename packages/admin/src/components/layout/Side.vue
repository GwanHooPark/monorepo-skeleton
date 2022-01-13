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
			<li class="nav-group" v-for="menu in operationMenus" :key="menu.id">
				<a class="nav-link nav-group-toggle">
					<svg class="nav-icon">
						<use
							xlink:href="@/assets/icon/coreui/free-symbol-defs.svg#cui-notes"
						></use>
					</svg>
					{{ menu.name }}
				</a>
				<ul class="nav-group-items">
					<li
						class="nav-item"
						v-for="childMenu in menu.child"
						:key="childMenu.id"
					>
						<router-link class="nav-link" :to="childMenu.url">
							{{ childMenu.name }}
							<!-- <span class="badge badge-sm bg-success ms-auto">
								Free
							</span> -->
						</router-link>
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
import { menuData } from '@/components/layout/sideMenuData';
import cloneDeep from 'lodash/cloneDeep';
export default {
	name: 'Side',
	data() {
		return {
			openedMenu: [],
			operationMenus: [],
		};
	},
	computed: {
		isOpenMenu() {
			return currentMenu => {
				return this.openedMenu.includes(currentMenu);
			};
		},
	},
	created() {
		this.setMenus();
	},
	methods: {
		setMenus() {
			this.operationMenus = cloneDeep(menuData.menus);
			this.operationMenus.map(menu => {
				return menu.name;
			});
			//this.openedMenu.push(getMainMenu().name);
		},
		openDept(menu) {
			if (this.openedMenu.includes(menu)) {
				const index = this.openedMenu.indexOf(menu);
				this.openedMenu.splice(index, 1);
			} else {
				this.openedMenu.push(menu);
			}
		},
	},
};
</script>

<style scoped>
.slide-enter-to,
.slide-leave {
	max-height: 100px;
	overflow: hidden;
}

.slide-enter,
.slide-leave-to {
	overflow: hidden;
	max-height: 0;
}
</style>
