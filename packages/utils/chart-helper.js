import echarts from 'echarts'

/*
* 用来覆盖默认主题
* */
export default {
	registerTheme: function (name, theme) {
		theme = theme || {}
		echarts.registerTheme(name, theme)
	},
	getLinearGradient: function (color1, color2) {
		return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: color1}, {offset: 1, color: color2}])
	}
}
