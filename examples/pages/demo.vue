<template lang='pug'>
	.demo
		button(@click="onChange") change
		g-chart.test
			g-grid()
			g-title()
			g-xAxis(:data="xAxisData")
			g-yAxis
			g-line(:data="list" :smooth="smooth")
</template>

<script>
	export default {
		name: "demo",
		data(){
			return {
				xAxisData: [],
				list: [],
				smooth: true
			}
		},
		created(){
			for(let i =0; i < 12;i++){
				this.xAxisData.push(i)
				this.list.push(Math.random(800))
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
</style>
