<script>
	import resize from '../../utils/resize'
	const scaleProps = []
	export default {
		name: "base-serie",
		inject: ['$chart', 'chartsOptions'],
		created(){
			if(!this.chartsOptions.series) this.chartsOptions.series = []
			this.chartsOptions.series.push(this.serie)
		},
		methods:{
			scaleValues(){
				scaleProps.forEach(key => {
					if (typeof (this.options[key]) == 'Number')
						this.options[key] = this.options[key] * resize.scale
				})
			},
			updateOptions(){
				let newOption = {
					...this.serie,
					...this.$props
				}
				this.serie = {...newOption}
				this.scaleValues()
				this.$chart.render()
			}
		},

		render() {}
	}
</script>

