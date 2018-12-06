import GChart from './g-chart'

import GChartPercent from './h-chart/g-chart-percent'
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
	ChartHelper,
	GChartPercent,
	Resize
}
