# 该js脚本能够判断一个元素是不是渲染到了视窗
如果没有，那就返回浏览器视窗距离该元素的偏移，偏移为正数代表浏览器视窗需要向下或右移动，偏移是负数则是左和上，如果视窗能够完整的看到这个元素，那就返回true
isView(htmlSelect),第一个参数是css选择器，选择被选到的第一个元素，后面有4个参数分别是（左，上，右，下）输入这4个参数以后，元素不光要完整的出现在视窗上它还不不能出现在视窗的边缘位置，他必须离这些边缘有一定的距离，这个距离，就是这些参数的意义