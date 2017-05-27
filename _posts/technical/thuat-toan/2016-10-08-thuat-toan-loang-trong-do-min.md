---
layout: single
title:  "Thuật toán loang ứng dụng trong game dò mìn"
date:   2016-10-08
categories: [Algorithms]
tags: [Dò mìn, loang]
permalink: /thuat-toan/thuat-toan-loang-trong-do-min/
header:
  overlay_image: "/assets/img/thuat-toan/loang-do-min/mat-nuoc-loang.jpg"
---

### Thuật toán loang

Thuật toán loang (thuật toán vết dầu loang) là một thuật toán dùng khá nhiều trong tin học, ứng dụng trong các bài toán thực tế như các bài toán tìm đường đi, game dò mìn, game line98...

Gọi là thuật toán loang vì nguyên lí của thuật toán này rất giống với hiện tượng loang của chất lỏng. Khi ta đổ nước xuống một về mặt phẳng khô, nước có thể loang ra những khu vực xung quanh. Tương tự, thuật toán loang (trong một ma trận) sử dụng kĩ thuật "xét các ô liền kề", rồi "loang" dần ra từ một vị trí ban đầu.

**Trong trò chơi dò mìn:** Ta sẽ thấy được sự tương tự "loang" chất lỏng trong trò dò mìn. Khi bạn mở một ô không chứa mìn sẽ kéo theo việc mở các không chứa mìn xung quanh nó. Từ ô bạn đã mở, việc mở này sẽ "loang" rộng ra các ô không chứa mìn xung quanh.

![Loang trong dò mìn]({{ site.url }}{{ site.baseurl }}/assets/img/thuat-toan/loang-do-min/minesweeper-open-1.gif)

![Loang trong dò mìn]({{ site.url }}{{ site.baseurl }}/assets/img/thuat-toan/loang-do-min/minesweeper-open-2.gif)

![Loang trong dò mìn]({{ site.url }}{{ site.baseurl }}/assets/img/thuat-toan/loang-do-min/minesweeper-open-3.gif)

![Loang trong dò mìn]({{ site.url }}{{ site.baseurl }}/assets/img/thuat-toan/loang-do-min/minesweeper-open-4.gif)

### Thuật toán loang ứng dụng trong game dò mìn

![Minesweeper by VietAnhDev]({{ site.url }}{{ site.baseurl }}/assets/img/thuat-toan/loang-do-min/minesweeper.png)

Thuật toán loang ứng dụng trong dò mìn thực ra khá đơn giản. Ta thấy vùng được mở mỗi khi người dùng click vào một ô trống là toàn bộ vùng trống chứa ô đó, với rìa là các ô có mật độ (số mìn xung quanh) lớn hơn 0. Vậy là việc mở mìn được thực hiện từ ô trống ban đầu, "loang" dần ra các ô xung quanh, thấy rìa chứa ô trống mật độ > 0 thì dừng. Thuật toán đệ quy được mô tả như sau:


- **Bước 1:** Chọn trống ban đầu là ô đang xét.
- **Bước 2:** Mở ô đang xét. Nếu ô đang xét có mật độ bằng 0, thực hiện xét tất cả các ô xung quanh nó; với mỗi ô xung quanh chưa mở, ta lại thực hiện bước 2 với nó.
- **Bước 3:** Kết thúc việc mở ô.

Như vậy, khi gặp ô trống và mật độ bằng 0, việc mở tiếp các ô xung quanh mới được thực hiện; còn khi chạm tới rìa (ô trống có mật độ > 0) thì việc xét mở tiếp các ô xung quanh được dừng lại.

**Chạy thuật toán với một góc "bản đồ" trò dò mìn như sau:**

Giả sử ban đầu có các vị trí mìn và mật độ như hình. Tất cả các ô đều chưa mở. Người chơi click mở ô màu xanh.

![Loang trong dò mìn]({{ site.url }}{{ site.baseurl }}/assets/img/thuat-toan/loang-do-min/minesweeper1.svg)

Phần ô được mở ra sau khi click vào ô màu xanh trên được biểu thị màu xanh như hình dưới:

![Loang trong dò mìn]({{ site.url }}{{ site.baseurl }}/assets/img/thuat-toan/loang-do-min/minesweeper2.svg)

Thuật toán sẽ xét tất cả các ô xung quanh ô màu xanh ban đầu từ vị trí trái, trên theo chiều kim đồng hồ. Cụ thể ô có mật độ 1 được xét đầu tiên. Vì ô này có mật độ lớn hơn 0 nên chương trình chỉ mở, không xét thêm các ô xung quanh ô 1 nữa.

![Loang trong dò mìn]({{ site.url }}{{ site.baseurl }}/assets/img/thuat-toan/loang-do-min/minesweeper3.svg)

Tiếp đó thuật toán xét đến ô số 0 (màu vàng).

![Loang trong dò mìn]({{ site.url }}{{ site.baseurl }}/assets/img/thuat-toan/loang-do-min/minesweeper4.svg)

Do ô này có mật độ bằng 0 nên bước 2 của thuật toán được thực hiện đệ quy lại với tất cả các ô trống chưa mở xung quanh ô màu vàng này. Việc mở ô lần lượt được thực hiện như các hình dưới (các ô trống được lên màu là các ô được mở).

![Loang trong dò mìn]({{ site.url }}{{ site.baseurl }}/assets/img/thuat-toan/loang-do-min/minesweeper5.svg)

![Loang trong dò mìn]({{ site.url }}{{ site.baseurl }}/assets/img/thuat-toan/loang-do-min/minesweeper6.svg)

...

![Loang trong dò mìn]({{ site.url }}{{ site.baseurl }}/assets/img/thuat-toan/loang-do-min/minesweeper7.svg)

...

Và cuối cùng toàn bộ vùng trống sẽ được mở

![Loang trong dò mìn]({{ site.url }}{{ site.baseurl }}/assets/img/thuat-toan/loang-do-min/minesweeper2.svg)

Thuật toán này đã được tôi sử dụng trong trò chơi dò mìn viết bằng ngôn ngữ C. Mã nguồn tại: [https://github.com/vietanhdev/minesweeper-in-c](https://github.com/vietanhdev/minesweeper-in-c)

**Đoạn chương trình mô tả bước 2:**

~~~c
//Mở một ô trống
void open_empty_pos(int row, int col) {
	int i, j;
	opened[row][col] = 1; // Đánh dấu ô đang xét đã được mở
	if (p[row][col] == EMPTY) { // Nếu ô đang xét trống và có mật độ bằng 0
		// Xét các ô xung quanh
		for (i = -1; i < 2; i++) {
		    for (j = -1; j < 2; j++) {
				if (i!=0 || j!=0) {
					if (row + i >= 0 && row + i <= maxrow && col + j >=0 && col + j <= maxcol) { // Nếu ô nằm trong bàn
						if (!opened[row + i][col + j])
							// Nếu ô chưa được mở
							open_empty_pos(row + i, col + j);
					}
				}
			}
		}
	}
}
~~~


**Link:**

Thông tin về trò chơi dò mìn: <a href="https://vi.wikipedia.org/wiki/D%C3%B2_m%C3%ACn_(tr%C3%B2_ch%C6%A1i)">https://vi.wikipedia.org/wiki/D%C3%B2_m%C3%ACn_(tr%C3%B2_ch%C6%A1i)</a>
