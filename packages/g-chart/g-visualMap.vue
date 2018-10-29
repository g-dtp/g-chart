<script>
	export default {
		name: "g-visualMap",
		inject:['chartsOptions'],
		props:{
			min: {
				default:0
			},
			max: {
				default: 10
			},
			orient: {
				default: 'horizontal'
			},
			show: {
				default: false
			}
		},
		data(){
			return {
				options:{
					...this.$props,
					calculable: true,
				}
			}
		},
		created(){
			console.log(this.options)
			this.chartsOptions.visualMap = {...this.options}
		},
		render(){}
	}
</script>
