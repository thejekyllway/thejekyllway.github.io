---
layout: post
title: "Criando um blog simples com Jekyll"
description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam doloribus, iusto asperiores praesentium dolor voluptatibus est. Nesciunt, accusamus?
categories: beginner
date: 2016-01-04
img: "assets/image/authors/test.jpeg"
link:
comments: true
---
Grid systems can be quite complicated. 960.gs, the mother of all grid systems, contains over 600 lines of code! And it's one of the simpler pure-CSS grid systems. I'm not a huge fan of scattering classes throughout your markup. Some people do like this approach, of course, but it's possible to build a grid system in Sass that doesn't require gratuitous use of classes. Instead, we can use mixins and style using existing classes and markup.

Let's build a set of mixins that will allow us to do this. For our grid system I don't want to use floats, because sometimes I need to vertically center columns. Instead, I'll use the inline-block method which allows for vertical centering. And of course, I want the grid to be responsive.

Let's get started.

##The basic mixins
First, we'll create the row mixin. Our grid will require a container which will include content for the grid. This is called a row. Here's a simple mixin to turn an element into a row:

<pre>
	@mixin row() {
		font-size: 0;
	}
</pre>

Next, we'll create a simple column mixin for grid cells:

<pre>
	@mixin col($align: top) {
	  font-size: 16px;
	  display: inline-block;
	  vertical-align: $align;
	}
</pre>