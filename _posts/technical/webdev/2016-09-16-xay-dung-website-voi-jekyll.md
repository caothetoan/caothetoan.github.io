---
layout: single
title:  "Kinh nghiệm tạo website cá nhân với Jekyll"
subtitle: "Một số kinh nghiệm tôi thu được sau khi chuyển website cá nhân từ Wordpress sang Jekyll"
date:   2016-09-16
categories: [Web]
tags: [Jekyll, website]
permalink: /blogging/kinh-nghiem-tao-webiste-ca-nhan-voi-jekyll/
header:
  overlay_image: "/assets/img/blogging/jekyll/jekyllhomepage.png"
og_image: "https://vietanhdev.com/assets/img/blogging/jekyll/vietanhdevdotcom20160916.png"
---


![Website VietAnhDev.com sau khi chuyển sang Jekyll](/assets/img/blogging/jekyll/vietanhdevdotcom20160916.png)

*Hình ảnh Website VietAnhDev.com sau khi chuyển sang Jekyll*

**Chú ý:** Bài viết này tôi muốn hướng đến các bạn đã có chút kinh nghiệm về web. Công nghệ Jekyll mà tôi muốn chia sẻ là công nghệ khá tuyệt vời để tạo các website cá nhân, tuy nhiên việc cấu hình và sử dụng hơi phức tạp chút.

## Vào đề

