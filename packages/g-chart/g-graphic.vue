<script>
	import GBase from './base/g-base'
	export default {
		extends: GBase,
		name: "g-graphic",
		props: {
			elements: {
				default:function () {
					return []
				}
			}
		},
		data(){
			return {
				options: {
					...this.$props
				}
			}
		},
		created(){
			this.chartsOptions.graphic = this.options
		}
	}
</script>
