<template lang='pug'>
	.g-chart(@touchstart='onTouchstart' @click='onClick' ref='chart')
		slot
</template>

<script>
	import Echart from 'echarts'
	import Emitter from '../mixins/emitter'

	export default {
		name: 'g-chart',
		mixins: [Emitter],
		props: {
			size: {
				default: function () {
					return []
				}
			},
			backgroundColor: {
				type: String,
				default: 'rgba(0,0,0,0)'
			},
			color: {
				default: ''
			}
		},
		data () {
			return {
				chart: null,
				timer: null,
				options: {
					color: this.color
				}
			}
		},
		provide () {
			return {
				chartsOptions: this.options,
				$chart: this
			}
		},
		watch: {
			'options' () {
				this.render()
			}
		},
		methods: {
			onTouchstart (e) {
				this.preventDefault && e.preventDefault()
			},
			onClick (e) {
				this.preventDefault && e.preventDefault()
			},
			async render () {
				this.chart.setOption(this.options, true)
				this.resizeChart()
			},
			updateOptions () {
				this.chart.setOption(this.options, true)
				this.resizeChart()
			},
			resizeChart () {
				let vm = this
				if (vm.timer) clearTimeout(vm.timer)
				vm.timer = setTimeout(() => {
					if (vm.chart) vm.chart.resize()
				}, 0)
			},
			onChartClick (series) {
				if (series.seriesType) return
				let seriesIndex = series.seriesIndex

				let c = Echart.util.isObject(series.color) ? series.color.colorStops[0].color : series.color
				let options = {
					series: []
				}
				let {label} = this.chart.getOption().series[seriesIndex]
				this.options.series.forEach((item, index) => {
					if (seriesIndex === index) {
						options.series.push({
							label: {
								show: label ? !label.show : true,
								color: c
							}
						})
					} else {
						options.series.push({})
					}
				})
				this.chart.setOption(options)
			}
		},
		mounted () {
			if (!this.chart) this.chart = Echart.init(this.$refs.chart, 'default')
			window.addEventListener('resize', this.resizeChart.bind(this))
			this.chart.on('click', this.onChartClick)
			this.render()
		},
		beforeDestroy () {
			if (this.timer) clearTimeout(this.timer)
		},
		destroyed () {
			window.removeEventListener('resize', this.resizeChart.bind(this))
			this.chart.off('click', this.onChartClick)
			this.chart.clear()
			this.chart.dispose()
			this.chart = null
		}
	}
</script>

<style scoped>
	.g-chart {
		width: 100% ;
		height: 100%;
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
		user-select: none;
	}
</style>
