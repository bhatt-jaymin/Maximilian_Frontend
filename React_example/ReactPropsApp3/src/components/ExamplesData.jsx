import React from "react";
import CoreDataConcepts from "./CoreDataConcepts.jsx";
import { useState } from "react";
import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../Data.js";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function EXAMPLESData() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p className="text-1xl mt-8">Please Select a Topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content" className="text-1xl mt-15 ml-28 text-left">
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
  return (
    <div className="text-center text-violet-300 ">
      <section id="core-concept">
        <ul className="flex justify-center ">
          <CoreDataConcepts />
        </ul>
      </section>
      <Section title="Examples" id="examples">
        
          <Tabs
          //buttonsContainer="menu"
            buttons={
              <>
                <TabButton
                  isSelected={selectedTopic === "components"}
                  onClick={() => handleSelect("components")}
                >
                  Component
                </TabButton>

                <TabButton
                  isSelected={selectedTopic === "jsx"}
                  onClick={() => handleSelect("jsx")}
                >
                  JSX
                </TabButton>

                <TabButton
                  isSelected={selectedTopic === "props"}
                  onClick={() => handleSelect("props")}
                >
                  Props
                </TabButton>

                <TabButton
                  isSelected={selectedTopic === "state"}
                  onClick={() => handleSelect("state")}
                >
                  State
                </TabButton>
              </>
            }
          >
            {tabContent}
          </Tabs>
       

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
      </Section>
    </div>
  );
}
