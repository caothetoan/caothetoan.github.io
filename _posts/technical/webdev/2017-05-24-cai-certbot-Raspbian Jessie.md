---
layout: single
title:  "Cài Certbot cho Raspbian Jessie"
date:   2017-05-24
categories: [WebDev]
tags: ["Raspbian", "Server", "Certbot", "LetsEncrypt"]
header:
  overlay_image: "/assets/img/webdev/lets-encrypt.png"
---

[Certbot](https://certbot.eff.org/) là package phía server sử dụng để lấy và deploy chứng chỉ SSL/TSL một cách tự động. Nó giúp setup một kết nối HTTPS cho máy chủ chỉ trong một nốt nhạc và hoàn toàn miễn phí với [Let’s Encrypt](https://letsencrypt.org/).

Việc cài đặt package Certbot cho [Raspbian](https://www.raspbian.org/)(hệ điều hành cho máy tính Raspberry Pi) có thể gặp lỗi "Unable to locate package certbot". Trên Raspbian, cần cài đặt Certbot như một gói [backport](https://backports.debian.org/).

{% include toc title="Contents" %}

## Step 1: Thêm nguồn backport Debian Jessie:

Mở Terminal. Các lệnh chạy bằng quyền root nên ta chạy

~~~bash
su
~~~

Tiếp theo thêm nguồn backport

~~~bash
echo "deb http://ftp.debian.org/debian jessie-backports main" \
> /etc/apt/sources.list.d/backports.list
~~~

## Step 2: apt-get update

Tôi gặp lỗi như sau khi chạy `apt-get update`:


> W: GPG error: http://ftp.debian.org jessie-backports InRelease: The following signatures couldn’t be verified because the public key is not available: NO_PUBKEY 8B48AD6246925553 NO_PUBKEY 7638D0442B90D010


Hai khoá "8B48AD6246925553", "7638D0442B90D010" hiện ở thông báo lỗi cần được thêm vào gpg keyring.

Chạy liên tiếp các lệnh:

~~~bash
gpg --keyserver pgpkeys.mit.edu --recv-key 8B48AD6246925553
~~~

~~~bash
gpg -a --export 8B48AD6246925553 | sudo apt-key add -
~~~

~~~bash
gpg --keyserver pgpkeys.mit.edu --recv-key 7638D0442B90D010
~~~

~~~bash
gpg -a --export 7638D0442B90D010 | sudo apt-key add -
~~~

Sau đó update package list:

~~~bash
apt-get update
~~~


## Step 3: Cài Certbot

Cài Certbot bằng lệnh:

~~~bash
apt-get install certbot -t jessie-backports
~~~