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
				default: 'auto'
			},
			right: {
				default: 'auto'
			},
			bottom: {
				default: 'auto'
			},
			top: {
				default: 'auto'
			},
			textStyle: {
				default: function () {
					return {
						align: 'center',
					}
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
		watch:{
			text:'updateOptions',
			right:'updateOptions',
			left:'updateOptions',
			top:'updateOptions',
			bottom:'updateOptions',
			textStyle:'updateOptions',
		},
		created(){
			this.chartsOptions.title = {...this.options}
		},

	}
</script>
