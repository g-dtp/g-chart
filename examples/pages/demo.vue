<template lang='pug'>
	.demo
		button(@click="onChange") change
		g-chart.test()
			g-grid(:left="20" :right="20" :top="40")
			g-legend(:data="legend")
			g-title()
			g-xAxis(:data="xAxisData")
			g-yAxis
			g-line(:data="list" :smooth="smooth" :name="'BUG数量'")
			g-line(:data="list1" :smooth="smooth" :name="'逃逸BUG数量'")
</template>

<script>
	export default {
		name: "demo",
		data(){
			return {
				xAxisData: [],
				list: [],
				list1: [],
				smooth: true,
				legend: ['BUG数量','逃逸BUG数量']
			}
		},
		created(){
			for(let i =0; i < 12;i++){
				this.xAxisData.push(i)
				this.list.push(Math.random()*800)
			}
			for(let i =0; i < 12;i++){
				this.list1.push(Math.random()*800)
			}
		},
		methods: {
			onChange(){
				this.smooth = !this.smooth
			}
		}
	}
</script>

<style lang='stylus' scoped>
	.demo
		.test
			border 1px dashed #ddd
			height 400px
</style>
