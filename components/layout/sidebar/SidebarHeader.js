import React from 'react'
import { Avatar, Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import styles from '@/styles/components/layout/Layout.module.css'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import { selectRole, selectUsername } from '@/store/features/userAuthenSlice'

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
        <Typography.Title level={5} className='!m-0 !text-white'>{useSelector(selectUsername)}</Typography.Title>
        <Typography.Title className='!text-white !text-sm'>{useSelector(selectRole) === "Admin" ? 'ผู้ดูแลระบบ' : 'พนักงาน'}</Typography.Title>
        <Typography.Title className='!text-white !text-sm'>{dayjs().locale('th').format('D MMM YYYY')}</Typography.Title>

      </section>
    </div>
  )
}

export default React.memo(SidebarHeader)
