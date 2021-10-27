# 📓 Lesson 06: Customize Snipcart shopping cart

As we've seen to this point, Snipcart gave us a pretty easy way to build an online store with a shopping cart.

While the Snipcart design team did a fantastic job with the UI, it doesn't really look like _our_ site. 🤔

## Getting Started

Snipcart comes with a variety of customization options to make sure we can keep our brand consistent.

In this lesson, we'll learn how to theme our Snipcart shopping cart and even completetly customize widgets with Snipcart templates.

## Objectives
* Review existing shopping cart
* Use CSS properties to customize shopping cart
* Add styles based on Snipcart state
* Override components with templates
* Use a custom HTML page to manage templates

## Exercises

### 1. Customize the shopping cart with Snipcart Theming

The easiest way to get started with Snipcart Theming is by using CSS properties (variables).

Snipcart uses CSS properties to define styles for the shopping cart UI including things like button and link color.

This means we can override those values to use colors that match our brand!

#### Goal

Override the Snipcart shopping cart custom properties to match your brand styles.

> Tip: You can find \_snipcart.scss at the top of the styles directory to use for Snipcart-specific styling.

#### Where We'll Make Changes
* `src/styles/_snipcart.scss`

#### Resources
* [Custom Properties - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
* [Theming - Snipcart](https://docs.snipcart.com/v3/setup/theming)

### 2. Use DOM classes managed by Snipcart to add styles

One fun thing about how Snipcart works is any time the cart is open, a class is appended to the document body node.

We can take advantage of this and apply custom styles whenever the modal is open.

#### Goal

Add custom styles to the app that apply whenever the Snipcart shopping cart is open.

#### Where We'll Make Changes
* `src/styles/_snipcart.scss`

#### Resources
* Browser developer tools inspector

## Extra Credit

### 1. Override the Snipcart UI with custom component templates 

If we want to take our customizzations up a notch, Snipcart lets us completely override components with their template customization.

The components use Vue, so we can even use advanced syntax if we want (hey isn't this a React workshop? 👀).

But this gives us the opportunity to craft our experience exactly how we want.

#### Goal

Customize a Snipcart UI template.

#### Where We'll Make Changes
* `src/pages/_document.js`

#### Resources
* [Customization - Snipcart](https://docs.snipcart.com/v3/setup/customization)
* [Default theme reference - Snipcart](https://docs.snipcart.com/v3/themes/default/reference)

## Feedback

The good, the bad -- I want to know! I would really appreciate you taking any time to hop in this survey and be honest about your experience with the workshop. Please take into consideration both how much you've enjoyed the workshop and how much you felt you've learned.

[Take the survey!](https://forms.gle/Ku2gopCyGyYXfHC19) (https://forms.gle/Ku2gopCyGyYXfHC19)

P.S. The form is anonymous unless you decide to provide contact details to follow up with.


## More Ecommerce on the Jamstack

Looking to take what you've learned to another level? Check out my course Ecommerce on the Jamstack where I walk you through some of the things you've work through in this workshop and more, including sourcing our products from headless WordPress and how we can manually build our Snipcart hook with React State and Context in addition to other features!

https://www.leveluptutorials.com/tutorials/ecommerce-on-the-jamstack-with-snipcart-next-js-and-wordpress
