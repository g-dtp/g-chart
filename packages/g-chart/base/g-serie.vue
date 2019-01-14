<script>
	import resize from '../../utils/resize'
	const scaleProps = []
	export default {
		name: "base-serie",
		inject: ['$chart', 'chartsOptions'],
		props:['yAxisIndex'],
		created(){
			this.scaleValues()
			if(!this.chartsOptions.series) this.chartsOptions.series = []
			this.chartsOptions.series.push(this.serie)
		},
		beforeDestroy(){
			let index = this.chartsOptions.series.findIndex((item) => {
				return this.serie = item
			})
			if (index > -1) {
				this.chartsOptions.series.splice(index, 1);
			}
		},
		methods:{
			scaleValues(){
				scaleProps.forEach(key => {
					if (typeof (this.serie[key]) == 'Number')
						this.serie[key] = this.serie[key] * resize.scale
				})
			},
			updateOptions(){
				let index = this.chartsOptions.series.findIndex((item) => {
					return this.serie = item
				})
				let newOption = {
					...this.serie,
					...this.$props
				}
				this.serie = {...newOption}
				this.chartsOptions.series[index] = this.serie
				this.scaleValues()
				this.$chart.render()
			}
		},
		render() {}
	}
</script>

