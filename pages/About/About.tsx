import React from 'react';
import PublicHeader from '../../components/Header/PublicHeader';
import PublicFooter from '../../components/Footer/PublicFooter';
import PageHeader from '../../components/PageHeader/PageHeader';

const About: React.FC = () => {
  return (
    <>
      <PublicHeader />
      <PageHeader title="About" />
      <PublicFooter />
    </>
  );
};

export default About;
