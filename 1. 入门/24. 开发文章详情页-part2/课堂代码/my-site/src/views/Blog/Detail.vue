<template>
	<Layout>
		<div class="main-container" v-loading="isLoading">
			<BlogDetail :blog="data" v-if="data" />
		</div>
		<template #right>
			<div class="right-container" v-loading="isLoading">
				<BlogTOC :toc="data.toc" v-if="data" />
			</div>
		</template>
	</Layout>
</template>

<script>
	import fetchData from "@/mixins/fetchData";
	import {
		getBlog
	} from "@/api/blog";
	import Layout from "@/components/Layout";
	import BlogDetail from "./components/BlogDetail";
	import BlogTOC from "./components/BlogTOC";

	export default {
		components: {
			Layout,
			BlogDetail,
			BlogTOC,
		},
		mixins: [fetchData(null)],
		methods: {
			async fetchData() {
				return await getBlog(this.$route.params.id);
			},
		},
	};
</script>

<style scoped lang="less">
	.main-container {
		overflow-y: scroll;
		height: 100%;
		box-sizing: border-box;
		padding: 20px;
		position: relative;
		width: 100%;
		overflow-x: hidden;
		scroll-behavior: smooth;
	}

	.right-container {
		width: 300px;
		height: 100%;
		overflow-y: scroll;
		box-sizing: border-box;
		position: relative;
		padding: 20px;
	}
</style>
