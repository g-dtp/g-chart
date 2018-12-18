<template lang='pug'>
	g-chart.line-area
		g-grid(:left="20" :right="0" :top="60")
		g-legend(:data="legend" left="center")
		g-title(text="例子4" )
		g-xAxis(:data="xAxisData")
		g-yAxis
		g-area(v-for='(item,index) in list' :data="item.list" :key='index'
		:smooth="smooth" :name="item.name"
		:areaStyle="_areaStyles[0]")
</template>

<script>
	import {ChartHelper} from 'packages/index'
	export default {
		name: "line-area",
		data(){
			return {
				smooth:true,
				legend: ['BUG数量', '逃逸BUG数量'],
				xAxisData:['1月','2月', '3月', '4月'],
				list:[
					{
						name: 'BUG数量',
						list:[123,45,33,556]
					},
					{
						name: '逃逸BUG数量',
						list:[223,145,103,56]
					}
				],

			}
		},
		beforeCreate(){
			this._colors = ['red', 'yellow']
			this._areaStyles = [
				{color: ChartHelper.getLinearGradient('rgba(15,93,144,0.5)', 'rgba(15,93,144,0.1)')},
				{color: ChartHelper.getLinearGradient('rgba(15,93,144,0.5)', 'rgba(15,93,144,0.1)')}
			]
		},
		mounted() {
			console.log(/some/, this._areaStyles)
		}
	}
</script>

<style lang='stylus' scoped>

</style>
