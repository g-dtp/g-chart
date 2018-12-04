<template lang='pug'>
	g-chart()
		g-graphic(:elements="elements" :key="0")
		g-pie(:data="data" :itemStyle="{color: backgroundColor}" :radius="[80, 100]")
</template>

<script>
	import GChart from '../g-chart/g-chart'
	import GPie from '../g-chart/g-pie'
	import GGraphic from '../g-chart/g-graphic'

	export default {
		name: "g-chart-percent",
		components: {GChart, GPie, GGraphic},
		props:{
			backgroundColor: {
				default: '#000E2D'
			},
			color: {
				default: '#9CCAF0'
			},
			percent: {
				default: .5
			}
		},
		data(){
			return {
				elements:[{
					type: 'ring',
					silent: true,
					left: 'center',
					top: 'middle',
					shape: {
						r: 105,
						r0:75
					},
					style: {
						fill: null,
						stroke:'rgba(156,202,240,0.30)',
						lineWidth:2
					}
				},{
					type: 'text',
					silent: true,
					left: 'center',
					top: 'middle',
					style: {
						text: '660',
						fill: '#52B8DF',
						stroke:'rgba(156,202,240,0.30)',
						font: '50px "Microsoft YaHei", sans-serif'
					}
				}],
				data: [
					{
						name: '',
						value:this.percent,
						itemStyle: {
							color: this.color,
						}
					},
					{name: '', value: 1 - this.percent}

				]

			}
		}
	}
</script>

<style lang="stylus" scoped>

</style>
