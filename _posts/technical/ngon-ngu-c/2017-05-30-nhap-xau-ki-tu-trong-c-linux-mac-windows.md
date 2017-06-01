---
layout: single
title:  "Một cách nhập xâu kí tự trong C - giải quyết vấn đề của fflush cho Linux, Mac OS"
date:   2017-05-30
categories: [C-Language]
tags: [stdin, fflush, fgets]
---

Khi lập trình C trên Windows, bạn có thể sử dụng `fflush()` để làm sạch bộ đệm trước khi nhập một xâu, tránh tình trạng "lạc trôi" của lệnh nhập xâu. Tuy nhiên khi làm việc với các hệ thống khác như Linux, hay Mac OS, mọi chuyện không đơn giản nữa: nhiều khi `fflush()` sẽ không làm việc. Bài viết này sẽ cho bạn một cách giải quyết đơn giản có thể chạy được trên cả Linux, Mac OS và cả Windows.

## Vấn đề gì khi không sử dụng `fflush()` và cả khi sử dụng nó?

### Không sử dụng `fflush()` (và các phương pháp thay thế):
Hãy xem xét đoạn chương trình sau:

~~~c
#include <stdio.h>
#include <string.h>

int main(int argc, char const *argv[])
{
    int c;
    char s[100];

    printf("c = "); scanf("%d", &c);
    printf("s = ");
    fgets(s, 100, stdin);
    if (strlen(s) > 0) // xoá kí tự '\n' ở cuối khi nhập bằng fgets
        if (s[strlen(s) - 1] == '\n')
            s[strlen(s) - 1] = 0;

    printf("c = %d\n", c);
    printf("s = %s\n", s);
    
    return 0;
}
~~~

Khi chạy chương trình ta thu được kết quả sau:

![Trôi lệnh trong C - không có fflush](/assets/img/ngon-ngu-c/troi-lenh-trong-c.png)

Rõ ràng xâu s đã không được nhập vào. Vấn đề này xảy ra do khi nhập c bằng `scanf()` thì kí tự `\n` vẫn còn lưu trong bộ đệm bàn phím. Khi lệnh nhập s (`fgets`) chạy, nó gặp kí tự `\n` trong bộ đệm do vậy trả luôn về một xâu chỉ chứa `\n`.

### Vậy khi sử dụng `fflush()` để làm sạch bộ đệm thì có vấn đề gì?
Bạn có thể giải quyết vấn đề trôi lệnh trên Windows bằng cách thêm một lệnh `fflush()` vào trước `fgets()`. Tuy vậy khi chuyển chương trình sang Linux hoặc Mac OS thì nhiều khi lệnh này sẽ không còn hoạt động.

## Phương pháp nhập xâu trong C:

Google một thời gian tôi cũng tìm được câu trả lời cho phương pháp nhập xâu trong các hệ thống ngoài Windows. Đơn giản là bạn thêm đoạn lệnh sau khi trong bộ đệm vẫn còn kí tự `\n`.

~~~c
int ch;
do { ch = getchar(); } while (ch != '\n' && ch != EOF);
~~~

Sử dụng trong chương trình bên trên thì có vẻ khá ổn. Tuy nhiên nếu trước đó không có số nguyên c được nhập thì sao? Có vẻ không ổn rồi! - Chương trình sẽ dừng lại, nhận vào một kí tự rồi mới tiếp tục chạy.

Vậy cách giải quyết thế nào? Tôi xin đưa ra cách tôi đã dùng:

~~~c
#include <string.h>
#include <stdio.h>

void removeLastEnter(char *s) {
    if (strlen(s) != 0)
        if (s[strlen(s) - 1] == '\n')
            s[strlen(s) - 1] = '\0';
}

char* readLn(FILE * fin, char *s, int max_len) {
    char* p;
    p = fgets(s, max_len * sizeof(char), fin);

    if (p != NULL) { // already read sth
        // Re-read line if it contain only enter character
        removeLastEnter(s);
        if (strlen(s) == 0) {
            p = readLn(fin, s, max_len);
        }
    }

    return p;
}

int main(int argc, char const *argv[]) {
    int c;
    char s[100];

    printf("c = "); scanf("%d", &c);
    printf("s = "); readLn(stdin, s, 100);
    
    printf("c = %d\n", c);
    printf("s = %s\n", s);
    
    return 0;
}
~~~


Hàm `readLn()` sẽ giúp nhập vào một xâu (s) từ bàn phím (độ dài lớn nhất là 100). Quá trình nhập xâu không bị ảnh hưởng nếu có sẵn một kí tự `\n` trong bộ đệm bàn phím từ trước và sẽ chỉ dừng lại khi nhận vào một xâu có độ dài > 0.

Đây là cách làm tôi sử dụng trong chương trình của mình. Nếu bạn có cách làm khác hoặc góp ý gì với cách làm này, hãy để lại comment bên dưới!




