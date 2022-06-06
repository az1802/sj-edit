## Ant

* "".concat(400,'px')来连接样式字符串
* 使用void 0 代替 undefined . ECMAScript 5之前 undefined 属于全局变量可能会被覆盖 void 0 更安全.现在已基本不存在这类问题.





### layout组件

1. 外层flex布局,header采取固定高度,底部通过padding固定间距,内容的高度进行自适应
2. slider组件在layout组件内部时,自动调整layout组件的flex-direction
3. Provider向子组件提供方法来操控父组件实例对象,addSider,removeSider 来判定layout组件下是否存在sider组件.

### grid栅格布局

1. 建议更像排列的盒子数量最多四个最小一个.row,col定义信息区块的外部框架,保证页面每个区域可以稳健的排布起来.只有col可以在row内,内容都放置在col内.

2. span属性来对col容易进行宽度的定义

   ```css
   .ant-col-4 {
       display: block;
       flex: 0 0 16.66666667%;
       max-width: 16.66666667%;
   }
   ```

3. gutter 是更改col的padding来进行间隙的调整.其外层的width宽度是根据span的值来进行设定的.所以当gutter过大的时可能导致col不根据span的值进行排列,可能进行换行.margin来调整间隙很可能存在margin合并的问题.所以用padding好处理.
4. col offset是调整margin来调整其剪辑

### space

1. 对插槽属性进行循环处理包裹一层div,最外层为inline-flex 使用css grap属性来设置间隙.

   ```css
   element.style {
       gap: 24px;
   }
   ```

2. split插槽在字内容之间插入

### divider

1 内容左右的线条采用before,after伪元素实现

2 before,after width 50%自适应空白的部分  (TODO  css实现细节)







