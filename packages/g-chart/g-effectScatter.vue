<script>
	import GBase from './base/g-base'

	export default {
		extends: GBase,
		name: "g-effectScatter",
		props: {
			coordinateSystem: {
				default: 'cartesian2d'
			},
			data: {
				default: function () {
					return []
				}
			},
			symbol: {
				default:function () {
					return 'diamond'
				}
			},
			symbolSize:{
				default: 3
			},
			rippleEffect: {
				default:function () {
					return {
						period: 4,
						scale: 10,
						brushType: 'stroke',
					}
				}
			}
		},
		data() {
			return {
				options: {
					type: 'effectScatter',
					...this.$props,
				}
			}
		},
		created() {
			if (!this.chartsOptions.series) this.chartsOptions.series = []
			this.chartsOptions.series.push(this.options)
		}
	}
</script>
