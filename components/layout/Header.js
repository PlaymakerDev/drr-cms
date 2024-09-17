import React, { useMemo, useCallback, useState } from 'react'
import { Avatar, Menu, Dropdown, Button } from 'antd';
import { AppstoreOutlined, PieChartOutlined, TableOutlined, ProfileOutlined, CalendarOutlined, UserOutlined, LogoutOutlined, MenuOutlined, SettingOutlined } from '@ant-design/icons'
import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/router';
import styles from '@/styles/components/layout/Layout.module.css'
// import menu from '@/menu'
import DPTLogo from '@/public/images/dpt-logo.svg'

const mappingTransaction = {
  AppstoreOutlined,
  PieChartOutlined,
  TableOutlined,
  ProfileOutlined,
  SettingOutlined
}

const Header = (props) => {
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

      const menu = (
        <Menu>
          {item.path_list.map((item, index) => (
            <Menu.Item key={index + 1}>
              <Link href={item.path}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      );

      const generateDropdown = () => {
        if (item.path_list.length > 0) {
          return (
            <Dropdown overlay={menu} trigger={['click']}>
              <div className='flex flex-wrap items-center gap-3'>
                {Icon(item.icon, {})}
                {item.label}
              </div>
            </Dropdown>
          );
        } else {
          return (
            <div className='flex flex-wrap items-center gap-3'>
              {Icon(item.icon, {})}
              {item.label}
            </div>
          );
        }
      };

      const isPath = () => pathname.startsWith(item.path)

      if (isPath()) {
        return (
          <>
            <li
              className={
                isPath() ? 'border-b-4 border-[#0080FE] px-2 cursor-pointer mx-3 text-[#0080FE] text-sm font-bold' :
                  pathname === item.path ? 'border-b-4 border-[#0080FE] px-2 cursor-pointer mx-3 text-[#0080FE] text-sm font-bold' :
                    'transition duration-300 px-2 cursor-pointer mx-3 hover:text-[#0080FE] text-sm'
              }
              onClick={() => {
                if (item.path_list.length === 0) {
                  reload();
                }
              }}
            >
              {generateDropdown()}
            </li>
          </>
        )
      } else {
        if (item.path_list.length > 0) {
          return (
            <>
              <li className={
                item.path_list.some((item) => item === pathname) ? 'border-b-4 border-[#0080FE] px-2 cursor-pointer mx-3 text-[#0080FE] text-sm font-bold' :
                  pathname === item.path ?
                    'border-b-4 border-[#0080FE] px-2 cursor-pointer mx-3 text-[#0080FE] text-sm font-bold' :
                    'transition duration-300 px-2 cursor-pointer mx-3 hover:text-[#0080FE] text-sm'
              }>
                {generateDropdown()}
              </li>
            </>
          )
        } else {
          return (
            <>
              <Link href={item.path} key={index} legacyBehavior>
                <li className={
                  item.path_list.some((item) => item === pathname) ? 'border-b-4 border-[#0080FE] px-2 cursor-pointer mx-3 text-[#0080FE] text-sm font-bold' :
                    pathname === item.path ?
                      'border-b-4 border-[#0080FE] px-2 cursor-pointer mx-3 text-[#0080FE] text-sm font-bold' :
                      'transition duration-300 px-2 cursor-pointer mx-3 hover:text-[#0080FE] text-sm'
                }>
                  {generateDropdown()}
                </li>
              </Link>
            </>
          )
        }

      }
    })
    return newList
  }, [Icon, pathname, reload, menu, role])

  return (
    <nav className='bg-secondary block'>
      <div className='flex justify-between items-center flex-wrap px-5 py-3 gap-5'>
        <section className='flex items-center gap-2'>
          <Image
            src={DPTLogo}
            alt='dpt-logo'
            width={46}
            height={46}
          />
          <div className='flex flex-col'>
            <h1 className='font-IBMPlexSansThaiBold font-bold'>กรมทางหลวงชนบท</h1>
            <p className='text-sm text-[#FFFFFF80]'>DEPARTMENT OF RURAL ROADS</p>
          </div>
        </section>
        <section className={styles.horizontalMenu}>
          <ul className='flex flex-wrap items-center'>
            {renderMenuList || []}
          </ul>
        </section>
        <section className={styles.navbarExtraMenu}>
          <div className='flex items-center gap-5'>
            <div className='flex flex-col items-end'>
              <p className='text-sm'>26 ก.ค. 2567</p>
              <p className='text-sm text-[#FFFFFF80]'>วันที่</p>
            </div>
            <Avatar
              size={'large'}
              icon={<CalendarOutlined />}
              className={`${styles.avatarIcon} !bg-[#FFFFFF30]`}
            />
          </div>
          <div className='flex items-center gap-5'>
            <Avatar
              size={'large'}
              icon={<UserOutlined />}
              className={`${styles.avatarIcon} !bg-[#FFFFFF30]`}
            />
            <div className='flex flex-col items-start'>
              <p className='text-sm'>Admin User</p>
              <p className='text-sm text-[#FFFFFF80]'>ผู้ดูแลระบบ</p>
            </div>
          </div>
          <div>
            <Avatar
              size={'large'}
              icon={<LogoutOutlined />}
              className={`${styles.avatarIcon} !bg-[#FFFFFF30] !cursor-pointer`}
            />
          </div>
        </section>
        <section className={styles.menuButton}>
          <MenuOutlined
            className='!cursor-pointer !text-[#FFFFFF] !text-lg'
            onClick={() => setOpen(true)}
          />
        </section>
      </div>
    </nav>
  )
}

export default React.memo(Header)
