## Index.html

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
/>
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"
/>
```

## Navigation

```js
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/news'>News</a>
        </li>
        <li>
          <a href='/contact'>Contact</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/products'>Products</a>
        </li>
        <li>
          <a href='/posts'>Posts</a>
        </li>

        <li>
          <a href='/Login'>Login</a>
        </li>

        <li>
          <a href='/register'>Register</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
```

## Navigation with nav links

```js
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/news'>News</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/products'>Products</NavLink>
        </li>
        <li>
          <NavLink to='/posts'>Posts</NavLink>
        </li>

        <li>
          <NavLink to='/Login'>Login</NavLink>
        </li>

        <li>
          <NavLink to='/register'>Register</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
```

## Footer

```js
import React from 'react';

const Footer = () => {
  return (
    <div className='footer-dark'>
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6 col-md-3 item'>
              <h3>Services</h3>
              <ul>
                <li>
                  <a href='#'>Web design</a>
                </li>
                <li>
                  <a href='#'>Development</a>
                </li>
                <li>
                  <a href='#'>Hosting</a>
                </li>
              </ul>
            </div>
            <div className='col-sm-6 col-md-3 item'>
              <h3>About</h3>
              <ul>
                <li>
                  <a href='#'>Company</a>
                </li>
                <li>
                  <a href='#'>Team</a>
                </li>
                <li>
                  <a href='#'>Careers</a>
                </li>
              </ul>
            </div>
            <div className='col-md-6 item text'>
              <h3>Company Name</h3>
              <p>
                Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis
                tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel
                in justo.
              </p>
            </div>
            <div className='col item social'>
              <a href='#'>
                <i className='icon ion-social-facebook'></i>
              </a>
              <a href='#'>
                <i className='icon ion-social-twitter'></i>
              </a>
              <a href='#'>
                <i className='icon ion-social-snapchat'></i>
              </a>
              <a href='#'>
                <i className='icon ion-social-instagram'></i>
              </a>
            </div>
          </div>
          <p className='copyright'>Company Name © 2022</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
```
