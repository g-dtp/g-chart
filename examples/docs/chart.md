# Button 按钮
----
### 基础用法
使用```type```、```plain```和```round```属性来定义 Button 的样式。

<div class="demo-block">
<g-chart>
    <g-title text="2018销量"><g-title>
    <g-tooltip></g-tooltip>
    <g-grid :left="20" :top="60" :bottom="20" :right="20"></g-grid>
    <g-xAxis :data="dataAxis"></g-xAxis>
    <g-yAxis></g-yAxis>
    <g-legend :data="['购买人数','最新成交价']"/>
    <g-bar :data="data" name="购买人数"/>
    <g-line :data="data" name="最新成交价"/>
</g-chart>
<script>
export default {
    data() {
        return {
            dataAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            chartData2Axis: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            chartData2: [
                [0, 0, 7],
                [1, 0, 7],
                [2, 0, 7],
                [3, 0, 7],
                [4, 0, 7],
                [5, 0, 7],
                [6, 0, 7]
            ]
        }
    },
}
</script>
</div>

::: demo
```html
<g-chart>
    <g-title text="2018销量"><g-title>
    <g-tooltip></g-tooltip>
    <g-grid :left="20" :top="60" :bottom="20" :right="20"></g-grid>
    <g-xAxis :data="dataAxis"></g-xAxis>
    <g-yAxis></g-yAxis>
    <g-legend :data="['购买人数','最新成交价']"/>
    <g-bar :data="data" name="购买人数"/>
    <g-line :data="data" name="最新成交价"/>
</g-chart>
<script>
export default {
    data() {
        return {
            dataAxis: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            chartData2Axis: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            chartData2: [
                [0, 0, 7],
                [1, 0, 7],
                [2, 0, 7],
                [3, 0, 7],
                [4, 0, 7],
                [5, 0, 7],
                [6, 0, 7]
            ]
        }
    },
    }
</script>
```
:::
