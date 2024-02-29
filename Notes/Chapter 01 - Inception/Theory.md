# _Inception_

## Q: What is `Emmet`: Essential Toolkit for Web Developers

- `Emmet` is a powerful toolkit for web developers.
- It enables developers to use shortcuts that expand into full pieces of code.
- Used for writing HTML and CSS more efficiently.
- Based on an abbreviation structure that simplifies code writing.

### Example:

```html
<!-- Input -->
ul>li.item$*5>a{Link $}

<!-- Output -->
<ul>
    <li class="item1"><a href="">Link 1</a></li>
    <li class="item2"><a href="">Link 2</a></li>
    <li class="item3"><a href="">Link 3</a></li>
    <li class="item4"><a href="">Link 4</a></li>
    <li class="item5"><a href="">Link 5</a></li>
</ul>
```


## Q: Difference between a `Library and Framework`?

- **Library**:

  - A collection of reusable code modules that provide specific functionalities.
  - Developers call library methods directly in their code to perform tasks.
  - Provides flexibility, allowing developers to choose which functionalities to use.
  - Examples include React.js, Axios, and Lodash.
- **Framework**:

  - Defines the overall structure and architecture of an application.
  - Dictates the flow of the application and controls how components interact.
  - Follows the principle of inversion of control, where the framework calls developers' code.
  - Tends to be more opinionated, imposing a specific architecture and coding style.
  - Examples include Angular, Django, and Spring Framework.

## Q: What is `CDN`? Why do we use it?

* A `content delivery network (CDN)` is a geographically distributed network of servers.
* It collaborates to ensure fast and efficient delivery of Internet content.
* Utilized primarily to deliver content securely and swiftly through a network of servers.
* Enhances website performance by reducing latency and accelerating content delivery.

## Q: Why is `React known as React`?

* React derives its name from its core capability to swiftly respond to changes in data.
* It's recognized for its declarative, efficient, and adaptable approach to UI development.
* Named to signify its ability to efficiently "react" to state and data changes, updating UI components seamlessly.
* Developed as a JavaScript-based library for building user interfaces.
* Maintained by Facebook and an extensive open-source developer community.

## Q: What is `crossorigin in script tag`?

* The `crossorigin` attribute sets the mode of the request to an HTTP CORS Request.
* It enables sharing resources from one domain to another.
* It's crucial for handling CORS requests, ensuring safe sharing of resources across different origins.

### _Syntax_

```sh
<script crossorigin="anonymous|use-credentials">
```

## Q: What is difference between `React and ReactDOM`?

- **React**:

  - JavaScript library for building User Interfaces.
  - Contains `React.createElement()`, `React.Component`, `React.Children`, and other helpers for creating components.
  - Used for defining component classes, elements, and handling component logic.
- **ReactDOM**:

  - JavaScript library for interacting with the DOM in React applications.
  - Contains methods like `ReactDOM.render()` for rendering React components into the DOM.
  - Provides support for server-side rendering with methods like `ReactDOMServer.renderToString()` and `ReactDOMServer.renderToStaticMarkup()`.

These libraries work together to enable the creation and rendering of React components within a web browser environment.

## Q: What is difference between `react.development.js` and `react.production.js` files via `CDN`?

* **Development** :
  * Used during the development stage of an application.
  * Provides additional tools for debugging and error checking.
  * Slower performance compared to production build.
* **Production** :
  * Used when the application is ready to be deployed and made public.
  * Optimized for performance and reduced file size.
  * Lacks debugging tools, resulting in faster execution.

These files serve different purposes based on the stage of the application development lifecycle.

## Q: What is `async and defer`?

- **Async**:
  - The async attribute is a boolean attribute.
  - Scripts with async are downloaded in parallel to parsing the page.
  - They are executed as soon as they are available, without waiting for anything.
  - Do not block HTML DOM construction during the downloading process.

### _Syntax_

```html
<script src="demo_async.js" async></script>
```

- **Defer**:
  - The defer attribute is a boolean attribute.
  - Scripts with defer are downloaded in parallel to parsing the page.
  - They are executed after the page has finished parsing, when the browser finished DOM construction.
  - The browser doesn't wait for the script, allowing it to continue processing the HTML.

### _Syntax_

```html
<script src="demo_defer.js" defer></script>
```

**Module Support:**

- Always add `type="module"` to script tags:

```html
<script type="module" src="main.js"></script>
```

- Use `<script defer nomodule>` as a legacy fallback.

**Benefits:**

- Import modules for easier code organization.
- Enable strict mode by default for faster code execution and better error reporting.
- Execute code only after DOM initialization for easier DOM manipulation.
- Prevent top-level variables from implicitly polluting the global namespace.
- Support top-level await in supported engines.
- Load and parse code asynchronously for improved performance.
