import echarts from 'echarts'

/*
* 用来覆盖默认主题
* */
export default {
	registerTheme: function (name, theme) {
		theme = theme || {}
		echarts.registerTheme(name, theme)
	}
}
