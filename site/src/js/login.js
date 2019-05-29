import React from "react";
import "../css/login.css";
import {MDBBtn, MDBIcon, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBModalFooter, MDBMask, Badge, MDBView, MDBContainer } from "mdbreact";
import { NavbarItem } from "./navbar";
import sample from "./assets/background.mp4";

import cookie from 'js-cookie';
import { client } from "../App";
import { CONNECT } from "./query/query";


export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email : "", pass : "" }
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleChangeMail = this.handleChangeMail.bind(this);
        this.connect = this.connect.bind(this);
    }

    handleChangeMail(e) {
        const target = e.target;
        const value = target.value;
        this.setState({ email : value })
    }

    handleChangePass(e) {
        const target = e.target;
        const value = target.value;
        this.setState({ pass : value })
    }

    getLogged(response) {
        console.log(response)
        if (response.data.isValid.status === 200) {
            cookie.set("userDataId", response.data.isValid.uid);
            window.location.href = "/dashboard";
        }
    }

    connect() {
        var data = {
            email: this.state.email,
            password: this.state.pass
        };
        console.log(data)
        client.query({
            query: CONNECT,
            variables : {mail: data.email, pass: data.password}
        })
            .then(result => this.getLogged(result));
    }

    render() {
        const smallStyle = { fontSize: '0.8rem'};
        return (
            <div>
                <NavbarItem/>
                <MDBView>
                <video className={"videoTag"} id="background-video" autoPlay muted loop>
                    <source src={sample} type={"video/mp4"}/>
                </video>
                    <MDBMask overlay={"black-strong"} className="d-flex justify-content-center align-items-center gradient">
                        <MDBContainer className="px-md-3 px-sm-0">
                            <MDBRow>

                                <MDBCol md="6" className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                                    <div>
                                    <h1 className="h1-responsive font-weight-bold">
                                        Accès Espace Membres
                                    </h1>
                                    <hr className="hr-light" />
                                    <h6 className="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                                        veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                                        molestiae, quisquam iste, maiores. Nulla.
                                    </h6>
                                    <MDBBtn outline color="white">
                                        En savoir plus <Badge color="amber darken-2" style={{position: "relative", top: "-3px"}}>En cours</Badge>
                                    </MDBBtn>
                                </div>
                                </MDBCol>
                                <MDBCol md="6" className="mb-4">
                                    <MDBCard classname="" style={{backgroundColor: "transparent"}}>
                                        <MDBCardBody className="mx-4">
                                            <div className="text-center">
                                                <h3 className="white-text mb-5"><strong>Connexion</strong></h3>
                                            </div>
                                            <form>
                                                <div className="input-group">

                                                    <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon">
                                                        <i className="fa fa-envelope prefix" style={{fontSize: "0.7em"}}></i>
                                                    </span>
                                                    </div>

                                                    <input type="email" className="form-control" placeholder="Email"
                                                           aria-label="Email" aria-describedby="basic-addon" onChange={this.handleChangeMail}/>
                                                </div>
                                                <div className="input-group">

                                                    <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon">
                                                        <i className="fa fa-lock prefix"></i>
                                                    </span>
                                                    </div>

                                                    <input type="password" className="form-control" placeholder="Mot de passe"
                                                           aria-label="Mot de passe" aria-describedby="basic-addon" onChange={this.handleChangePass}/>
                                                </div>
                                            </form>
                                            <div className="text-center pt-3 mb-3">
                                                <MDBBtn type="button" gradient="sunny-morning" rounded className="btn-block z-depth-1a black-text" onClick={this.connect}>Se Connecter</MDBBtn>
                                            </div>
                                            <p className="white-text text-right d-flex justify-content-center mb-3 pt-2" style={smallStyle}> ou connectez-vous avec</p>
                                            <div className="row my-3 d-flex justify-content-center">
                                                <MDBBtn type="button" outline color="white" className="mr-md-3 z-depth-1a"><MDBIcon icon="facebook" className="white-text text-center" /></MDBBtn>
                                                <MDBBtn type="button" outline color="white" rounded className="mr-md-3 z-depth-1a"><MDBIcon icon="twitter" className="white-text" /></MDBBtn>
                                                <MDBBtn type="button" outline color="white" rounded className="z-depth-1a"><MDBIcon icon="google-plus" className="white-text" /></MDBBtn>
                                            </div>
                                        </MDBCardBody>
                                        <MDBModalFooter className="mx-5 pt-3 mb-1">
                                            <p className="grey-text d-flex justify-content-end" style={smallStyle}>Vous n'avez toujours pas de compte ?<a href="/register" className="white-text ml-1"> Inscrivez-vous</a></p>
                                        </MDBModalFooter>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>
            </div>
        );
    }
}
