import React from 'react';
import { NavbarItem } from "./navbar.js";
import "../css/ServicePage.css";
import { MDBCol, MDBContainer, MDBMask, MDBRow, MDBView} from "mdbreact";
import sample from "./assets/background.mp4";

export class Service extends React.Component {
    render() {
        return(
            <div>
            <NavbarItem/>
                {/*Background en 3 "slash" avec types de service*/}
                <MDBView>
                    <video className={"videoTag"} id="background-video" autoPlay muted loop>
                        <source src={sample} type={"video/mp4"}/>
                    </video>
                    <MDBMask overlay={"black-strong"} className="d-flex justify-content-center align-items-center gradient">
                        <MDBContainer className="px-md-3 px-sm-0">
                            <MDBRow>
                                <MDBCol md="12" className="mb-4 white-text text-center">
                                    <h1>Services</h1>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>
            </div>
        );
    }
}
