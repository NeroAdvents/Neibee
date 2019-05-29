import React from 'react';
import "../css/HomePage.css";
import { NavbarItem } from "./navbar.js";
import { MDBMask, MDBBtn, MDBIcon, MDBView, MDBContainer, MDBRow, MDBCol} from "mdbreact";
import { Animated } from "react-animated-css";

export class Home extends React.Component {
  render() {
    return (
      <div >
        <div>
          <NavbarItem/>
            <MDBView id={"apppage"}>
                <MDBMask overlay={"black-strong"} className="d-flex justify-content-center align-items-center gradient">
                    <MDBContainer className="px-md-3 px-sm-0">
                        <MDBRow>
                            <MDBCol md="12" className="mb-4 white-text text-center">
                                <Animated animationIn={"fadeInDown"} animationOut={"fadeOutUp"} animationInDelay={"250"} isVisible={"true"}>
                                <h3 className="display-3 font-weight-bold mb-0 pt-md-5">
                                    Partager, Echanger
                                </h3>
                                </Animated>
                                <Animated animationIn={"fadeIn"} animationOut={"fadeOutUp"} animationInDelay={"250"} isVisible={"true"}>
                                <hr className="hr-light my-4 w-75" />
                                </Animated>
                                <Animated animationIn={"fadeInUp"} animationOut={"fadeOutUp"} animationInDelay={"550"} isVisible={"true"}>
                                <h4 className="subtext-header mt-2 mb-4">
                                    des services au sein de votre voisinage pour le plaisir de s'entraider et d'effectuer de belles rencontres.
                                </h4>
                                </Animated>
                                <Animated animationIn={"fadeIn"} animationInDelay={"1200"}>
                                <MDBBtn outline rounded color="white">
                                    <MDBIcon icon="home" /> Visiter Neibee
                                </MDBBtn>
                                </Animated>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBMask>
            </MDBView>
        </div>
        <div>
            {/*<MDBContainer>*/}
                {/*<MDBMask className="">*/}
                {/*<MDBRow>*/}
                    {/*<h1> Quels types de services souhaitez-vous réaliser ?</h1>*/}
                {/*</MDBRow>*/}
                {/*<MDBRow>*/}
                    {/*<MDBCol md={"4"}>*/}
                        {/*<h1>Colis</h1> /!*Mettre Cards à la place*!/*/}
                    {/*</MDBCol>*/}
                    {/*<MDBCol md={"4"}>*/}
                        {/*<h1>Commerces</h1> /!*Mettre Cards à la place*!/*/}
                    {/*</MDBCol>*/}
                    {/*<MDBCol md={"4"}>*/}
                        {/*<h1>Restauration</h1> /!*Mettre Cards à la place*!/*/}
                    {/*</MDBCol>*/}
                {/*</MDBRow>*/}
                {/*</MDBMask>*/}
            {/*</MDBContainer>*/}
        </div>
      </div>
    );
  }
}
