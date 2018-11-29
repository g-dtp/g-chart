<script>
	import GBase from './base/g-base'
	export default {
		extends: GBase,
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
		created() {
			if (!this.chartsOptions.series) this.chartsOptions.series = []
			this.chartsOptions.series.push(this.options)
		}
	}
</script>
