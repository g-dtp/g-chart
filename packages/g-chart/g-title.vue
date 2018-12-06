<script>
	import GBase from './base/g-base'
	export default {
		extends: GBase,
		name: "g-title",
		props: {
			text: {
				type: String,
				default: '图表标题'
			},
			left: {
				type: Number,
				default: 20
			},
			right: {
				type: Number,
				default: 20
			},
			bottom: {
				type: Number,
				default: 20
			},
			top: {
				type: Number,
				default: 20
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
