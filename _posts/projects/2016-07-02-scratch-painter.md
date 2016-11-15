---
layout: post
title:  "Scratch 1.3 - Painter"
date:   2016-07-02 09:30:00 +0100
categories: scratch term1
---
This week, we’re going to build a painting program. The instructions can be found here:

[http://bit.ly/paint-cc](http://bit.ly/paint-cc)
{:.center}

## Messages
Messages are used to send information between sprites. In order to use messages you need a sender and a receiver. The sender will send the message, and the receiver will receive it. Usually, the receiver will perform some action as a result of receiving the message.

In the example below, when we click our sprite, it sends a “green” message using the “broadcast” command.

![broadcast example]({{ site.baseurl }}/assets/scratch/1-3_messages1.png)
{:.center}

The pencil sprite has code to receive the message. When it receives a message it understands, it will perform the resulting action.

![receive example]({{ site.baseurl }}/assets/scratch/1-3_messages2.png)
{:.center}

Messages are sent to all sprites in your scratchpad. So more than one sprite can receive the same message.
