<script>
	import GBase from './base/g-base'
	export default {
		extends: GBase,
		name: "g-title",
		props: {
			text: {
				type: String,
				default: '图表标题'
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
			this.chartsOptions.title = {...this.options}
		}
	}
</script>
