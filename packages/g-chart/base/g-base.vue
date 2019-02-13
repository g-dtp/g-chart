<script>
	import Emitter from '../../mixins/emitter'
	import resize from '../../utils/resize'

	const scaleProps = ['left', 'right', 'top', 'bottom', 'width', 'radius']
	export default {
		name: 'g-base',
		mixins: [Emitter],
		inject: ['$chart', 'chartsOptions'],
		created () {
			try {
				if (!this._type) throw new Error('必须配置指定的echart option 字段')
			} catch (error) {
				console.error(error)
			}
			this.scaleValues()
			this.chartsOptions[this._type] = {...this.options}
		},
		methods: {
			scaleValues () {
				scaleProps.forEach(key => {
					/* eslint-disable */
					if (typeof (this.options[key]) === 'Number') {
						this.options[key] = this.options[key] * resize.scale
					}
				})
			},
			updateOptions () {
				let newOption = {
					...this.options,
					...this.$props
				}
				this.options = {...newOption}
				this.scaleValues()
				this.chartsOptions[this._type] = {...this.options}
				this.$chart.render()
			}
		},
		/* eslint-disable */
		render () {}
	}
</script>

