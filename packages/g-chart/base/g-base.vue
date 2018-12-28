<script>
	import Emitter from '../../mixins/emitter'
	import resize from '../../utils/resize'
	const scaleProps = ['left', 'right', 'top', 'bottom', 'width', 'radius']
	export default {
		name: "g-base",
		mixins: [Emitter],
		inject: ['$chart', 'chartsOptions'],
		created() {
			this.scaleValues()
		},
		methods:{
			scaleValues(){
				scaleProps.forEach(key => {
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

