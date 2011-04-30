# jason.petsod.org

## Introduction

jason.petsod.org uses nanoc (http://nanoc.stoneship.org/) as its templating
system. 

## Cheat Sheet

### Add a Page

    nanoc create_item NAME

or

    nanoc ci NAME

### Add a sidebar item

 1. Add an &lt;li&gt; to \#leftnav in `layouts/default.html`.
 1. Increase `#main min-height` in `css/layout.sass` by 50 px.

### Compile

    nanoc compile

or

    nanoc co

## See also

[nanoc documentation](http://nanoc.stoneship.org/docs/)
