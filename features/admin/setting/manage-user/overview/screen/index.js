import React, { useState } from "react";
import { Button, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { TableUser } from "../components/table";
import { FormSearchUser } from "../components/form";
import { ModalUser } from "../components/modal";
import { useRouter } from "next/router";

const INIT_MODAL = { open: false }

const OverviewScreen = (props) => {
  const { } = props;
  const [open, setOpen] = useState(INIT_MODAL)
  const router = useRouter()

  return (
    <div>
      <section>
        <div className="flex flex-wrap justify-between items-center gap-5">
          <Typography.Title level={5} className="!text-primary-color !m-0">จัดการผู้ใช้งาน</Typography.Title>
          <Button
            type='primary'
            size='large'
            icon={<PlusOutlined />}
            className='!w-full lg:!w-auto'
            onClick={() => router.push('/admin/setting/manage-user/create')}
          >
            เพิ่มข้อมูลผู้ใช้งาน
          </Button>
        </div>
      </section>
      <section className="mt-5">
        <FormSearchUser />
      </section>
      <section className='mt-5'>
        <TableUser
          setOpen={setOpen}
        />
      </section>
      <ModalUser
        open={open.open}
        setOpen={setOpen}
      />
    </div>
  )
}

export default React.memo(OverviewScreen)
