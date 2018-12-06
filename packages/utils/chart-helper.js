import echarts from 'echarts'

/*
* 用来覆盖默认
* */
export function registerTheme(name, theme) {
	theme = theme || {}
	echarts.registerTheme(name, theme)
}
