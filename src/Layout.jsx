/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen relative">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;