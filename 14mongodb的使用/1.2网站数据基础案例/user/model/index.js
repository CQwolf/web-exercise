const mongoose = require("mongoose");
// 连接数据库 默认端口为27017可以选择不写
mongoose.connect("mongodb://localhost:27017/playground", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("数据库连接成功") })
    .catch(err => { console.log("数据库连接失败", err) })