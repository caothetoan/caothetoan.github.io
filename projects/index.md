---
layout: single
title: my projects
author_profile: true
projects:
  - title: "React Native News App"
    description: "A news mobile app using React Native and NewsAPI.org"
    img: "https://caothetoan.github.io/assets/img/news-app-react-native.png"
    buttons:
      - text: "Source code"
        link: "https://github.com/caothetoan/React-news"
  - title: "React News App"
    description: "A news website using React and NewsAPI.org"
    img: "https://caothetoan.github.io/assets/img/news-react-app.png"
    buttons:
      - text: "Source code"
        link: "https://github.com/caothetoan/React-native-news"
		
  - title: "BiBot"
    description: "A autonomous robot building with Raspberry Pi"
    img: "https://caothetoan.github.io/assets/img/bibot-auto-robot.jpg"
    buttons:
      - text: "Source code"
        link: "https://github.com/caothetoan/"
  - title: "Kênh 360"
    description: "Kênh công nghệ 360 Kenh360.com"
    img: "https://caothetoan.github.io/assets/img/kenh360-web-app.png"
    buttons:
      - text: "Demo"
        link: "https://Kenh360.com"
  - title: "Hài 360"
    description: "Trang ảnh chế video hài hai.kenh360.com"
    img: "https://caothetoan.github.io/assets/img/slider_photo_04.png"
    buttons:
      - text: "Demo"
        link: "http://hai.kenh360.com"
  - title: "Xinh 360"
    description: "Trang ảnh gái xinh xinh.kenh360.com"
    img: "https://caothetoan.github.io/assets/img/slider_photo_05.png"
    buttons:
      - text: "Demo"
        link: "http://xinh.kenh360.com"
  - title: "Bắt chữ 360"
    description: "Trang đuổi hình bắt chữ batchu.kenh360.com"
    img: "https://caothetoan.github.io/assets/img/slider_photo_06.png"
    buttons:
      - text: "Demo"
        link: "http://batchu.kenh360.com/"
  - title: "SSO id.go.vn"
    description: "Hệ thống Single Sign On id.go.vn"
    img: "https://caothetoan.github.io/assets/img/slider_photo_07.png"
    buttons:
      - text: "Demo"
        link: "https://id.go.vn"		
  - title: "Du lịch 360"
    description: "Khám phá ẩm thực văn hóa du lịch Việt Nam dulich.kenh360.com"
    img: "https://caothetoan.github.io/assets/img/slider_photo_08.png"
    buttons:
      - text: "Demo"
        link: "http://dulich.kenh360.com"	
  - title: "Flappy Bird 360"
    description: "Game Flappy Bird trên nền web"
    img: "https://caothetoan.github.io/assets/img/slider_photo_10.png"
    buttons:
      - text: "Demo"
        link: "http://flappybird.kenh360.com"		
		
  - title: "Chess 360"
    description: "Game cờ vưa trên nền web sử dụng chess.js, AI"
    img: "https://caothetoan.github.io/assets/img/chess-web-game.png"
    buttons:
      - text: "Demo"
        link: "http://kenh360.com/chess"
  - title: "Facebook Alexa Skill"
    description: "Sử dụng voice control và AI để tương tác với Facebook qua Alexa device"
    img: "https://caothetoan.github.io/assets/img/facebook-alexa-skills.jpg"
    buttons:
      - text: "Demo"	
		
  - title: "Social IT"
    description: "Mạng xã hội dành cho dân công nghệ Social IT Top "
    img: "https://caothetoan.github.io/assets/img/facebook-alexa-skills.jpg"
    buttons:
      - text: "Demo"
	    link: "http://social.vnit.top"
		
  - title: "Facebook Alexa Skill"
    description: "Sử dụng voice control và AI để tương tác với Facebook qua Alexa device"
    img: "https://caothetoan.github.io/assets/img/facebook-alexa-skills.jpg"
    buttons:
      - text: "Demo"
---

<style media="screen">
  .project {
    width: 50%;
    max-width: 500px;
    float: left;
    padding: 10px;
    box-sizing: border-box;
}
</style>

{% for project in page.projects %}
<div class="project">
  <div class="thumbnail">
    <img src="{{ project.img }}" alt="{{ project.title }}">
  </div>
  <div class="caption">
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
      <p>
        {% for button in project.buttons %}
        <a href="{{ button.link }}" class="btn btn-primary" role="button">{{ button.text }}</a>
        {% endfor %}
      </p>
  </div>
</div>
{% endfor %}
