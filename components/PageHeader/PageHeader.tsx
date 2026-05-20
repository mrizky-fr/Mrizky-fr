import React from 'react';
import './PageHeader.css';

type PageHeaderProps = {
  title: string;
  as?: 'h1' | 'h2';
};

const PageHeader: React.FC<PageHeaderProps> = ({ title, as = 'h1' }) => {
  const TitleTag = as;

  return (
    <section className="page-header" aria-label={title}>
      <div className="page-header__shell">
        <TitleTag className="page-header__title">{title}</TitleTag>
      </div>
    </section>
  );
};

export default PageHeader;
