# 问答题

1. Koa和express的中间件调用方式上有什么不同？
koa的中间件是通过异步函数async实现的，中间件执行顺序是”洋葱圈模型”。中间件之间通过next函数联系，当一个中间件调用next()后，控制器会交给下一个中间件，当下一个中间件执行结束后，会将控制权交给前一个中间件。
koa用ctx封装了req和res。koa有router个管理路由。
express是流水线模型。
2. Koa比express更加轻量，基本只实现了中间件机制，如需实现完整的Web应用需要配合中间件，如何查找koa的中间件？有哪些途径可以查找？
在官方文档查看、npmjs、github

#　代码题
1. 请使用Koa当后端实现省市区三级联动（结合后端，实现数据懒加载），省市区数据可使用讲义中的数据
前端代码
```
  <!DOCTYPE html>
  <html lang="en">

  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
      <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
  </head>

  <body>
      <form action="/aa">
          <select name="pro" id="pro" onchange="proChange()">
              <option value="0">选择省份</option>
          </select>
          <select name="city" id="city" onchange="cityChange()">
              <option value="0">选择市</option>
          </select>
          <select name="qu" id="qu">
              <option value="0">选择区</option>
          </select>
          <button type="submit">ok</button>
      </form>
      <script>

          function getPro() {
              console.log('fachuqingqiu')
              $.ajax({
                  method: 'POST',
                  url: 'http://localhost:3000/city',
                  data: {
                      level: 'pro'
                  },
                  success: function (data) {
                      var pro = document.getElementById('pro')
                      for (var i = 0; i < data.length; i++) {
                          pro.options.add(new Option(data[i].name, data[i].value))
                      }
                  }
              })
          }
          getPro()
          function proChange(){
              var proValue = document.getElementById('pro').value
              console.log(proValue)
              $.ajax({
                  method:'POST',
                  url:'http:localhost:3000/city',
                  data:{
                      level:'city',
                      proValue:proValue-1
                  },
                  success:data=>{
                      var city = document.getElementById('city')
                      for (var i = 0; i < data.length; i++) {
                          city.options.add(new Option(data[i].name, data[i].value))
                      }
                  }
              })
          }
          function cityChange(){
              var proValue = document.getElementById('pro').value
              var cityValue = document.getElementById('city').value
              $.ajax({
                  method:'POST',
                  url:'http:localhost:3000/city',
                  data:{
                      level:'qu',
                      proValue:proValue-1,
                      cityValue:cityValue-1
                  },
                  success:data=>{
                      var qu = document.getElementById('qu')
                      for (var i = 0; i < data.length; i++) {
                          qu.options.add(new Option(data[i].name, data[i].value))
                      }
                  }
              })
          }
      </script>
  </body>

  </html>
  ```
后端router部分
```
  router.post('/city',async (ctx, next)=>{
    console.log(ctx.request.body)
    var proIdx = 0
    var cityIdx = 0
    var data =[
      {
        name:'省1',
        value:'1',
        city:[
          {
            name:'省1的市1',
            value:'1',
            qu:[
              {name:'省1市1的区1',value:'1'},
              {name:'省1市1的区2',value:'2'}
            ]
          },
          {
            name:'省1的市2',
            value:'2',
            qu:[
              {name:'省1市2的区1',value:'1'},
              {name:'省1市2的区2',value:'2'}
            ]
          }
        ]
      },
      {
        name:'省2',
        value:'2',
        city:[
          {
            name:'省2的市1',
            value:'1',
            qu:[
              {name:'省2市1的区1',value:'1'},
              {name:'省2市1的区2',value:'2'}
            ]
          },
          {
            name:'省2的市2',
            value:'2',
            qu:[
              {name:'省2市2的区1',value:'1'},
              {name:'省2市2的区2',value:'2'}
            ]
          }
        ]
      }
    ]
    ctx.set('Access-Control-Allow-Origin','*')
    ctx.set('Access-Control-Allow-Methods','OPTIONS,GET,POST,DELETE')
    if (ctx.request.body.level === 'pro'){
      ctx.body = data
    }
    if (ctx.request.body.level === 'city'){
     proIdx = ctx.request.body.proValue
      ctx.body = data[proIdx].city
    }
    if (ctx.request.body.level === 'qu'){
      proIdx = ctx.request.body.proValue
     cityIdx = ctx.request.body.cityValue
      ctx.body = data[proIdx].city[cityIdx].qu
    }
  })
  ```
2. 请使用Koa当后端实现有如下功能的用户注册表单
字段	含义	要求
username	用户名	以字母开头，6-18个字符，需要去数据库查重，实时提现用户
password	密码	6-18个字符
pwd-rpt	重复密码	6-18个字符，需要和 password 字段一致