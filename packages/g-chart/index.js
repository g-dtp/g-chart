import echarts from 'echarts'
import theme from './theme'
echarts.registerTheme('after-sales', theme)
import GChart from './g-chart'

import GTitle from './g-title'
import GTooltip from './g-tooltip'
import GGrid from './g-grid'
import GLegend from './g-legend'

import GXAxis from './g-xAxis'
import GYAxis from './g-yAxis'
import GSingleAxis from './g-singleAxis'

import GBar from './g-bar'
import GPie from './g-pie'

import GLine from './g-line'
import GHeatmap from './g-heatmap'

import GScatter from './g-scatter'

import GVisualMap from './g-visualMap'
import GSeries from './g-series'

export default {
	GChart,
	GTitle,
	GGrid,
	GLegend,
	GSeries,
	GXAxis,
	GYAxis,
	GSingleAxis,
	GBar,
	GPie,
	GLine,
	GScatter,
	GHeatmap,
	GTooltip,
	GVisualMap
}
