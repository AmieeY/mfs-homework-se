# 问答题

1. babel 是什么，它能干什么，不能干什么？
babel是一种JavaScript的编译器，可以将最新版的js编译成当下或者旧版本浏览器可以兼容的js版本。Babel只转换新的JavaScript语法，而不转换新的API，比如Set、Maps、Proxy、Reflect、Symbol、Promise等对象及其方法。
2. 我们使用 babel 把 es6/7的代码编译为 es5代码后，为什么还需要引入 polyfill？
因为babel不能实现新的API的转换，所以使用polyfill为当前环境提供一个垫片，用于实现浏览器不支持的API
3. .babelrc文件是干嘛的？常见配置是什么？
.babelrc文件是babel的配置文件，用来设置转码规则和插件。
4. presets 中设置 env 是什么含义？
env用于指定支持的平台（浏览器和node）和平台的版本，并编译该环境缺少的特性。可以根据配置的目标浏览器或者运行环境来自动将ES2015+的代码转换为es5
5. babel 中 presets 与 plugin 有什么区别？有什么联系？
presets字段设定转码规则，多用于整篇代码的转换，plugin用于引入某些单独的功能以及一些presets中不包含的功能，Babel插件一般尽可能拆成小的粒度。presets:babel插件的预设，包括一部分的plugin。plugin:babel的插件
6. 请比较 let,var,const 命令的不同
let声明的变量只在它所在的代码块有效，即为块级作用域。var则可以在代码块之外调用。
let所声明的变量一定要在声明后使用，否则报错，var声明的变量可以提升。
let和const声明的变量在区块内会形成封闭区域，即必须先声明。
let不允许在相同作用域内，重复声明同一个变量，var可以。
const声明的常量不可以修改，let和var声明的为变量。
const声明常量时必须立即赋值，否则报错。
const和let都属于块级作用域。
# 代码题

1. 以下代码在 presets:['env'] 环境下编译结果是什么？ 请解释 babel 为什么这样编译（babel 是通过什么方法保证两段代码等价的）
编译结果是
<pre>
var a = 10;
{
var _a2 = 11;
var b = 12;
console.log(_a2);
}
var _a = 13;
console.log(_a);
</pre>
通过当前浏览器可以支持的特性对代码进行转换。
2. 以下代码在 presets:['env'] 环境下编译结果是什么？为什么？
编译结果是：
function _readOnlyError(name) { throw new Error(“\”” + name + “\” is read-only”); }
var a = 10;
a = (_readOnlyError(“a”), 20);
```
因为const声明的a为常量，给常量赋值则会报错。