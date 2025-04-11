import React, { useEffect, useCallback, useState } from "react";
import { message, Typography } from "antd";
import { FormSearchUsersetting, TableReport, TableUsersetting } from "../components";
import useGetAPI from '@/utils/hooks/api/useGetAPI'
import { report_get_detail } from "@/store/features/reportSlice";
import config from "@/config";
// import dayjs from 'dayjs'
import axios from "axios";
import { useSelector } from 'react-redux';

const INIT_FILE_DOWNLOAD = { type: '', load: false }

const ReportScreen = (props) => {
  const { } = props;
  // SET STATE
  const [loadFile, setLoadFile] = useState(INIT_FILE_DOWNLOAD)
  const [loadFileDirector, setLoadFileDirector] = useState(false)
  const [loadFileSummary, setLoadFileSummary] = useState(false)
  const [loadFileIndex,setLoadFileIndex] = useState(null)
  // USE GET API

  const user = {
    token: useSelector(state => state.userAuthen.token)
  }
  const [apiGetData, loading, data] = useGetAPI('overlay', {
    funcDispatch: report_get_detail, reducerName: 'report', reducerKey: 'report_get_detail'
  })
  // GET DATA
  useEffect(() => {
    apiGetData('/api/v1/report/monthly-status', { ...data?.search }, false, {})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onChangePage = useCallback((page, perPage) => {
    apiGetData(`/api/v1/report/monthly-status`, { ...data.search, page: page, page_size: perPage }, false, {})
  }, [apiGetData, data])

  const refreshContent = useCallback(() => {
    apiGetData(`/api/v1/report/monthly-status`, data.search, false, {});
  }, [apiGetData, data.search]);

  const downloadFileDirector = useCallback(async (data) => {
    // SETTING QUERIES
    const body = {
      year_month: data.year_month
    }
    // SET LOADING TO TRUE
    setLoadFileDirector(true)
    // SEND REQUEST TO API END POINT
    const { success, response } = await axios.get(`${config.hostBackend}/api/v1/report/export_director`, {
      params: body,
      headers: {
        "Authorization": `Bearer ${user.token}`
      },
      responseType: 'blob'
    }).then((res) => {
      return {
        success: true,
        response: {
          data: res?.data,
          message: "Retrieved file successfully!"
        }
      }
    }).catch((error) => {
      return {
        success: false,
        response: {
          data: null,
          message: error?.message
        }
      }
    }).finally(() => {
      // SET LOADING TO FALSE
      setLoadFileDirector(false)
    })
    if (success) {
      const fileDownload = document.createElement('a')
      const blobURL = window.URL.createObjectURL(new Blob([response?.data]))
      fileDownload.setAttribute('href', blobURL)
      fileDownload.setAttribute('download', 'DIRECTOR_DOCUMENT.pdf')
      fileDownload.click()
    } else {
      message.error(response?.message || ERROR_MESSAGE_INTERNAL_SERVER_ERROR)
    }
  }, [user.token])

  const downloadFileSummary = useCallback(async (data) => {
    // SETTING QUERIES
    const body = {
      year_month: data.year_month
    }
    // SET LOADING TO TRUE
    setLoadFileSummary(true)
    // SEND REQUEST TO API END POINT
    const { success, response } = await axios.get(`${config.hostBackend}/api/v1/report/export_monthly_summary`, {
      params: body,
      headers: {
        "Authorization": `Bearer ${user.token}`
      },
      responseType: 'blob'
    }).then((res) => {
      return {
        success: true,
        response: {
          data: res?.data,
          message: "Retrieved file successfully!"
        }
      }
    }).catch((error) => {
      return {
        success: false,
        response: {
          data: null,
          message: error?.message
        }
      }
    }).finally(() => {
      // SET LOADING TO FALSE
      setLoadFileSummary(false)
    })
    if (success) {
      const fileDownload = document.createElement('a')
      const blobURL = window.URL.createObjectURL(new Blob([response?.data]))
      fileDownload.setAttribute('href', blobURL)
      fileDownload.setAttribute('download', 'SUMMARY_DOCUMENT.pdf')
      fileDownload.click()
    } else {
      message.error(response?.message || ERROR_MESSAGE_INTERNAL_SERVER_ERROR)
    }
  }, [user.token])

  return (
    <>
      <section>
        <Typography.Title level={5} className='!m-0 !text-primary-color'>รายงาน</Typography.Title>
      </section>
      <section className="mt-5">
        <TableReport
          data={data?.data || []}
          loading={loading}
          //PAGE API
          page={data?.search?.page || 1}
          perPage={data?.search?.page_size || 10}
          total={data?.meta?.total || 0}
          onChange={onChangePage}
          // REFRESH
          refreshContent={refreshContent}
          // ROUTE
          // specifyDownloadRoute={specifyDownloadRoute}
          // loadFile={loadFile}
          loadFileDirector={loadFileDirector}
          loadFileSummary={loadFileSummary}
          downloadFileDirector={downloadFileDirector}
          downloadFileSummary={downloadFileSummary}

          loadFileIndex={loadFileIndex}
          setLoadFileIndex={setLoadFileIndex}
        />
      </section>
    </>
  );
};

export default React.memo(ReportScreen);
