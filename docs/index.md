---
id: tutorial
title: "Tutorial: Intro To React"
layout: tutorial
sectionid: tutorial
permalink: /tutorial/tutorial.html
redirect_from:
  - "docs/tutorial.html"
  - "docs/why-react.html"
  - "docs/tutorial-ja-JP.html"
  - "docs/tutorial-ko-KR.html"
  - "docs/tutorial-zh-CN.html"
---

## What We're Building

Today, we're going to build an interactive tic-tac-toe game. We'll assume some familiarity with HTML and JavaScript but you should be able to follow along even if you haven't used them before.

If you like, you can check out the final result here: <a href="https://s.codepen.io/ericnakagawa/pen/ALxakj" target="_blank">Final Result</a>. Try playing the game. You can also click on a link in the move list to go "back in time" and see what the board looked like just after that move was made.

## What is React?

React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

React has a few different kinds of components, but we'll start with React.Component subclasses:

```javascript
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// Example usage: <ShoppingList name="Mark" />
```

We'll get to the funny XML-like tags in a second. Your components tell React what you want to render – then React will efficiently update and render just the right components when your data changes.

Here, ShoppingList is a **React component class**, or **React component type**. A component takes in parameters, called `props`, and returns a hierarchy of views to display via the `render` method.
