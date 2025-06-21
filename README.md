# Intro
### package.json

package.json file is a configuration for npm

##

- Important package => Bundler
  - minification
  - compression
  - cleaned

### Popular Bundlers

- Webpack
- Parcel
- Vite

##

Create react App behind the scenes uses bundler(webpack), babel

##

### Types of dependencies

There are 2 types of dependencies

1. Dev dependency - only for development
2. normal dependency - used in dev and production

##

- package.lock.json has the track of exact version and locks the version
- integrity: is like a hash (too make sure whatever the version installed in dev machine to be install in Production also)

##

### node modules is a collection of dependencies

Transitive dependencies
with package.json and package.lock.json we can recreate all the node modules so we no need to push the node modules to git

##

`npx parcel index.html`

- npx -> It is a command-line tool that comes with Node.js (v8.2.0 and above) via npm (v5.2.0 and above), and its purpose is to execute Node.js packages directly, without installing them globally.

### Parcel

- Dev Build
- Local Server
- HMR (Hot Module Replacement)
  - File watching Algorithm - written in c++
- Faster Builds - Caching
- Image optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code splitting
- Differential Bundling - to support older browsers
- Diagnostics
- Error Handling
- We can host on Https
- Tree Shaking - remove unused code
- Different dev and Prod bundles

### Running Application

- npm start ==> npm run start
- this will work only for start as start is reserved keyword of npm.

# Foundation

React.createElement('div', null, 'Hello, React!') returns object
when we render this element to DOM then it becomes a html element.

### JSX

- JSX stands for JavaScript XML.
- It is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript. JSX is used primarily with React to describe what the UI should look like.
- JSX was created by Facebook as part of the React ecosystem.
- It was introduced when React was released in 2013 to make UI code more declarative and readable.
- Browsers do not understand JSX directly — it must be transpiled (converted) into JavaScript using tools like Babel.
- JSX is not valid JavaScript, so it needs to be compiled (usually by Babel) into plain JavaScript.
- Babel uses AST to transform modern JS to old JS

###

JSX Code:
`const element = <h1 className="greeting">Hello, JSX!</h1>;`

###

🔧 Babel Compiles it to:
js

```
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, JSX!'
);
```

- This creates a React element (Virtual DOM) that React can render to the actual DOM.
- While giving attributes to JSX we need to give in camelCase.

### React Component

- Everything in react is component

1. Class based Component - Old way
2. Functional Component - New way

# Functional Components

- Is a normal javascript function which returns JSX or React element.
  Example:

```
const HeadingComponent = () => {
  return <h1>Heading</h1>;
}
```

### Component Composition

- Component Composition is the React pattern of building complex UIs by combining small, reusable components together — like building blocks.
- Instead of inheritance (used in traditional OOP), React favors composition for component reuse and organization.
- You can compose components by nesting them or passing them as children/props.
- Example: Basic Composition

```
function Header() {
  return <h1>Welcome!</h1>;
}

function Footer() {
  return <footer>© 2025</footer>;
}

function Page() {
  return (
    <div>
      <Header />
      <p>This is the main content.</p>
      <Footer />
    </div>
  );
}
```

Here, Page composes Header and Footer.

##

### Common Composition Patterns

1. Children as a Prop
2. Component Injection via Props
3. Render Props (Advanced Pattern)
4. Higher-Order Components (HOC)

### props

Passing props to a component is just like passing arguments to a function
Dynamically passing data to component.
Destructure props

### Config driven UI

Dynamic data based on different locations.

#### .map

### unique key property

- to optimize a unique key to be added to the component in order to avoid rerenders
  of already loaded component
- If a new component is added to list it will rerender only that new component not all the existing components.
- Logically we can use index as key but as per React documentation it say never use index as key to the component
  if the order of items might change, this will negatively impact performance and may cause issues with component state.
  this is an anti-pattern.

### exports/import

- Default -> export only one export in a file
  export default Component;
  import Component from "path";
- Named export -> multiple exports in a file like individual contacts etc...
  export const Component;
  import {Component} from "path";
- we can also use both default export and named exports in the same JavaScript module.

```
export const farewell = () => {
  console.log("Goodbye!");
};

const defaultFunction = () => {
  console.log("I'm the default export.");
};

export default defaultFunction;
import defaultFunc, { greet, farewell } from './myModule';
```

- When importing, the default export can be given any name, while named exports must match exactly (or be renamed using as).

