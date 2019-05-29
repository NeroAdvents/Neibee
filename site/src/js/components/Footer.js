import React, {Component} from 'react';
import { MDBFooter, MDBBtn, MDBIcon, MDBContainer, MDBCol, MDBRow } from 'mdbreact';

export class Footer extends React.Component {
    render() {
    return (
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    )};
};