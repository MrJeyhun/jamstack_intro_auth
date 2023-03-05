import React from 'react';
import { Link } from "gatsby";
import {IdentityContextProvider} from "react-netlify-identity-widget";


import './layout.css';

const Layout = ({children}) => (
    <IdentityContextProvider url="https://jam-auth.netlify.app">
        <header>
            <Link to="/">JamStack app</Link>
        </header>
        <main>{children}</main>
    </IdentityContextProvider>
)

export default Layout;