Trước đây vài ngày, tôi có chuyển hẳn website từ [CMS Wordpress](https://vi.wikipedia.org/wiki/WordPress) sử dụng Namecheap hosting sang [Jekyll](https://jekyllrb.com/) sử dụng [Github Pages](https://pages.github.com/) lưu trữ website trực tiếp trên Github. Lúc đầu thì việc sử dụng Jekyll thật khó khăn và có những lúc làm tôi thấy hơn nản (quen việc dùng [WordPress](https://vi.wikipedia.org/wiki/WordPress) quá dễ dàng rồi), nhưng sau vài ngày sử dụng Jekyll tôi lại thấy điều ngược lại: Thật quá dễ dàng và thoải mái!! Chính vì vậy tôi muốn viết bài này chia sẻ cho mọi người.

### Trước hết, một số định nghĩa cho bạn nào chưa biết:

![WordPress](/assets/img/blogging/jekyll/wordpress.png)

* **CMS WordPress** là một trong những hệ quản trị nội dung phổ biến nhất giúp bạn có thể dễ dàng tạo các website của mình với hàng loạt các tùy biến về giao diện, tối ưu cho SEO. Bạn có thể làm rất nhiều việc với WordPress từ viết blog, làm website bán hàng, forum...vv. Rất nhiều website lớn nhỏ khác nhau đang sử dụng WordPress. CMS này được viết trên ngôn ngữ PHP và website nó tạo ra là các web động với nhiều tương tác người dùng nhé.

![Jekyll](/assets/img/blogging/jekyll/jekyll.png)

* **Jekyll** lại là một thứ hoàn toàn khác. Nó là một phần mềm được viết trên Ruby giúp tạo ra các website tĩnh. Nó không có nhiều khả năng như WordPress, hơi khó sử dụng với người mới nhưng với việc tạo các website cá nhân, blog, trang tài liệu thì khả năng sinh web tĩnh cho phép nó đạt hiệu suất vượt trội. Bạn có thể tùy biến đủ kiểu với website của mình và lưu trữ nó trên chính Github - dịch vụ lưu trữ mã nguồn một cách hoàn toàn miễn phí. Một ưu điểm nữa là web tĩnh sẽ cho phép website của bạn miễn nhiễm với các mã độc, sự tấn công của hacker chúng ta thường thấy trên các CMS như WordPress.

### Tại sao sử dụng Github Pages để lưu trữ website cá nhân

![Github](/assets/img/blogging/jekyll/github.png)

Github là dịch vụ lưu trữ mà nguồn quen thuộc với các bạn lập trình viên. Github cũng cung cấp dịch vụ Github Pages cho phép bạn lưu trữ các website của dự án, website cá nhân và tổ chức trên chính Github. Ưu điểm của việc sử dụng Github lưu trữ website cá nhân là:

* **Nó hoàn toàn miễn phí**. Nó đã giúp tôi tiết kiệm được hơn 1 triệu đồng (tôi phải sử dụng để thuê hosting WordPress bên Namecheap mỗi năm). Bạn có thể sử dụng tên miền miễn phí dạng <tên tk github>.github.io, tuy nhiên cũng có thể dùng luôn các tên miền bạn sở hữu như vietanhdev.com :D

* **Hỗ trợ Jekyll**.  Jekyll là phần mềm tạo các website tĩnh từ các file Markdown hoặc html. Thông thường bạn cần biên dịch tất cả các file sang mã html trước rồi mới upload lên các máy chủ lưu trữ. Nhưng với Github, điều đó là không cần thiết. Bạn có thể chỉnh sửa các bài viết, các trang của website sử dụng Jekyll và commit lên Github, vậy là xong.

* **Khá quen thuộc với các lập trình viên**. Nếu bạn là một lập trình viên thì việc commit code lên Github là một việc khá quen thuộc rồi. Làm website, viết blog theo cách đó chắc chắn sẽ làm bạn thấy thoải mái.

## OK. Tiến hành làm website bằng Jekyll nào.

### 1.Level cơ bản

> Level cơ bản sử dụng Github Pages để lưu trữ website và theme [Beautiful Jekyll](https://github.com/daattali/beautiful-jekyll) để tạo website cá nhân với Jekyll.

Trước tiên chúng ta hãy tìm một theme (giao diện) cơ bản để bắt đầu với Website nhé. Có rất nhiều theme tôi thấy rất ok tại [jekyllthemes.org](http://jekyllthemes.org/) hoặc [themes.jekyllrc.org](http://themes.jekyllrc.org/). Tuy nhiên với Level cơ bản sử dụng Github Pages, chúng ta sẽ bắt đầu với một theme đơn giản, nhưng cá nhân tôi thấy là rất tốt để tạo một website cá nhân : Beautiful Jekyll của Dean Attali.

**Fun fact:** Website hiện tại của Việt Anh sử dụng theme này.

- Để sử dụng theme này với Github Pages, trước tiên bạn cần [đăng kí một tài khoản Github](https://github.com/join). Github thì khá quen thuộc với lập trình viên rồi. Bạn nên lập luôn một cái để sử dụng cho nhiều mục đích khác sau này. Lưu ý là **Username** Github của bạn sẽ quyết định địa chỉ website cá nhân được lưu trữ trên Github. Ví dụ Username của Việt Anh là `vietanhdev.com` thì tên miền mặc định cho website được Github cấp là `vietanhdev.github.io`.

- Tiếp theo bạn nên làm quen với ngôn ngữ sử dụng chủ yếu để viết nội dung cho Jekyll Website là Markdown. Ngôn ngữ này cũng được sử dụng khá phổ biến trong Github để viết các file `README.Md` - giới thiệu chung cho mỗi dự án nguồn mở trên Github. Bạn có thể học Markdown tại [www.markdowntutorial.com](http://www.markdowntutorial.com/) (tiếng Anh) hoặc Hướng dẫn sử dụng Markdown tại [đây](https://namnguyen.gitbooks.io/hoc-su-dung-markdown/content/).

#### Bắt đầu với theme Beautiful Jekyll nào.

**Mang Beautiful Jekyll về làm trang web của bạn**

- Đăng nhập Github.

- Truy cập trang mã nguồn Beautiful Jekyll trên Github: [https://github.com/daattali/beautiful-jekyll](https://github.com/daattali/beautiful-jekyll).

- Fork (tạo một bản sao) mã nguồn Beautifull Jekyll về tài khoản Github của mình bằng cách ấn nút *Fork* ở góc trên bên phải của trang mã nguồn.

- Đổi tên repository vừa Fork thành dạng `<username>.github.io` , trong đó `<username>` là tên đăng nhập Github của bạn.

- Chỉnh sửa file `_config.yml` để tạo các thiết lập ban đầu cho website của bạn. Mở file đó lên thì các dòng có # ở đầu là các dòng comment hướng dẫn bạn chỉnh sửa file cấu hình đó. Sau khi sửa xong các file ở Github, bạn ấn Commit changes để lưu lại thay đổi. Đối với website chạy bằng Jekyll thì mỗi lần bạn sửa một file nào đấy là Github sẽ tự động dịch lại toàn bộ mã nguồn website của bạn sang định dạng khả dụng cho một trang web.

- Sau khi bạn chỉnh sửa xong thiết lập về đường dẫn (phần url trong file `_config.yml`), hãy truy cập <username>.github.io để xem trang web của bạn đã tạo thành công chưa.

Mô tả các bước của tôi khá tổng quát, có thể các bạn chưa hình dung được. Và thêm nữa, trăm nghe không bằng một thấy, trăm đọc không bằng xem thực hành. Tôi xin phép được trích hình ảnh hướng dẫn cài theme Beautiful Jekyll của tác giả Dean Attali để các bạn hình dung được:

![Cài đặt website với theme Beautiful Jekyll](/assets/img/blogging/jekyll/install-steps.gif)

**Kinh nghiệm** : Nếu website của bạn build bị lỗi ở chỗ nào đó thì Github sẽ gửi thông báo về email của bạn. Hãy mở nó lên và kiểm tra xem có vấn đề gì xảy ra nhé. Nếu lỗi nằm ở file cấu hình `_config.yml` (được viết bằng ngôn ngữ YAML) thì bạn hãy sử dụng công cụ tại [http://codebeautify.org/yaml-validator](http://codebeautify.org/yaml-validator) - Copy toàn bộ nội dung file `_config.yml` vào đó và kiểm tra lỗi nhé.

**Cấu trúc thư mục Jekyll**

Bạn vào trang Github chứa mã nguồn Beautiful Jekyll mình vừa Fork về sẽ thấy một loạt thư mục, tập tin với chức năng khác nhau bạn cần nắm để từng bước làm chủ website của mình.

- Một số file ở thư mục gốc cần chú ý:
   + `_config.yml` : File cấu hình của Jekyll. Bạn cần quẩy file này tưng bừng lên để nắm được cách tùy chỉnh trang Jekyll của mình.
   + `index.html` : Đây là mã nguồn của trang chủ. Bên trong ngoài mã HTML còn có YAML, Liquid templating.
   + `aboutme.md` : trang giới thiệu về bản thân bạn trên website. Tôi nghĩ bạn nên bắt đầu chỉnh sửa file này trước.
- Các thư mục cần chú ý cho người mới:
   + `_posts` : chứa các bài viết trên trang của bạn.
   + `_layouts` : các cấu trúc trang sửa dụng trong các trang, các bài viết trên blog của bạn.
   + `css, js` : chứa các tập tin css, js tùy biến giao diện và làm website của bạn trở nên sinh động hơn.

**Cách viết một bài viết (xây dựng một trang) trong Jekyll**

Bạn có thể tạo trang, viết blog bằng Markdown, HTML, các mã Liquid templating, tuy nhiên có vài điểm cần lưu ý về cấu trúc:

- Tên bài viết nên đặt theo kiểu `yyyy-mm-dd-ten-bai-viet.md`. ví dụ : `2016-09-13-xay-dung-website-voi-jekyll.md`.
- Đầu mỗi file bài viết (trang) sẽ có các mã YAML chứa thông tin bài viết (trang) đó. Mã này được viết giữa hai dòng chứa ba gạch nối (-).

~~~
---
<mã YAML>
---
~~~

Ví dụ mã YAML của bài viết này:

~~~
---
layout: post
title:  "Kinh nghiệm tạo website cá nhân với Jekyll"
subtitle: "Một số kinh nghiệm tôi thu được sau khi chuyển website cá nhân từ Wordpress sang Jekyll"
date:   2016-09-16
categories: [Jekyll]
tags: [Jekyll, website]
permalink: /blogging/kinh-nghiem-tao-webiste-ca-nhan-voi-jekyll/
bigimg: "/assets/img/blogging/jekyll/jekyllhomepage.png"
---
~~~

Một số mã YAML mà theme Beautiful Jekyll hỗ trợ:

Parameter   | Mô tả
----------- | -----------
`title`       | Tiêu đề trang / bài viết
`subtitle`    | Tiêu đề phụ (hiện dưới tiêu đề chính)
`bigimg`      | Nhúng ảnh to đầu trang / bài viết. Bạn có thể đưa link một ảnh hoặc một danh sách
`comments`    | Để thêm chức năng comment (sử dụng disqus) bạn có thể dùng *comments: true*
`show-avatar` | Ẩn/Hiện hình avartar trong trang / bài viết bất kì
`share-img`   | Cung cấp link tới ảnh bạn muốn hiện khi bài viết được share trên Facebook, Twitter.
`social-share`| Bật/Tắt hàng nút share của các bài viết
`layout`      | Cấu trúc trang. Bạn có thể sử dụng page cho trang, post cho bài viết.
`js`          | Danh sách các file js local (trong cùng repository Github) (vd. */js/mypage.js*)
`ext-js`     | Danh sách các file js nhúng từ ngoài (vd. *//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.2/underscore-min.js*)
`css`         | Danh sách các file css local (trong cùng repository Github)
`ex-css`      | Danh sách các file css nhúng từ ngoài
`googlefonts` | Danh sách Google Fonts được sử dụng (vd. *["Monoton", "Lobster"]*)



Sau khi Fork cái theme Beautiful Jekyll về, cấu hình một chút. Hãy sửa nội dung các file `index.html`, `aboutme.md`, bạn có thể xóa hết các file trong thư mục `_posts` và bắt đầu viết bài. Tuy nhiên với người mới tôi nghĩ là các bạn nên đọc qua phần YAML của mỗi bài viết có sẵn trong `_posts` để hiểu cách viết và copy sang chỗ nào đó nếu bạn muốn tận dụng làm luôn cấu trúc YAML cho các bài viết tiếp theo.

Trên đây là hướng dẫn hết sức cơ bản về việc sử dụng Jekyll và theme Beautiful Jekyll để tạo website. Việt Anh còn khá nhiều thủ thuật và kinh nghiệm muốn chia sẻ. Hẹn gặp lại các bạn trong [Level 2](//vietanhdev.com/blogging/kinh-nghiem-tao-webiste-ca-nhan-voi-jekyll-lv2/) - Level nâng cao nhé.

Trước khi kết thúc **Level 1**, tôi muốn chia sẻ một vài link để các bạn có thể tìm hiểu thêm về Jekyll:

- Trang chủ Jekyll: [https://jekyllrb.com/](https://jekyllrb.com/)
- Github Pages: [https://pages.github.com/](https://pages.github.com/)
- Một trang hướng dấn sd Jekyll trên Github bằng tiếng Việt: [http://daynhauhoc.com/t/lam-blog-bang-jekyll-su-dung-host-cua-github-level-sieu-co-ban/7030](http://daynhauhoc.com/t/lam-blog-bang-jekyll-su-dung-host-cua-github-level-sieu-co-ban/7030)
- Blog có khá nhiều bài viết hay về Jekyll: [https://blog.webjeda.com/](https://blog.webjeda.com/)

**Update 26/09/2016:** Hiện tại đã có [Level 2 - Kinh nghiệm tạo website cá nhân với Jekyll (tiếp)](https://vietanhdev.com/blogging/kinh-nghiem-tao-webiste-ca-nhan-voi-jekyll-lv2/).
