---
lang: en-US
title: Course content
---

# Course content

_The adaptation of the original course is an ongoing process, the material is subject to change. To keep the integrity of the initial curriculum, the base structure remains largely the same, only selected subtopics might change to better fit the Vue ecosystem._

<br/>

## [Part 0 - Fundamentals of web apps](/0/part0.html)

<div style="text-align:center; position:relative;">
    <img :src="$withBase('/images/topics/0.jpg')" alt="http" style="padding:3rem 0rem 2rem; width:25%"/>
</div>

In this part, we will familiarize ourselves with the practicalities of taking the course. After that we will have an overview of the basics of web development, and also talk about the advances in web application development during the last few decades.

<br/>

## Part 1 - Introduction to Vue

<div style="text-align:center; position:relative;">
    <img :src="$withBase('/images/topics/1.png')" alt="vue logo" style="padding:3rem 0rem 2rem; width:25%"/>
</div>

In this part, we will get to know the Vue-library, which we will be using to write the code that runs in the browser. We will also look at some features of JavaScript that are important for understanding Vue.

<div style="text-align:center; position:relative;">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ion" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path d="M380 64.4z" fill="orange"></path><path d="M275.1 57.6c-9.4-5.9-23.3-9.6-37.9-9.6-14.3 0-30.3 2.5-46.7 9.2-46.5 19-74 45.4-81.1 52.4-7 7-16.8 18-22.9 26.6-6.1 8.7 1.9 21-6.1 29s-24.7 0-24.7 0c-1.4 0-2.9.5-3.9 1.6l-34.1 33.9c-2.2 2.1-2.2 5.7 0 7.8l63.5 63.1c1.1 1.1 2.5 1.6 3.9 1.6s2.9-.5 3.9-1.6l33.2-34.8c2.2-2.1 2.2-5.7 0-7.8 0 0-5.3-5.2-12.1-12s.8-19.3 5.3-23.4c4.5-4.1 11.6-6.8 21.1-6.8 4.3 0 7.4.7 11.4 1.8 12.2 3.4 25.8 15.9 50.9 40.8l-3.9 6.5c-2.3 3.8-.9 8.3 1.3 10.4 0 0-5-4.9 13.1 13.1l50-47.2c-19.1-18.9-14.5-14.1-14.5-14.1-1.4-1.4-3.8-2.3-6.3-2.3-1.4 0-2.9.3-4.2 1l-5.6 3c-28-27.8-35.3-40.2-34.3-61.7 1.1-22.4 12.3-37.1 30.5-52.7 24.7-21.1 60.6-15.2 60.6-15.2 8-.1-4.2-8.6-10.4-12.6z" fill="orange"></path><path d="M462.5 399.9s-68.9-57.2-130.2-115.7l-47.7 50.6c58.5 60.6 114.9 127.6 114.9 127.6 1.1 1.1 2.5 1.6 3.9 1.6s2.9-.5 3.9-1.6l55.1-54.7c2.2-2.1 2.2-5.7.1-7.8z" fill="orange"></path><path d="M479.2 125.3l-52.4 52.6-51.1-9.3-9.2-51.1 52.4-52.6c-11.1-11.1-26.8-16.6-39-16.6-.7 0-1.4 0-2 .1-12.5.6-39.2 7.7-59.9 29.7-20 21.1-41.1 60.6-22.4 104.3 2.2 5.3 4.7 12.2-2.7 19.7-1.5 1.4-9.9 9.4-22.5 21.3-3.6 3.4-7.4 7-11.6 11-8 7.6-17.1 16.2-26.8 25.2-3.8 3.6-7.7 7.2-11.6 11-57 53.8-126.9 119.5-126.9 119.5-18 15.5-16.7 44.1-.1 60.8 8.5 8.4 20 12.8 31.3 12.8 11 0 21.9-4.2 29.5-13.1 0 0 65.5-69.8 119.3-126.9 3.7-4 7.4-7.8 11-11.7 9.3-9.9 18-19.1 25.8-27.3 3.9-4.2 7.6-8.1 11-11.6 11.5-12.2 19.3-20.4 21-22 4-3.9 7.7-5.1 11.1-5.1 3.3 0 6.2 1.2 8.6 2.4 9.9 5.1 21 7.3 32.4 7.3 26.7 0 55-12.4 72.1-29.5 24.4-24.4 28.8-47.9 29.6-60 .6-11.8-3.6-27.6-16.9-40.9zM137.4 426.1c-5.5 5.4-14.4 5.4-19.8 0-5.4-5.5-5.4-14.4 0-19.8 5.5-5.4 14.4-5.4 19.8 0 5.4 5.5 5.4 14.4 0 19.8z" fill="orange"></path></svg>
</div>

<br/>

