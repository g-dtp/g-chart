<script>
	import Emitter from '../../mixins/emitter'
	import resize from '../../utils/resize'
	export default {
		name: "g-base",
		mixins: [Emitter],
		props: {
			scaleProps: {
				default: function () {
					return ['left', 'right', 'top', 'bottom', 'width', 'radius']
				}
			}
		},
		inject: ['$chart', 'chartsOptions'],
		created() {
			this.scaleValues()
		},
		methods:{
			scaleValues(){
				this.scaleProps.forEach(key => {
					if (typeof (this.options[key]) == 'Number')
						this.options[key] = this.options[key] * resize.scale
				})
			},
			updateOptions(){
				let newOption = {
					...this.options,
					...this.$props
				}
				this.options = {...newOption}
				this.scaleValues()
				this.chartsOptions.title = {...this.options}
				this.$chart.render()
			}
		},
		render() {}
	}
</script>

