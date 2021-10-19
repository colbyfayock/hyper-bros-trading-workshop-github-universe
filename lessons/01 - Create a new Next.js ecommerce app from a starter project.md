# 📓 Lesson 01: Create a new Next.js ecommerce app from a starter project

[Next.js](https://nextjs.org/) is a web framework with a variety of tools built on top of [React](https://reactjs.org/) that gives developers a way to build powerful web apps.

The best part? The APIs that make it so powerful and flexible aren't overly complicated, making the framework more approachable to get started with. 

## Getting Started

In this lesson, we'll learn how to create a new application with React framework Next.js.

To do this, we can use Create Next App, which is a commandline tool that allows us to quickly scaffold a new project.

For this workshop, we'll be starting from an existing example that will give us some products and a UI to work with before jumping in.

## Objectives
* Create a new Next.js application
* Explore new project

## Exercises

### 1. Creating a new Next.js application from an example project

By default, Create Next App will use a Next.js-managed template, which gives an example homepage, API route, and some very basic styles.

In order to make the best of our time, we'll be starting from an example Next.js app, using the same commandline tool, but by passing in an additional argument with our template.

#### Goal

Create a new Next.js application using the Hyper Bros. Trading Workshop Starter

#### Resources
* [Hyper Bros Trading Workshop Starter](https://github.com/colbyfayock/hyper-bros-trading-workshop-starter) (github.com)

### 2. Exploring Next.js and how pages work 

If this is your first time using Next.js, you've just stepped into a super powerful framework that makes it easy for developers to build experiences.

Part of that is its APIs for creating pages and fetching data to build those experiences dynamically.

We'll explore some of the features we're already using with Next.js and the basics of our new online store.

#### Goal

Learn about Next.js and the new project.

## Extra Credit

### 1. Update the title of the store

We started up a new online store called Hyper Bros Trading, but they don't franchise quite yet! That means, you need to come up with your own store name.

Update the title of the store throughout the application to your new store!

P.S. don't forget the SEO metadata!

#### Goal

Update all instances of Hyper Bros. Trading in the application with a new name

#### Where We'll Make Changes
* `src/pages/index.js`
* `src/pages/products/[productId].js`
* `src/components/Footer/Footer.js`
* `src/components/Header/Header.js`

### 2. Customize your store's colors

Not only do you have a new store name, you likely have your own branding!

Find the settings that control the colors of the layout including the blue, yellow, and green, and change them to your own favorite colors.

#### Goal

Update the store branding to use new colors.

#### Where We'll Make Changes
* Reivew the color settings file inside `src/styles/settings/_colors.scss` and use search to find each color!


## Next Lesson

[02 - Create a new GitHub repository and link local project](https://github.com/colbyfayock/hyper-bros-trading-workshop/blob/main/lessons/02%20-%20Create%20a%20new%20GitHub%20repository%20and%20link%20local%20project.md)
