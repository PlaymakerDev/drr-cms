import React, { useState } from 'react'
import { Button, Typography } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { TableManageInformation } from '../components/table'
import { ModalCreateInformation } from '../components/modal'

const INIT_MODAL = { open: false, info: {} }

const ManageInformationScreen = (props) => {
  const { } = props
  const [open, setOpen] = useState(INIT_MODAL)
  
  return (
    <div>
      <section>
        <div className="flex flex-wrap justify-between items-center gap-5">
          <Typography.Title level={5} className="!text-primary-color !m-0">จัดการแหล่งที่มาข้อมูล</Typography.Title>
          <Button
            type='primary'
            size='large'
            icon={<PlusOutlined />}
            className='!w-full lg:!w-auto'
            onClick={() => setOpen({ open: true, info: {} })}
          >
            เพิ่มข้อมูลแหล่งที่มา
          </Button>
        </div>
      </section>
      <section className='mt-5'>
        <TableManageInformation
          setOpen={setOpen}
        />
      </section>
      <ModalCreateInformation
        open={open.open}
        info={open.info}
        setOpen={setOpen}
      />
    </div>
  )
}

export default React.memo(ManageInformationScreen)
