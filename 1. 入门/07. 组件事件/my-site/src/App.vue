<template>
	<div>
		<h1>App组件</h1>
		<h1>当前是第{{current}}页</h1>
		<Pager :total="total" :current="current" :visibleNumber="visibleNumber" :limit="limit"
			@pageChange="handlePageChange" />
			
	</div>
</template>

<script>
	import Pager from "./components/Pager";
	export default {
		components: {
			Pager,
		},
		data() {
			return {
				current: 1,
				total: 302,
				visibleNumber: 7,
				limit: 7,
			};
		},
		methods: {
			handlePageChange(newPage) {
				this.current = newPage;
				console.log("加载当前页数据");
			},
		},
	};
</script>

<style scoped></style>
