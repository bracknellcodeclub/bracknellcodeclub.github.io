---
layout: post
title:  "HTML 3.6 - Jingle Bells"
date:   2016-12-01 09:30:00 +0000
categories: html term1
---

This week we're going to build a song-sheet for the Christmas song Jingle Bells. We're going to use all the skills we've learnt over the past 5 weeks.

## Getting started
* We're going to use trinket.io for this project. To start launch the trinket editor at [https://trinket.io/html/24a8de6ada](https://trinket.io/html/24a8de6ada)
{:.activity-checklist}

<div class="center">
<iframe src="https://trinket.io/embed/html/24a8de6ada" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
</div>

## Changing the background color
* The background color of the page is currently unset. In most browsers, this will mean that it displays as grey. We can change this by adding some code to our ```style.css```.

  ```
  body {
    background-color: white;
  }
  ```
{:.activity-checklist}

## Changing the fonts
* The default fonts are being used for our project. We can change them by adding new fonts to project, as we did in the magazine project. To do this open [Google Fonts](https://fonts.google.com/) and find some fonts that you like.
* When you've found some fonts, click on the ```+``` button to reveal the code needed to use the font.
* Copy the ```link``` tag from the box, and paste it into your ```<head>  <\head>``` tag in trinket. Your head tag should then look like this:

  ```
  <head>
    <link href="https://fonts.googleapis.com/css?family=Dancing+Script" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="style.css">
  </head>
  ```
* Now copy the CSS rule into your stylesheet to change the font. For example, to change the font of the ```h1``` we would add the following code to our stylesheet.

  ```
  h1 {
    font-family: 'Dancing Script', cursive;
  }
  ```
* Experiment with other fonts on your page.
* We can also change the color of our text. To do this, change the ```h1``` style property to the following code in your stylesheet.

  ```
  h1 {
    font-family: 'Dancing Script', cursive;
    color: red;
  }
  ```
{:.activity-checklist}

## Adding images
* There are a number of images provided in the code editor. Click on the image icon to see them.
* To insert an image you can use the following code:

  ```
  <img src="snow1.png" height="50" width="50">
  ```
* Add some more images to your song-sheet.
{:.activity-checklist}

## Adding borders
* We can add borders around our verses. To do this, modify your stylesheet as follows:

  ```
    #verse1 {
      border: 1px dashed blue;
    }
  ```
* There are many different types of borders available. Experiment with the following examples. What do they do?

  ```
    border: 10px dotted green;
  ```

  ```
    border: 5px solid red;
  ```
* You can also make the borders have rounded corners. To do this, we change the ```border-radius``` property to our stylesheet.
  ```
    border-radius: 10px;
  ```
{:.activity-checklist}

## Experiment
* Use all of your skills from the previous weeks to create your own song-sheet.
{:.activity-checklist}
