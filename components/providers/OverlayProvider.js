import React from 'react';
import PropTypes from 'prop-types';
import Spin from 'antd/lib/spin';
// import { LoadingOutlined } from '@ant-design/icons';

const OverlayProvider = (props) => {
  const { loading, children, ...propsSpin } = props;
  // const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  return (
    <Spin spinning={loading} {...propsSpin} style={{ zIndex: 1001, ...(propsSpin.style || {}) }}>
      {children}
    </Spin>
  );
};

OverlayProvider.propTypes = {
  loading: PropTypes.bool,
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.oneOf(["small", "default", "large"]),
  tip: PropTypes.string,
  delay: PropTypes.number,
  wrapperClassName: PropTypes.string,
  indicator: PropTypes.node,
  children: PropTypes.node
};

export default OverlayProvider;
