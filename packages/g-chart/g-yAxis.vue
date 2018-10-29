<script>
	export default {
		name: "g-yAxis",
		props: {
			data: {
				default: function () {
					return []
				},
			},
			axisLabel: {
				default: function () {
					return {}
				}
			},
			axisTick: {
				default: function () {
					return {}
				}
			},
			axisLine: {
				default: function () {
					return {}
				}
			},
			type:{
				default: 'category'
			}
		},
		data(){
			return {
				options: {
					...this.$props
				}
			}
		},
		inject:['chartsOptions'],
		created(){
			this.chartsOptions.yAxis = {...this.options}
		},
		render() {}
	}
</script>

