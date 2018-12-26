// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './theme.styl'
import demoBlock from './components/demo-block.vue'
import GChart from '../packages/index'
import {Resize, ChartHelper} from '../packages/index'

Vue.component('demo-block', demoBlock)
Vue.use(GChart)
Vue.config.productionTip = false
/* eslint-disable no-new */
// let app
// Resize.addEvent(()=>{
// 	if(app) return
//
// })
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
