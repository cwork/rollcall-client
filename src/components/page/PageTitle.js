import React, { useEffect } from 'react';

const PageTitle = ({ title }) => {
  useEffect(() => {
    document.title = `RollCall | ${title}`;
  }, [title]);
  return <h1 className="is-size-2 page-title mb-4">{title}</h1>;
};

export default PageTitle;
