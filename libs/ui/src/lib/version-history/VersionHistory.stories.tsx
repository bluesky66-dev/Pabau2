import React, { FC, useState } from 'react'
import { Button } from '@pabau/ui'
import VersionHistory, { VersionItem } from './VersionHistory'

export default {
  component: VersionHistory,
  title: 'UI/VersionHistory',
  args: {},
  argTypes: {},
}

const defaultHistory = {
  last_week: [
    {
      version: '3',
      updatedBy: 'William Brandham',
      date: 'January 22, 2:27 PM',
    },
    {
      version: '2',
      updatedBy: 'Meri Redjepi',
      date: 'January 22, 1:26 PM',
    },
    {
      version: '1',
      updatedBy: 'Meri Redjepi',
      date: 'January 22, 2:27 PM',
    },
  ],
}

interface VerstionHistoryStoryProps {
  history: {
    [key: string]: VersionItem[]
  }
  currentVersion: string
}

const VerstionHistoryStory: FC<VerstionHistoryStoryProps> = ({
  history,
  currentVersion,
}) => {
  const [viewHistory, setViewHistory] = useState(false)

  return (
    <>
      <Button onClick={() => setViewHistory(true)}>Version History</Button>
      <VersionHistory
        history={history}
        currentVersion={currentVersion}
        visible={viewHistory}
        onVisibleChange={(val) => setViewHistory(val)}
      />
    </>
  )
}

export const Basic = VerstionHistoryStory.bind({})
Basic.args = {
  history: defaultHistory,
  currentVersion: '3',
}
