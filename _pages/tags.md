---
layout: page
title: About us
permalink: /about/
navigation: true
---
 
{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
{% assign tag_words = site_tags | split:',' | sort %}

<section class="blog-tags">
  <h1>Tags in Blog</h1>
  <ul class="tags">
<!--  cycles through tag list and creates header row of all tags used in site with accompanying per-tag counts...-->
  {% for item in (0..site.tags.size) %}{% unless forloop.last %}
    {% capture this_word %}{{ tag_words[item] | strip_newlines }}{% endcapture %}
    <li ><a href="#{{ this_word | cgi_escape }}" class="tag">{{ this_word }} <span>({{ site.tags[this_word].size }})</span></a></li>
  {% endunless %}{% endfor %}
  </ul>
<!--cycles through tag list and creates subheader for each tag name...-->
  {% for item in (0..site.tags.size) %}{% unless forloop.last %}
    {% capture this_word %}{{ tag_words[item] | strip_newlines }}{% endcapture %}
  <h2 id="{{ this_word | cgi_escape }}">{{ this_word }}</h2>
<!--  lists all posts corresponding to specific tag...-->
    {% for post in site.tags[this_word] %}{% if post.title != null %}
    <div class="tag-list">
        <span><a href="{{ post.url }}">{{ post.title }}</a></span>
        <small><span>| {{ post.date | date_to_string }}</span></small>
    </div>
    {% endif %}{% endfor %}
  {% endunless %}{% endfor %}
</section>




<section class="new-post">
    <div class="container">
        <div class="row">
            <div class="new-post_cont">
                {% if include.title!="false" %}
                <h2 class="new-post_cont_title">
                    {% if include.title %}
                        {{ include.title }}
                    {% else %}
                        What's new with us?
                    {% endif %}
                </h2>
                {% endif %}
                {% if include.paragraph!="false" %}
                <p class="new-post_cont_paragraph">
                    {% if include.paragraph %}
                        {{ include.paragraph }}
                    {% else %}
                        We always have something to tell you, see our latest posts
                    {% endif %}
                </p>
                {% endif %}
                <ul class="new-post_cont_list">
                    {% for post in site.posts limit:4 %}
                        <li class="new-post_cont_list_item">
                            <a class="new-post_cont_list_item_link" href="{{ post.url | prepend: site.baseurl }}">
                                <img class="new-post_cont_list_item_img" src="{{ post.img[0] | prepend: site.baseurl }}" alt="{{ post.img[0] }}" />
                                <h3 class="new-post_cont_list_item_title">{{ post.title }}</h3>
                                <div class="new-post_cont_list_item_bottom">
                                    <p class="new-post_cont_list_item_bottom_content">{{ post.content | truncatewords: 5 | remove: '<p>' | remove: '</p>' }}</p>
                                    <a class="new-post_cont_list_item_bottom_more" href="{{ post.url | prepend: site.baseurl }}">See Moree</a>
                                </div>
                            </a>
                        </li>
                    {% endfor %}
                </ul> 
            </div>
        </div>
    </div>
</section>
 