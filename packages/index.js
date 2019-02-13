import GChartPercent from './h-chart/g-chart-percent'
import GChartArrow from './h-chart/g-chart-arrow'
import GChartLiquidfill from './h-chart/g-chart-liquidfill'
import Resize from './utils/resize'
import ChartHelper from './utils/chart-helper'

import {
	GChart,
	GTitle,
	GGrid,
	GLegend,
	GXAxis,
	GYAxis,
	GSingleAxis,
	GBar,
	GPie,
	GLine,
	GArea,
	GScatter,
	GEffectScatter,
	GHeatmap,
	GTooltip,
	GVisualMap
} from './g-chart'

const components = [
	GChart,
	GTitle,
	GGrid,
	GLegend,
	GXAxis,
	GYAxis,
	GSingleAxis,
	GBar,
	GPie,
	GLine,
	GArea,
	GScatter,
	GEffectScatter,
	GHeatmap,
	GTooltip,
	GVisualMap
]

const install = function (Vue) {
	if (install.installed) return
	components.forEach(component => Vue.component(component.name, component))
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
	GChartLiquidfill,
	Resize,
	ChartHelper
}
