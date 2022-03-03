// 数据仓库模块
import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex); // 应用vuex插件

function delay(duration) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, duration);
	});
}

const store = new Vuex.Store({
	// 仓库配置对象
	state: {
		count: 0, // 默认值为0
	},
	//该方法中不得出现异步操作
	mutations: {
		//增加
		increase(state) {
			state.count++;
		},
		//减少
		decrease(state) {
			state.count--;
		},
		// payload：负荷  负载
		power(state, payload) {
			state.count **= payload;
		},
	},
	//异步使用actions
	actions: {
		async asyncIncrease(ctx) {
			await delay(1000);
			ctx.commit("increase");
		},
		async asyncDecrease(ctx) {
			await delay(1000);
			ctx.commit("decrease");
		},
		async asyncPower(ctx, payload) {
			await delay(1000);
			ctx.commit("power", payload);
		},
	},
});

window.store = store;

export default store;
