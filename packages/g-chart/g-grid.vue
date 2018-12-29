<script>
	import GBase from './base/g-base'
	import {mapWatches} from './base/utils'
	export default {
		extends: GBase,
		name: "g-grid",
		props: {
			containLabel: {
				type: Boolean,
				default: true
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
				default: 40
			}
		},
		beforeCreate() {
			this._type = 'grid'
		},
		watch:{
			...mapWatches('updateOptions', [
				'top',
				'left',
				'right',
				'bottom'
			])
		},
		data() {
			return {
				options: {
					...this.$props
				}
			}
		}
	}
</script>
