# 📓 Lesson 07: Add clientside product search with fuse.js

Now that we have our products, we want to give our customers a way to search for those products.

While we can manually look through a list of products to see if a product's title matches the search, we could instead use a library like [fuse.js](https://fusejs.io/) which gives us the power of fuzzy search, along with a lot of other capabilities, to easily add powerful clientside search.

## Getting Started

In this lesson, we'll learn how to search through our array of products based on a query to give customers a way to look for specific products.

To do that, we'll use node library fuse.js, which allows us to set up a new search instance that we'll make our queries to.

## Objectives
* Use React state to capture a search query
* Install fuse.js
* Create a search with fuse

## Exercises

### 1. Capture a form's input value and store in React state

The first and most important part involved in creating a search is the search query itself.

We can capture that query using a search form then grabbing the value when that input changes.

But in order to use it later in our search, we need to store it somewhere first, which is where React state comes in.

> Tip: Uncomment out [the function handleOnSearch](https://github.com/colbyfayock/hyper-bros-trading-workshop-starter/blob/main/src/pages/index.js#L15-L17) and [the search form](https://github.com/colbyfayock/hyper-bros-trading-workshop-starter/blob/main/src/pages/index.js#L28-L35) to get started!

#### Goal

Store the search input value in React state when some enters a query in the form

#### Where We'll Make Changes
* `src/pages/index.js`

#### Resources
* [Using the State Hook](https://reactjs.org/docs/hooks-state.html)

### 2. Install & review fuse.js

Search is a super common way of adding discoverability to a website.

Simple string searches might sound easy, such as if we wanted to look for "Colby" in "Colby's Cards", but there are a ton of factors that start to make search complicated.

In this specific scenario, what if someone typed "colby"? A string match wouldn't "just work" as uppercase and lowercase values are different. We can handle that by transforming both before we compare using `toLowerCase()`, but what if in another instance we searched "colbys", again would that match? If we removed all of the "'" characters, would "colby's" still match?

While these are just two examples, search starts to get more complicated as those rules pile up. But rather than deal with that ourselves, we can take advantge of an easy-to-install library to handle that logic.

To power our search, we're going to use fuse.js, a library we can install right with npm.

#### Goal

Install fuse.js with npm and review features in documentation.

#### Where We'll Make Changes
* Terminal

#### Resources
* [fuse.js](https://fusejs.io/)

### 3. Create a new fuse.js instance and make a search

Now that fuse.js is installed, it's time to use it.

To do this, we need to set up a new instance of fuse.js with our configuration, which will the allow us to make a search to it.

We'll then use the filtered data from those results to display our results in the UI.

#### Goal

Create a new fuse.js instance and make a search with the query.

#### Where We'll Make Changes
* `src/pages/index.js`

#### Resources
* [Examples - fuse.js](https://fusejs.io/examples.html)

## Extra Credit

### 1. Add additional fields to the search configuration

One of the awesome things about fuse.js is we can just as easily add new fields to be searched upon as we added our original product name.

To do that, we can update the `keys` field to include our new field.

#### Goal

Add a new field from the product data to be searched upon.

#### Where We'll Make Changes
* `src/pages/index.js`

#### Resources
* [Keys - fuse.js](https://fusejs.io/api/options.html#keys)


### 2. Show a message on the page if there are no results

The goal of adding search is to show the items that match what our visitor entered as a query.

But what if there are no items that match that query?

Instead of just empty space we can add a better experience by telling our visitor nothing matches.

And to extend that, we can even use it strategicly such as adding a link to a recommended product!

#### Goal

Display something when no results are available such as a message indictating such.

#### Where We'll Make Changes
* `src/pages/index.js`

## Feedback

The good, the bad -- I want to know! I would really appreciate you taking any time to hop in this survey and be honest about your experience with the workshop. Please take into consideration both how much you've enjoyed the workshop and how much you felt you've learned.

[Take the survey!](https://forms.gle/Ku2gopCyGyYXfHC19) (https://forms.gle/Ku2gopCyGyYXfHC19)

P.S. The form is anonymous unless you decide to provide contact details to follow up with.


## More Ecommerce on the Jamstack

Looking to take what you've learned to another level? Check out my course Ecommerce on the Jamstack where I walk you through some of the things you've work through in this workshop and more, including sourcing our products from headless WordPress and how we can manually build our Snipcart hook with React State and Context in addition to other features!

https://www.leveluptutorials.com/tutorials/ecommerce-on-the-jamstack-with-snipcart-next-js-and-wordpress
