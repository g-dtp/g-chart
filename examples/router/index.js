import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import mds from '../docs/chart.md'

console.log(/mds/, mds)


const router = new Router({
	routes: [
		{
			path:'/',
			name:'index',
			component: () => import('../docs/chart.md')
		},{
			path:'/demo',
			name:'demo',
			component: () => import('../pages/demo')
		}
	]
})

export default router
