### Switch

- 切换选择状态组件

```jsx
import React from 'react';
import Switch from '@/Switch';

export default () => <>
  <Switch checked={true} />
</>
```

```jsx
import React from 'react';
import Switch from '@/Switch';

export default () => <>
  <Switch 
    checked={true} 
    bgColor='lightblue' // 背景色
    color='orange' // 开关的颜色
    activeColor='red' // 开关激活的时候的颜色
  />
</>
```

- 参数说明

| 参数| 类型| 示例|
| --  | -- | --- |
|checked|ture,false|是否开启|
|bgColor|色值，默认为#323747|背景色|
|color|色值，默认为#404557|开关的背景色|
|activeColor|色值，默认为#0070FB|开关激活时的背景色|
|onChange|function|开关变化时的回调|