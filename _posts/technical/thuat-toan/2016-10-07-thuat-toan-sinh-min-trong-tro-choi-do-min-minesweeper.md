---
layout: single
title:  "Xây dựng thuật toán sinh mìn trong trò chơi dò mìn Minesweeper viết bằng C"
date:   2016-10-07
categories: [Algorithms]
tags: [Dò mìn, sinh, ngẫu nhiên]
permalink: /thuat-toan/thuat-giai-sinh-min-trong-tro-choi-do-min-minesweeper/
header:
  overlay_image: "/assets/img/thuat-toan/sinh-min-minesweeper/minesweeper-terminal.png"
---

Gần đây, Việt Anh mới viết lại trò chơi dò mìn cổ điển bằng ngôn ngữ C. Trò chơi này có thể thực hiện với những thuật toán đơn giản. Bài viết này sẽ nói về thuật toán khởi tạo mìn mỗi lúc bắt đầu trò chơi.

Trước hết tôi muốn gửi bạn file mã nguồn trò dò mìn tôi viết:

[https://github.com/vietanhdev/minesweeper-in-c/blob/master/minesweeper.c](https://github.com/vietanhdev/minesweeper-in-c/blob/master/minesweeper.c)

### Thuật toán

Ở trò chơi này, tôi sử dụng mảng nguyên hai chiều `p[i][j]` (i chạy từ 0 > số hàng lớn nhất - 1; j chạy từ 0 > số cột lớn nhất - 1) để lưu trữ trạng thái mìn của các ô với các giá trị:

- 9: "ô có mìn"
- 0: "ô trống và xung quanh không có mìn"
- 1: "ô trống xung quanh có 1 mìn"
- 2: "ô trống xung quanh có 2 mìn"
- 3: "ô trống xung quanh có 3 mìn"
- 4: "ô trống xung quanh có 4 mìn"

Trong đó khai báo hai hằng số const `EMPTY`, `MINE` tương ứng với giá trị 0 (ô trống) và 9 (có mìn).

**Minh họa giá trị mảng p tại một thời điểm (level 2):**

![Sinh mìn Minesweeper]({{ site.url }}{{ site.baseurl }}/assets/img/thuat-toan/sinh-min-minesweeper/minesweeper-reveal-map.svg)

Khi người chơi bắt đầu trò chơi mới ở level 2, nhiệm vụ của chương trình là tạo ra một bàn kích thước 16x16 với 30 quả mìn đặt ngẫu nhiên. Tôi sử dụng thuật toán sinh số ngẫu nhiên để tìm lần lượt các ô đặt mìn, rồi sau đó đếm số mìn xung quanh các ô trống và ghi số lượng (1, 2, 3, 4) vào các ô trống đó. Lưu ý là ở trò chơi này chúng ta không để ô nào được bao quanh bởi > 4 quả mìn (tức là mỗi ô chỉ được bao quanh bởi 0, 1, 2, 3 hoặc 4 quả). Việc này cũng cần được kiểm tra trong lúc sinh mìn.

**Thuật toán được mô tả như lưu đồ sau:**

![Lưu đồ thuật toán sinh mìn Minesweeper]({{ site.url }}{{ site.baseurl }}/assets/img/thuat-toan/sinh-min-minesweeper/sinh-min-thuat-toan.svg)

### Thuật toán là vậy, code trên C thế nào?

#### Sinh mìn ngẫu nhiên:

Chúng ta sẽ đi sinh một số ngẫu nhiên có giá trị từ 0 đến (số ô trong bàn - 1). Vị trí hàng (0 -> hàng lớn nhất) và vị trí cột (0 -> cột lớn nhất) được tính như sau:

~~~c
row = (r - 1) / (maxcol + 1);
col = r - row * (maxrow + 1) - 1;
~~~

`row`: hàng; `col`: cột; `maxcol`: chỉ số cột lớn nhất; `maxrow`: chỉ số hàng lớn nhất.


Chúng ta sẽ sử dụng hàm `rand()` có sẵn trong thư viện `stdlib.h` để tạo một số ngẫu nhiên từ 0 đến (số ô trong bàn - 1). Vd Code để tạo số từ 0 đến 19 như sau:

~~~c
#include <stdlib.h> //Khai báo thư viện stdlib.h
...
int c
time_t t;
srand((unsigned) time(&t)); // Khởi tạo bộ tạo số ngẫu nhiên
c = rand() % 20; // In ra một giá trị ngẫu nhiên trong đoạn [0;19] và gán vào biến c
...
~~~

Việc còn lại là kết hợp hàm `rand()` để sinh ra số hàng và số cột mong muốn thôi. Bạn có thể tham khảo trong mã nguồn chương trình của tôi.

### Mã nguồn mô phỏng thuật toán (dựa trên mã nguồn chương trình tôi đã viết):

**Chú ý:** `maxrow`, `maxcol` lần lượt là chỉ số của hàng lớn nhất và cột lớn nhất (ở dưới cùng và đầu cùng bên phải).

~~~c
// Hàm đến số mìn quanh vị trí (row, col)
int mi_count(int row, int col){
  int i,j;
  int near_minum = 0; // Biến đếm số mìn trong ô

  // Lặp qua tất cả các ô xung quanh ô đang xét
  for (i = -1; i < 2; i++) {
    for (j = -1; j < 2; j++) {
      if (row + i >= 0 && row + i <= maxrow && col + j >= 0 && col + j <= maxcol){
        if (p[row + i][col + j] == MINE)
        	near_minum += 1;
      }
    }
  }

  return near_minum;
}

// Hàm tạo mìn
void gen_mine(){
  int i, j;
  time_t t;
  int r;
  int row, col;
  int iminum = 0; // số mìn đã đặt và b
  srand((unsigned) time(&t));
  while (iminum < minum) { // Lặp thêm mìn với điều kiện số mìn đã đặt < số mìn cần thiết
    r = rand() % ((maxrow + 1) * (maxcol + 1));
    row = (r - 1) / (maxcol + 1); // Sinh số hàng ngẫu nhiên
    col = r - row * (maxrow + 1) - 1; // Sinh số cột ngẫu nhiên

    int should_add = 1;
    /* Biến này lưu trạng thái của ô còn đưa được mìn vào không (1: có; 0: không).
    Chúng ta sẽ kiểm tra tất cả các ô trống xung quanh của ô đang xét.
    Với mỗi ô lại đếm số mìn xung quanh nó. Nếu tồn tại một ô trống ở xung quanh
    ô đang xét đã nằm cạnh 4 quả mìn, thì ta không thể để thêm một quả nữa cạnh nó.
    (số mìn xung quanh mỗi ô trống luôn <= 4 */

    for (i = -1; i < 2; i++) {
	    for (j = -1; j < 2; j++) {
	      if (p[row + i][col + j] != MINE && mi_count(row + i, col + j) > 3) {
	      	should_add = 0;
	      }
	    }
	  }

    if (p[row][col] == EMPTY && should_add == 1) { /* Nếu ô đang xét còn trống, và thỏa các điều kiện ở trên thì thực hiện đặt mìn */
      p[row][col] = MINE;
      iminum += 1;
    };
  }
}
~~~


**Lưu ý:** Thuật toán của tôi chọn ngẫu nhiên một ô trống ở trong bàn, tức là ô đó có thể đã chứa mìn hoặc không chứa mìn. Cách tốt hơn là sau khi đặt mìn các bạn đánh dấu ô đó lại, sau đó ở vòng lặp sau chỉ thực hiện chọn ngẫu nhiên một ô từ trong số các ô không chứa mìn. Thử xem nhé!

Sau khi thực hiện tạo toàn bộ số mìn cần thiết, ta sẽ đếm số mìn ở xung quanh từng ô trống và ghi các giá trị tương ứng 0, 1, 2, 3, 4 vào ô trống đó. Đoạn chương trình làm việc này như sau:

~~~c
void gen_num(){
  int i,j;
  for (i = 0; i <= maxrow; i++) {
    for (j = 0; j <= maxcol; j++) {
      if (p[i][j] == EMPTY){ // nếu ô đang xét trống
        p[i][j] = mi_count(i, j); // gán giá trị số mìn xung quanh
      }
    }
  }
}
~~~

Dò mìn là một trò chơi khá nổi tiếng vẫn được nhiều người yêu thích. Với các bạn mới học lập trình thì trò chơi này là cơ hội tốt để chúng ta luyện tập tư duy lập trình cơ bản. Thuật giải của tôi còn nhiều chỗ có thể tối ưu. Ví dụ như thay vì phải viết hàm đếm mìn quanh một vị trí, chạy đi chạy lại với tất cả các ô xung quanh của ô định đặt mìn, ta sử dụng một mảng `min_num[][]` lưu số lượng mìn xung quanh mỗi ô. Mỗi khi đặt thêm mìn vào vị trí (i,j), ta +1 cho tất cả các vị trí xung quanh `min_num[i][j]`. Sử dụng mảng lưu số lượng mìn như vậy tiết kiệm khá nhiều chi phí tính toán. :D

Chúc mọi người có thể viết được game dò mìn của riêng mình nhé!
