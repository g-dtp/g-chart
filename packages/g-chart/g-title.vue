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
			},
			hAlign: {
				default: ''
			},
			vAlign: {
				default: ''
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
			if(this.hAlign){
				this.options.left = this.hAlign
			}
			if(this.vAlign){
				this.options.top = this.vAlign
			}
			console.log(this.options.text)
			console.log(this.options)
			this.chartsOptions.title = {...this.options}
		}
	}
</script>
