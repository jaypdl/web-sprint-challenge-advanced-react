## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. Explain how to build stateful class components.

  You build stateful class components by moving non-visual behavior (ex: changing state) into its own dedicated component. You can do this by moving your staeful logic into a combined custom hook.

2. Describe the different phases of the component lifecycle.

  The three phases of the component lifecycle are: Mounting, Updating, and Un-Mounting. 
    ▶ In the mouting phase, the component is rendered. 
    ▶ In the updating phase, the component gets updated through new props or changes in state.
    ▶ In the un-mounting phase, the compoenent is removed from the screen.

3. Demonstrate an understanding of class component lifecycle methods.

  There are various methods that can be used in each of the lifecycle stages.

4. Define stateful logic.

  Stateful logic is code that is used to manipulate state or data.  

5. Describe how to test a React component with React Testing Library.

  When testing with React Testing Library we use the 'Arrange, Act, Assert' structure for testing. 
    ▶ Arrange: We have to get the component set up for testing by having it render in RTL.
    ▶ Act: We have to tell RTL what elements we want it to act on and tell it what to do with said elements. (Ex: find the text input and write 'hello).
    ▶ Assert: At this point we have RTL check that what was supposed to happen has actually happened.

You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade.