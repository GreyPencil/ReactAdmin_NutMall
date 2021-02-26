import React, {Component} from 'react'
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