### React behind the scene

React is fast in DOM manipulation.
Virtual DOM
Diff Algorithm - Reconciliation - React Fiber

### useState() React Hook

Normal JS utility functions

- useState() - it maintains the state of the component
  whenever a state variable update react rerenders the component
  As soon as the data layer updates UI layer will update.
- Never use useState hook inside a condition.
- Never create state Variable inside a for loop.

### Diff Algorithm

Reconciliation Algorithm also known as React Fiber.
Ex: There are 7 Cards when filter Applied 2 Cards will be displayed.

- Virtual DOM - Virtual Dom is a representation of Actual DOM
  it is normal javascript object(nested object)
- Diff Algorithm finds difference between 2 Virtual DOMs
  OLD Virtual DOM(7 Cards)and New Virtual DOM(2 Cards)
  then it will update the Actual DOM.
  In React version 16 this Algorithm(React DOM) came in.
- Whenever there is a change in state Variable react will find out difference between Virtual DOMs and it will update the Actual DOM (rerender the component).
- React is doing efficient DOM manipulation because it has a Virtual DOM

### OLD Monolith Architecture

Monolith Architecture is a traditional software design pattern where all components of an application are built and deployed as a single unit.
API + UI + DB + + SMS + AUTH in one unit

### New MICRO Service Architecture

UI Service
Backend Service
DB Service
SMS Service
Email Service

- This is known a separation of concerns
- Single Responsibility principle, where each and every service has its own job.
- All these service run on their own ports

### API call to interact with backend

1. OLD Approach

- Page Loads -> API(500ms) -> Render
  page looks frozen until we get the data.

2. React Approach

- Loads -> Render -> API -> Render
  we can see skeleton till we get the data
  for better user experience.

### useEffect() React Hook

- The useEffect hook in React is used to handle side effects in functional components — like fetching data, setting up subscriptions, or manually changing the DOM.

```
useEffect(() => {
  // Side effect logic (e.g., fetch, event listener, etc.)

  return () => {
    // Optional cleanup code
  };
}, [dependencies]);
```

- useEffect callback function will be triggered/called after the component rendered.
- useEffect replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.
- It's essential for data fetching, subscriptions, timers, DOM manipulation, etc.
- If no dependency array added useEffect will be called on every render.
- If there was an empty dependency array [] the useEffect is only called on initial render just once.
- If we pass dependency to dependency array, whenever the dependency changes useEffect will be called.

### CORS Policy

- Browser will block calling APIs from localhost
  If there is a mismatch from one origin to another origin
- How to bypass CORS - use browser extension Allow CORS

### Shimmer UI

- Used while conditional rendering(display placeholder till we get data from API and display the actual data whenever the data is ready);
- Shimmer UI in React refers to the implementation of a visual effect that simulates a loading state by displaying animated placeholders that mimic the shape and size of the content that is yet to load. This technique enhances user experience by providing visual feedback during data fetching, preventing users from perceiving the application as unresponsive.

### https://corsproxy.io/

- CorsProxy allows web applications to securely access resources
  from different domains, overcoming browser restrictions.
- it will provide limited calls per minute in free version

### React Routing

- React Router Library (latest version 7 as of june 2025)
- npm package react-router-dom

1. Create Router configuration with `createBrowserRouter`

- Each Route includes path and element
- createBrowserRouter is a function introduced in React Router v6.4+ that allows you to define your routes in JavaScript (object-based) and enables advanced features
  like:
  - Data loading with loader
  - Form submission with action
  - Error handling with errorElement
  - Nested routing
  - Route-based code splitting (optional)
    import { createBrowserRouter } from 'react-router-dom';
    📌 Syntax:

```
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: homeLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'about',
        element: <About />
      }
    ]
  }
]);
```

🔁 How to use it with RouterProvider:

```
import { RouterProvider } from 'react-router-dom';

function App() {
  return <RouterProvider router={router} />;
}
```

🧠 Key Features:
| Feature | Description |
| ------------------ | ---------------------------------------------------------------- |
| `loader` | Fetch data **before** rendering the component |
| `action` | Handle form submissions or other mutations |
| `errorElement` | Renders if there's a loader/action/render error |
| Nested Routes | Define child routes inline |
| Centralized Config | Define routing as a single object tree rather than JSX structure |
✅ Example with Loader:

