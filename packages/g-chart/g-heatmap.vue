<script>
	import GSerie from './base/g-serie'
	export default {
		extends: GSerie,
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
		}
	}
</script>
