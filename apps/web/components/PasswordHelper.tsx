import { CheckCircleFilled, CheckCircleTwoTone, EyeInvisibleOutlined } from '@ant-design/icons'
import { Input, Popover } from 'antd'
import { FC } from 'react'

const content = (
  <>
    <div className="helperPhase">
      <p>
        <CheckCircleTwoTone />
        <span className="step">Eight or more characters</span>
      </p>
      <p>
        <CheckCircleTwoTone />
        <span className="step">Uppercase & lowercase characters</span>
      </p>
      <p>
        <CheckCircleTwoTone />
        <span className="step">At least one number</span>
      </p>
      <p>
        <CheckCircleFilled />
        <span className="step">At least one special character</span>
      </p>
    </div>
    <div className="helperStrength">
      <div className="strengthStart">Strngth</div>
      <div className="strengthEnd">Good</div>
    </div>
    <div className="helperPercent">
      <div className="step pass"></div>
      <div className="step pass"></div>
      <div className="step pass"></div>
      <div className="step nopass"></div>
    </div>
  </>
)

const PasswordHelper: FC = () => {
  return (
    <Popover placement="right" content={content}>
      <Input.Password
        placeholder="New password"
        iconRender={(visible) => <EyeInvisibleOutlined />}
      />
    </Popover>
  )
}
export default PasswordHelper
