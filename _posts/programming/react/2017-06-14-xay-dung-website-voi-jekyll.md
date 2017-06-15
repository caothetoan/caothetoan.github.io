---
layout: single
title:  "Tạo website cá nhân với Jekyll"
subtitle: "Chuyển website cá nhân từ Wordpress sang Jekyll"
date:   2016-09-16
categories: [Jekyll]
tags: [Jekyll, website]
permalink: /Jekyll/kinh-nghiem-tao-webiste-ca-nhan-voi-jekyll/
bigimg: "/assets/img/blogging/jekyll/jekyllhomepage.png"
---

Bắt đầu xây dựng website cá nhân sử dụng Jekyll và theme Beautiful Jekyll

Đăng nhập Github.
Truy cập trang mã nguồn Beautiful Jekyll trên Github: https://github.com/daattali/beautiful-jekyll.
Fork (tạo một bản sao) mã nguồn Beautifull Jekyll về tài khoản Github của mình bằng cách ấn nút Fork ở góc trên bên phải của trang mã nguồn.
Đổi tên repository vừa Fork thành dạng <username>.github.io , trong đó <username> là tên đăng nhập Github của bạn.
Chỉnh sửa file _config.yml để tạo các thiết lập ban đầu cho website của bạn
Quick-start Instructions

{% highlight ruby linenos %}

~ $ gem install jekyll bundler

~ $ jekyll new my-awesome-site

~ $ cd my-awesome-site

~/my-awesome-site $ bundle exec jekyll serve

{% endhighlight %}
# => Now browse to http://localhost:4000

https://jekyllrb.com/

Free hosting with GitHub Pages

Sick of dealing with hosting companies? GitHub Pages are powered by Jekyll, so you can easily deploy your site using GitHub for free—custom domain name and all.

Learn more about GitHub Pages →

Import your old & busted site or blog for use with Jekyll.

Wide Range of Available Importers

Behance
Blogger
CSV
Drupal 6
Drupal 7
EasyBlog
Enki
Ghost
Google Reader
Joomla
Joomla 3
Jrnl
Marley
Mephisto
Movable Type
Posterous
RSS
S9Y
S9Y Database
Textpattern
Third-party
Tumblr
Typo
WordPress
WordPress

Install additional gems

To use this importer, you need to install these additional gems: `gem install unidecode sequel mysql2 htmlentities`

To import your posts from a self-hosted WordPress installation, run:
{% highlight ruby linenos %}

$ ruby -rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::WordPress.run({
      "dbname"   => "",
      "user"     => "",
      "password" => "",
      "host"     => "localhost",
      "socket"   => "",
      "table_prefix"   => "wp_",
      "site_prefix"    => "",
      "clean_entities" => true,
      "comments"       => true,
      "categories"     => true,
      "tags"           => true,
      "more_excerpt"   => true,
      "more_anchor"    => true,
      "extension"      => "html",
      "status"         => ["publish"]
    })'

{% endhighlight %}
http://import.jekyllrb.com/docs/wordpress/

RSS

To import your posts from an RSS feed (local or remote), run:
{% highlight ruby linenos %}

$ ruby -rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::RSS.run({
      "source" => "my_file.xml"
    })'

{% endhighlight %}
The source field is required and can be either a local file or a remote one.

 