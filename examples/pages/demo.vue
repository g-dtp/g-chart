<template lang='pug'>
	.demo
		g-chart.chart-item()
			g-grid(:left="20" :right="20" :top="40")
			g-legend(:data="legend")
			g-title()
			g-xAxis(:data="xAxisData")
			g-yAxis
			g-bar(:data="bar0" :name="'测试1'" :barMaxWidth="30" :barWidth="'20%'")
			g-bar(:data="bar1" :name="'测试2'" :barMaxWidth="30" :barWidth="'20%'")
			g-line(:data="list" :smooth="smooth" :name="'BUG数量'")
			g-line(:data="list1" :smooth="smooth" :name="'逃逸BUG数量'" )
			g-line(:data="list2" :smooth="smooth" :name="'未解决BUG'" )

</template>

<script>
	export default {
		name: "demo",
		data(){
			return {
				xAxisData: [],
				list: [],
				list1: [],
				list2: [],
				bar0: [],
				bar1: [],
				smooth: false,
				legend: ['BUG数量','逃逸BUG数量', '未解决BUG', '测试1','测试2']
			}
		},
		created(){
			for(let i =0; i < 12;i++){
				this.xAxisData.push(i)
				this.list.push(Math.random()*500+300)
				this.list1.push(Math.random()*400+400)
				this.list2.push(Math.random()*400+600)
				this.bar0.push(Math.random()*250+20)
				this.bar1.push(Math.random()*240+20)
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
		margin 0
		.chart-item
			background #000E2D
			border-radius 5px
			height 400px
</style>
