---
layout: single
title: React Router v4 Tutorial
subtitle: Xây dựng website với React Router
categories: [React]
bigimg: /img/path.jpg
---
React Router v4 is a pure React rewrite of the popular package. The required route configuration from previous versions has been removed and everything is now “just components”.

This tutorial covers everything you need to know to get started building a website with React Router. We will be building a website for a local sports team.

The Code

Just want to see the website in action? Check out the demo

The Router
When starting a new project, you need to determine which type of router to use. For browser based projects, there are <BrowserRouter> and <HashRouter> components. The <BrowserRouter> should be used when you have a server to handle dynamic requests, while the <HashRouter> should be used for static websites.
Usually it is preferable to use a <BrowserRouter>, but if your website will be hosted on a server that only serves static files, then <HashRouter> is a good solution.
For our project, we will assume that the website will be backed by a dynamic server, so our router component of choice is the <BrowserRouter>.
History
Each router creates a history object, which it uses to keep track of the current location[1] and re-render the website whenever that changes. The other components provided by React Router rely on having that history object available through the context, so they must be rendered inside of the router. A React Router component that does not have a router as one of its ancestors will fail to work.
Rendering a <Router>
Router components only expect to receive a single child element. To work within this limitation, it is useful to create an <App> component that renders the rest of your application (separating your application from the router is also important for server rendering).
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
The <App>
Our application is defined within the<App> component. To simplify things, we will split our application into two parts. The <Header> component will contain links to navigate throughout the website. The <Main> component is where the rest of the content will be rendered.
// this component will be rendered by our <___Router>
const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)
Note: You can layout your application any way that you would like, but separating routes and navigation makes it easier to show how React Router works for this tutorial.
Routes
The <Route> component is the main building block of React Router. Anywhere that you want to only render something if it matches the URL's pathname, you should create a <Route> element.
Path
A <Route> expects a path prop string that describes the type of pathname that the route matches — for example, <Route path='/roster'/> should match a pathname that begins with /roster[2]. When the current location’s pathname is matched by the path, the route will render a React element. When the path does not match, the route will not render anything [3].
<Route path='/roster'/>
// when the pathname is '/', the path does not match
// when the pathname is '/roster' or '/roster/2', the path matches
// If you only want to match '/roster', then you need to use
// the "exact" prop. The following will match '/roster', but not
// '/roster/2'
<Route exact path='/roster'/>
Note: When it comes to matching routes, React Router only cares about the pathname of a location. That means that given the URL:
http://www.example.com/my-projects/one?extra=false