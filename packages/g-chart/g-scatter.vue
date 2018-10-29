<script>
export default {
	name: "g-scatter",
	props:{
		coordinateSystem:{
			default:'singleAxis'
		},
		data:{
			default: function () {
				return []
			}
		}
	},
	data(){
		return{
			options:{
				...this.$props,
				type: 'scatter',
			}
		}
	},
	inject:['chartsOptions'],
	created(){
		if(!this.chartsOptions.series) this.chartsOptions.series = []
		this.chartsOptions.series.push(this.options)
	},
	render(){}
}
</script>
