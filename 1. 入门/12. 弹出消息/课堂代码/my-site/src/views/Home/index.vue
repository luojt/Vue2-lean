<template>
	<div class="home-container" ref="container">
		<h1>首页</h1>
		<button @click="handleClick">成功</button>
		<button @click="handleClick01">失败</button>
		<button @click="handleClick02">警告</button>
		<button @click="handleClick03">信息</button>
	</div>
</template>

<script>
	export default {
		methods: {
			handleClick() {
				// this.$sayHello();
				this.$showMessage({
					content: "评论成功",
					type: "success",
					container: this.$refs.container,
					callback: function() {
						console.log("完成！！！");
					},
				});
			},
			handleClick01() {
				// this.$sayHello();
				this.$showMessage({
					content: "评论失败",
					type: "error",
					container: this.$refs.container,
					callback: function() {
						console.log("完成！！！");
					},
				});
			},
			handleClick02() {
				// this.$sayHello();
				this.$showMessage({
					content: "警告",
					type: "warn",
					container: this.$refs.container,
					callback: function() {
						console.log("完成！！！");
					},
				});
			},
			handleClick03() {
				// this.$sayHello();
				this.$showMessage({
					content: "信息",
					type: "info",
					container: this.$refs.container,
					callback: function() {
						console.log("完成！！！");
					},
				});
			},
		},
	};
</script>

<style scoped>
	.home-container {
		background: lightblue;
		width: 1000px;
		height: 500px;
		border: 1px solid;
		margin: 50px auto;
	}
</style>
