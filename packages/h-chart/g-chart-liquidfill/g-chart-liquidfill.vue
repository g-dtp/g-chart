<template lang='pug'>
	g-chart.g-chart-liquidfill
		g-liquidfill(:data="[percent]" :radius="200" :center="['50%', '50%']")
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
				default: 0.5
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
