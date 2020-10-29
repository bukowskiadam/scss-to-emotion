# Emotion problems example

In this project I wanted to show what problems you might experience when porting styles
from SCSS modules to emotion.

Some may say that this is not the "proper way" to use emotion
but we have a pretty large codebase of styles in the project, which is embedded in other
projects. Our goal was to get rid of the SCSS to generate a bundle with JS code only.

## Working example

https://scss-to-emotion.netlify.app/

## Problem description

### SCSS
This works in SCSS and the effective background-color is red:
```scss
.app {
  background-color: green;

  @media screen {
    background-color: blue;
  }
}

.app {
  background-color: red;
}
```

Generated CSS is:
```css
.app {
  background-color: green;
}

@media screen {
  .app {
    background-color: blue;
  }
}

.app {
  background-color: red;
}
```

### Emotion

When we try to mimick the same code in emotion it does not work as expected:
```js
import { css } from 'emotion';

const app = css`
  background-color: green;

  @media screen {
    background-color: blue;
  }
`;

const appOverridden = css`
  ${app};

  background-color: red;
`;
```

Generated CSS is:
```css
.app {
  background-color: green;
  background-color: red;
}

@media screen {
  .app {
    background-color: blue;
  }
}
```

## Emotion workaround

We can achieve similar behavior by increasing specificity in the overridden styles
```js
// same as above

const appOverridden = css`
  ${app};

  && {
    background-color: red;
  }
`;
```

It works because generated css looks like
```css
.app {
  background-color: green;
}

@media screen {
  .app {
    background-color: blue;
  }
}

.app.app {
  background-color: red;
}
```
So beside of the increased specificity it also adds styles to the page in the right order.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
