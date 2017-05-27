---
layout: single
title:  "Hướng dẫn cài đặt Sublime Text 3 cho Ubuntu và Windows"
date:   2016-07-25
categories: [Code Editors]
tags: [Sublime Text, editor, cài đặt]
permalink: /Sublime-Text/huong-dan-cai-dat-sublime-text-3/
---


![Sublime Text 3]({{ site.url }}{{ site.baseurl }}/assets/img/sublime-text/Sublime-Text-3.png)

### **Giới thiệu Sublime Text:**

**Sublime Text** là một trình soạn thảo code (editor) đa nền tảng được tin dùng bởi rất nhiều lập trình viên trên toàn thế giới. Nó mặc định hỗ trợ nhiều loại ngôn nhgữ lập trình. Nó khá mạnh mẽ với các chức năng có thể mở rộng qua plugin.

**Sublime Text** là một phần mềm thương mại. Tuy nhiên hiện tại tác giả cho phép dùng thử với số lần không giới hạn (Chỉ thỉnh thoảng có pop-up nhắc nhở chúng ta nên mua phần mềm thôi). Các bạn có thể dùng **Sublime Text** miễn phí nhưng tôi nghĩ nếu có điều kiện các bạn nên mua để ủng hộ tác giả.

**Trang chủ: **[https://www.sublimetext.com/](https://www.sublimetext.com/)

### Cài đặt Sublime Text:

#### * Trên Windows

Tải **Sublime Text 3** từ trang này > [https://www.sublimetext.com/3](https://www.sublimetext.com/3) (Chọn bản dành cho Windows). Các bạn cũng có thể tải bản Portable và copy vào usb để sử dụng mọi lúc, mọi nơi.

Việc cài đặt trên Windows thực hiện tương tự việc cài đặt hầu hết các phần mềm khác.

** * Trên Ubuntu và các Linux dựa trên Ubuntu như **Linux Mint, Elementary OS, Pinguy OS, Peppermint…****

Tải gói .deb của Ubuntu trên trang [https://www.sublimetext.com/3](https://www.sublimetext.com/3) và thực hiện cài đặt bằng cách mở lên với gdebi hoặc Ubuntu Software Center.

Bạn cũng có thể dùng các lệnh sau để cài Sublime Text thông qua ppa:

 sudo add-apt-repository ppa:webupd8team/sublime-text-3 sudo apt-get update sudo apt-get install sublime-text-installer

### Cài đặt Package Control cho Sublime Text

**Package control** giúp chúng ta dễ dàng tìm kiếm, cài đặt và cập nhật các chức năng mở rộng cho Sublime text.

Truy cập [https://packagecontrol.io/installation](https://packagecontrol.io/installation) và copy đoạn mã cài đặt cho **Sublime Text 3.**

![Sublime-Text-package-control-install]({{ site.url }}{{ site.baseurl }}/assets/img/sublime-text/Sublime-Text-package-control-install.png)

Mở **Sublime Text 3**. Vào **View > Show Console **sau đó paste đoạn mã cài đặt trên vào, ấn **Enter ** để tiến hành cài đặt **Package Control. **Trong quá trình cài đặt có thể bạn sẽ phải khởi động lại **Sublime Text.**

Sau khi cài đặt, các bạn vào **Preferences > Package Control **để tiến hành quản lí các gói mở rộng.
