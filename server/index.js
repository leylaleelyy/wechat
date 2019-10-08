import express from 'express';//基于js实现的一个web框架，可以实现一些后端的代码，提供api给前端使用，一些数据

let app = express();
app.get('/', (req, res) => {
  res.send('hello world');
});
app.listen(6060, () => console.log('Run success!'));//监听了端口