<script>
	import {mapWatches} from './base/utils'
	import resize from '../utils/resize'

	const scaleProps = ['left', 'right', 'top', 'bottom', 'width', 'radius']
	export default {
		name: 'g-yAxis',
		inject: ['$chart', 'chartsOptions'],
		props: {
			show: {
				default: true
			},
			name: {
				default: ''
			},
			axisLabel: {
				default: function () {
					return {
						interval: 0
					}
				}
			},
			max: {
				default: null
			},
			min: {
				default: 0
			},
			axisTick: {
				default: function () {
					return {}
				}
			},
			axisLine: {
				default: function () {
					return {}
				}
			},
			splitLine: {
				default: function () {
					return {
						interval: function (index, value) {
							return index !== 0
						}
					}
				}
			},
			type: {
				default: 'value'
			}
		},
		data () {
			return {
				options: {
					...this.$props
				}
			}
		},
		watch: {
			...mapWatches('updateOptions', [
				'name',
				'axisLabel',
				'axisTick',
				'axisLine',
				'min',
				'max',
				'type',
				'splitLine'
			])
		},
		beforeCreate () {
			this._type = 'yAxis'
		},
		created () {
			this.scaleValues()
			if (!this.chartsOptions[this._type]) this.chartsOptions[this._type] = []
			this.chartsOptions[this._type].push({...this.options})
		},
		methods: {
			scaleValues () {
				scaleProps.forEach(key => {
					if (typeof (this.options[key]) === 'number') {
						this.options[key] = this.options[key] * resize.scale
					}
				})
			},
			updateOptions () {
				let index = this.chartsOptions[this._type].findIndex((item) => {
					return this.options === item
				})
				let newOption = {
					...this.options,
					...this.$props
				}
				this.options = {...newOption}
				this.scaleValues()
				this.chartsOptions[this._type][index] = {...this.options}
				this.$chart.render()
			}
		},
		/* eslint-disable */
		render () {}
	}
</script>
