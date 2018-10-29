<script>
	export default {
		name: "g-tooltip",
		props: {
			trigger: {
				default: 'axis'
			},
			axisPointer: {
				default: function () {
					return {
						type: 'shadow'
					}
				}
			},
		},
		data() {
			return {
				options: {}
			}
		},
		inject:['chartsOptions'],
		created(){
			this.chartsOptions.tooltip = {...this.options}
		},
		render() {
		},
	}
</script>
