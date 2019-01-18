<script>
	import resize from '../../utils/resize'
	const scaleProps = []
	import {mapWatches} from './utils'
	export default {
		name: "base-serie",
		inject: ['$chart', 'chartsOptions'],
		props:['yAxisIndex','serieIndex'],
		props:{
			yAxisIndex:{
				default:0
			},
			serieIndex:{
				default:0
			},
		},
		watch:{
			// ...mapWatches('updateOptions',[
			// 	'serieIndex','yAxisIndex'
			// ])
		},
		created(){
			this.scaleValues()
			if(!this.chartsOptions.series) this.chartsOptions.series = []
			this.chartsOptions.series[this.serieIndex] = this.serie
		},
		beforeDestroy(){
			this.chartsOptions.series.splice(this.serieIndex, 1);
		},
		methods:{
			scaleValues(){
				scaleProps.forEach(key => {
					if (typeof (this.serie[key]) == 'Number')
						this.serie[key] = this.serie[key] * resize.scale
				})
			},
			updateOptions(){
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
		render() {}
	}
</script>

