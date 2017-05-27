---
layout: single
title:  "Gõ Tiếng Việt trong Sublime Text 3 - Linux Ubuntu với Vn Ime"
date:   2016-07-26
categories: [Code Editors]
tags: [Sublime Text, editor, gõ tiếng Việt]
permalink: /Sublime-Text/go-tieng-viet-sublime-text-3/
---

![Gõ Tiếng Việt trong Sublime Text 3]({{ site.url }}{{ site.baseurl }}/assets/img/sublime-text/go-Tieng-Viet-Sublime-Text-3.png)

**Sublime Text 3** là code editor tuyệt vời. Tuy nhiên nó hơi có vấn đề trong việc gõ tiếng Việt trên hệ điều hành Linux. Cụ thể ở đây tôi sử dụng bộ gõ ibus-unikey trên Ubuntu.

Tôi đã tìm được một package của **Sublime Text 3** cho phép gõ tiếng Việt một cách ngon lành – **Vn Ime.** Sau đây là cách cài đặt.

Đầu tiên bạn phải có **Sublime Text 3** (dĩ nhiên rồi). Và cài đặt Package Control. ([Xem hướng dẫn](/huong-dan-cai-dat-sublime-text-3))

Tiếp theo vào menu **Preferences > Package Control (Ctrl + Shift +p) > Install Package > Tìm gói có tên *Vn Ime và tiến hành cài đặt.***

Ngay sau đó bạn ấn F2 để bật/tắt bộ gõ Vn Ime và cùng gõ tiếng Việt trên **Sublime Text 3** nào. Tuy nhiên mặc định kiểu gõ là VNI. Các bạn muốn chuyển sang kiểu gõ TELEX (như tôi hay dùng) thì mở tập tin cấu hình **Preferences.sublime-settings** tại **Preferences > Settings – User** và thêm đoạn bên dưới vào nhé.

~~~
{ "telex": true }
~~~
