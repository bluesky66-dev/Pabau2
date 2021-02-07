import React, { FC, useState } from 'react'
import { Button } from '@pabau/ui'
import VersionHistory from './VersionHistory'

export default {
  component: VersionHistory,
  title: 'UI/VersionHistory',
  args: {},
  argTypes: {},
}

const VerstionHistoryStory: FC = () => {
  const [viewHistory, setViewHistory] = useState(false)

  return (
    <>
      <Button onClick={() => setViewHistory(true)}>Version History</Button>
      <VersionHistory
        history={{
          last_week: [
            {
              version: 'Current verison',
              updatedBy: 'William Brandham',
              date: 'January 22, 2:27 PM',
            },
            {
              version: 'Version 2',
              updatedBy: 'Meri Redjepi',
              date: 'January 22, 1:26 PM',
            },
            {
              version: 'Version 1',
              updatedBy: 'Meri Redjepi',
              date: 'January 22, 2:27 PM',
            },
          ],
        }}
        visible={viewHistory}
        onVisibleChange={(val) => setViewHistory(val)}
      />
    </>
  )
}

export const Basic = VerstionHistoryStory.bind({})
