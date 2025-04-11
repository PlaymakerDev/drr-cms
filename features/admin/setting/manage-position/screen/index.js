import React, { useState , useEffect,useCallback } from "react";
import { Button, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { ModalCreatePosition } from "../components/modal";
import TableManagePosition from "../components/table/TableManagePosition";
import useGetAPI from "@/utils/hooks/api/useGetAPI";
import {getTblPosition} from "@/store/features/settingSlice";

const INIT_MODAL = { open: false, info: {} };

const ManagePositionScreen = (props) => {
  const {} = props;
  const [open, setOpen] = useState(INIT_MODAL);

  const [apiGetData, loading, data] = useGetAPI("overlay", {
    funcDispatch: getTblPosition,
    reducerName: "setting",
    reducerKey: "tblposition",
  });

  useEffect(() => {
    apiGetData("/api/v1/tblposition", {}, false, {
      // headers: {
      //   "Content-Type": "multipart/form-data",
      //   "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsInVzZXJuYW1lIjoic3VwZXJhZG1pbiIsInJvbGUiOjEwMCwiaWF0IjoxNzI4NjM2NTc4LCJleHAiOjE3Mjg4MDkzNzh9.0HHb0GUEII9RxgtxdQcZhtd_2-f3XHB9W3VFi2HHcqA"
      // },
    });


  }, []);

  const onReload = useCallback(()=>{
    apiGetData("/api/v1/tblposition", {}, false, {});
  },[])

  return (
    <div>
      <section>
        <div className="flex flex-wrap justify-between items-center gap-5">
          <Typography.Title level={5} className="!text-primary-color !m-0">
            จัดการตำแหน่งงาน
          </Typography.Title>
          <Button
            type="primary"
            size="large"
            icon={<PlusOutlined />}
            className="!w-full lg:!w-auto"
            onClick={() => setOpen({ open: true, info: {} })}
          >
            เพิ่มข้อมูลตำแหน่งงาน
          </Button>
        </div>
      </section>
      <section className="mt-5">
        <TableManagePosition setOpen={setOpen} data={data.data} loading={loading} onReload={onReload} />
      </section>
      <ModalCreatePosition
        open={open.open}
        info={open.info}
        setOpen={setOpen}
        onReload={onReload}
      />
    </div>
  );
};

export default React.memo(ManagePositionScreen);
