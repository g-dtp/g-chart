<script>
	import GBase from './base/g-base'
	import {mapWatches} from './base/utils'
	export default {
		extends: GBase,
		name: "g-tooltip",
		props: {
			trigger: {
				default: 'axis'
			},
			axisPointer: {
				default: function () {
					return {
						type: 'line'
					}
				}
			},
			formatter:{
			}
		},
		data() {
			return {
				options: {}
			}
		},
		beforeCreate() {
			this._type = 'tooltip'
		},
		watch:{
			...mapWatches('updateOptions', [
				'trigger',
				'axisPointer'
			])
		}
	}
</script>
