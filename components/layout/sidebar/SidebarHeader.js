import React from 'react'
import { Avatar, Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import styles from '@/styles/components/layout/Layout.module.css'

const SidebarHeader = (props) => {
  const { title, description } = props

  return (
    <div className='flex flex-col flex-wrap items-center justify-center gap-3'>
      <Avatar
        size={64}
        icon={<UserOutlined />}
        className={styles.avatarIcon}
      />
      <section className='text-center'>
        <Typography.Title level={5} className='!m-0 !text-white'>{title}</Typography.Title>
        <Typography.Text className='!text-white'>{description}</Typography.Text>
      </section>
    </div>
  )
}

export default React.memo(SidebarHeader)
