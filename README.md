
降低router版本可以解决重复点击左边的导航栏报错的问题

npm install

npm run serve

npm run build

页面刷新数据丢失原因：
（1）js代码是运行在内存中的，代码运行时的所有变量、函数都是保存在内存中。
（2）刷新页面，以前申请的内存被释放，重新加载脚本代码，变量要重新赋值。
（3）要想刷新后数据不丢失就必须把数据存储在外部，例如：Local Storage、Session Storage、Index DB等。
这些都是浏览器提供的API，让你可以将数据存储在硬盘上，做持久化存储。

https://www.jianshu.com/p/c2078f6f63b3

解决思路：

办法一：将vuex中的数据直接保存到浏览器缓存中（sessionStorage、localStorage、cookie）
办法二：在页面刷新的时候再次请求远程数据，使之动态更新vuex数据
办法三：在父页面向后台请求远程数据，并且在页面刷新前将vuex的数据先保存至sessionStorage（以防请求数据量过大页面加载时拿不到返回的数据）
