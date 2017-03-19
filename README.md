# vue-tutorial

> 项目使用的知识：vuex+vue2.0+vue-router2.0+webpack2.0+es2015语法+h5本地存储localStorage

> 框架搭建：采用的是官方提供的脚手架vue-cli  

> 知识点梳理：

> actions 的第一个参数是 context，它向外暴露一组与 store 实例相同的方法/属性，所以可以直接调context.commit 或者访问context.state 或context.getters 。我们通常使用 es6 的参数解构来简化我们的代码，直接写成 { commit }。es6参数解构通常的做法是为函数为函数设计一个对象作为参数，然后将不同的实际参数作为对象属性。

> mutation-types.js:建议使用大写命名 Mutation,将所有大写变量存放在一个文件中，需要的时候引入。使用 es6 的计算属性名新特性来使用常量作为方法名。在ES6的模块语法中，模块设计围绕export和import关键词，存在多个export声明，每个都要明确的指出输出值得类型。本例中的import声明使用一种语法，来明确定义被导入的内容，可以使用* 通配符，结合as关键词给模块提供一个本地名称，把模块当成一个整体导入：import*as math form"lib/math.js";

> mutation.js:更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutations 非常类似于事件：一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数

> 值得注意的的是：本项目的新增计划需要保存到localstroage里边，JSON.stringify把对象转化为字符串JSON.parse把字符串转化为对象。
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
