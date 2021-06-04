import React, { Fragment } from 'react';
import Navigation from '../components/Navigation';

function Layout(props) {
    return (
        <Fragment>
            <Navigation />
            {props.children}
        </Fragment>
    )
}

export default Layout;