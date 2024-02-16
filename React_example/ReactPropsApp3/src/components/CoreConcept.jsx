import React from 'react';


export default function CoreConcept({ image, title, description }) {
  return (
    <li className="text-center">
      {/* Apply custom animation class */}
      <img src={image} alt={title} className="mx-auto max-w-xs" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
// //mx-auto w-40 h-40