```
const router = createBrowserRouter([
  {
    path: '/users/:id',
    element: <User />,
    loader: async ({ params }) => {
      return fetch(`/api/users/${params.id}`);
    },
  },
]);
```

- Now, React Router will automatically call the loader and provide its result via a hook:

```
import { useLoaderData } from 'react-router-dom';

function User() {
  const user = useLoaderData();
  return <div>{user.name}</div>;
}
```

2. `RouterProvider`

- The RouterProvider in React Router v6.4+ is used to provide a router configuration to your React app — including route definitions, loaders, actions, and error handling.
- It replaces the older BrowserRouter or HashRouter in apps using the data APIs (createBrowserRouter, createRoutesFromElements, etc.).

```
function App() {
  return <RouterProvider router={router} />;
}
```

- It enables data loading via loader, action, and errorElement.

- It supports declarative routes in code.

- Required when using Data Routers, such as createBrowserRouter, createMemoryRouter, etc.

### 🆚 createBrowserRouter vs BrowserRouter:

| Feature                  | `BrowserRouter`        | `createBrowserRouter`         |
| ------------------------ | ---------------------- | ----------------------------- |
| JSX-based routes         | ✅ Yes                 | ❌ (uses object-based config) |
| Loaders & Actions        | ❌ Not supported       | ✅ Full support               |
| Error handling per route | ❌ No                  | ✅ Yes                        |
| Used with                | `<Routes>` / `<Route>` | `<RouterProvider>`            |

### useRouterError hook

-useRouteError is a React Router hook used inside error boundaries to access the error thrown by a loader, action, or React component in a route.

### Children Routes

- Child routes (also known as nested routes) let you render components inside a parent route layout, keeping parts of the UI consistent — like navbars, sidebars, etc.

### ✅ Why Use Child Routes?

- Share a common layout (e.g. dashboard, header)
- Nest URLs logically (e.g. /dashboard/settings)
- Compose UI with nested outlets
- Use <Outlet /> in Layout:

### 🧠 Notes:

- Each child route renders inside its parent route's <Outlet />.
- You can nest multiple levels deep.
- You can add loader, action, or errorElement at each route level.

### 🧪 Bonus: Index Route

`{ index: true, element: <Home /> } // equivalent to path: ''`

### 📁 Nested Path Output:

/ → RootLayout + Home
/about → RootLayout + About

### 🔢 How Many <Outlet /> Can You Have in a React App?

You can have as many <Outlet /> components as you need — one per layout level in your route hierarchy. There is no hard limit to the number of <Outlet /> components in a React Router application.
So:

- 1 <Outlet /> per layout level
- You can nest layouts as deep as needed
- Layouts can also include their own <Outlet /> for further nesting

### 🏗️ Example with Multiple Nested <Outlet />s:

// routes structure:
/
├── RootLayout (1st Outlet)
├── DashboardLayout (2nd Outlet)
├── UsersPage
├── SettingsPage

```
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          { path: 'users', element: <UsersPage /> },
          { path: 'settings', element: <SettingsPage /> },
        ]
      }
    ]
  }
]);
```

### ✅ Summary:

| Question                    | Answer                          |
| --------------------------- | ------------------------------- |
| Max number of `<Outlet />`s | Unlimited                       |
| Usage                       | One per route layout            |
| Purpose                     | Nest child routes               |
| Nesting Depth               | As deep as your route structure |

### Router Link

- Never use `<a>` tag while navigation because whole page will get refresh
- Use Link component instead
- Link is a wrapper over anchor tag, React Router DOM will keep a track of this Link.
### 🔍 Difference between `<a>` and `<Link />` in React (especially with React Router)

| Feature                 | `<a>` (HTML Anchor)        | `<Link />` (React Router)             |
| ----------------------- | -------------------------- | ------------------------------------- |
| **Origin**              | Native HTML                | React Router (`react-router-dom`)     |
| **Page Reload**         | ✅ Causes full page reload | ❌ No reload (Client-side navigation) |
| **SPA Behavior**        | ❌ Breaks single-page app  | ✅ Preserves SPA navigation           |
| **Routing Integration** | ❌ No router awareness     | ✅ Works with router and routes       |
| **Usage**               | Use for external links     | Use for internal route changes        |
| **SEO & Accessibility** | ✅ Yes                     | ✅ Yes (accessible if used properly)  |

### 🚀 Bonus: <NavLink /> vs <Link />

If you want to style the active route, use:

