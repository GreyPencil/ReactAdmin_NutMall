import React, {Component} from 'react'
import {Card, Button} from 'antd'
import ReactEcharts from 'echarts-for-react'

/*
后台管理的折线图路由组件
 */
export default class Line extends Component {

  state = {
    sales: [5, 20, 36, 10, 10, 20], // Sales Volume的数组
    stores: [6, 10, 25, 20, 15, 10], // In Stock的数组
  }

  update = () => {
    this.setState(state => ({
      sales: state.sales.map(sale => sale + 1),
      stores: state.stores.reduce((pre, store) => {
        pre.push(store-1)
        return pre
      }, []),
    }))
  }

  /*
  返回柱状图的配置对象
   */
  getOption = (sales, stores) => {
    return {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data:['Sales Volume', 'In Stock']
      },
      xAxis: {
        data: ["衬衫","Wool Sweater","Blouse","裤子","高跟鞋","袜子"]
      },
      yAxis: {},
      series: [{
        name: 'Sales Volume',
        type: 'line',
        data: sales
      }, {
        name: 'In Stock',
        type: 'line',
        data: stores
      }]
    }
  }

  render() {
    const {sales, stores} = this.state
    return (
      <div>
        <Card>
          <Button type='primary' onClick={this.update}>更新</Button>
        </Card>

        <Card title='折线图一'>
          <ReactEcharts option={this.getOption(sales, stores)} />
        </Card>

      </div>
    )
  }
}