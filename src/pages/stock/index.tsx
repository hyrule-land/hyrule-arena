import React from 'react';
import { Button } from 'antd';

import styles from './index.less';

export default () => {
  return (
    <div>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="link">hello world</Button>
    </div>
  );
};
