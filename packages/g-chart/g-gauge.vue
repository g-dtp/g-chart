<script>
	import GSerie from './base/g-serie'

	export default {
		extends: GSerie,
		name: 'g-gauge',
		props: {
			radius: {
				default: '100%'
			},
			min: {
				default: 0
			},
			max: {
				default: 1
			},
			startAngle: {
				default: 90
			},
			endAngle: {
				default: -269.9999
			},
			splitNumber: {
				default: 12,
			},
			animation: {
				default: 0
			},
			pointer: {
				default: function () {
					return {
						show: true,
						length: '50%',
						width: 8
					}
				}
			},
			itemStyle: {
				default: function () {
					return {
						normal: {
							color: '#EDA532',
						}
					}
				}
			},
			axisLine: {
				default: function () {
					return {
						show: false,
						lineStyle: {
							width: 0
						}
					}
				}
			},
			splitLine: {
				default: false
			},
			axisTick: {
				default: false
			},
			axisLabel: {
				default: false
			},
			title: {
				default: false
			},
			detail: {
				default: false
			},
			data: {
				default: function () {
					return [0.45]
				}
			}
		},
		data () {
			return {
				serie: {
					type: 'gauge',
					...this.$props,
				}
			}
		}
	}
</script>

