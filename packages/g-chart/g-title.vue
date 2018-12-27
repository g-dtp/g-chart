<script>
	import GBase from './base/g-base'
	import {mapWatches} from './base/utils'
	 const Base = {
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
		created(){
			this.chartsOptions.title = {...this.options}
		},
		watch:{
			...mapWatches('updateOptions', [
				'text',
				'top',
				'left',
				'right',
				'bottom',
				'textStyle'
			])
		}

	}
	export default Base
	console.log(/xxxxx/, Base.props)
</script>
