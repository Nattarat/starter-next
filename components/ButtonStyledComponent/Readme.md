ButtonStyledComponent button:

```jsx
<ButtonStyledComponent size="small"  variantMediaQuery="primary">Push Me</ButtonStyledComponent>
```

Big pink button:

```jsx
<Button size="large" color="deeppink">Lick Me</Button>
```

And you *can* **use** `any` [Markdown](http://daringfireball.net/projects/markdown/) here.

Fenced code blocks with `js`, `jsx` or `javascript` languages are rendered as a interactive playgrounds:

```jsx
<Button>Push Me</Button>
```

You can add a custom props to an example wrapper (```` ```js { "props": { "className": "checks" } }````):

```js { "props": { "className": "checks" } }
<Button>I’m transparent!</Button>
```

Or disable an editor by passing a `noeditor` modifier (```` ```js noeditor````):

```jsx noeditor
<Button>Push Me</Button>
```

To render an example as highlighted source code add a `static` modifier: (```` ```js static````):

```js static
import React from 'react';
```

Fenced blocks with other languages are rendered as highlighted code:

```html
<h1>Hello world</h1>
```