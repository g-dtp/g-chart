<template lang='pug'>
	.demo
		button(@click="onUpdate") update
		button(@click="onToggle") toggle
		button(@click="makeData") make
		g-chart.chart-item(:key="2" v-if="show")
			g-grid(:left="20" :right="0" :top="60")
			g-legend(:data="legend" right="0")
			g-title(:text="text1" :left="textLeft")
			g-xAxis(:data="xAxisData")
			g-yAxis()
			g-yAxis()
			g-bar(:data="bar0" :name="'测试1'" :barMaxWidth="30" :barWidth="'20%'" :itemStyle="itemStyle" :yAxisIndex="0" :serieIndex="0")
			g-bar(:data="bar0" :name="'测试1'" :barMaxWidth="30" :barWidth="'20%'" :yAxisIndex="0" :serieIndex="1")
			g-line(:data="bar1" :name="'测试2'" :yAxisIndex="1" :itemStyle="_itemStyle" :lineStyle='_lineStyle' :showSymbol="true" :serieIndex="2")
			g-effectScatter(:data="[null, 600]" :serieIndex="3")

</template>

<script>
	import echarts from 'echarts'

	import {GChartPercent, GChartArrow, GChartLiquidfill} from 'packages/index'

	import LineArea from './demo/line-area'

	export default {
		name: "demo",
		components: {GChartArrow, GChartPercent, GChartLiquidfill, LineArea},
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
				pieData: {},
				show: true,
				text1: 'demo',
				textLeft: 0
			}
		},
		beforeCreate() {
			this._colors= ['#EDA532','#449B7E','#5BD4D7','#51B6F5','#2E69CD','#CCE2FF','#93C8FF','#51B6F5','#2E69CD','#659BFF']
			this._lineStyle = [{}]
			this._itemStyle = {
				color: '#EDA532',
				borderColor: 'rgba(0,0,0,0)',
				borderWidth: 3
			}
		},
		created() {
			for (let i = 0; i < 12; i++) {
				this.xAxisData.push((i + 1) + '月')
				this.list.push(Math.random() * 50 + 300)
				this.list1.push(Math.random() * 100 + 400)
				this.list2.push(Math.random() * 80 + 600)
				this.list2.push(Math.random() * 100 + 600)
				this.bar0.push(Math.ceil(Math.random() * 250 + 20))
				this.bar1.push(Math.floor((Math.random() * 220 + 20) / 100))
				this.area.push(Math.random() * 50 + 100)
			}
			this.itemStyle.color = this.makeColors('#9CCAF0', 'rgba(156,202,240,0.30)')
			this.areaStyle.color = this.makeColors('rgba(15,93,144,0.90)', 'rgba(15,93,144,0.30)')


		},
		methods: {
			onUpdate() {
				this.bar1[0] = null
				this.text1 = 'demoxx'
				this.textLeft++
			},
			makeData() {
				this.pieData = this.makeSome()
			},
			onToggle() {
				this.show = !this.show
			},
			makeColors(color1, color2) {
				return new echarts.graphic.LinearGradient(
					0, 0, 0, 1,
					[
						{offset: 0, color: color1},
						{offset: 1, color: color2}
					]
				)
			},
			makeSome() {
				let list = []
				let legend = []
				let name
				for (let i = 0; i < 6; i++) {
					name = `例子${i}`
					legend.push(name)
					list.push({
						name: name,
						value: Math.random() * 50 + 10,
					})
				}
				return {
					data: list,
					legend: legend
				}
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

		.box-1
			height 800px
			display flex
			flex-direction column

			>>> .line-area
			.chart-item-1
				height 300px
				flex none

			.chart-item-2
				flex auto
</style>
