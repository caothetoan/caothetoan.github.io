---
layout: single
title:  "Hướng dẫn tạo GitHub Pages"
date:   2017-05-27
categories: [GitHub]
tags: ["GitHub Pages", "GitHub"]
header:
  overlay_image: "/assets/img/webdev/contact-me.jpg"
---


Hướng dẫn tạo GitHub Pages trong 5 bước.

{% include toc title="Contents" %}

## Step 1: Tạo một repository

Trước tiên bạn cần phải có một tài khoản GitHub: [https://github.com](https://github.com).


Đăng nhập  vào GitHub và tạo một repository mới đặt tên theo tên username đăng nhập của bạn username.github.io.

## Step 2: Clone repository

Đi đến thư mục lưu project của bạn, và clone repository:

 
git clone https://github.com/username/username.github.io

## Step 3. Hello World

Chuyển đến thư mục project vừa clone và  add index.html file:

{% highlight javascript linenos %}
~$ cd username.github.io

~$ echo "Hello World" > index.html
{% endhighlight %}

## Step 4. Push it

Add, commit, and push your changes:

{% highlight javascript linenos %}
~$ git add --all

~$ git commit -m "Initial commit"

~$ git push -u origin master
{% endhighlight %}

## Step 5. Hoàn tất

…and you're done!

Mở trình duyệt và tận hưởng thành quả http://username.github.io.



Source github
