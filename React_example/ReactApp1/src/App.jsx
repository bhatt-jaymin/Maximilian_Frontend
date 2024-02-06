import React from "react";


function MainGoal() {
  return (
    <h3 className="font-weight: 900;">React</h3>  
    
  )}
function App() {
  return (
 
    <div className="bg-lime-600" id="app">
      <h1>Time to Practice!</h1>
      <p>
        Build a <MainGoal/> component and insert it below this
        text.
      </p>
      <p>
        Your <MainGoal/> component should simply output some
        text that describes your main course goal (e.g., &quot;My main goal:
        Learn React in great detail&quot;).
      </p>
      <p>
        <strong>Important:</strong> You custom component must contain the text
        &quot;My main goal:&quot;
      </p>
      <p>
        <strong>Also important:</strong> For the automatic checks to succeed,
        you <strong>must export</strong> your custom component function! Not as
        a default but simply by adding the <code>export</code> keyword in front
        of your function (e.g., <code>export function My main goal: Learn React in-depth and from the ground up</code>
        ).
      </p>
    </div>
  );
}

export default App;
