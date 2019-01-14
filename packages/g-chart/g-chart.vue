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
				timer: null,
				options: {}
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
				debugger
				this.chart.setOption(this.options, true)
				this.resizeChart()
			},
			updateOptions() {
				this.chart.setOption(this.options, true)
				this.resizeChart()
			},
			resizeChart() {
				let vm = this
				if(vm.timer) clearTimeout(vm.timer)
				vm.timer = setTimeout(() => {
					if(vm.chart) vm.chart.resize()
				},0)

			}
		},
		async mounted() {
			if (!this.chart) this.chart = Echart.init(this.$refs.chart, 'default');
			window.addEventListener('resize', this.resizeChart.bind(this))
			this.render()
		},
		beforeDestroy(){
			if(this.timer) clearTimeout(this.timer)
		},
		destroyed() {
			window.removeEventListener('resize', this.resizeChart)
			this.chart.clear()
			this.chart.dispose()
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
