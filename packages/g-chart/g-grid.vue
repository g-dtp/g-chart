<script>
	export default {
		name: "g-grid",
		props: {
			containLabel: {
				default: true
			},
			left: {
				default: 0
			},
			right: {
				default: 0
			},
			bottom: {
				default: 0
			},
			top: {
				default: 0
			}
		},
		data() {
			return {
				options: {
					...this.$props,
				}
			}
		}
		,
		inject: ['chartsOptions'],
		created() {
			this.chartsOptions.grid = {...this.options}
		}
		,
		render() {
		}
	}
</script>
