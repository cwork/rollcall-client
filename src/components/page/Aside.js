import React from 'react';

const Aside = ({ colSpan, children }) => {
  return (
    <aside className={`main-content ${colSpan ? `column is-${colSpan}` : ''}`}>
      {children}
    </aside>
  );
};

export default Aside;
