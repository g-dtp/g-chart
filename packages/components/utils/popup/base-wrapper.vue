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
		inject: ['reference'],
		data() {
			return {
				show: false,
				styleObj: {},
				classname: ''
			}
		},
		beforeCreate() {
			this._uid = uid()
		},
		mounted() {
			this.createWrapper()
			this.setPosition()
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
			},
			setPosition(){
				let {classname ,top, left} = this.makePosition()
				this.styleObj = {top, left, position:'fixed'}
				this.classname = classname
			},
			makePosition() {
				let popover = this.$el.getBoundingClientRect()
				let rect = this.reference.$el.getBoundingClientRect()
				let view = document.documentElement.getBoundingClientRect()
				let h = 'left'
				let v = 'bottom'
				h = rect.x + popover.width >= view.width ? 'right' : 'left'
				v = rect.y < popover.height >= view.height ? 'top' : 'bottom'
				let x = h === 'right' ? (rect.x + rect.width) - popover.width : rect.x
				let y = v === 'top' ? (rect.y + rect.height) - popover.height : rect.y + rect.height
				return {
					classname: `popover-${h}-${v}`,
					left: x + 'px',
					top: y + 'px'
				}
			},
		}
	}
</script>