## Part 2 - Communicating with servers

<div style="text-align:center; position:relative;">
    <img :src="$withBase('/images/topics/2.png')" alt="server logo" style="padding:3rem 0rem 2rem; width:25%"/>
</div>

Let's continue our introduction to Vue. First, we will take a look at how to render a data collection, like a list of names, to the screen. After that, we will inspect how a user can submit data to a Vue application using HTML forms. Next, our focus shifts towards looking at how JavaScript code in the browser can fetch and handle data stored in a remote backend server. Lastly, we will take a quick look at a few simple ways of adding CSS styles to our Vue applications.

<div style="text-align:center; position:relative;">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--whh" width="39.43" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1025 832"><path d="M1024.585 64v192q0 27-18.5 45.5t-45.5 18.5h-64v480q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5V576h-512v224q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5V320h-64q-27 0-45.5-18.5T.585 256V64q0-27 18.5-45.5T64.585 0h896q27 0 45.5 18.5t18.5 45.5zm-768 448h512V320h-512v192zm-192-448v64l64-64h-64zm0 192h128l192-192h-128zm448-192l-192 192h128l192-192h-128zm256 0l-192 192h128l192-192h-128zm192 64l-128 128h128V128z" fill="orangered"></path></svg>
</div>

<br/>

## Part 3 - Programming a server with Node.JS and Express

<div style="text-align:center; position:relative;">
    <img :src="$withBase('/images/topics/3.png')" alt="node.js logo" style="padding:3rem 0rem 2rem; width:25%"/>
</div>

In this part our focus shifts towards the backend, that is, towards implementing functionality on the server side of the stack. We will implement a simple REST API in Node.js by using the Express library, and the application's data will be stored in a MongoDB database. At the end of this part, we will deploy our application to the internet.

<div style="text-align:center; position:relative;">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--whh" width="39.43" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1025 832"><path d="M1024.585 64v192q0 27-18.5 45.5t-45.5 18.5h-64v480q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5V576h-512v224q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5V320h-64q-27 0-45.5-18.5T.585 256V64q0-27 18.5-45.5T64.585 0h896q27 0 45.5 18.5t18.5 45.5zm-768 448h512V320h-512v192zm-192-448v64l64-64h-64zm0 192h128l192-192h-128zm448-192l-192 192h128l192-192h-128zm256 0l-192 192h128l192-192h-128zm192 64l-128 128h128V128z" fill="orangered"></path></svg>
</div>

<br/>

## Part 4 - Testing Express servers, user administration

<div style="text-align:center; position:relative;">
    <img :src="$withBase('/images/topics/4.png')" alt="express logo" style="padding:3rem 0rem 2rem; width:25%"/>
</div>

In this part, we will continue our work on the backend. Our first major theme will be writing unit and integration tests for the backend. After we have covered testing, we will take a look at implementing user authentication and authorization.

<div style="text-align:center; position:relative;">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--whh" width="39.43" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1025 832"><path d="M1024.585 64v192q0 27-18.5 45.5t-45.5 18.5h-64v480q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5V576h-512v224q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5V320h-64q-27 0-45.5-18.5T.585 256V64q0-27 18.5-45.5T64.585 0h896q27 0 45.5 18.5t18.5 45.5zm-768 448h512V320h-512v192zm-192-448v64l64-64h-64zm0 192h128l192-192h-128zm448-192l-192 192h128l192-192h-128zm256 0l-192 192h128l192-192h-128zm192 64l-128 128h128V128z" fill="orangered"></path></svg>
</div>

<br/>

## Part 5 - Testing Vue apps

<div style="text-align:center; position:relative;">
    <img :src="$withBase('/images/topics/5.png')" alt="cypress logo" style="padding:3rem 0rem 2rem; width:25%"/>
</div>

In this part we return to the frontend, first looking at different possibilities for testing the Vue code. We will also implement token based authentication which will enable users to log in to our application.

<div style="text-align:center; position:relative;">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--whh" width="39.43" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1025 832"><path d="M1024.585 64v192q0 27-18.5 45.5t-45.5 18.5h-64v480q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5V576h-512v224q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5V320h-64q-27 0-45.5-18.5T.585 256V64q0-27 18.5-45.5T64.585 0h896q27 0 45.5 18.5t18.5 45.5zm-768 448h512V320h-512v192zm-192-448v64l64-64h-64zm0 192h128l192-192h-128zm448-192l-192 192h128l192-192h-128zm256 0l-192 192h128l192-192h-128zm192 64l-128 128h128V128z" fill="orangered"></path></svg>
</div>

<br/>

## Part 6 - State management with Vuex

<div style="text-align:center; position:relative;">
    <img :src="$withBase('/images/topics/6.png')" alt="flux logo" style="padding:3rem 0rem 2rem; width:25%"/>
