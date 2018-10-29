<script>
	export default {
		name: "g-title",
		props: {
			text: {
				type: String,
				default: '图表标题'
			}
		},
		data(){
			return {
				options: {
					...this.$props,
					textStyle: {
						color: '#52B8DF',
						fontSize: 12
					}
				}
			}
		},
		inject:['chartsOptions'],
		created(){
			this.chartsOptions.title = {...this.options}
		},
		render() {
		}
	}
</script>
