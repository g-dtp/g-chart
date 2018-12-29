<template lang='pug'>
	g-chart.g-chart-liquidfill
		g-title(:text="title" left="center" top="10%")
		g-liquidfill(:data="[percent]" :center="['50%', '50%']" :text="text")
</template>

<script>

	import GChart from '../../g-chart/g-chart'
	import Liquidfill from 'echarts-liquidfill'
	import GLiquidfill from '../../g-chart/g-liquidfill'
	export default {
		name: "g-chart-liquidfill",
		components: {GChart, GLiquidfill},
		props: {
			percent:{
				default: 0.4
			},
			title: {
				default:'PPM'
			},
			text: {
				default: '111'
			}
		},
		data(){
			return {
			}
		},

		methods: {
		}
	}
</script>

<style lang="stylus" scoped>

</style>