</div>

So far, we have placed the application's state and state logic directly inside Vue-components. When applications grow larger, state management should be moved outside Vue-components. In this part, we will introduce the Vuex-library, which is currently the most popular solution for managing the state of Vue-applications.

<div style="text-align:center; position:relative;">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--whh" width="39.43" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1025 832"><path d="M1024.585 64v192q0 27-18.5 45.5t-45.5 18.5h-64v480q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5V576h-512v224q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5V320h-64q-27 0-45.5-18.5T.585 256V64q0-27 18.5-45.5T64.585 0h896q27 0 45.5 18.5t18.5 45.5zm-768 448h512V320h-512v192zm-192-448v64l64-64h-64zm0 192h128l192-192h-128zm448-192l-192 192h128l192-192h-128zm256 0l-192 192h128l192-192h-128zm192 64l-128 128h128V128z" fill="orangered"></path></svg>
</div>

<br/>

## Part 7 - Vue Router, Composition API, styling apps with CSS and webpack

<div style="text-align:center; position:relative;">
    <img :src="$withBase('/images/topics/7.png')" alt="webpack logo" style="padding:3rem 0rem 2rem; width:25%"/>
</div>

The seventh part of the course touches on several different themes. First, we'll get familiar with Vue Router. Vue router helps us divide the application into different views that are shown based on the URL in the browser's address bar. In Version 3 Vue introduced the Composition API, which offers an alternative way to develop and structure components. We will take a closer look how to use it and show the differences to the Option API we used until this point. After this, we'll look at a few more ways to add CSS-Styles to Vue applications. During the entire course we've used the Vue CLI to generate the body of our applications. This time we'll take a look under the hood: We will learn how Webpack works and how we can use it to configure the application ourselves. We shall also have a look on lifecycle hooks.

<div style="text-align:center; position:relative;">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--whh" width="39.43" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1025 832"><path d="M1024.585 64v192q0 27-18.5 45.5t-45.5 18.5h-64v480q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5V576h-512v224q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5V320h-64q-27 0-45.5-18.5T.585 256V64q0-27 18.5-45.5T64.585 0h896q27 0 45.5 18.5t18.5 45.5zm-768 448h512V320h-512v192zm-192-448v64l64-64h-64zm0 192h128l192-192h-128zm448-192l-192 192h128l192-192h-128zm256 0l-192 192h128l192-192h-128zm192 64l-128 128h128V128z" fill="orangered"></path></svg>
</div>

<br/>

## Part 8 - GraphQL

<div style="text-align:center; position:relative;">
    <img :src="$withBase('/images/topics/8.png')" alt="graphql logo" style="padding:3rem 0rem 2rem; width:25%"/>
</div>

This part of the course is about GraphQL, Facebook's alternative to REST for communication between browser and a server.

<div style="text-align:center; position:relative;">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--whh" width="39.43" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1025 832"><path d="M1024.585 64v192q0 27-18.5 45.5t-45.5 18.5h-64v480q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5V576h-512v224q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5V320h-64q-27 0-45.5-18.5T.585 256V64q0-27 18.5-45.5T64.585 0h896q27 0 45.5 18.5t18.5 45.5zm-768 448h512V320h-512v192zm-192-448v64l64-64h-64zm0 192h128l192-192h-128zm448-192l-192 192h128l192-192h-128zm256 0l-192 192h128l192-192h-128zm192 64l-128 128h128V128z" fill="orangered"></path></svg>
</div>

<br/>

## Part 9 - TypeScript

<div style="text-align:center; position:relative;">
    <img :src="$withBase('/images/topics/9.png')" alt="typescript logo" style="padding:3rem 0rem 2rem; width:25%"/>
</div>

This part is all about TypeScript: An open-source typed superset of JavaScript developed by Microsoft that compiles to plain JavaScript.

In this part we will be using the tools previously introduced to build end-to-end features to an existing ecosystem with linters predefined and an existing codebase writing TypeScript. After doing this part you should be able to understand, develop and configure projects using TypeScript.

<div style="text-align:center; position:relative;">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--whh" width="39.43" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1025 832"><path d="M1024.585 64v192q0 27-18.5 45.5t-45.5 18.5h-64v480q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5V576h-512v224q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5V320h-64q-27 0-45.5-18.5T.585 256V64q0-27 18.5-45.5T64.585 0h896q27 0 45.5 18.5t18.5 45.5zm-768 448h512V320h-512v192zm-192-448v64l64-64h-64zm0 192h128l192-192h-128zm448-192l-192 192h128l192-192h-128zm256 0l-192 192h128l192-192h-128zm192 64l-128 128h128V128z" fill="orangered"></path></svg>
</div>
