<script>
	import GSerie from './base/g-serie'
	import echarts from 'echarts'
	export default {
		extends: GSerie,
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
		}
	}
</script>
