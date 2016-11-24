---
layout: post
title:  "Sphero SPRK+ - 8-Ball"
date:   2016-11-24 17:00:00 +0000
categories: sphero
---
In this project we will set out to recreate a classic favourite Magic 8-Ball.
We will turn the Sphero SPRK+ into a device that can answer any question you ask it.

Simply ask the question, out loud, give Sphero a shake and then wait for the answer.
Red means no, Orange for maybe and Green is a yes.

## Getting started
* We’re going to use the SPRK Lightning LAB application for this project. You can download it for [Android](https://play.google.com/store/apps/details?id=com.sphero.sprk) or [iOS](https://itunes.apple.com/gb/app/sprk-lightning-lab-programming/id1017847674?mt=8)

![labs logo]({{ site.baseurl }}/assets/sphero/labs_logo.png)
{:.center}

{:.activity-checklist}

## Making Sphero react when you shake it
Inside Sphero is an Accelerometer.  This accelerometer measures the speed in which Sphero is moving in any particular direction.

SPRK Lightning LAB gives us access to the current value of the accelerometer within Sphero. You'll find it under "sensors". This means that we can detect in our code if sphero is currently moving at a specific speed.

* Write a loop that loops forever and checks if Sphero is moving in any direction (combined) above a speed of 6.  If it does move change the colour and make a noise.

![labs logo]({{ site.baseurl }}/assets/sphero/shake.png)
{:.center}

