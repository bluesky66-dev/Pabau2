import React, { FC, useEffect, useState } from 'react'
import { FormType, FormTypeSetting, MedicalFormCard } from '@pabau/ui'
import { Form, Divider, Button, Popover, Tag } from 'antd'
import { FilePdfOutlined, BarsOutlined, CheckOutlined } from '@ant-design/icons'
import styles from './Library.module.less'

const defaultFormTypes: FormTypeSetting = {
  medicalHistory: false,
  consent: false,
  treatmentForm: false,
  epaper: false,
  presciption: false,
  labForm: false,
}

const defaultCardData = [
  {
    image: <FilePdfOutlined />,
    title: 'Wedding hair and makeup trial',
    description:
      'Helping your client find their perfect wedding day look is a lot of fun and also a big responsibility.',
    form_type: 'consent',
    tags: [],
    key: 1,
  },
  {
    image: <FilePdfOutlined />,
    title: 'Aethetics Medical History and consultation',
    description:
      'A detailed medical history is important when creating a treatment plan with a patient.',
    form_type: 'consent',
    tags: [
      {
        title: 'Aesthetics',
        key: 1,
      },
    ],
    key: 2,
  },
  {
    image: <FilePdfOutlined />,
    title: 'Covid-19 Health agreement',
    description:
      'With all the options for skincare treatments and products it’s vital to complete a thrpugh...',
    form_type: 'consent',
    tags: [
      {
        title: 'Covid',
        key: 1,
      },
    ],
    key: 3,
  },
  {
    image: <FilePdfOutlined />,
    title: 'Facial Consultation',
    description:
      'With all the options for skincare treatments and products it’s vital to complete a thrpugh...',
    form_type: 'consent',
    tags: [],
    key: 4,
  },
  {
    image: <FilePdfOutlined />,
    title: 'Consent form for beafuty records',
    description:
      'It’s important to be really transparent with your client about why you collect their...',
    form_type: '',
    tags: [
      {
        title: 'Physio',
        key: 1,
      },
      {
        title: 'Aesthetics',
        key: 2,
      },
      {
        title: 'Tag one',
        key: 3,
      },
    ],
    key: 5,
  },
  {
    image: <FilePdfOutlined />,
    title: 'Comprehensive online hair consolation',
    description:
      'Use this comprehensive form to get a detailed picture of a new client’s hair history to help....',
    form_type: 'consent',
    tags: [
      {
        title: 'Physio',
        key: 1,
      },
      {
        title: 'Aesthetics',
        key: 2,
      },
      {
        title: 'Tag one',
        key: 3,
      },
      {
        title: 'Tag Two',
        key: 4,
      },
    ],
    key: 6,
  },
]

const defaultTags: TagItem[] = [
  {
    name: 'Aesthetics',
    checked: false,
  },
  {
    name: 'Covid',
    checked: false,
  },
  {
    name: 'Laser',
    checked: false,
  },
  {
    name: 'Physio',
    checked: false,
  },
]

interface TagItem {
  name: string
  checked: boolean
}

interface LibraryProps {
  initialSetting?: FormTypeSetting
  initialTags?: TagItem[]
}

const Library: FC<LibraryProps> = ({ initialSetting, initialTags }) => {
  const [form] = Form.useForm()
  const [setting, setSetting] = useState<FormTypeSetting>(defaultFormTypes)
  const [tags, setTags] = useState<TagItem[]>(defaultTags)
  const handleChangeSetting = (change: FormTypeSetting) => {
    setSetting(change)
  }
  const handleTagClick = (index: number) => {
    const tagItems: TagItem[] = [...tags]
    tagItems[index].checked = !tagItems[index].checked
    setTags([...tagItems])
  }
  const MobileSetting = () => (
    <div className={styles.mobileSettingContainer}>
      <Form form={form} layout="vertical">
        <Form.Item label="Form Type" tooltip="Form Type">
          <FormType
            setting={setting}
            onChangeSetting={(change) => handleChangeSetting(change)}
          />
        </Form.Item>
      </Form>
    </div>
  )
  useEffect(() => {
    setSetting(initialSetting || defaultFormTypes)
    setTags(initialTags || defaultTags)
  }, [initialSetting, initialTags])
  return (
    <div className={styles.libraryContainer}>
      <div>
        <div className={styles.formTypeContainer}>
          <Form form={form} layout="vertical">
            <Form.Item label="Form Type" tooltip="Form Type">
              <FormType
                setting={setting}
                onChangeSetting={(change) => handleChangeSetting(change)}
              />
            </Form.Item>
          </Form>
        </div>
        <Divider style={{ margin: 0 }} />
        <div className={styles.tagsContainer}>
          <Form form={form} layout="vertical">
            <Form.Item label="Tags">
              {tags?.map((tag, index) => (
                <div
                  key={tag.name}
                  className={
                    tag.checked ? styles.tagChecked : styles.tagUnchecked
                  }
                >
                  <Tag
                    onClick={() => handleTagClick(index)}
                    icon={tag.checked ? <CheckOutlined /> : ''}
                  >
                    {tag.name}
                  </Tag>
                </div>
              ))}
            </Form.Item>
          </Form>
        </div>
      </div>
      <div>
        <Popover
          content={MobileSetting}
          trigger="hover"
          placement="bottomRight"
        >
          <div className={styles.mobileSetting}>
            <Button shape="circle" icon={<BarsOutlined />} />
          </div>
        </Popover>
        <MedicalFormCard list={defaultCardData} />
      </div>
    </div>
  )
}

export default Library
