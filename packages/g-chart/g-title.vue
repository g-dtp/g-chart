<script>
	import GBase from './base/g-base'
	import {mapWatches} from './base/utils'

	export default {
		extends: GBase,
		name: "g-title",
		props: {
			text: {
				type: String,
				default: ''
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
		beforeCreate() {
			this._type = 'title'
		},
		data() {
			return {
				options: {
					...this.$props
				}
			}
		},
		watch: {
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
</script>
