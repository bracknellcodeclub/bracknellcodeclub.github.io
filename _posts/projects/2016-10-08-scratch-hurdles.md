---
layout: post
title:  "Open Day - Olympic Hurdler"
date:   2016-08-06 09:30:00 +0100
categories: scratch opendays
---
This week the Olympic Games start in Rio. To celebrate, we’re going to build a game where you’ll compete in the hurdles.

<div class="center">
<iframe allowtransparency="true" width="485" height="402" src="https://scratch.mit.edu/projects/embed/117813164/?autostart=false" frameborder="0"></iframe>
</div>


## Getting started
* We’re going to use scratch for this project. To get started visit this link: [https://scratch.mit.edu/projects/117692338/](https://scratch.mit.edu/projects/117692338/)
* Click on the “See Inside” button at the top right of the screen, and then click “Remix”.

    ![see inside button]({{ site.baseurl }}/assets/scratch/o1_seeinside.png)  
    {:.center}

    ![remix button]({{ site.baseurl }}/assets/scratch/o1_remix.png)
    {:.center}  
* If you don’t already have a username and password, you’ll need to create one now. If you need help with this, just ask one of the instructors. Once you’ve done this, you’ll be able to start working on the project.
{:.activity-checklist}

## Capturing the key mashing
* The first step is to capture the  x  and  z  key presses, and use the speed at which the player is pushing the keys to control the size of a variable. We’ll use this to control the speed our character runs at. Choose the background, and create a new variable called  last_key and set it to  z  when the green flag is clicked.

    ![set last key to z]({{ site.baseurl }}/assets/scratch/o1_lastkeyz.png)
    {:.center}  
* Now we need a variable to hold the current speed of our runner. Create a new variable called  speed  and set it to  0  for the start of the game.

    ![set speed to 0]({{ site.baseurl }}/assets/scratch/o1_speedzero.png)
    {:.center}  
* When the  x  is the key pressed, we want to be able to increase the  speed  of our runner. However, we only want to do this if the  last_key  pressed was  z . This means that the player can’t cheat and keep hitting the  x  key to make the speed increase. To do this, add the following code.

    ![code to increment speed when x is pressed]({{ site.baseurl }}/assets/scratch/o1_incspeed1.png)
    {:.center}  
* We need to do the same thing for the z key. Both scripts together will control the speed of our runner. The player will need to hit each key alternately in order to increase the speed variable.

    ![code to increment speed when z is pressed]({{ site.baseurl }}/assets/scratch/o1_incspeed2.png)
    {:.center}
* Now test your code. Click the green flag, then repeatedly press x then z. What happens to the speed variable?
{:.activity-checklist}

## Animating the hurdler
* Look at the costumes for our hurdler sprite. Can you see that there are 4 different run costumes. When the costumes are switched, it will make the runner will appear to run on the spot. The speed that the runner moves at should be controlled by the speed variable. The higher the speed, the faster the runner should move. To do this, add the following code to you runner sprite.

    ![code for animating the hurdler]({{ site.baseurl }}/assets/scratch/o1_animatehurdler.png)
    {:.center}
* Run your code. What happens?
{:.activity-checklist}

## Fixing the error
* The error you see happens because the speed variable starts off as 0. This means that the computer tries to calculate 1/0 which it can’t do. This is a very common error that programmers make. You can fix this by adding a choice statement.

    ![code for fixing the bug with the hurdler animation]({{ site.baseurl }}/assets/scratch/o1_animatehurdler.png)
    {:.center}
* Now re-test your code.
{:.activity-checklist}

## Jumping
* Hurdlers need to jump. Click on the hurdler sprite. Can you see the two jump costumes?
* To make our runner jump, we’ll need a new variable called jumping. Create a new variable and set it to false.

    ![jumping variable]({{ site.baseurl }}/assets/scratch/o1_jumpingvar.png)
    {:.center}
* The runner should jump when we press the spacebar. The first thing that happens is the jumping variable should be set to True, then the costume can be changed to jump-1 and the character can glide upwards. Next, the costume can be changed to jump-2 and the character can glide back down again. Finally, the jumping variable can be returned to False to indicate that the jumping animation has finished. Add the following code to your runner spite to make this happen.

    ![code for adding the animation for jumping]({{ site.baseurl }}/assets/scratch/o1_jumpinganimation.png)
    {:.center}
* Test your script. What happens?
* The character's costume doesn't change. This is because the walk cycle you set up previously is still working. You'll need to stop this walk cycle when the character is jumping. To do this, you can use an and conditional operator to check that both speed > 0 and jumping = False for the walk cycle to work.

    ![code to fix the jumping animation]({{ site.baseurl }}/assets/scratch/o1_fixingjumping.png)
    {:.center}
* Now re-test your script.
{:.activity-checklist}

## Slowing down
* At the moment, the more you press the x and z keys, the faster the character runs. There needs to be a way of slowing the hurdler down, so she doesn't win too easily. This can be done on your initial script that sets the starting variables. Add a new loop which will slow down your runner to your variables script.

    ![code to slow down the hurdler]({{ site.baseurl }}/assets/scratch/o1_slowingdown.png)
    {:.center}
{:.activity-checklist}

Test your script. Can you see the problem? How would you fix it?
{:.extension}

## Adding in hurdles
* In the Scratch pad, is a sprite of a hurdle. This will be our obstacle that our runner will need to jump over. The hurdle should appear at the right of the screen. It should then move across the screen to the right. If we use the speed of the runner to set the speed the hurdle moves, it makes it look like our runner is running. To do this, add the following code to the hurdle sprite.

    ![code to add and move the hurdles]({{ site.baseurl }}/assets/scratch/o1_addinghurdles.png)
    {:.center}
* Test your code. Does the hurdle move across the screen?
* At the moment, the runner can run straight through the hurdles, we need to slow the hurdler down. This is a little complicated - we need to slow the runner down if:
    * She isn’t jumping
    * Has an x position just before the hurdle
    * Has an x position just after the hurdle

    We can do this by adding the following code to the runner sprite

    ![code to slow down runner as she hits the hurdles]({{ site.baseurl }}/assets/scratch/o1_hittinghurdles.png)
    {:.center}

* Test your code. Does the runner slow down if she hits the hurdle?
{:.activity-checklist}

## Creating the finish line
* Also included in the scratchpad is a finish line sprite. When the runner touches this sprite, the game should end.
* To start off, you need use a variable to control how far the hurdler has to run. Choose the finish line sprite, and create a new variable and call it distance.
* Add a new script to the finish line sprite. This script will set the distance to 0, position the finish line at the far right of the stage, and hide it. As the runner moves, we need to change the distance that she travels. We’ll add a forever loop to change the distance.

    ![code to add a finish line]({{ site.baseurl }}/assets/scratch/o1_addingfinishline.png)
    {:.center}
* Now that the finish line is ready to go, you can make it appear when the value of distance hits whatever value you desire (200 in the example below). It can then begin to move across the screen towards the hurdler. When the hurdler touches the finish line, all the game scripts should end. Add the following code to your finish line.

    ![code to finish the game]({{ site.baseurl }}/assets/scratch/o1_finishingthegame.png)
    {:.center}
{:.activity-checklist}

<div class="extension">
<ul>
<li>Can you change the finish line sprite costume when the runner finishes the race</li>
<li>Races at the Olympics are timed. Can you add a timer to your race?</li>
</ul>
</div>
