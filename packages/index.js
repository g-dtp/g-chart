import GChart from './g-chart'
import ChartHelper from './g-chart/chart-helper'

const components = Object.values(GChart)

const install = function (Vue) {
	if (install.installed) return
	components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

export default {
	install,
	ChartHelper
}
