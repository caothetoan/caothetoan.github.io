---
layout: single
title: my projects
author_profile: true
projects:
  - title: "React News"
    description: "A news website using React and NewsAPI.org"
    img: "http://vnit.top/wp-content/uploads/2017/06/2017-06-14_9-47-13.png"
    buttons:
      - text: "Source code"
        link: "https://github.com/caothetoan/React-news"
 
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
