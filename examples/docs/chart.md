# g-chart
----
### 基础用法

基于百度Echarts 封装的VUE 图表组件，根据Echarts的配置，将配置抽象成更直观的vue组件


<div class="demo-block">
<g-chart>
    <g-title text="2018销量DD"></g-title>
    <g-tooltip></g-tooltip>
    <g-grid :left="20" :top="60" :bottom="20" :right="20"></g-grid>
    <g-xAxis :data="dataAxis"></g-xAxis>
    <g-yAxis></g-yAxis>
    <g-legend :data="['购买人数','最新成交价']"></g-legend>
    <g-bar :data="data" name="购买人数" :bar-max-width="30"></g-bar>
    <g-line :data="data" name="最新成交价" :smooth="true"></g-line>
</g-chart>
<script>
export default {
    data() {
        return {
            dataAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            chartData2Axis: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    },
}
</script>
</div>


::: demo
```html
<g-chart>
    <g-title text="2018销量"></g-title>
    <g-tooltip></g-tooltip>
    <g-grid :left="10" :top="60" :bottom="20" :right="10"></g-grid>
    <g-xAxis :data="dataAxis"></g-xAxis>
    <g-yAxis></g-yAxis>
    <g-legend :data="['购买人数','最新成交价']"/>
    <g-bar :data="data" name="购买人数" :bar-max-width="30"/>
    <g-line :data="data" name="最新成交价" :smooth="true"/>
</g-chart>
<script>
export default {
    data() {
        return {
            dataAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            chartData2Axis: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    },
    }
</script>
```
:::
