<script>
	import GBase from './base/g-base'

	export default {
		extends: GBase,
		name: "g-pie",
		props: {
			data: {
				default: function () {
					return []
				}
			},
			startAngle: {
				default: 90
			},
			endAngle: {
				default: 350
			},
			radius: {
				default: function () {
					return ['40%', '60%']
				}
			},
			label: {
				default: function () {
					return {
						show: false
					}
				}
			},
			labelLine: {
				default: function () {
					return {
						show: false
					}
				}
			},
			silent: {
				default: true
			},
			itemStyle: {
				default: function () {
					return {
						// borderWidth:5,
						// borderColor: '#000E2D'
					}
				}
			}
		},
		data() {
			return {
				options: {
					type: 'pie',
					...this.$props,
				}
			}
		},
		created() {
			if (!this.chartsOptions.series) this.chartsOptions.series = []
			this.chartsOptions.series.push(this.options)
		},
	}
</script>
