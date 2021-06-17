# Defining the overall layout of [NAD Hat's](nadhatter.com)

## Task List

- [ ] Home Page
  - [ ] Hero Section
  - [ ] Animated Buttons
  - [ ] Linked Buttons for Navigation
  - [ ] Gallery showing of beanies
  - [ ] Text Animations use After Effects
  - [ ] Scrolling Animations while scolling the home page
- [ ] Store Page
  - [ ] Filter for items based on color and style
  - [ ] 3-col grid on bigger devices and 1-col on smaller for displaying products
  - [ ] Give grid a scroll animation wherer the 1st and 3rd col move slower than the 2nd
  - [ ] Change the image of a product when the mouse is hovered over it and when it comes into view
  - [ ] Add scroll to top button that will take visitiors back to the top
- [ ] Custom Order Page
  - [ ] Figure out how custom orders would work with Commerce.js check Slack channel
  - [ ] Build form that will allow users to order a beanie of a certain style and color
  - [ ] Add a color picker to the color selector to make it easier to choose the color
  - [ ] Add a div that changes color based on the color chosen in teh color picker
  - [ ] Make it possible to order more than one custom beanie by adding a 'Add another custom order' option
  - [ ] Make the from multistep once the user fills everything out they click next, adn it displays all teh information they input and after that add a add to cart option that will put there selection into the cart.
- [ ] About Page
- [ ] Contact Page
- [ ] Use Sendgrid for the contact page
- [ ] Checkout Page
  - [ ] 2-col Grid one col for checkout form and one col for displaying the products purchased.
  - [ ] Add loading screen so that there isn't weird flashing when first entereing the check out page
  - [ ] Intergrate both Stripe and Paypal as payment gateways, and a component that switches between the two.
- [ ] Order Confirmation Page
  - [ ] Recap of the purchase information, checkout other ecommerce order confirmation for inspiration
- [ ] Navigation Bar

## Home Page

### Call to Action:

- 100% Handmade beanies, choose from our selection or order a custom color.

- Include a hero image of a bunch of beanies layed out.

- Include a button that will either scroll or take visitors to theshopping page.

- Include a button that will take visitors to the custom order page

### Content:

- Gallery containing images of the beanie's being worn and shows the different colors that area available

### Design Inspirations

- I kind of want to include a text stretching animation to the hero section, Welcoming visitors

- I want to try out designing buttons that have an offest shadow, that looks more like a solid color

  - I want to give it a hover animation, something like a circle closing within it that changes the colors of the button

- I want to include some scroll animations maybe iclude a spinning wheel made out of beaning that rotates as users scroll down the page

### UX goals

- Grab the visitors attenttion to the call to action through the use of the Typography animation, hopefully getting them to click and view our selection

- Fix any bugs that will impede fluid traversal of the web store.

---

## Store Page

### Content

- Set up a grid in order to contain everything

  - Most of the grid will be taken up by the products

  - Include a color selector that will refine the product results based on the color selected

  - We have different types of beanies avaiable so maybe give them each a stlye name(eg. The Ponytail style where you can pull your hair through, and the classic, which is a just a classic beanie)

## Design

- have a grid that shows off the different colors avaiable of a given style through images

- make the images interactive by adding a hover effect that will change the image that is displayed. Start with an image of the hat by itself and then when it is hovered show the hat being worn by the mannequin.

- add a fixed button that will take visitors to the top of the page

---

## Custom Order Page

### Content:

- A form that will allow visitors to order a custom color that is not currently available

  - Require email in order to establish communication with the customer
  - Also require the otehr basics such as name etc.
  - also add a feature that will allow you to add more cutom order "Add another custom order"
  - Add a comments section incase they want to add some more details

- Add style selector to make it easier to know what style the customer wants

- Add a color picker on the form that will allow customer to choose the color that they are looking for

  - add a disclaimer letting them know that we will try to match their color request as closely as possible and even offer them a image of the yarn that closely matches their request

- Make the form multi-step taht starts with asking the customer basic infomration such as email, name , color, style, quantitiy. Then move on to a confirmation page thta will list out their information and selections. Then after teh click submit take them to the checkout page.

---

## About Page

### Content:

- Hello, Jose Duarte the son of NAD and the person who developed this website. NAD hats started in 2020 and NAD are my mom's initials. After trying out new hobbies to pass the time during the COVID-19 quarantine. We learned some new skills, I learned how to build websites to pass the time and my mom learned how to crochet. I decide to help my mom earn some extra money by building her a platform to sell her hats and also as a way to refine my web development skills. We offer 100% handmade high quality beanines that fit any size head. We have a wide selection of colors and also do custom orders if we don't offer a color you want. Check out a selection and if you find something you give us a shout out on instagram.

- Add an image of me and my mom together

- Check out other ecomerce platforms ABout us pages if their happens to be too much whitespace in the page

### Design:

- Keep this one simple just some text and a description of who we are what we offer and how we started.

## Contact Page

### Content

- Build a simple contact page where vistors or cusotmer can react out to us.

- Follow the same thing I did with my portfolio and use Sendgrid as my email sender/provider???

---

## Checkout Page

### Content

- Form that a customer will use to provide billing and shipping information
- displays the items that a customer is buying and the total cost + shipping costs

# Design:

- Two column grid one for billing/shipping details and the other to display items

- Add a loading screen thta will display before taking a visitor to the cart(.5secs - 1sec), just to avoid the screen flashing when the checkout items load in teh item component.

---

## Order Confirmation Page

### Content

- Pretty much a reciept letting the customer know when they should expect their order
- Includes all the relevant information
  - Order number
  - Total
  - Products Purchased
  - Shipping Information

---

## Navigation

### Content:

- build icons using Illustrator these will include
  - Shopping Cart (either a bag or a cart, or even more creative a beanie with a counter that shows how many items are in you cart)
  - Menu Icon
  - Closing Icon
  - Search Icon
  - Back to top icon
  - Logo
