import React from 'react';
import './Section.css';

function Section({ title, children }) {
  return (
    <section className="section">
      {title && <h2 className="FeedbackTitle">{title}</h2>}
      {children}
    </section>
  );
}

export default Section;
