import GChart from './g-chart'

import GChartPercent from './h-chart/g-chart-percent/g-chart-percent'
import GChartArrow from './h-chart/g-chart-arrow/g-chart-arrow'

import Resize from './utils/resize'
import ChartHelper from './utils/chart-helper'

const components = Object.values(GChart)
const install = function (Vue) {
	if (install.installed) return
	components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

export default {
	install
}

export {
	GChartPercent,
	GChartArrow,
	Resize,
	ChartHelper
}
