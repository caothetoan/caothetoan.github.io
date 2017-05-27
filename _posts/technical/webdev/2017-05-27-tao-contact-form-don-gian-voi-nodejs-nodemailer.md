---
layout: single
title:  "Tạo contact form đơn giản với nodejs - nodemailer"
date:   2017-05-27
categories: [WebDev]
tags: ["Contact form", "nodejs", "nodemailer", "Jekyll"]
header:
  overlay_image: "/assets/img/webdev/contact-me.jpg"
---

Nếu website của bạn sử dụng một CMS như [Wordpress](https://wordpress.org/) thì việc tạo contact form đã khá dễ dàng với các plug-in. Tuy nhiên nếu bạn đang có một website tĩnh, bạn sẽ cần một dịch vụ để xử lí các form liên hệ của bạn. Bài viết này sẽ hướng dẫn bạn tự tạo một backend đơn giản để xử lí các form liên hệ.

Form liên hệ của chúng ta sẽ hoạt động theo các nhận request từ  form theo method POST và gửi chúng đến email chính bằng [nodemailer](https://nodemailer.com/about/) của Nodejs.

## Step 1: Cài đặt Nodejs

Trước tiên bạn cần phải cài đặt Nodejs bằng cách truy cập vào trang chủ để tải về và cài đặt: [https://nodejs.org/en/](https://nodejs.org/en/).

Nếu bạn đang dùng Ubuntu/Debian hay một hệ linux phổ biến khác thì Nodejs cũng có mặt trên kho phần mềm và có thể dễ dàng cài đặt bằng lệnh đơn giản như `sudo apt-get install nodejs` (Ubuntu Linux).

## Step 2: Tạo Project mới (có thể là mail-gate)

- Tạo một thư mục với tên dự án của bạn.

- Dùng lệnh `npm init` trong thư mục và nhập các thông tin.s

## Step 3: Viết code Nodejs

Copy đoạn code sau vào file `index.js`. Bạn sửa phần `smtpConfig` là cấu hình chúng ta dùng để gửi mail. Bạn có thể đăng kí một tài khoản Gmail mới và nhập vào đó.

Bạn cũng cần chỉnh sửa phần `smtpTransport.sendMail` và điền vào đó tên và email của bạn. Ví dụ: `Việt Anh <abc@vietanhdev.com>`.

~~~javascript
var nodemailer = require("nodemailer");
var http = require('http');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var request = require("request");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var server = http.createServer(app);


// Nhận request từ tất cả các nguồn
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Pass to next layer of middleware
    next();
});


// Homepage
app.get('/', (req, res) => {
  res.send("Home page. Server running okay.");
});


// Đường dẫn xử lí form
app.post('/contact', function (req, res) {
  
  var content = '<h1>We have new submission from your website!</h1>';

  // Lấy tất cả các giá trị tham số từ POST request
  for (var x in req.query) {
    content += '<b>' + x + '</b> :  ' + req.query[x] + '  </br>';
  }
  for (var x in req.body) {
    content += '<b>' + x + '</b> :  ' + req.body[x] + '  </br>';
  }

  // Trả về kết quả dưới dạng JSON
  res.json({"success": "ok"});

  // Khai báo cấu hình gửi mail
  var smtpConfig = {
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // upgrade later with STARTTLS
      auth: {
          user: '<username>@gmail.com',
          pass: '<pass>'
      }
  };

  // Gửi mail
  var smtpTransport = nodemailer.createTransport(smtpConfig);
  smtpTransport.sendMail({  //email options
       from: "MailGate by Viet Anh <xxxxxx@gmail.com>",
       to: "Tên Của Bạn <email của bạn>", // receiver
       subject: "Có tin nhắn mới từ website của bạn!", // subject
       html: content // body
        }, function(error, response){  //callback
            if(error){
               console.log(error);
            } else {
               console.log("Đã gửi mail!");
            }

        smtpTransport.close(); 
  });

});

var port = process.env.PORT || 5000;

server.listen(port, function() {
  console.log("Server is running! port : " + port);
});
~~~

## Step 4: Deploy lên heroku:

Bạn có thể deploy đoạn mã này lên bất cứ server hoặc dịch vụ nào bạn có. Ở đây tôi hướng dẫn các bạn deploy lên [Heroku](https://heroku.com) vì nó khá đơn giản và miễn phí.

- Trước tiên đăng kí tài khoản Heroku.
- Tạo 1 app.
- Cài Heroku CLI lên máy của bạn: [Xem hướng dẫn](https://devcenter.heroku.com/articles/heroku-cli).
- Deploy bằng Heroku CLI:
    + Đăng nhập: `heroku login`
    + Khởi tạo git: Thay `<ten-app-cua-ban>`  bằng tên app vừa tạo. Ví dụ: `mail-gate-by-va`.
~~~bash
git init
heroku git:remote -a <ten-app-cua-ban>
~~~
    + Commit và deploy lên heroku:
~~~bash
git add .
git commit -am "make it better"
git push heroku master
~~~
- Check xem app của bạn đã hoạt động ok chưa bằng các vào `https://<ten-app-cua-ban>.herokuapp.com/` bằng trình duyệt. Nếu bạn nhìn thấy dòng "Home page. Server running okay." thì mọi thứ đã hoạt động tốt.

![Hompage running okay](/assets/img/webdev/homepage-running-ok.png)

## Step 5: Sử dụng backend đã tạo với một contact form:

Việc gửi dữ liệu có thể được thực hiện với một contact form đơn giản thế này:

~~~html
<h1>Contact form</h1>
<form id="contact-form" method="POST" action="https://<ten-app-cua-ban>.herokuapp.com/contact">
  <input type="email" name="email" placeholder="Email">
  <input type="text" name="website" placeholder="Tên bạn">
  <textarea name="message" rows="8" placeholder="Nội dung tin nhắn"></textarea>
  <input type="submit" class="btn btn-primary" value="Send / Gửi đi"></input>
</form>
~~~

Hình ảnh email nhận được sau khi nhập form liên hệ:

![Mail Gate by Viet Anh](/assets/img/webdev/mail-gate-sent-mail.png)


