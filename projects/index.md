---
layout: single
title: my projects
author_profile: true
projects:
  - title: "Vivi chatbot"
    description: "A chatbot implement using websocket for communicating between server-client and rivescript for AI"
    img: "https://raw.githubusercontent.com/vietanhdev/websocket-chatbot-website/master/screenshot.png"
    buttons:
      - text: "Source code"
        link: "https://github.com/vietanhdev/websocket-chatbot-website"
  - title: "beNice17 theme"
    description: "A Jekyll theme focusing on light-weight &amp; responsive. Suitable for personal websites & blogs."
    img: "https://raw.githubusercontent.com/vietanhdev/beNice17/master/screenshots/beNice17_530x300.png"
    buttons:
      - text: "Demo"
        link: "https://vietanhdev.com/beNice17/"
      - text: "Source code"
        link: "https://github.com/vietanhdev/beNice17"
  - title: "Từ điển hiDictionary"
    description: "An online dictionary site using json technology. Quick search is available."
    img: "https://vietanhdev.com/hiDictionary/screenshot.png"
    buttons:
      - text: "Demo"
        link: "https://vietanhdev.com/hiDictionary/"
      - text: "Source code"
        link: "https://github.com/vietanhdev/hiDictionary/"
  - title: "Online Pomodoro Timer"
    description: "An useful timer for everyone using Pomodoro Technique to manage their time."
    img: "https://raw.githubusercontent.com/vietanhdev/Pomodoro-Timer/master/screenshot.png"
    buttons:
      - text: "Demo"
        link: "https://vietanhdev.com/Pomodoro-Timer/"
      - text: "Source code"
        link: "https://github.com/vietanhdev/Pomodoro-Timer/"
  - title: "Minesweeper game"
    description: "Minesweeper game written in C after some days learning C programming at university."
    img: "https://raw.githubusercontent.com/vietanhdev/minesweeper-in-c/master/screenshot.png"
    buttons:
      - text: "Source code"
        link: "https://github.com/vietanhdev/minesweeper-in-c"
  - title: "Online Caro game"
    description: A single player gomoku game (or "cờ caro" in Vietnamese).
    img: "https://github.com/vietanhdev/van-caro-online/raw/master/screenshot.png"
    buttons:
      - text: "Demo"
        link: "https://vietanhdev.com/projects/caro/"
      - text: "Source code"
        link: "https://github.com/vietanhdev/van-caro-online"
  - title: "Line98 (2015)"
    description: "Line98 written in AutoIT Script"
    img: "https://github.com/vietanhdev/line98/raw/master/screenshot.png"
    buttons:
      - text: "Download & Source code"
        link: "https://github.com/vietanhdev/line98"
  - title: "MiniChess (2014)"
    description: "Chess game written in AutoIT Script"
    img: "https://github.com/vietanhdev/minichess/raw/master/screenshot.png"
    buttons:
      - text: "Download & Source code"
        link: "https://github.com/vietanhdev/minichess"
  - title: "2048"
    description: "2048 game written in Pascal"
    img: "https://vietanhdev.com/projects/2048-pascal/2048.png"
    buttons:
      - text: "Download"
        link: "https://vietanhdev.com/projects/2048-pascal/2048.zip"
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
