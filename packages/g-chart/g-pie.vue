<script>
	import GSerie from './base/g-serie'
	import {mapWatches} from './base/utils'
	export default {
		extends: GSerie,
		name: "g-pie",
		props: {
			data: {
				default: function () {
					return []
				}
			},
			center:{
				default:function () {
					return ['50%', '50%']
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
		watch:{
			...mapWatches('updateOptions',[
				'data','center', 'startAngle','endAngle', 'radius', 'label', 'labelLine', 'itemStyle'
			])
		},
		data() {
			return {
				options: {
					type: 'pie',
					...this.$props,
				}
			}
		}
	}
</script>
