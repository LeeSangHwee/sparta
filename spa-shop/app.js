// app.js

import express from 'express';
import goodsRouter from './routes/goods.js';
import newsRouter from './routes/news.js';
import connect from './schemas/index.js';

const app = express();
const PORT = 3000; // 서버를 열 때 사용할 포트 번호

connect(); // Mongodb를 연결하기 위한 커넥트 함수를 실행한다.

app.use(express.json()); // json 형태로 서버에 body 데이터를 전달하면, req.body에 데이터를 변환하여 넣어준다.
app.use(express.urlencoded({ extended: true })); // form content type에서 body 데이터를 전달하면, req.body에 데이터를 변환하여 넣어준다.

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// localhost:3000/api -> goodsRouter
// localhost:3000/api -> newsRouter
// 2. 라우터를 등록합니다.
app.use('/api', [goodsRouter, newsRouter]);

// 1. Express.js의 서버를 엽니다.
app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});