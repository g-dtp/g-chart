<script>
	export default {
		name: "g-legend",
		props:['data'],
		data(){
			return {
				options:{
					...this.$props,
				}
			}
		},
		inject:['chartsOptions'],
		created(){
			this.chartsOptions.legend = {...this.options}
		},
		render(){}
	}
</script>
