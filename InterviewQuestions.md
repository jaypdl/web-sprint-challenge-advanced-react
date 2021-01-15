## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. Explain how to build stateful class components.

   ▶ Stateful class components can be built be built using componentDidMount, and componentDidUpdate. These class components contain logic that manipulates and updates state.
   You build a stateful class component by extending React.Component, and then declaring state.

2. Describe the different phases of the component lifecycle.

   ▶ There are three general phases of the commponent lifecycle:
      1. Mounting, where the component is first created.
      2. Updating, where the component is responsive to updates in state.
      3. Unmouting, where the component is no longer needed and is cleaned up and removed from the screen.

3. Demonstrate an understanding of class component lifecycle methods.

   ▶ In Mounting, you can run componentDidMount, in here you could place your initial axios/fetch request to your server. In regard to updating, you can use componentDidUpdate, this allows you to specify what should occur when a re-render is triggered. When removing a component, you can use componentWillUnmount, and do any clean up you may need to to.


4. Define stateful logic.

   ▶ Stateful logic is non-visual logic, it is the logic in a component that interacts and updates state. 

5. Describe how to test a React component with React Testing Library.

   ▶ To test a React component with React Testing Library, you need to first create a test file. In that test file, you create your tests. They follow the general pattern:
      1. Arrange your test, here you want to mount your component.
      2. Act. It is here that you want to write out what behavior you want to test.
      3. Assert: It is here that you specify what should be the result of your tested behavior, and verify that it occured.


You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade.