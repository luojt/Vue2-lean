<template>
	<div class="app-container">
		<Layout>
			<template v-slot:left>
				<div class="aside">
					<SiteAside />
				</div>
			</template>
			<template v-slot:default>中间主区域</template>

			
			<!-- <template #left>
				<div class="aside">
					<SiteAside />
				</div>
			</template>
			<template #default>
				中间主区域
			</template> -->
		</Layout>
	</div>
</template>

<script>
	import Layout from "./components/Layout";
	import SiteAside from "./components/SiteAside";
	export default {
		components: {
			Layout,
			SiteAside,
		},
	};
</script>

<style lang="less" scoped>
	@import "~@/styles/mixin.less";

	.app-container {
		.self-fill(fixed);
	}

	.aside {
		width: 250px;
		height: 100%;
	}
</style>
