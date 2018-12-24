<script>
	import PopupManager from './popup-manager.js'
	import {uid} from '../utils'

	export default {
		name: "base-wrapper",
		props: {
			uid: String,
			position: String,
			gap: Number,
			data: [String, Array, Object, Number]
		},
		data() {
			return {
				show: false
			}
		},
		beforeCreate() {
			this._uid = uid()
		},
		mounted() {
			this.createWrapper()
		},
		beforeDestroy() {
			this.$emit('beforeDestroy')
		},
		destroyed() {
			this.$emit('destroyed')
			PopupManager.getInstance().close(this._uid)

		},
		methods: {
			createWrapper() {
				PopupManager.getInstance().register({
					popper: this,
					uid: this._uid
				})
				document.body.appendChild(this.$el)
			}
		}
	}
</script>
