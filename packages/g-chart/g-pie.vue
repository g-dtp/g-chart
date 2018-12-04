<script>
	import GBase from './base/g-base'
	export default {
		extends: GBase,
		name: "g-pie",
		props:{
			data:{
				default:function () {
					return []
				}
			},
			radius:{
				default: ['40%', '60%']
			},
			itemStyle: {
				default: function () {
					return {
						borderWidth:5,
						borderColor: '#000E2D'
					}
				}
			}
		},
		data(){
			return {
				options:{
					type:'pie',
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