```
<NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
```
### Types of Routing
1. Client side Routing
2. Server side Routing(get html from server)

### 🔀 Dynamic Routes with Params in React Router
- React Router supports dynamic routing with URL parameters, allowing you to handle paths like:
```
/users/:userId
/products/:productId
```
- These are called route params and are super useful for rendering details pages, profiles, etc.
### 📌 1. Define a Dynamic Route
```
{
    path: '/users/:userId',
    element: <UserPage />,
  }
```
### 📌 2. Access the Param with useParams()
```
// UserPage.jsx
import { useParams } from 'react-router-dom';

export default function UserPage() {
  const { userId } = useParams(); // 🧠 matches the :userId in route

  return (
    <div>
      <h2>User ID: {userId}</h2>
    </div>
  );
}
```
### 🧠 Tips:
- Param values are always strings
- Use multiple params like /users/:userId/posts/:postId
- Combine with loader() if you want to fetch data based on userId
### ⚡ Bonus: Fetch Data in loader()
```
{
  path: '/users/:userId',
  element: <UserPage />,
  loader: async ({ params }) => {
    const res = await fetch(`/api/users/${params.userId}`);
    return res.json();
  }
}
```
- Then access it in the component using useLoaderData().
### GraphQL
- GraphQL helps us in dealing with over fetching of data. so load only the required data.



### Shortcuts/tricks

- Type rafce in vscode to generate basic structure of component.

# 📐 Single Responsibility Principle (SRP) in React
- SRP (Single Responsibility Principle) is one of the SOLID principles of software design. It states:

- ✅ “A component (or module) should have only one reason to change.”

- In React, this means each component should do one thing well — ideally managing one piece of UI logic or behavior.
### 🔍 Why SRP Matters in React
✅ Easier to test

✅ Easier to maintain

✅ Encourages reusability

✅ Prevents bloated components

✅ Enhances readability
### 🧠 Tips
- Break components when they exceed ~100 lines or handle multiple concerns
- Extract hooks too (useFetchUsers, useForm)
- Don’t be afraid to create many small components

