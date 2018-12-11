<script>
	import GBase from './base/g-base'
	import echarts from 'echarts'
	export default {
		extends: GBase,
		name: "g-custom",
		props: {
			data:{
				default:function () {
					return []
				}
			}
		},
		data(){
			return {
				options:{
					type: 'custom',
					renderItem:function (params, api) {
						console.log(echarts.graphic)
					},
					itemStyle: {
						normal: {
							color: '#d14a61'
						}
					},
					coordinateSystem: 'polar',
					...this.$props,
				}
			}
		},
		created(){
			if(!this.chartsOptions.series) this.chartsOptions.series = []
			this.chartsOptions.series.push(this.options)
		},
	}
</script>
