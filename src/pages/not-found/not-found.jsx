import React, {Component} from 'react'
import {Button, Row, Col} from 'antd'
import './not-found.less'
/*
前台404页面
 */
export default class NotFound extends Component {
  render() {
    return (

      <Row className='not-found'>
        <Col span={12} className='left'></Col>
        <Col span={12} className='right'>
          <h1>404</h1>
          <h2>Sorry, the website you visit is not exists</h2>
          <div>
            <Button type='primary' onClick={() => this.props.history.replace('/home')}>
              Home
            </Button>
          </div>
        </Col>
      </Row>
    )
  }
}