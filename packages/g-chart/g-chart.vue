<template lang='pug'>
	.g-chart(@touchstart="onTouchstart" @click="onClick" ref="chart")
		slot
</template>

<script>
	import Echart from 'echarts'
	import Emitter from '../mixins/emitter'


	export default {
		name: "g-chart",
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
				chartsOptions: this.options,
				$chart: this
			}
		},
		watch: {
			'options'() {
				this.render()
			}
		},
		methods: {
			onTouchstart(e) {
				this.preventDefault && e.preventDefault()
			},
			onClick(e) {
				this.preventDefault && e.preventDefault()
			},
			async render() {
				await this.$nextTick()
				if (!this.chart) this.chart = Echart.init(this.$refs.chart, 'default');
				this.chart.setOption(this.options, true)
				this.resize()
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
		min-width 100px
		min-height 200px

		.noselect
			-webkit-touch-callout: none; /* iOS Safari */
			-webkit-user-select: none; /* Safari */
			-khtml-user-select: none; /* Konqueror HTML */
			-moz-user-select: none; /* Firefox */
			-ms-user-select: none; /* Internet Explorer/Edge */
			user-select: none;
</style>
