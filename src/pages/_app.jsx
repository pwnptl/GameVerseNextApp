import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import Navbar from '../app/navbar/Navbar';
import Footer from '../app/footer/Footer';
import 'bulma/css/bulma.css';
import '../app/globals.css';

function App({ Component, pageProps }) {
    return (
        <I18nextProvider i18n={i18n}>
            <Navbar />
            {<Component {...pageProps} />}
            <Footer />
        </I18nextProvider>);
}

export default App;
