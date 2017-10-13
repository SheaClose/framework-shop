* Create a function called `checkoutAndRedirect` just above the `return` statement:
  * This function should call the `checkout` action creator.
  * This function should use `history.push` to route to `"/thank-you"`.
* Update the `button` with the `className` of `"cart__checkout"` to call the `checkoutAndRedirect` function.

<details>

<summary> Detailed Instructions </summary>

<br />

Let's begin by creating a `ThankYou` component in `src/components/ThankYou/ThankYou.js`. You'll need to create the `ThankYou` folder and `ThankYou` javascript file. Inside the javascript file let's create a basic react component that returns the JSX from the instructions above.

```js
import React from "react";

export default function ThankYou() {
  return (
    <div className="thank-you">
      <img
        role="presentation"
        src={ thanks }
      />
      <h3>Thank you for your purchase!</h3>
    </div>
  )
}
```

We're now ready to configure a route with this new `ThankYou` component. Open `src/router.js` and import the `ThankYou` component. Then configure a route with a path of `"/thank-you"` and a component of `ThankYou`.

```js
import ThankYou from './components/ThankYou/ThankYou';

export default (
  <Switch>
    <Route component={ Landing } exact path="/" />
    <Route component={ Shop } path="/shop" />
    <Route component={ Details } path="/details/:name" />
    <Route component={ Cart } path="/cart" />
    <Route component={ ThankYou } path="/thank-you" />
  </Switch>
)
```

All that's left is to hook up the button in the `Cart` view to call the `checkout` action creator and change the view to `ThankYou`. Create a new function named `checkoutAndRedirect` which takes no parameters. This function will invoke the `checkout` Redux action creator, then invoke `history.push( "/thank-you" )`.

```js
function checkoutAndRedirect() {
  checkout();
  history.push("/thank-you");
}
```

Then in the JSX add an `onClick` attribute that calls `checkoutAndRedirect`.

```jsx
<button className="cart__checkout" onClick={ checkoutAndRedirect }>Checkout</button>
```

</details>

### Solution

<details>

<summary> <code> src/components/ThankYou/ThankYou.js </code> </summary>

```jsx
import React from "react";
import './ThankYou.css';

import thanks from '../../assets/thanks.gif';

export default function ThankYou() {
  return (
    <div className="thank-you">
      <img
        role="presentation"
        src={ thanks }
      />
      <h3>Thank you for your purchase!</h3>
    </div>
  )
}
```

</details>

<details>

<summary> <code> src/router.js </code> </summary>

```jsx
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cart from './components/Cart/Cart';
import Details from './components/Details/Details';
import Landing from './components/Landing/Landing';
import Shop from './components/Shop/Shop';
import ThankYou from './components/ThankYou/ThankYou';

export default (
  <Switch>
    <Route component={ Landing } exact path="/" />
    <Route component={ Shop } path="/shop" />
    <Route component={ Details } path="/details/:name" />
    <Route component={ Cart } path="/cart" />
    <Route component={ ThankYou } path="/thank-you" />
  </Switch>
)
```

</details>

<details>

<summary> <code> src/components/Cart/Cart.js </code> </summary>

```jsx
import React from "react";
import { connect } from "react-redux";

import "./Cart.css";

import { checkout } from "../../ducks/product";

import CartItem from "./CartItem/CartItem";

export function Cart( { checkout, history, productsInCart } ) {
  const products = productsInCart.map( product => (
    <CartItem
      key={ product.id }
      logo={ product.logo }
      name={ product.name }
      price={ product.price }
    />
  ) );
  const cartTotal = productsInCart.reduce( ( total, { price } ) => total + price, 0 );

  function checkoutAndRedirect() {
    checkout();
    history.push("/thank-you");
  }

  return (
    <div className="cart">
      <h1>Cart</h1>
      {
        products.length === 0
          ?
            <h3>Nothing in cart! Go buy something!</h3>
          :
            <main>
              { products }
              <div className="cart__total">
                ${ cartTotal }
              </div>
              <button className="cart__checkout" onClick={ checkoutAndRedirect }>Checkout</button>
            </main>
      }
    </div>
  );
}

function mapStateToProps( { products, productsInCart } ) {
  return { productsInCart: products.filter( product => productsInCart.includes( product.id ) ) }
}

export default connect( mapStateToProps, { checkout } )( Cart );
```

</details>

<br />

<img src="https://github.com/DevMountain/framework-shop/blob/solution/readme-assets/5g.gif" />

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>
