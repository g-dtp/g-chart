<script>
	export default {
		name: "g-heatmap",
		props: {
			data: {
				default: function () {
					return []
				}
			}
		},
		data() {
			return {
				options: {
					type: 'heatmap',
					...this.$props,
					label: {
						normal: {
							show: true
						}
					},
					itemStyle: {
						emphasis: {
							shadowBlur: 10,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}
			}
		},
		inject:['chartsOptions'],
		created() {
			if (!this.chartsOptions.series) this.chartsOptions.series = []
			this.chartsOptions.series.push(this.options)
		},
		render() {
		}
	}
</script>
