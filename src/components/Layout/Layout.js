import * as React from 'react';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer';
import Hero from '../Hero';
import Modal from '../Modal';
import {
  layoutWrapper,
  mainContent,
  heroAndHeaderWrapper,
} from './Layout.module.css';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'auto');
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <div className={layoutWrapper}>
      <div className={`${heroAndHeaderWrapper} dark:bg-accent-dark `}>
        <Header openModal={openModal} />
        <Hero openModal={openModal} />
      </div>

      <main className={`${mainContent} dark:bg-body-dark`}>{children}</main>

      <Footer />
      <Modal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export const withLayout = Component => props => {
  return (
    <Layout>
      <Component {...props} />
    </Layout>
  );
};
