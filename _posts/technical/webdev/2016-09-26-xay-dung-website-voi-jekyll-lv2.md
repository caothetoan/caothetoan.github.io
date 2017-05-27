---
layout: single
title:  "Kinh nghiệm tạo website cá nhân với Jekyll (tiếp)"
subtitle: "Thêm tên miền riêng, tạo trang categories, tags, tìm kiếm, Sitemap"
date:   2016-09-26
categories: [WebDev]
tags: [Jekyll, website]
permalink: /blogging/kinh-nghiem-tao-webiste-ca-nhan-voi-jekyll-lv2/
header:
  overlay_image: "/assets/img/blogging/jekyll/jekyllhomepage.png"
og_image: "https://vietanhdev.com/assets/img/assets/img/blogging/jekyll/vietanhdevdotcom20160916.png"
---

![Website VietAnhDev.com sau khi chuyển sang Jekyll]({{ site.url }}{{ site.baseurl }}/assets/img/blogging/jekyll/vietanhdevdotcom20160916.png)

*Hình ảnh Website VietAnhDev.com sau khi chuyển sang Jekyll*

## Level 2!

Trước đây vài ngày tôi có viết bài [Kinh nghiệm tạo website cá nhân với Jekyll (level 1)](https://vietanhdev.com/blogging/kinh-nghiem-tao-webiste-ca-nhan-voi-jekyll/), nói về những kinh nghiệm đầu tiên để setup một trang Jekyll. Bài này là phần tiếp theo, về:

* Sử dụng tên miền riêng
* Tạo trang Categories, Tags
* Tạo trang tìm kiếm
* Tạo Sitemap

### Sử dụng tên miền riêng cho Website

Bạn muốn sử dụng một tên miền đã đăng kí được cho website của mình, ví dụ: [vietanhdev.com](https://vietanhdev.com), [blog.vietanhdev.com](https://vietanhdev.com), [tenban.net](https://vietanhdev.com), trước hết chúng ta cần thay đổi bản ghi DNS của tên miền để trỏ tới hosting của Github Pages. Bạn hãy thêm bản ghi A (A record) tại phần thiết lập DNS của tên miền trỏ tới `192.30.252.153` và `192.30.252.154`. Ở đây tôi sử dụng dịch vụ DNS của [Cloudflare](https://www.cloudflare.com).

![DNS Setup Github Pages]({{ site.url }}{{ site.baseurl }}/assets/img/blogging/jekyll/DNS-setup-github-pages.png)

Tiếp theo chúng ta thêm một file tên `CNAME` có nội dung là tên miền bạn đã trỏ tới Github. Ví dụ file `CNAME` của tôi:

~~~
vietanhdev.com
~~~

Bạn có thể tạo file mới trên Github bằng cách truy cập vào địa chỉ chứa mã nguồn website của bạn dạng: `https://github.com/<tên đăng nhập Github>/<tên đăng nhập Github>.github.io` và Chọn **Create new file**.

Việc cuối cùng chúng ta cần làm là mở file `_config.yml` và chỉnh sửa một số thiết lập url (và có thể là baseurl) (đường dẫn đến website của bạn). Tìm đến đoạn có nội dung tương tự thế này và chỉnh sửa lại cho phù hợp với tên miền mới.

~~~
url: "http://example.github.io"
baseurl: ""
~~~

Sau khi hoàn thành tất cả các thiết lập, hãy kiểm tra xem Website của bạn hoạt động tốt với địa chỉ mới chưa.

### Thêm trang Categories (danh mục) và Tags (thẻ) cho Website của bạn

Đối với các bạn viết blog thì một trang **Categories** hay thống kê **Tags** rất quan trọng để các bài viết của bạn có thể được dễ dàng tìm thấy trong các mục phân loại.

Để thêm các phân loại hay gắn thẻ cho các bài viết của bạn, hãy sử dụng đoạn mã như sau đầu mỗi bài viết:

~~~
---
categories: [danh mục 1, danh mục 2]
tags: [tag 1, tag 2, tag 3]
---
~~~

Tiếp đó là tạo trang **Categories** thôi: Tạo file `categories.html` tại thư mục gốc của mã nguồn, và copy nội dung sau đây vào:

~~~html{% raw %}
---
layout: page
title: Categories
---

<div class="tags-expo">
  <div class="tags-expo-list">
    {% for tag in site.categories %}
    <a href="#{{ tag[0] | slugify }}" class="post-tag">{{ tag[0] }}</a>
    {% endfor %}
  </div>
  <hr/>
  <div class="tags-expo-section">
    {% for tag in site.categories %}
    <h2 id="{{ tag[0] | slugify }}">{{ tag[0] }}</h2>
    <ul class="tags-expo-posts">
      {% for post in tag[1] %}
        <a class="post-title" href="{{ site.baseurl }}{{ post.url }}">
      <li>
        {{ post.title }} <br/>
      <small class="post-date">{{ post.date | date_to_string }}</small>
      </li>
      </a>
      {% endfor %}
    </ul>
    {% endfor %}
  </div>
</div>
{% endraw %}
~~~

Tạo trang **Tags** : Thêm file `tags.html` có nội dung như sau:

~~~html{% raw %}
---
layout: page
title: Tags
subtitle: Browse this website by tag.
---

# Tags
Click on each line to get to the relevant archive section.

<div class='list-group'>
  {% assign tags_list = site.tags %}

  {% if tags_list.first[0] == null %}
    {% for tag in tags_list %}
      <a href="/tags#{{ tag }}-ref" class='list-group-item'>
        {{ tag }} <span class='badge'>{{ site.tags[tag].size }}</span>
      </a>
    {% endfor %}
  {% else %}
    {% for tag in tags_list %}
      <a href="/tags#{{ tag[0] }}-ref" class='list-group-item'>
        {{ tag[0] }} <span class='badge'>{{ tag[1].size }}</span>
      </a>
    {% endfor %}
  {% endif %}

  {% assign tags_list = nil %}
</div>

<hr>

# Table of content
Click on each post title to view it.

{% for tag in site.tags %}
  <h2 class='tag-header' id="{{ tag[0] }}-ref">{{ tag[0] }}</h2>
  <ul>
    {% assign pages_list = tag[1] %}

    {% for node in pages_list %}
      {% if node.title != null %}
        {% if group == null or group == node.group %}
          {% if page.url == node.url %}
          <li class="active"><a href="{{node.url}}" class="active">{{node.title}}</a></li>
          {% else %}
          <li><a href="{{node.url}}">{{node.title}}</a></li>
          {% endif %}
        {% endif %}
      {% endif %}
    {% endfor %}

    {% assign pages_list = nil %}
    {% assign group = nil %}
  </ul>
{% endfor %}
{% endraw %}
~~~

Sau khi tạo các trang **Categories** và **Tags**, bạn có thể truy cập chúng tại địa chỉ `<website url>/categories/` (vd [https://vietanhdev.com/categories/](https://vietanhdev.com/categories/) ) và (vd `<website url>/tags/` [https://vietanhdev.com/tags/](https://vietanhdev.com/tags/) ).

**Một số ảnh chụp màn hình trang *Categories* và *Tags* của tôi:**

![Trang Categories]({{ site.url }}{{ site.baseurl }}/assets/img/blogging/jekyll/categories-page-vietanhdevdotcom.png)

![Trang Tags]({{ site.url }}{{ site.baseurl }}/assets/img/blogging/jekyll/tags-page-vietanhdevdotcom.png)

### Thêm trang tìm kiếm

Như các bạn đã biết, Jekyll sẽ giúp chúng ta tạo ra các trang web tĩnh. Điều này có nghĩa là sẽ không có các xử lí phía server như php, java, ASP,... Do vậy việc tìm kiếm tại trang web của chúng ta sẽ phải sử dụng tới công cụ của Google: Custom Search Engine.

Truy cập [https://cse.google.com/cse/ ](https://cse.google.com/cse/) và nhấp **Create a custom search engine** nhé. Bạn sẽ được chuyển tới trang tạo mới công cụ tìm kiếm: https://cse.google.com/cse/create/new. Tại đây, hãy nhập đầy đủ các thông tin cho công cụ tìm kiếm của bạn.

![Tạo Google Custom Search]({{ site.url }}{{ site.baseurl }}/assets/img/blogging/jekyll/google-custom-search.png)

Sau khi tạo xong Google Custom Search, nhấp **Get the code** để lấy mã.

![Tạo Google Custom Search]({{ site.url }}{{ site.baseurl }}/assets/img/blogging/jekyll/gse-get-code.png)

Tạo file `search.md` trong thư mục gốc website với nội dung tương tự như sau (thay nội dung nằm trong cặp thẻ `<div id="search-box">` đến `</div>` bằng mã bạn copy được ở trang Google Custom Search vừa rồi). Vậy là bạn đã xây dựng thành công công cụ tìm kiếm cho website của mình rồi. Bạn có thể bắt đầu sử dụng tại `<website url>/search/` (vd `https://vietanhdev.com/search/`).

~~~html{% raw %}
---
layout: page
title: "Search"
subtitle: Feeling lost? Look for things in my blog.
---

<div id="search-box">
	<script>
	  (function() {
	    var cx = '017506748519218477146:5fskv8iekvu';
	    var gcse = document.createElement('script');
	    gcse.type = 'text/javascript';
	    gcse.async = true;
	    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
	    var s = document.getElementsByTagName('script')[0];
	    s.parentNode.insertBefore(gcse, s);
	  })();
	</script>
	<gcse:search></gcse:search>
</div>
{% endraw %}
~~~

### Tạo Sitemap

Việc có một **Sitemap** và submit lên Google sẽ giúp Google index trang của bạn nhanh hơn. Tạo file  `Sitemap.xml` với nội dung như sau:

~~~html{% raw %}
---
layout: null
sitemap:
  exclude: 'yes'
---
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  {% for post in site.posts %}
    {% unless post.published == false %}
    <url>
      <loc>{{ site.url }}{{ post.url }}</loc>
      {% if post.sitemap.lastmod %}
        <lastmod>{{ post.sitemap.lastmod | date: "%Y-%m-%d" }}</lastmod>
      {% elsif post.date %}
        <lastmod>{{ post.date | date_to_xmlschema }}</lastmod>
      {% else %}
        <lastmod>{{ site.time | date_to_xmlschema }}</lastmod>
      {% endif %}
      {% if post.sitemap.changefreq %}
        <changefreq>{{ post.sitemap.changefreq }}</changefreq>
      {% else %}
        <changefreq>monthly</changefreq>
      {% endif %}
      {% if post.sitemap.priority %}
        <priority>{{ post.sitemap.priority }}</priority>
      {% else %}
        <priority>0.5</priority>
      {% endif %}
    </url>
    {% endunless %}
  {% endfor %}
  {% for page in site.pages %}
    {% unless page.sitemap.exclude == "yes" %}
    <url>
      <loc>{{ site.url }}{{ page.url | remove: "index.html" }}</loc>
      {% if page.sitemap.lastmod %}
        <lastmod>{{ page.sitemap.lastmod | date: "%Y-%m-%d" }}</lastmod>
      {% elsif page.date %}
        <lastmod>{{ page.date | date_to_xmlschema }}</lastmod>
      {% else %}
        <lastmod>{{ site.time | date_to_xmlschema }}</lastmod>
      {% endif %}
      {% if page.sitemap.changefreq %}
        <changefreq>{{ page.sitemap.changefreq }}</changefreq>
      {% else %}
        <changefreq>monthly</changefreq>
      {% endif %}
      {% if page.sitemap.priority %}
        <priority>{{ page.sitemap.priority }}</priority>
      {% else %}
        <priority>0.3</priority>
      {% endif %}
    </url>
    {% endunless %}
  {% endfor %}
</urlset>
{% endraw %}
~~~

Sitemap này sẽ được truy cập qua địa chỉ `<website url>/Sitemap.xml` (vd `https://vietanhdev.com/Sitemap.xml`).

Trên đây là một số kinh nghiệm sử dụng Jekyll nâng cao (Level 2). Chúc các bạn tạo được trang web bằng Jekyll ưng ý nhất!
