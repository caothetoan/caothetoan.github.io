---
layout: single
title:  "Lấy địa chỉ IP thật của client trên Heroku với Nodejs"
date:   2017-05-27 15:30:00
categories: [WebDev]
tags: ["Heroku", "Nodejs", "IP"]
header:
  overlay_image: "/assets/img/webdev/heroku-nodejs.png"
---

Khi sử dụng Express js của Nodejs, bạn đơn giản chỉ cần sử dụng `req.ip` để lấy IP người dùng. Tuy thế, khi bạn ứng dụng của chúng ta được host trên [Heroku](https://dashboard.heroku.com/) thì việc lấy IP thế này sẽ cho kết quả sai, đơn giản vì Heroku thực hiện một số routing khiến IP bạn nhận được là IP của router Heroku hoặc proxy. Vậy chúng ta nên làm thế nào?

Heroku đã đính kèm header `x-forwarded-for` vào các request với từ người dùng. Nội dung của nó là một danh sách IP ngăn cách bằng dấu phẩy (,). Tất cả những gì chúng ta cần là split chúng thành một mảng và lấy phần tử cuối cùng (IP thật từ client).

Vậy là trong app, ta cần thêm hàm sau để lấy IP thật

~~~javascript
var getIP = function(req) {
  ipAddr = req.headers["x-forwarded-for"];
  if (ipAddr){
    var list = ipAddr.split(",")[list.length-1];
    ipAddr = list;
  } else {
    ipAddr = req.connection.remoteAddress;
  }
  return ipAddr;
}
~~~

Với đoạn mã này bạn có thể dùng trong các ứng dụng thống kê truy cập website, thu thập thông tin từ contact form (muốn lấy thêm IP người dùng).