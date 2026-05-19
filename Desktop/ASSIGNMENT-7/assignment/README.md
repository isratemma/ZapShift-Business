# CS — Ticket System

A React-based Customer Support Zone for displaying, tracking, and resolving customer tickets.

---

## What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like markup inside JavaScript files. React uses it to describe what the UI should look like. Under the hood, JSX compiles to `React.createElement()` calls. It makes component structure easier to read and write compared to plain JavaScript.

---

## What is the difference between State and Props?

| | State | Props |
|---|---|---|
| Owned by | The component itself | The parent component |
| Mutable | Yes, via `setState` / `useState` | No, read-only |
| Purpose | Internal data that changes over time | Data passed down to child components |

---

## What is the useState hook, and how does it work?

`useState` is a React hook that lets functional components hold and update local state.

```jsx
const [count, setCount] = useState(0);
```

- The first value (`count`) is the current state.
- The second value (`setCount`) is the function to update it.
- Calling `setCount(newValue)` triggers a re-render with the new value.

---

## How can you share state between components in React?

By **lifting state up** — move the shared state to the closest common parent component, then pass it down as props and pass updater functions as callback props.

```jsx
// Parent holds the state
const [tickets, setTickets] = useState([]);

// Pass to children
<TicketList tickets={tickets} />
<TaskStatus tickets={tickets} onUpdate={setTickets} />
```

---

## How is event handling done in React?

React uses camelCase event names and passes functions as handlers:

```jsx
<button onClick={() => handleClick(item)}>Click me</button>
```

- Events are synthetic (React wraps native browser events for cross-browser consistency).
- You pass a function reference or an inline arrow function.
- Common events: `onClick`, `onChange`, `onSubmit`, `onKeyDown`.
