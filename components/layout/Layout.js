import React, { useState, useCallback } from 'react'
import { Drawer } from 'antd'
import { Header } from '@/components/layout'
import { SidebarHeader as Title, SidebarContent as Content, SidebarFooter as Footer } from './sidebar';
import menu from '@/menu'

const Layout = (props) => {
  const { children } = props
  // STATE
  const [open, setOpen] = useState(false)
  const [startX, setStartX] = useState(null)

  const _onClose = useCallback(() => {
    setOpen(false)
  }, [])

  const handleTouchStart = useCallback((e) => {
    setStartX(e.touches[0].clientX);
  }, [])

  const handleTouchMove = useCallback((e) => {
    if (startX !== null) {
      const currentX = e.touches[0].clientX;
      const deltaX = currentX - startX;

      // Assuming a swipe threshold of 50 pixels
      if (deltaX > 50) {
        setOpen(false);
      }
    }
  }, [startX])

  const handleTouchEnd = useCallback(() => {
    setStartX(null);
  }, [])

  return (
    <>
      <header>
        <Header
          menu={menu}
          role={'ADMIN'}
          setOpen={setOpen}
        />
      </header>
      <main>
        <section className='py-5 px-8'>
          {children}
        </section>
      </main>
      <aside
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Drawer
          title={<Title title='Admin User' description='ผู้ดูแลระบบ' />}
          closeIcon={false}
          open={open}
          onClose={_onClose}
          styles={{
            header: {
              backgroundColor: 'var(--background-secondary-color)',
              color: 'var(--primary-color)'
            },
            body: {
              backgroundColor: 'var(--background-primary-color)',
              color: 'var(--primary-color)'
            },
            footer: {
              backgroundColor: 'var(--background-primary-color)',
              color: 'var(--primary-color)'
            }
          }}
          footer={<Footer />}
          destroyOnClose
        >
          <Content
            menu={menu}
            role={'ADMIN'}
            setOpen={setOpen}
          />
        </Drawer>
      </aside>
    </>
  )
}

export default React.memo(Layout)
