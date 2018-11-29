<script>
	import GBase from './base/g-base'

	export default {
		extends: GBase,
		name: "g-scatter",
		props: {
			coordinateSystem: {
				default: 'singleAxis'
			},
			data: {
				default: function () {
					return []
				}
			}
		},
		data() {
			return {
				options: {
					...this.$props,
					type: 'scatter',
				}
			}
		},
		created() {
			if (!this.chartsOptions.series) this.chartsOptions.series = []
			this.chartsOptions.series.push(this.options)
		}
	}
</script>
