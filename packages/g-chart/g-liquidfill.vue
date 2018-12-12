<script>
	import GBase from './base/g-base'
	export default {
		extends: GBase,
		name: "g-liquidfill",
		props: ['data', 'color', 'outline', 'radius', 'center'],
		data() {
			return {
				options: {
					type: 'liquidFill',
					...this.$props,
					// 水球颜色
					color: ['#49d088'],
					// outline  外边
					outline: {
						show: false,
					},
					label: {
						normal: {
							color: '#EDA532',
							insideColor: '#EDA532',
							fontSize: 50
						}
					},
					// 内图 背景色 边
					backgroundStyle: {
						color: 'rgba(4,24,74,0.8)',
						// borderWidth: 5,
						// borderColor: 'red',
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
