<script>
export default {
	name: "g-line",
	props:['data', 'name'],
	data(){
		return {
			options:{
				type:'line',
				...this.$props
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
