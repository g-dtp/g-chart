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
				default: '50%'
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
