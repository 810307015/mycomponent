### dragable

- 可拖拽组件容器，支持PC和移动端

```jsx
import React from 'react';
import Dragable from '@/Dragable';

export default () => <>
  <Dragable>
    直接使用children
  </Dragable>
</>
```

```jsx
import React from 'react';
import Dragable from '@/Dragable';

export default () => <>
  <Dragable children={(props) => {
    return <div>children为一个渲染方法</div>
  }} />
</>
```

- 使用说明

| 参数| 类型| 示例|
| --  | -- | --- |
| children| jsx或者function| `<div>111</div>` 或者 `(props) => <div>222</div>`  |