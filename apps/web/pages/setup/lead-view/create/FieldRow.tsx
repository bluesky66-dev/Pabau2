import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, Button } from '@pabau/ui'
import { Form as AntForm, Col, Row } from 'antd'
import AdvanceField from './AdvanceField'


import classNames from 'classnames'
import styles from './index.module.less'

// interface LocalInterfaces {
//     field: SchemaItem;
//     handleAddField: () => any
// }

function FieldRow<SchemaItem>({ field, handleAddField }) {

    // const { field, handleAddField } = props;
    return (
        <div>
            {

                field[0] === 'is_active' ? null :
                    field[1].advance ?
                        (
                            <AntForm.Item >
                                <Row align="middle">
                                    <Col xs={24} md={6} lg={4} xl={3}>
                                        <Checkbox className={styles.checkboxWrapper} name={field[1].full} defaultChecked={field[1].defaultvalue}>
                                            {field[1].full}
                                        </Checkbox>
                                    </Col>
                                    <Col xs={24} md={18} lg={20} xl={21}>
                                        <div className={styles.dropdownsWrapper}>

                                            {
                                                Object.entries(field).map(
                                                    (item: any, i: number) => {
                                                        return <AdvanceField
                                                            options={item[1].advance?.selectOptions}
                                                            input={item[1]?.input}
                                                            handleSelected={() => ''}
                                                        />
                                                    })
                                            }
                                            <div>
                                                {
                                                    field[0] === 'created_at' ?
                                                        <Button type="text">days ago</Button>
                                                        :
                                                        <Button type="link" onClick={() => handleAddField(field[1])}>+or</Button>
                                                }
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={24} md={3} lg={2} xl={13}>

                                    </Col>

                                </Row>
                            </AntForm.Item>)
                        : (<AntForm.Item >
                            <Checkbox name={field[1].full} defaultChecked={field[1].defaultvalue}>
                                {field[1].full}
                            </Checkbox>
                        </AntForm.Item>)
            }
        </div >
    )
}

FieldRow.propTypes = {

}

export default FieldRow

