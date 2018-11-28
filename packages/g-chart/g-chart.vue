<template lang='pug'>
	.g-chart(:style="{backgroundColor: backgroundColor,width:width+'px',height:height+'px'}" @touchstart="onTouchstart" @click="onClick" ref="chart")
		slot(@update="updateOptions")
</template>

<script>
	import Echart from 'echarts'

	export default {
		name: "g-chart",
		props: {
			width: {
				type: Number,
				default: 1000
			},
			height: {
				type: Number,
				default: 400
			},
			backgroundColor: {
				type: String,
				default: 'rgba(0,0,0,0)'
			}
		},

		data() {
			return {
				chart: null,
				options: {
					yAxis: {show: false}
				}
			}
		},
		provide() {
			return {
				chartsOptions: this.options
			}
		},
		watch: {
			async 'options'() {
				await this.$nexttick()
				this.render()
				this.resize()
			}
		},
		methods: {
			onTouchstart(e) {
				this.preventDefault && e.preventDefault()
			},
			onClick(e) {
				this.preventDefault && e.preventDefault()
			},
			render() {
				if (!this.chart) this.chart = Echart.init(this.$refs.chart);
				this.chart.setOption(this.options, true)
			},
			destroy() {
			},
			updateOptions() {
				this.chart.setOption(this.options, true)
				this.chart.resize()
			},
			resize() {
				if (this.chart) {
					this.chart.resize()
				}
			}
		},
		async mounted() {
			await this.$nextTick()
			this.render()
			window.addEventListener('resize', this.resize)
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.resize)
			this.destroy()
		}
	}
</script>

<style lang="stylus" scoped>
	.g-chart

		.noselect
			-webkit-touch-callout: none; /* iOS Safari */
			-webkit-user-select: none; /* Safari */
			-khtml-user-select: none; /* Konqueror HTML */
			-moz-user-select: none; /* Firefox */
			-ms-user-select: none; /* Internet Explorer/Edge */
			user-select: none;
</style>
