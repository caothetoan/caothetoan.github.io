---
layout: single
title:  "A very simple guide to GNU Emacs"
date:   2016-09-06
categories: [Code-Editors]
tags: [editor, guide]
permalink: /emacs/a-very-simple-guide-to-emacs/
lang: en
---

![Emacs]({{ site.url }}{{ site.baseurl }}/assets/img/emacs/emacs.png)
This guide was written in Emacs editor.

## Introduction to GNU Emacs
GNU Emacs is a text editor in GNU project.

Why should we use Emacs for code editing?
* High perfomancce
* Many awesome features for programming:
   * Jump to any header file.
   * Autocompletion.
   * Showing function arguments.
   * Quickly comment.
   * And many more features depending on your configuration.

## Installation
This guide uses GNU Emacs running on Ubuntu 16.04.

To Install Emacs, you can simply open Terminal and type:
~~~~
sudo apt-get install emacs
~~~~

If you're using another operating system, just Google and you can easily find the installation guide for your OS.

## Using Emacs

To start Emacs, open Terminal and type `emacs&` to open Emacs GUI or `emacs -nw` to open Emacs Terminal.

### Basic shortcuts in Emacs
Firstly, in Emacs shortcuts, 'C' will stand for Ctrl key and 'M' will stand for Meta key (Esc key or Alt key on your keyboard).

#### 1.File:

| Shortcut | Description |
| --- | --- |
| C-x C-f | Open file |
| C-x C-s | Save |
| C-x C-w | Save as |
| C-x s   | Save all |
| C-x C-v | Revert to file |
| M-x     | Revert Buffer |
| C-x k   | Close Windows/Buffer |
| C-x C-c | Quit |

#### 2.Edit:

| Shortcut | Description |
| --- | --- |
| C-_     | Undo |
| C-Space | Begin Selection |
| C-g     | Cancel Seclection |
| C-w     | Cut Seclection |
| C-k     | Cut Line (From current position to the end of the line) |
| C-y     | Paste |
| C-x r s <number> | Copy Selection to Numbered Clipboard |
| C-x r i <number> | Paste from Numbered Clipboard |
| Delete or C-d  | Delete |
| M-Delete | Delete Word Before The Cursor |
| M-d      | Fwd Delete Word |

#### 3.Cursor Movement:

| Shortcut | Description |
| --- | --- |
| M-f | Word Forward |
| M-b | Word Backward|
| C-a / C-e | Jump to beginning / end of line |
| M-{ /  M-} | Paragraph Forward / Backward |
| C-v /  M-v | Page Forward / Backward |
| M-< /  M-> | Jump to beginning / end of file |
| M-C-a / M-C-e | C Function Forward / Backward |

Above is a very basic guide to GNU Emacs. You can find more documents about Emacs at : [GNU Emacs - GNU Projects](https://www.gnu.org/software/emacs/).
