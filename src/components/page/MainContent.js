import React from 'react';
import PageTitle from './PageTitle';

const MainContent = ({ colSpan, title, children }) => {
  return (
    <section
      className={`main-content ${colSpan ? `column is-${colSpan}` : ''}`}
    >
      <PageTitle title={title} />
      {children}
    </section>
  );
};

export default MainContent;
