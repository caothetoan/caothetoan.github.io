---
layout: single
title: Comment trong React JSX
subtitle: Có những cách nào để comment trong React JSX?
categories: [React]
tags: [React]
---

Có những cách nào để comment trong React JSX. Với các comment Javascript thông thường trong JSX sẽ được parse như Text và hiển thị lên View.

Ví dụ:

// comment

Không thể sử dụng HTML comment trong JSX vì nó coi chúng là các DOM Node thật.
{% highlight javascript linenos %}

render() {
  return (
    <div>
      <!-- This doesn't work! -->
    </div>
  )
}
{% endhighlight %}
Bạn phải sử dụng Javascript comment dạng /* block comment */ được wrap trong ngoặc nhọn

{/* A JSX comment */}
Valid:
{% highlight javascript linenos %}

...
render() {

  return (
    <p>
       {/* This is a comment, one line */}

       {// This is a block 
        // yoohoo
        // ...
       }

       {/* This is a block 
         yoohoo
         ...
         */
       }
    </p>
  )

}
...
{% endhighlight %}
Invalid:

{% highlight javascript linenos %}

...
render() {

  return (
    <p>
       {// This is not a comment! oops! }

       {//
        Invalid comment
       //}
    </p>
  )

}
{% endhighlight %}
Do đó khi sử dụng Visual Studio bạn sẽ không thể Comment out (Ctrl + K, Ctrl + C) để comment trong JSX.

Bạn cần tạo hotkey hoặc replace HTML Comment, Javascript comment thành JSX comment.

