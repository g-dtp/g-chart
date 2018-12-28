<script>
	import GSerie from './base/g-serie'

	export default {
		extends: GSerie,
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
				serie: {
					type: 'line',
					...this.$props
				}
			}
		}
	}
</script>
