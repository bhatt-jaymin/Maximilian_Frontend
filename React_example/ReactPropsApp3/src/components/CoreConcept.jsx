
import React from 'react';
export default function CoreConcept({ image, title, description }) {
    return (
      <li className="text-center">
        <img src={image} alt={title} className="mx-auto max-w-xs" />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }
  