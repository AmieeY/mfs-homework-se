# 问答题
1. Promsie 对象有几种状态？他们之间是怎么转换的？
三种状态：pending/ fulfilled/ rejected
从pending变成fulfilled状态或者从pending变成rejected状态。
2. 下面代码的输出结果是什么？（饿了么面试题）
```
setTimeout(function() {
   console.log(1)
}, 0);
new Promise(function executor(resolve) {
   console.log(2);
   for( var i=0 ; i<10000 ; i++ ) {
      i == 9999 && resolve();
   }
   console.log(3);
}).then(function() {
   console.log(4);
});
console.log(5);
```
结果：2、3、5 、 4、 1.
原理：首先遇到setTimeout放入宏任务队列，然后遇到new Promise，直接打印2、 3，遇到微任务then方法，放入微任务队列，然后直接打印5，本轮宏任务完成，则执行本任务的微任务then方法打印4，本轮事件循环完成，进入下一轮循环执行宏任务setTimeout打印1。单线程。

3. 什么是 Promise 对象？引入 Promise 对象是为了解决什么？
Promise对象是保存着某个未来才会结束的事件（通常是一个异步操作）的对象。引入Promise对象是为了避免层层嵌套的回调函数，使异步操作简单化。

4. var p = new Promise() 中 p 对象有哪些方法？各有什么功能？
p.then方法：为 Promise 实例添加状态改变时的回调函数。
p.catch方法：用于指定发生错误时的回调函数
p.finally方法：用于指定Promise 对象最后执行的操作
p.all方法：用于将多个 Promise 实例，包装成一个新的 Promise 实例
p.race方法：也是将多个 Promise 实例，包装成一个新的 Promise 实例，但是状态改变的条件和p.all方法不同
p.allSettled方法：接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。该方法不关心异步操作的结果，只关心这些操作有没有结束
p.any方法：接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。和p.allSettled方法的区别在于状态改变的条件。
p.resolve方法：将现有对象转为 Promise 对象
p.reject方法：返回一个新的状态为rejected的 Promise 实例

5. Promise.all 和 Promise.race 的区别是什么？
Promise.all方法等待所有参数实例的状态都变成resolve状态对象的状态才变成resolve状态，Promise.race 则只需要一个参数实例的状态变成resolve状态即可。

6. Promise 中抛出未处理的异常会怎么样？会阻碍后面的代码执行吗？Chrome 和 Node.js 环境下有什么不同？
未处理的异常不会有任何响应，不会阻碍后面代码的执行。
浏览器会打印出错误提示，但不终止脚本的运行。node.js下有专门的unhandledRejection事件用于监听未捕获的reject错误，但脚本仍执行成功。

7. catch 方法中再抛出异常会怎么样，需要怎样捕捉？
catch中再抛出错误不会被捕获也不会传递到外层，可以在后面再使用catch方法捕获异常。

8. then的链式调用每次返回的是同一个 Promise 对象吗？请写一小段代码证明你的观点
不是

# 代码题
1. 请使用 Promise 重构之前作业：新闻瀑布流 中的 图片加载 和 加载更多 部分，比较 Promise 写法与之前的写法的区别
[链接]()
2. 请自行封装 ajaxGet(url) 函数，其返回值为 Promise ，其中 data 为获取的数据（内部使用 XMLHttpRequest）
```
 function ajaxGet(url) {
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url);
                xhr.send();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            resolve(xhr.responseText)
                        } else {
                            reject(xhr.response)
                        }
                    }
                }
            })

        }
```
3. 请利用自己实现的 ajaxGet(url) 函数，实现串行（一个接一个的）发送10个请求，来获取下面 api 的前10页数据
```
ajaxGet("https://learning-api.mafengshe.com/news?page=1").then(function(){
                console.log("req 1");
                return ajaxGet("https://learning-api.mafengshe.com/news?page=2");
            }).then(function(){
                console.log("req 2");
                return ajaxGet("https://learning-api.mafengshe.com/news?page=3");
            }).then(function(){
                console.log("req 3")
                return ajaxGet("https://learning-api.mafengshe.com/news?page=4");
            }).then(function(){
                console.log("req 4");
                return ajaxGet("https://learning-api.mafengshe.com/news?page=5");
            }).then(function(){
                console.log("req 5")
                return ajaxGet("https://learning-api.mafengshe.com/news?page=6");
            }).then(function(){
                console.log("req 6");
                return ajaxGet("https://learning-api.mafengshe.com/news?page=7");
            }).then(function(){
                console.log("req 7")
                return ajaxGet("https://learning-api.mafengshe.com/news?page=8");
            }).then(function(){
                console.log("req 8");
                return ajaxGet("https://learning-api.mafengshe.com/news?page=9");
            }).then(function(){
                console.log("req 9")
                return ajaxGet("https://learning-api.mafengshe.com/news?page=10");
            }).then(function(){
                console.log("req 10");
            })
```
4. 请利用自己实现的 ajaxGet(url) 函数，实现并行（同时）发送10个请求，来获取下面 api 的前10页数据
```
 var num = 0;
        function doSuccess() {
            ++num;
            if(num>=10){
                console.log("request finished ");
            }
        }
        function Bajax() {
            for (let i = 1; i <= 10; ++i) {
                ajaxGet("https://learning-api.mafengshe.com/news?page=" + i + "").then(function (data) {
                    console.log("req " + i),data;
                    doSuccess();
                })
            }

        }
        Bajax();
 ```