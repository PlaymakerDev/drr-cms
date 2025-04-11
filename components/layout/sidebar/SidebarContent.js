import React, { useCallback, useMemo } from 'react'
import { useRouter } from 'next/router';
import {
  AppstoreOutlined,
  PieChartOutlined,
  TableOutlined,
  ProfileOutlined,
  SettingOutlined
} from '@ant-design/icons'
import { Menu } from 'antd';
import pm from '@/utils/auth/permission'
import { useAppSelector } from '@/store/hooks'
import { ROLE } from '@/utils/auth/roleConfig';


const mappingTransaction = {
  AppstoreOutlined,
  PieChartOutlined,
  TableOutlined,
  ProfileOutlined,
  SettingOutlined
}

const PageSidebar = (props) => {
  const { menu , role } = props
  const { pathname, push } = useRouter()
  const userAuthen = useAppSelector(state => state.userAuthen)
  const permission = pm(userAuthen)


  const Icon = useCallback((iconName, { ...props }) => {
    const IconResult = mappingTransaction[iconName]
    if (typeof IconResult !== 'undefined') {
      return <IconResult {...props} />
    }
    return
  }, [])

  const renderItems = useMemo(() => {
    // const newList = menu[permission.roleUser]?.map((item, index) => {
    const newList = menu[role]?.map((item, index) => {
      const isActive = item.path === pathname;
      if (!!item.path_list?.length) {
        return {
          key: `${index + 1}.0`,
          label: item.label,
          icon: Icon(item.icon, {}),
          path: item.path,
          children: item?.path_list?.map((sub_item, sub_index) => {
            const isSubActive = sub_item.path === pathname;
            return {
              key: `${index + 1}.${sub_index + 1}`,
              label: sub_item.label,
              path: sub_item.path,
              onClick: !isSubActive ? () => push(sub_item.path) : undefined,
            }
          })
        }
      } else {
        return {
          key: `${index + 1}.0`,
          label: item.label,
          icon: Icon(item.icon, {}),
          path: item.path,
          onClick: !isActive ? () => push(item.path) : undefined,
        }
      }
    })
    return newList
  }, [menu, push, Icon])

  // GET PATH LIST
  const findIndex = renderItems?.find(item => item.path === pathname)
  const findSubIndex = renderItems?.find(item => item.children?.find(sub_item => sub_item.path === pathname))
  const getPath = findSubIndex?.children?.find(item => item.path === pathname)

  return (
    <Menu
      defaultSelectedKeys={!!getPath ? [getPath?.key] : [findIndex?.key]}
      defaultOpenKeys={!!getPath ? [findSubIndex?.key] : undefined}
      items={renderItems}
      theme='dark'
      mode="inline"
      className='!bg-transparent'
    >
    </Menu>
  )
}

export default React.memo(PageSidebar)


/** How to check role 
 * {permission.isRoles([ROLE.ADMIN, ROLE.SUPERADMIN, "Staff"]) && (
    <Menu
      defaultSelectedKeys={!!getPath ? [getPath?.key] : [findIndex?.key]}
      defaultOpenKeys={!!getPath ? [findSubIndex?.key] : undefined}
      items={renderItems}
      theme='dark'
      mode="inline"
      className='!bg-transparent'
    >
    </Menu>
  )}
 */