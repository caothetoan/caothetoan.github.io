---
layout: single
title: Xây dựng ứng dụng di động với React Native
categories: [React Native]
tags: ["React Native", "Node.js"]
---

Serial bài viết về lập trình ứng dụng di động với React Native

{% include toc title="Contents" %}

Bài 1.1: Hướng dẫn cài đặt React Native trên Windows
Bài 1.2: Hướng dẫn cài đặt React Native trên MAC OS

Yêu cầu
In order to create React Native based iOS applications and work through the examples of this book, you need all of the following:
* A computer running Mac OS X
* The most recent stable version of Xcode® (v6.3 as of this writing)
Xcode® is available for download at https://developer.apple.com/xcode/downloads/ or on the Mac OS X App Store℠.
 
Setting up your development environment
React Native is a collection of JavaScript and Objective-C code plus supporting tools that allow to create, run, and debug native iOS applications.
In order to reach the point where we can actually start working on our first React Native application, some preparation is necessary.
On your development machine, the following components need to be made available:
* Homebrew
* Node.js
* Watchman
* Google Chrome
* React Native CLI
Installing Homebrew
Homebrew is a package manager for Mac OS X. We will use it to subsequently install most of the software tools we need.
In order to install and set up Homebrew, open a Terminal window and run the following command:
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
For further information, visit the Homebrew homepage at http://brew.sh/.
Installing Node.js
Node.js is a server-side JavaScript runtime environment. React Native ships with some helper tools that are written for Node.js. Also, we use the Node.js package manager, NPM, to install the React Native command line tool itself.
In order to install and set up Node.js, open a Terminal window and run the following command:
brew install node
Installing Watchman
React Native uses Watchman to react to changes in source code files. This is explained in more detail in a later chapter.
In order to install and set up Watchman, open a Terminal window and run the following command:
brew install --HEAD watchman
The --HEAD parameter ensures that the most recent version of Watchman is installed.
Installing Google Chrome
Google Chrome isn’t strictly necessary to create applications with React Native, but it allows to debug them during development. The details are explained in a later chapter.
Head over to https://www.google.com/chrome/browser/desktop/index.html to download the latest version.
Installing the React Native CLI
The React Native Command Line Interface is a small Node.js helper script that allows to set up new React Native projects.
In order to install and set up React Native CLI, open a Terminal window and run the following command:
npm install -g react-native-cli
With this, we are good to go to create our first application.
You might also want to install a decent code editor. While Xcode® is part of our development environment, it’s certainly not the most well-suited JavaScript editor out there. Check out TextWrangler at http://www.barebones.com/products/textwrangler/ if you prefer a simple yet sufficient tool, or IntelliJ IDEA Community Edition for a full-fledged IDE at https://www.jetbrains.com/idea/download/. Atom, available at https://atom.io/, lies somewhat in between. All three tools are usable free of charge.
Creating your first native iOS application using React Native
Creating the app structure
Open a new Terminal window. On the command prompt, type the following and hit enter:
react-native init HelloWorld
{% highlight linenos %}

$ react-native init YourAwesomeProject
$ cd YourAwesomeProject
$ react-native run-ios

$ npm install <library-with-native-dependencies> --save

$ react-native link
{% endhighlight %}

**Here is some bold text**

## Here is a secondary heading

Here's a useless table:
 
| Number | Next number | Previous number |
| :------ |:--- | :--- |
| Five | Six | Four |
| Ten | Eleven | Nine |
| Seven | Eight | Six |
| Two | Three | One |
 

How about a yummy crepe?

![Crepe](http://s3-media3.fl.yelpcdn.com/bphoto/cQ1Yoa75m2yUFFbY2xwuqw/348s.jpg)

Here's a code chunk:

~~~
var foo = function(x) {
  return(x + 5);
}
foo(3)
~~~

And here is the same code with syntax highlighting:

```javascript
var foo = function(x) {
  return(x + 5);
}
foo(3)
```

And here is the same code yet again but with line numbers:

{% highlight javascript linenos %}
var foo = function(x) {
  return(x + 5);
}
foo(3)
{% endhighlight %}
