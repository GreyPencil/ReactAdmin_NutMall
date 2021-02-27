import React, {Component} from 'react'
<<<<<<< HEAD
import {
    Form,
    Select,
    Input
} from 'antd'
// import { Form} from '@ant-design/compatible';
//
// import '@ant-design/compatible/assets/index.css';

const Item = Form.Item
const Option = Select.Option


class AddForm extends Component {


    render() {
        // const {getFieldDecorator} = this.props.form
        return (
            <Form>
                <Item name='parentId' initialValue={'0'}>
                    {/*{*/}
                    {/*    getFieldDecorator('parentId', {*/}
                    {/*        initialValue: '0'*/}
                    {/*    })(*/}
                            <Select>
                                <Option value='0'>一级分类</Option>
                                <Option value='1'>book</Option>
                                <Option value='2'>clothes</Option>

                            </Select>
                        {/*)*/}
                    {/*}*/}

                </Item>

                <Item name='categoryName' initialValue={''}>
                    {/*{*/}
                    {/*    getFieldDecorator('categoryName', {*/}
                    {/*        initialValue: ''*/}
                    {/*    })(*/}
                            <Input placeholder='Please input the category name'/>
                        {/*)*/}
                    {/*}*/}
                </Item>
            </Form>
        )
    }
}

// export default Form.create(AddForm)
export default (AddForm)
=======
import PropTypes from 'prop-types'
import {
  Form,
  Input
} from 'antd'

const Item = Form.Item

/*
更新分类的form组件
 */
class UpdateForm extends Component {

  static propTypes = {
    categoryName: PropTypes.string.isRequired,
    setForm: PropTypes.func.isRequired
  }

  componentWillMount () {
    // 将form对象通过setForm()传递父组件
    this.props.setForm(this.props.form)
  }

  render() {

    const {categoryName} = this.props
    const { getFieldDecorator } = this.props.form

    return (
      <Form>
        <Item>
          {
            getFieldDecorator('categoryName', {
              initialValue: categoryName,
              rules: [
                {required: true, message: 'Category name is required'}
              ]
            })(
              <Input placeholder='Please input category name'/>
            )
          }
        </Item>
      </Form>
    )
  }
}

export default Form.create()(UpdateForm)
>>>>>>> 60afdd4 (authorization)
