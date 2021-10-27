# 📓 Lesson 05: Integrate Snipcart sitewide

Some websites might limit their stores to a single page or section, but our goal is to expand beyond the homepage with pages for each product.

That means we need to move Snipcart from only being available on the homepage to loading it for every page to have access to.

## Getting Started

In this lesson, we'll learn how to load scripts globally in a Next.js app and wire up our product pages.

While doing so, we'll actually hit a snag! 😱 As the Snipcart installation will have trouble working alongside clientside routing.

So we'll also review why that's happening and how we can resolve that issue with React hooks.

## Objectives
* Move Snipcart installation to a global file
* Add Snipcart to product pages
* Review clientside limitations with Snipcart
* Install useSnipcart from npm
* Review useSnipcart implementation
* Manage global state with useSnipcart

## Exercises

### 1. Move Snipcart to application root document

Because we need to load Snipcart globally, we need to find a place to stick it.

Next.js supports adding a custom \_document.js file, which is a perfect place to add a globally need external script.

#### Goal

Create a custom \_document.js and move the scripts that initalize Snipcart to that file.

#### Where We'll Make Changes
* `src/pages/_document.js`
* `src/pages/index.js`

#### Resources
* [Custom Document - Next.js](https://nextjs.org/docs/advanced-features/custom-document)

### 2. Configure product pages to use Snipcart

Now that we have Snipcart loading globally, we can use it to set up our product pages so that we can additionally allow customers to Add to Cart there.

> Tip: Implementation should look very similar to our homepage!

#### Goal

Configure the product page Add to Cart buttons for Snipcart

#### Where We'll Make Changes
* `src/pages/products/[productId].js`

#### Resources
* [Products - Snipcart](https://docs.snipcart.com/v3/setup/products)

### 2. Move Cart link and subtotal to sitewide header

Since we can now add our products to the cart from the product page, we likely want to make sure our customers can see that total and link wherever they go on the site!

#### Goal

Set up the cart to be in the sitewide header.

> Tip: You can uncomment the code inside of the Header component file to get some pre-styled UI! That menas you can remove or comment the one on the homepage (if you want).

#### Where We'll Make Changes
* `src/components/Header/Header.js`
* `src/pages/index.js`

### 4. Review Snipcart limitations with clientside routing

If we start from the product or homepage in a new tab or hit the refresh button, Snipcart will always recoginze what's in the cart and what needs to be added.

But the second we navigate away, things start to become a little... weird.

The issue is Snipcart only initializes the page the first time it loads and as we navigate around, our JavaScript powered clientside routing clobbers the DOM nodes  that Snipcart previously recognized.

While ultimately Snipcart never lost track of the cart state and if you refresh or open up the cart, we can see that, but the resetting of the UI provides a poor and confusing experience for our customers!

#### Goal

Understand integration issues with Snipcart and clientside routing in apps

### 5. Install useSnipcart React hook from npm

To get around our state issue, we can manually track the Snipcart state using React hooks, where we'll be able to use the Context API to make that state globally available in our application.

While we won't walk through building those hooks ourselves, we can use the useSnipcart React hook that I created to solve this very issue, which we'll take some time to review the implementation as to _how_ it's actually working.

#### Goal

Install and review npm package use-snipcart

#### Where We'll Make Changes
* Terminal

#### Resources
* [use-snipcart - GitHub](https://github.com/colbyfayock/use-snipcart)

### 6. Use the useSnipcart hook to manage global cart state

Our new hook is installed so now's the time to use it!

We're currently using classes to allow Snipcart to update the page any time the cart state is updated, but instead, we can make those changes ourselves, which will actually give us additional flexibility for how we'd like to manage how we actually use that cart state.

#### Goal

Manage Snipcart state globally with the useSnipcart hook

#### Where We'll Make Changes
* `src/components/Header/Header.js`

#### Resources
* [use-snipcart - GitHub](https://github.com/colbyfayock/use-snipcart)

## Extra Credit

### 1. Update the default value shown when the cart is loading

Our cart state loads clientside with JavaScript, meaning, it takes a short amount of time to make the request to Snipcart to get that value and show it on the page.

While that's loading, we have the option to show whatever we want, whether that's nothing at all, $0.00, the word "empty", or something else creative.

#### Goal

Update the cart UI to show (or not show) a default value when the cart is loading.

#### Where We Might Make Changes
* `src/components/Header/Header.js`
* `src/components/Header/Header.module.scss`

### 2. Add an animation to the loading of the cart UI

Expanding on #1 Extra Credit, we can take this a step further and add a small animation to indicate that it's currently loading.

We can do this with CSS which makes it manageable and performant.

#### Goal

Add an animation that indicates the cart UI is loading.

#### Where We Might Make Changes
* `src/components/Header/Header.js`
* `src/components/Header/Header.module.scss`

#### Resources
* [CSS Only Loading Animation](https://codepen.io/colbyfayock/pen/aKKoJP)

## Next Lesson

[06 - Customize Snipcart shopping cart](https://github.com/colbyfayock/hyper-bros-trading-workshop-github-universe/blob/main/lessons/06%20-%20Customize%20Snipcart%20shopping%20cart.md)
