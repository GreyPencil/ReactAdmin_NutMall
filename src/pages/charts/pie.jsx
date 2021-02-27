import React, {Component} from 'react'
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react'

/*
后台管理的饼图路由组件
 */
export default class Pie extends Component {

  getOption = () => {
    return {
      title : {
        text: 'Visitors',
        subtext: 'Not real',
        x:'center'
      },
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Visit','Email','ADs','Video ads','Search Engine']
      },
      series : [
        {
          name: 'Visitor source',
          type: 'pie',
          radius : '55%',
          center: ['50%', '60%'],
          data:[
            {value:335, name:'Visit'},
            {value:310, name:'Email'},
            {value:234, name:'ADs'},
            {value:135, name:'Video ads'},
            {value:1548, name:'Search Engine'}
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

  }

  getOption2 = () => {
    return {
      backgroundColor: '#2c343c',

      title: {
        text: 'Customized Pie',
        left: 'center',
        top: 20,
        textStyle: {
          color: '#ccc'
        }
      },

      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },

      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series : [
        {
          name:'Visitor source',
          type:'pie',
          radius : '55%',
          center: ['50%', '50%'],
          data:[
            {value:335, name:'Visit'},
            {value:310, name:'Email'},
            {value:274, name:'Ads'},
            {value:235, name:'Video ads'},
            {value:400, name:'Search Engine'}
          ].sort(function (a, b) { return a.value - b.value; }),
          roseType: 'radius',
          label: {
            normal: {
              textStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            }
          },
          itemStyle: {
            normal: {
              color: '#c23531',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },

          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function () {
            return Math.random() * 200;
          }
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Card title='Pie Chart 1'>
          <ReactEcharts option={this.getOption()} style={{height: 300}}/>
        </Card>
        <Card title='Pie Chart 2'>
          <ReactEcharts option={this.getOption2()} style={{height: 300}}/>
        </Card>
      </div>
    )
  }
}
