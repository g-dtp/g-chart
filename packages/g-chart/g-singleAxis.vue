<script>
	import GBase from './base/g-base'
	export default {
		extends: GBase,
		name: "g-singleAxis",
		props: {
			data: {
				default: function () {
					return []
				}
			},
			type: {
				default: 'category'
			},
			left: {
				default: 0
			},
			right: {
				default: 0
			},
			top: {
				default: 0
			},
			bottom: {
				default: 0
			},
			height: {
				default: 50
			}
		},
		data() {
			return {
				options: {
					...this.$props,
					containLabel: true
				}
			}
		},
		beforeCreate() {
			this._type = 'singleAxis'
		}
	}
</script>
