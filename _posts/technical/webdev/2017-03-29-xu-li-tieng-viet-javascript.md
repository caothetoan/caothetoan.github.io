---
layout: single
title:  "Một số kĩ thuật xử lí tiếng Việt trong Javascript"
date:   2017-03-29
categories: [WebDev]
tags: [javascript, ngôn ngữ, tiếng Việt]
---

Các kĩ thuật xử lí sau sẽ giúp chúng ta thao tác với tiếng Việt dễ dàng hơn mà không cần mất công xây dựng lại.

## Xoá dấu tiếng Việt

Hàm xoa_dau() sau sẽ xoá loại bỏ hoàn toàn dấu câu tiếng Việt, không phân biệt hoa thường.

```javascript
function xoa_dau(str) {
	str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
	str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
	str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
	str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
	str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
	str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
	str = str.replace(/đ/g, "d");
	str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
	str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
	str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
	str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
	str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
	str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
	str = str.replace(/Đ/g, "D");
	return str;
}
```
### Loại bỏ tất cả các kí tự không phải chữ cái và số

```javascript
str = str.replace(/[^0-9a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ\s]/gi, '');
```

### Xoá dấu cách thừa

```javascript
// Gộp nhiều dấu space thành 1 space
str = str.replace(/\s+/g, ' ');
// loại bỏ toàn bộ dấu space (nếu có) ở 2 đầu của xâu
str.trim();

```

