import React, { FC } from 'react'
interface P {
  iconUrl?: string
  bgcolor?: string
  title?: string
  desc?: string
}

export const MedicalFormTitle: FC<P> = ({
  iconUrl,
  bgcolor,
  title,
  desc,
}): JSX.Element => {
  return (
    <div className="formTitle formCommon">
      <div className="titleImg" style={{ background: bgcolor }}>
        <img src={iconUrl} alt="" />
      </div>
      <div className="titleDesc">
        <h1>{title}</h1>
        <span>{desc}</span>
      </div>
    </div>
  )
}

export default MedicalFormTitle
