<template>
	<div>
		<h1>App组件</h1>
		<Icon type="arrowUp" />
	</div>
</template>

<script>
	import Icon from "./components/Icon";
	export default {
		components: {
			Icon,
		},
	};
</script>

<style scoped>
	.iconfont {
		font-size: 40px;
		color: red;
	}
</style>
