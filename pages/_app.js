import "@/styles/globals.css";
import { ConfigProvider } from 'antd';

import theme from '@/theme/themeConfig';

// STATIC CONFIG
ConfigProvider.config({
  holderRender: (children) => {
    return (
      <ConfigProvider
        prefixCls="ant"
        iconPrefixCls="anticon"
        theme={{
          token: {
            fontSize: 14,
            colorPrimary: '#FFFFFF',
            fontFamily: 'IBMPlexSansThai-Regular'
          }
        }}
      >
        {children}
      </ConfigProvider>
    )
  },
})

const App = (props) => {
  const { Component, pageProps } = props;

  return (
    <ConfigProvider theme={theme}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}

export default App
