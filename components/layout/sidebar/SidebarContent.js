import React, { useCallback, useMemo } from 'react'
import { AppstoreOutlined, PieChartOutlined, TableOutlined, ProfileOutlined, CalendarOutlined, UserOutlined, LogoutOutlined, MenuOutlined } from '@ant-design/icons'
import Link from 'next/link';
import { useRouter } from 'next/router';

const mappingTransaction = {
  AppstoreOutlined,
  PieChartOutlined,
  TableOutlined,
  ProfileOutlined
}

const SidebarContent = (props) => {
  const { menu, role, setOpen } = props
  const { pathname, reload } = useRouter()

  const Icon = useCallback((iconName, { ...props }) => {
    const IconResult = mappingTransaction[iconName]
    if (typeof IconResult !== 'undefined') {
      return <IconResult {...props} />
    }
    return
  }, [])

  const renderMenuList = useMemo(() => {
    const newList = menu[role]?.map((item, index) => {
      if (pathname === item.path) {
        return (
          <li
            key={index}
            className={
              item.path_list?.some((item) => item === pathname) ? 'text-white bg-[#0080FE] p-3 mb-2 rounded-md cursor-pointer text-sm' : pathname === item.path ?
                'text-white bg-[#0080FE] p-3 mb-2 rounded-md cursor-pointer text-sm' :
                'transition duration-300 text-white p-3 mb-2 rounded-md hover:bg-white hover:text-black cursor-pointer text-sm'
            }
            onClick={() => reload()}
          >
            <div className='flex flex-wrap items-center gap-3'>
              {/* <ContainerOutlined />{item.label} */}
              {Icon(item.icon, {})}{item.label}
            </div>
          </li>
        )
      } else {
        return (
          <Link href={item.path} key={index}>
            <li key={index} className={
              item.path_list?.some((item) => item === pathname) ? 'text-white bg-[#0080FE] p-3 mb-2 rounded-md text-sm' : pathname === item.path ?
                'text-white bg-[#0080FE] p-3 mb-2 rounded-md text-sm' :
                'transition duration-300 text-white p-3 mb-2 rounded-md hover:bg-white hover:text-black text-sm'}>
              <div className='flex flex-wrap items-center gap-3'>
                {/* <ContainerOutlined />{item.label} */}
                {Icon(item.icon, {})}{item.label}
              </div>
            </li>
          </Link>
        )
      }
    })
    return newList
  }, [Icon, menu, pathname, reload, role])

  return (
    <ul>
      {renderMenuList || []}
    </ul>
  )
}

export default React.memo(SidebarContent)
