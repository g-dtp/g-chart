<template lang='pug'>
	.g-chart(@touchstart="onTouchstart" @click="onClick" ref="chart")
		slot
</template>

<script>
	import Echart from 'echarts'
	import Emitter from '../mixins/emitter'

	const options = {
		text: '',
		color: '#003173',
		textColor: '#52B8DF',
		maskColor: 'rgba(0,0,0,.5)',
		zlevel: 0
	}
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
				timer: null,
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
				if (this.timer) clearTimeout(this.timer)
				this.timer = setTimeout(() => {
					if (this.chart) this.chart.resize()
					// this.chart.hideLoading()
				}, 100)
			}
		},
		async mounted() {
			if (!this.chart) this.chart = Echart.init(this.$refs.chart, 'default');
			// this.chart.showLoading('default',options)
			window.addEventListener('resize', this.resize)
			this.render()
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.resize)
			this.chart.clear()
			this.chart.dispose()
			this.destroy()
		}
	}
</script>

<style lang="stylus" scoped>
	.g-chart
		width 100%
		height 100%
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
		user-select: none;
</style>
