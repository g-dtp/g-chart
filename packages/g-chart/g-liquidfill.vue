<script>
	import GSerie from './base/g-serie'

	export default {
		extends: GSerie,
		name: 'g-liquidfill',
		props: {
			data: {
				default: function () {
					return []
				}
			},
			color: {
				default: function () {
					return []
				}
			},
			outline: {
				default: function () {
					return {
						show: false
					}
				}
			},
			center: {
				default: function () {
					return []
				}
			},
			radius: {
				default: '100%'
			},
			text: {
				default: ''
			}
		},
		data () {
			return {
				serie: {
					type: 'liquidFill',
					...this.$props,
					// 水球颜色
					color: ['rgba(13, 107, 208, 1)'],
					// outline  外边
					label: {
						normal: {
							formatter: (prarms) => {
								if (this.text) return this.text
								return prarms.value * 100 + '%'
							},
							color: '#EDA532',
							insideColor: '#EDA532',
							fontSize: 44
						}
					},
					// 内图 背景色 边
					backgroundStyle: {
						color: 'rgba(4,24,74,0.8)',
						borderWidth: 1,
						borderColor: '#0F5D90'
					}
				}
			}
		}
	}
</script>
