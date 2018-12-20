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
				if (!this.chart) this.chart = Echart.init(this.$refs.chart, 'default');
				this.chart.setOption(this.options, true)
				this.chart.resize()
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
			this.broadcast('g-base', 'update-options', this.updateOptions);
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
