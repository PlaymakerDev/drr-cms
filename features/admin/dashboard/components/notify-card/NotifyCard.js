import React, { useMemo } from 'react'
import { Avatar, Badge, Typography } from 'antd'
import { BellFilled } from '@ant-design/icons'

const NotifyCard = (props) => {
  const { } = props

  const data = useMemo(() => {
    return [
      {
        title: 'ไฟฟ้าส่องสว่างดับ / ชำรุด ',
        detail: 'Facebook',
        date: '05/09/67 09.25น.'
      },
      {
        title: 'ไฟฟ้าส่องสว่างดับ / ชำรุด ',
        detail: 'LINE',
        date: '05/09/67 09.25น.'
      },
      {
        title: 'ไฟฟ้าส่องสว่างดับ / ชำรุด ',
        detail: 'YouTube',
        date: '05/09/67 09.25น.'
      },

    ]
  }, [])

  const renderCard = useMemo(() => {
    const newData = data?.map((item, index) => {
      return (
        <div className='container bg-[#5B5B5B30] rounded-md px-5 py-3 mt-3' key={index}>
          <div className='flex justify-between'>
            <div className='flex items-center gap-5'>
              <Avatar
                icon={<BellFilled />}
                className='!flex !justify-center !items-center !bg-black'
              />
              <div className='flex flex-col'>
                <Typography.Title level={5} className='!m-0'>{item.title}</Typography.Title>                
                <Badge color='red' text={item.detail} className='text-black'/>
              </div>
            </div>
            <div>
              <Typography.Text>{item.date}</Typography.Text>
            </div>
          </div>
        </div>
      )
    })
    return newData || null
  }, [data])

  return (
    <div>
      {renderCard}
    </div>
  )
}

export default React.memo(NotifyCard)
