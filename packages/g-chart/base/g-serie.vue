<script>
	import resize from '../../utils/resize'

	const scaleProps = []
	export default {
		name: 'base-serie',
		inject: ['$chart', 'chartsOptions'],
		props: {
			yAxisIndex: {
				default: 0
			},
			serieIndex: {
				default: 0
			}
		},
		watch: {
			// ...mapWatches('updateOptions',[
			// 	'serieIndex','yAxisIndex'
			// ])
		},
		created () {
			this.scaleValues()
			if (!this.chartsOptions.series) this.chartsOptions.series = []
			this.chartsOptions.series[this.serieIndex] = this.serie
		},
		beforeDestroy () {
			this.chartsOptions.series[this.serieIndex] = ''
		},
		destroyed () {
			this.chartsOptions.series[this.serieIndex] = ''
		},
		methods: {
			scaleValues () {
				scaleProps.forEach(key => {
					/* eslint-disable */
					let value = typeof this.options[key]
					if (value.toUpperCase() === 'NUMBER') {
						this.options[key] = this.options[key] * resize.scale
					}
				})
			},
			updateOptions () {
				let newOption = {
					...this.serie,
					...this.$props
				}
				this.serie = {...newOption}
				this.chartsOptions.series[this.serieIndex] = this.serie
				this.scaleValues()
				this.$chart.render()
			}
		},
		/* eslint-disable */
		render () {}
	}
</script>
