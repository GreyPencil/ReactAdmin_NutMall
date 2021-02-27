import React, {Component} from 'react'
import {Card, Button} from 'antd'
import ReactEcharts from 'echarts-for-react'

/*
后台管理的柱状图路由组件
 */
export default class Bar extends Component {

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
        text: 'ECharts samples'
      },
      tooltip: {},
      legend: {
        data:['Sales Volume', 'In stock']
      },
      xAxis: {
        data: ["T-shirt","Wool Sweater","Blouse","Pants","Heel Shoes","Socks"]
      },
      yAxis: {},
      series: [{
        name: 'Sales Volume',
        type: 'bar',
        data: sales
      }, {
        name: 'In stock',
        type: 'bar',
        data: stores
      }]
    }
  }

  render() {
    const {sales, stores} = this.state
    return (
      <div>
        <Card>
          <Button type='primary' onClick={this.update}>Update</Button>
        </Card>

        <Card title='Bar Chart 1'>
          <ReactEcharts option={this.getOption(sales, stores)} />
        </Card>

      </div>
    )
  }
}