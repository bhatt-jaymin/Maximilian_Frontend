import reactIMG from "../assets/react.png";
import { CORE_CONCEPTS } from "../Data.js";
import CoreConcept from "./CoreConcept.jsx";
import React from "react";
import { useState } from "react";
import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../Data.js";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function RandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p className="text-1xl mt-8">Please Select a Topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content" className="text-1xl mt-8 ml-28 text-left">
        <>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </>
      </div>
    );
  }

  const description = reactDescriptions[RandomInt(2)];
  console.log(description);
  return (
    <header>
      <h3 className="underline-offset-4 text-center text-5xl text-violet-300 font-bold py-16">
        React Essential
      </h3>
      <div className="flex justify-center opacity-10">
        <img src={reactIMG} alt="React Logo" />
      </div>
      <div className="text-center text-violet-300">
        <br />
        <p className="font-bold text-3xl">
          {description} React concepts you will need for almost every app you
          are going to build!
        </p>
        <section id="core-concept">
          <ul className="flex justify-center">
            {CORE_CONCEPTS.map((conceptItem) =>(  <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
           {/*  <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2 className="text-5xl mt-9"> Examples </h2>
          <menu className="flex justify-center mt-7">
            <TabButton onSelect={() => handleSelect("components")}>
              Component
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {tabContent}
          {/* {!selectedTopic ? (                                           // Using Ternary Operator
            <p className="text-1xl mt-8">Please Select a Topic</p>
          ) : (
            <div id="tab-content" className="text-1xl mt-8 ml-28 text-left">
              {EXAMPLES[selectedTopic] ? (
                <>
                  <h3>{EXAMPLES[selectedTopic].title}</h3>
                  <p>{EXAMPLES[selectedTopic].description}</p>
                  <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                  </pre>
                </>
              ) : (
                <p className="text-1xl ml-8">
                  Example not found for selected topic
                </p>
              )}
            </div>
          )} */}

          {/*  {!selectedTopic && (                                        // Using Logical Operator
            <p className="text-1xl mt-8">Please Select a Topic</p>
          )}
          {selectedTopic && (
            <div id="tab-content" className="text-1xl mt-8 ml-28 text-left">
              <>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
              </>
            </div>
          )} */}
        </section>
      </div>
    </header>
  );
}