### Custom React Hooks
- Hooks are like a utility functions.
- we can abstract some responsibility from a component and place it inside a hooks so that our component and hook becomes more modular and readable.
### Optimization
- Chunking
- Lazy Loading
- Code Splitting
- Dynamic Bundling
- On Demand loading
- dynamic import
```
import { lazy, Suspense } from 'react';
// Lazy loading the About component to optimize performance
const About = lazy(() => import("./components/About"));
```
```
 {
    path: "/about",
    element: <Suspense fallback={<h1>Lazy Loading...</h1>}><About /></Suspense>,
  }
```
# Styling Components
### Various ways
- CSS
- SCSS & Sass
- Styled Components
- MUI React
- Bootstrap
- Tailwind
- Chakra UI
- Ant design
### Using Tailwind CSS
# Higher Order Components
- Higher-Order Components (HOCs) are an advanced pattern in React for reusing component logic.
- 🚀 Definition:
A Higher-Order Component (HOC) is a function that takes a component and returns a new component with added functionality.
```const EnhancedComponent = higherOrderComponent(WrappedComponent);
```
- Higher order functions are pure functions
### React Application has 2 layers
1. UI Layer
2. Data Layer
- UI Layer is powered by data layer
- Data layer consists of state, props, local variables etc..
- Controlled & Uncontrolled component
- lifting state up to control a component
### Props Drilling
- Props drilling in React refers to the process of passing data (props) from a parent component to a deeply nested child component by going through one or more intermediate components that do not actually need the data themselves, but simply pass it down.
### 🔍 Example:
```
function App() {
  const user = { name: "Chandra" };
  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <GrandChild user={user} />;
}

function GrandChild({ user }) {
  return <p>Hello, {user.name}</p>;
}

```
In this example:
- App passes user to Parent.
- Parent passes user to Child.
- Child passes user to GrandChild.
- Only GrandChild needs the user prop, but each component in the tree has to handle it. This is props drilling.
### 🚫 Problems with Props Drilling:
- Makes the code harder to maintain.
- Intermediate components are burdened with props they don't use.
- Not scalable for large component trees.
### ✅ Solutions to Avoid Props Drilling:
1. React Context API – Share data globally without drilling:
```
const UserContext = React.createContext();

function App() {
  const user = { name: "Chandra" };
  return (
    <UserContext.Provider value={user}>
      <Parent />
    </UserContext.Provider>
  );
}

function GrandChild() {
  const user = React.useContext(UserContext);
  return <p>Hello, {user.name}</p>;
}
```
2. State Management Libraries – Redux, Zustand, Recoil, etc.
# Redux
- Redux is not mandatory in case of small or medium applications, use wisely only when it is required.
- React-Redux library
- Redux Toolkit RTK
### Redux Toolkit 
- Install
``` npm install @reduxjs/toolkit```
```npm install react-redux```
- Connect our store to our app
- Slice
- dispatch
- Selector
### ✅ Common Redux Folder Structure
``` my-app/
├── src/
│   ├── components/
│   ├── pages/
│   ├── redux/                <-- 🟢 Add your Redux logic here
│   │   ├── store.js          <-- Creates and exports the Redux store
│   │   ├── rootReducer.js    <-- Combines all reducers
│   │   ├── slices/           <-- For Redux Toolkit slices (recommended)
│   │   │   ├── userSlice.js
│   │   │   └── productSlice.js
│   │   └── actions/          <-- (If not using Toolkit) For action creators
│   ├── App.js
│   └── index.js
```
- or for a React project using Redux Toolkit (RTK) and React-Redux, designed for scalability, maintainability, and clear separation of concerns:
### ✅ Top-Level Structure
``` 
/my-app
│
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images, fonts, global styles
│   ├── components/         # Shared, reusable components (UI, widgets)
│   ├── features/           # RTK “slices” grouped by domain
│   ├── pages/              # Page-level components (routes/screens)
│   ├── app/                # Store config, root reducers, global setup
│   ├── hooks/              # Custom hooks (e.g., useAuth)
│   ├── utils/              # Utility functions and helpers
│   ├── services/           # API calls (can use RTK Query here)
│   ├── constants/          # App-wide constants and enums
│   ├── types/              # TypeScript types or interfaces (if TS)
│   └── index.js            # Entry point
│
├── .env
├── .gitignore
├── package.json
└── README.md
```
### 📦 Detailed Breakdown
``` 
1. /app
  ├── store.js            # Configure store with middleware and reducers
  └── rootReducer.js      # Combine reducers (optional if using slices directly)
2. src/features/
/features
  ├── auth/
  │   ├── authSlice.js
  │   ├── authAPI.js
  │   └── authSelectors.js
  ├── user/
  │   ├── userSlice.js
  │   ├── userAPI.js
  │   └── userSelectors.js
```
- Always subscribe to a small/specific portion of the store for performance optimization.
- you can mutate the Redux state when using Redux Toolkit (RTK) — and it is the recommended way within RTK slices because RTK uses Immer under the hood.
### ✅ In Redux Toolkit (RTK), you can safely write:
```
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment(state) {
      // This looks like a mutation
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    }
  }
});
```
###
- Although it looks like you're mutating the state, Immer internally converts it into immutable updates.
### ❌ In traditional Redux (without RTK or Immer), you cannot mutate state directly. You must return a new copy:
```
// Traditional Redux reducer (immutability required)
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, value: state.value + 1 }; // must return a new object
    default:
      return state;
  }
}

```
### ⚠️ Outside of reducers (e.g., in components or thunks), do not mutate the Redux state directly. Access it via selectors only.
### Summary
| Context         | Mutation Allowed? | Explanation                                        |
| --------------- | ----------------- | -------------------------------------------------- |
| RTK Reducer     | ✅ Yes             | Uses Immer internally to safely mutate             |
| Vanilla Redux   | ❌ No              | You must return new state objects manually         |
| Component/Thunk | ❌ No              | Never mutate store state directly outside reducers |

### Middleware & Thunks in older version
### In Newer version we have RTK Query

### In Strict mode component rerenders twice in dev mode only to make sure it renders properly or not

## `useMemo`, `useCallback`, and `useRef`:
### useMemo
- useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
```const cachedValue = useMemo(calculateValue, dependencies)```
###  Common use cases
- Skipping expensive recalculations
- Skipping unnecessary re-rendering of components
- Preventing an effect from firing too often
- Memoizing a dependency of another Hook
- Memoizing a function to avoid unnecessary re-creations
### useRef
- useRef is a React Hook that lets you reference a value that’s not needed for rendering.
- useRef gives you a mutable container (.current) that:
* Persists across renders
* Doesn't cause re-renders when updated
- ``` const myRef = useRef(initialValue);```

