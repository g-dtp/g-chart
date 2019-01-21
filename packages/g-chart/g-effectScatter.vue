<script>
	import GSerie from './base/g-serie'

	export default {
		extends: GSerie,
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
			},
			label:{},
			itemStyle: {
				default:function () {
					return {
						color: 'rgb(237, 165, 50)'
					}
				}
			}
		},
		data() {
			return {
				serie: {
					type: 'effectScatter',
					...this.$props,
				}
			}
		}
	}
</script>
