<script>
	import GBase from './base/g-base'

	export default {
		extends: GBase,
		name: "g-area",
		props: {
			data: {
				default: function () {
					return []
				}
			},
			name: {},
			smooth: {},
			showSymbol: {},
			areaStyle:{
				default:function () {
					return {}
				}
			},
			lineStyle:{
				default:function () {
					return {}
				}
			}
		},
		data() {
			return {
				options: {
					type: 'line',
					...this.$props
				}
			}
		},
		created() {
			if (!this.chartsOptions.series) this.chartsOptions.series = []
			this.chartsOptions.series.push(this.options)
		}
	}
</script>
