export default [
  {
    frontSide: "What is a smoke test?",
    backSide:
      "When applied to web applications, smoke tests verify that the most important functionality is working. By design, smoke tests do not cover every permutation and edge case. They instead check that your application isn't so broken that additional testing would be a waste of time."
  },
  {
    frontSide: "What does the exact prop of the Route component do?",
    backSide:
      "The exact prop specifies that the route has to exactly match in order for the component to display. If the Route component didn't have the exact prop, the component would display for exact matches and partial matches."
  },
  {
    frontSide: "Explain the difference between props, state, and Context.",
    backSide: `State - This is data maintained inside a component. It is local or owned by that specific component. The component itself will update the state using the setState function.
Props - Data passed in from a parent component. props are read-only in the child component that receives them. However, callback functions can also be passed, which can be executed inside the child to initiate an update.
The difference is all about which component owns the data. State is owned locally and updated by the component itself. Props are owned by a parent component and are read-only. Props can only be updated if a callback function is passed to the child to trigger an upstream change.
The state of a parent component can be passed a prop to the child. They are referencing the same value, but only the parent component can update it.
Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.`
  },
  {
    frontSide: "What is a component?",
    backSide: `Components are the building blocks of any React app and a typical React app will have many of these. Simply put, a component is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.`
  },
  {
    frontSide: "Explain the render method.",
    backSide: `render function is part of the react component lifecycle where ReactDOM is the class object which exposes a method called render which is used to render the React JSX content into your DOM.
    The render() method is the only required method in a class component.`
  },
  {
    frontSide: "How do you update state in a component?",
    backSide: `To change a value in the state object, use the this. setState() method. When a value in the state object changes, the component will re-render, meaning that the output will change according to the new value(s)`
  },
  {
    frontSide: "Describe the binding problem with event handlers.",
    backSide: `In Class Components in React, when we pass the event handler function reference as a callback like this
    <button type="button" onClick={this.handleClick}>Click Me</button>
    the event handler method loses its implicitly bound context. When the event occurs and the handler is invoked, the this value falls back to default binding and is set to undefined , as class declarations and prototype methods run in strict mode.
    When we bind the this of the event handler to the component instance in the constructor, we can pass it as a callback without worrying about it losing its context.
    Arrow functions are exempt from this behavior because they use lexical this binding which automatically binds them to the scope they are defined in.`
  },
  {
    frontSide: "Which life cycle method is best suited for AJAX requests?",
    backSide: `According to official React docs, the recommended place to do Ajax requests is in componentDidMount which is a lifecycle method that runs after the React component has been mounted to the DOM.You never know how long an Ajax request might take. There are many reasons why your Ajax calls might take longer than you think. Your users might be on mobile with slow internet, your server might be temporarily slow, etc. That means there will most likely always be a flicker before the Ajax call is loaded. So even if you could make your Ajax call in componentWillMount to load the Ajax before the component mounts, your users would still experience flicker.`
  },
  {
    frontSide: "What is prop drilling and how can you solve it?",
    backSide: `Prop Drilling is the process by which you pass data from one part of the React Component tree to another by going through other parts that do not need the data but only help in passing it around.
    React also has the concept of Context which lets you create something like a global data store and any Component in 'context' can have access to the data store.
    If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context
    `
  },
  {
    frontSide: "How does React Router work?",
    backSide: `To use React Router in a web application you should use the react-router-dom module. This will give you a library of components and tools you can use to make your single-page-application (SPA) support multiple "paths". Each path in an SPA is a snapshot of the application in a certain state.
    You can wrap your entire web client application in a BrowserRouter component to enable React Router features and then setup Routes that display components at certain paths. Using Link components in place of <a> or <button> components, you can trigger navigation to different paths which display different routes.
    It's possible to trigger navigation programmatically by using the history object that's provided by React Router. The history object contains a push method for triggering navigation or a goBack method for navigating to the previous page. Programmatic navigation is useful for navigating after events or in certain conditions; such as after a successful API response is received or the user is not logged in so they don't have permission to view that route.`
  }
];
