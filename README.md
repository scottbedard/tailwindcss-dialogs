# `@bedard/tailwindcss-dialogs`

Tailwind CSS utilities for styling and animating dialog elements.

[View sandbox &rarr;](https://main--tailwindcss-dialogs.netlify.app/)

## Installation

First, install the package from NPM.

```sh
npm install --save-dev @bedard/tailwindcss-dialogs
```

Next, add the following to your `tailwind.config.js` file.

```js
import dialogs from '@bedard/tailwindcss-dialogs'

export default {
  plugins: [
    dialogs
  ]
}
```

## Basic usage

This plugin provides one utility class, and three variant utilities.

1. The [`allow-discrete`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-behavior#discrete_animation_behavior) class enables entry / exit transitions
2. `backdrop` targets a dialog's backdrop pseudo element
3. `open` targets the the open state
4. `from` targets a dialog's [`starting-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/@starting-style)

## License

[MIT](https://github.com/scottbedard/tailwindcss-dialogs/blob/master/LICENSE)

Copyright (c) 2024-present, Scott Bedard
