import React from "react";

/**
 *
 * @param {object} param0
 * @param {string} param0.className
 * @param {React.ElementType} param0.children
 * @param {React.CSSProperties} param0.style
 * @returns {React.ElementType}
 */
export default function Section({ className, children, style }) {
  return (
    <section className={className} style={style}>
      {children}
    </section>
  );
}

// Section heading component
Section.Heading = ({ className = "", children }) => (
  <h1
    className={"text-4xl sm:text-6xl font-bold mb-5 ".concat(className).trim()}
  >
    {children}
  </h1>
);

// Section title component
Section.Title = ({ className = "", children }) => (
  <h2
    className={"text-3xl sm:text-4xl font-bold mb-5 ".concat(className).trim()}
  >
    {children}
  </h2>
);

// Section description component
Section.Description = ({ className = "", children }) => (
  <p className={"text-base-content/75 sm:text-lg ".concat(className).trim()}>
    {children}
  </p>
);

// Section content component
Section.Content = ({ className, children }) => (
  <div className={className}>{children}</div>
);
