<script>
	import GBase from './base/g-base'
	export default {
		extends: GBase,
		name: "g-legend",
		props:['data'],
		data(){
			return {
				options:{
					...this.$props,
				}
			}
		},
		created(){
			this.chartsOptions.legend = {...this.options}
		},
	}
</script>
