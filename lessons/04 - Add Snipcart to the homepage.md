# 📓 Lesson 04: Add Snipcart to the homepage

[Snipcart](https://snipcart.com/) is a ecommerce software that allows you to easily add a shopping cart to any type of website with a few lines of code!

Not only is it easy to integrate, it comes with the entire checkout flow from giving your customers the ability to actually add the products to a cart, ordering those products, and tools for you as a seller to fulfill those products.

## Getting Started

In this lesson, we'll learn how to take our store online with Snipcart's shopping cart integration.

With our shopping cart added, we'll work out of Snipcart's "Test" mode so we can see exactly what making a purchase looks like and successfully make a test purchase with our account.

## Objectives
* Find Snipcart API key
* Configure Snipcart with Netlify domain
* Install Snipcart in project
* Integrate Snipcart shopping cart

## Exercises

### 1. Finding a Snipcart API key and configuring domains

In order to make our Snipcart shopping cart work, we need to ultimately provide an API key that's going to allow us to connect to our own account.

We also need to be able to configure out domains so that API key works with our sites.

To do this, we'll first need to find our key, then configure that key for:
* Our local environment
* Our Netlify environment

#### Goal

Find the Snipcart API key and configure domains for localhost:3000 and your Netlify URL

#### Resources
* [API Keys - Snipcart](https://docs.snipcart.com/v3/dashboard/account-configuration#3-api-keys)
* [Domain URLs - Snipcart](https://docs.snipcart.com/v3/dashboard/store-configuration#5-domains--urls)

### 2. Installing the Snipcart SDK

Adding Snipcart to a web project is as simple as dropping in a few scripts, but in a Next.js React project, where do we actually put those scripts?

We'll learn how to load external scripts and styles to add the Snipcart integration to our site while using our API key to configure it for our project.

#### Where We'll Make Changes
* `src/pages/index.js`

#### Resources
* [Installation - Snipcart](https://docs.snipcart.com/v3/setup/installation)

### 3. Use an environment variable to store the Snipcart API key locally and on Netlify

We're currently adding our Snipcart API key directly in our code, which _works_ but committing API keys to Git repositories is typically frowned upon. While the Snipcart API keys are generally publicly available on a website, it's still best practice not to.

On top of that, we're currently using our "Test" API key. When we make our online store live, we need to be sure we're using a real production API key.

To solve this, we'll use an environment variable to store our Snipcart API key where we then have the option to easily interchange our key without having to change any code.

#### Goal

Create a local environment variable to store the Snipcart API key. Then add that environment variable to Netlify and redeploy.

#### Where We'll Make Changes
* `src/pages/index.js`
* `.env.local`
* Netlify

#### Resources
* [Environment Variables - Next.js](https://nextjs.org/docs/basic-features/environment-variables)
* [Build Environment Variables - Netlify](https://docs.netlify.com/configure-builds/environment-variables/)

### 4. Making products available to add to the Snipcart shopping cart

We want people to buy our products and to do that, they need to add them to the cart.

Snipcart makes recognizing what products your selling easy by using a class and data attributes that we can add right onto the Add to Cart button.

#### Goal

Set up Snipcart to recognize the product Add to Cart buttons

#### Where We'll Make Changes
* `src/pages/index.js`

#### Resources
* [Products - Snipcart](https://docs.snipcart.com/v3/setup/products)

### 5. Adding a link to easily open the shopping cart

Whenever someone adds something to the cart, the Snipcart shopping cart opens up to review, but what if someone wants to review their cart without adding another item?

Similar to how Snipcart makes it easy to set up our Add to Cart button, we can make a View Cart link that lets someone open up their cart. We can even make it show the subtotal of the cart!

#### Goal

Set up Snipcart to recognize a link to the cart and show the cart subtotal.

#### Where We'll Make Changes
* `src/pages/index.js`

#### Resources
* [Cart Summary - Snipcart](https://docs.snipcart.com/v3/setup/cart-summary)

## Extra Credit

### 1. Change the shopping cart modal style to narrow

Snipcart has a variety of customization options that we'll get into with later lessons, but one basic customization is controlling how we want to display our shopping cart!

Right now when it opens, it takes up the whole page, but another option is to have it only take up a portion of the page, that way our customers can still see the store in the background when the cart is open.

#### Goal

Configure Snipcart to open the shopping cart modal with the narrow option.

#### Where We'll Make Changes
* `src/pages/index.js`

#### Resources
* [Global Configurations - Snipcart](https://docs.snipcart.com/v3/setup/installation#global-configurations)

## Next Lesson

[05 - Integrate Snipcart sitewide](https://github.com/colbyfayock/hyper-bros-trading-workshop-github-universe/blob/main/lessons/05%20-%20Integrate%20Snipcart%20sitewide.md)
