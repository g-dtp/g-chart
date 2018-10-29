<script>
	export default {
		name: "g-xAxis",
		props: {
			data: {
				default: function () {
					return []
				},
			},
			axisLabel: {
				default: function () {
					return {
						interval:0,
						fontSize: 12
					}
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
		inject:['chartsOptions'],
		data() {
			return {
				options: {
					...this.$props,
				}
			}
		},
		created() {
			this.chartsOptions.xAxis = {...this.options}
		},
		render() {
		}
	}
</script>

<style lang="stylus" scoped>

</style>
