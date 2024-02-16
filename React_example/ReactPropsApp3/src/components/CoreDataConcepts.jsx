import React from "react";
import { CORE_CONCEPTS } from "../Data";
import CoreConcept from "./CoreConcept";


export default function CoreDataConcepts() {
  return (
    <>
      <section id="core-concept">
        <ul className="flex justify-center">
          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept key={conceptItem.title} {...conceptItem} />
          ))}
        </ul>
      </section>
    </>
  );
}
