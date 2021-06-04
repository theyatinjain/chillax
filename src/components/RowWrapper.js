import React from 'react';
import { Container } from 'react-bootstrap';

function RowWrapper(props) {
    return (
        <div style={{ paddingTop: '80px' }}>
            <Container fluid>
                <h1>{props.title}</h1>
                {props.children}
            </Container>
        </div>
    )
}

export default RowWrapper;