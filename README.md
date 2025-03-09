# Namaste React by suraj


# Parcel

- Dev Build
- Local server 
- HMR = Hot Module Replacement
- File watching Algorithm - written in c++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hasing
- Code Splitting
- Differential Bundling - support old browsers
- Diagnostic 
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different Development and Production Bundles


# Food Odering App

- Header
  - Logo
  - Nav Items
- Body
  - Search
  - RestaurantContainer
  - RestaurantCarts
    - Img
    - Name of Restaurant, Star Rating, Cuisine, Delivery , Time 
- Footer
  - CopyRights
  - Links
  - Address
  - Contact


# css applying way

- Inline style
- External style
- With Css framwork like telwind or metarial Ui  

# Two types of Export/Import

- Default Export/Import

export defalt Component;
import Component from 'Path';

- Named Export/Import

export const Component;
import { Component } from 'Path';

# React Hooks

- React hooks are basically normal JavaScript utility functions written by Facebook developers.  
- Some of the most commonly used hooks in React are:  
- useState() → Whenever a state variable updates, React re-renders the component.
- useEffect()


# Diffing Algorithm

virtual DOM :- virtual DOM is a Representation of Actual DOM or a simple javascript object of Actual DOM.

- Diff Algorithm (Virtual DOM) - 
The Diff Algorithm is used by React to compare the new Virtual DOM with the previous Virtual DOM. It finds the differences (changes) and updates only the modified parts in the real DOM, instead of re-rendering everything.

🔹 Example:
If only one button's text changes, React updates just that button instead of refreshing the entire page.


# Reconciliation Algorithm (React Fiber)

The Reconciliation Algorithm (React Fiber) helps React efficiently update the UI by breaking rendering into small tasks and prioritizing important updates. It ensures smooth animations, faster interactions, and better performance.

🔹 Example:
If you’re typing in an input field while React is updating a list, Fiber ensures the typing remains smooth and doesn’t lag due to background updates.

🟢 Understanding Reconciliation Algorithm (React Fiber) in a Super Simple Way!

Think of React as a chef 🧑‍🍳 in a restaurant. The chef (React) has to prepare multiple dishes (UI updates) at the same time. But some dishes are more urgent than others

❌ Before React Fiber (Old React - Blocking Updates)

The chef starts cooking one dish at a time and cannot stop until it is fully cooked.

Even if a customer orders a quick salad 🥗 (urgent update), the chef must finish the big meal first before making the salad.

This blocks the kitchen and makes customers unhappy.

Example in React:

If React is updating a big list on the page and you type in an input box, the typing lags because React is busy updating the list first.

✅ After React Fiber (New React - Smart Updates)

The chef divides the cooking process into small steps (fiber units).

Now, if an urgent order (like a salad 🥗) comes in, the chef pauses the big meal, makes the salad first, and then continues cooking the big meal.

This makes the kitchen (React UI) more responsive and users happy.

Example in React:

If React is updating a list and you type in an input box, React pauses the list update, processes your typing instantly, and then continues updating the list.

This makes the UI fast and smooth 🚀.

🔹 Summary (React Fiber in Simple Terms)

Feature	          Old React (Before Fiber)	      New React (With Fiber)

Updates	          Blocking, one-by-one	          Non-blocking, prioritized

Performance	      Slow for large updates	        Faster, smoother UI

User Experience	  Laggy interactions	            Fast and responsive

Now, if you see the term React Fiber, just remember:

➡️ It helps React update the UI in a smart and smooth way, without blocking important interactions!