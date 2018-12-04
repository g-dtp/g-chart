<template lang='pug'>
	.demo
		g-chart.chart-item(:key="0")
			g-grid(:left="20" :right="20" :top="40")
			g-legend(:data="legend")
			g-title(text="例子1")
			g-xAxis(:data="xAxisData")
			g-yAxis
			g-bar(:data="bar0" :name="'测试1'" :barMaxWidth="30" :barWidth="'20%'")
			g-bar(:data="bar1" :name="'测试2'" :barMaxWidth="30" :barWidth="'20%'")
			g-line(:data="list" :smooth="smooth" :name="'BUG数量'")
			g-line(:data="list1" :smooth="smooth" :name="'逃逸BUG数量'" )
			g-line(:data="list2" :smooth="smooth" :name="'未解决BUG'" )
		g-chart.chart-item(:key="1")
			g-grid(:left="20" :right="20" :top="40")
			g-legend(:data="legend")
			g-title(text="例子2")
			g-xAxis(:data="xAxisData" :boundaryGap="false")
			g-yAxis
			g-area(:data="area" :smooth="true" :name="'测试3'" :areaStyle="areaStyle")
		g-chart.chart-item(:key="2")
			g-grid(:left="20" :right="20" :top="40")
			g-legend(:data="legend")
			g-title(text="例子3")
			g-xAxis(:data="xAxisData")
			g-yAxis
			g-bar(:data="bar0" :name="'测试1'" :barMaxWidth="30" :barWidth="'20%'" :itemStyle="itemStyle")
			g-bar(:data="bar1" :name="'测试2'" :barMaxWidth="30" :barWidth="'20%'")
		g-chart.chart-item(:key="3")
			g-grid(:left="20" :right="20" :top="40")
			g-legend(:data="legend")
			g-title(text="例子4")
			g-xAxis(:data="xAxisData")
			g-yAxis
			g-line(:data="list" :smooth="smooth" :name="'BUG数量'")
			g-line(:data="list1" :smooth="smooth" :name="'逃逸BUG数量'")
			g-effectScatter(:data="[null, 100]")
		g-chart.chart-item(:key="5")
			g-grid(:left="20" :right="20" :top="40")
			g-legend(:data="pieLegend")
			g-title(text="例子4")
			g-pie(:data="pie")
		g-chart-percent.chart-item()
</template>

<script>
	import echarts from 'echarts'

	import { GChartPercent } from '../../packages/index'

	console.log(GChartPercent)
	export default {
		name: "demo",
		components: {GChartPercent},
		data() {
			return {
				xAxisData: [],
				list: [],
				list1: [],
				list2: [],
				bar0: [],
				bar1: [],
				area: [],
				smooth: false,
				legend: ['BUG数量', '逃逸BUG数量', '未解决BUG', '测试1', '测试2', '测试3'],
				itemStyle: {},
				areaStyle: {},
				pieLegend: [],
				pie: []
			}
		},
		created() {
			for (let i = 0; i < 12; i++) {
				this.xAxisData.push((i + 1) + '月')
				this.list.push(Math.random() * 50 + 300)
				this.list1.push(Math.random() * 100 + 400)
				this.list2.push(Math.random() * 80 + 600)
				this.list2.push(Math.random() * 100 + 600)
				this.bar0.push(Math.random() * 250 + 20)
				this.bar1.push(Math.random() * 220 + 20)
				this.area.push(Math.random() * 50 + 100)
			}
			this.itemStyle.color = this.makeColors('#9CCAF0', 'rgba(156,202,240,0.30)')
			this.areaStyle.color = this.makeColors('rgba(15,93,144,0.90)', 'rgba(15,93,144,0.30)')

			for (let i = 0; i < 6; i++) {
				this.pieLegend.push(`例子${i + 1}`)
				this.pie.push({
					name: `例子${i + 1}`,
					value: Math.random() * 50 + 10,
				})
			}
		},
		methods: {
			onChange() {
				this.smooth = !this.smooth
			},
			makeColors(color1, color2) {
				return new echarts.graphic.LinearGradient(
					0, 0, 0, 1,
					[
						{offset: 0, color: color1},
						{offset: 1, color: color2}
					]
				)
			}
		}
	}
</script>

<style lang='stylus' scoped>
	.demo
		margin 0

		.chart-item
			background #000E2D
			height 340px
</style>
