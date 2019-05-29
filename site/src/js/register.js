import React from "react";
import {MDBBtn} from "mdbreact";
import {
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBModalFooter,
    MDBMask,
    Badge,
    MDBView,
    MDBContainer
} from "mdbreact";

import sample from "./assets/background.mp4";
import {NavbarItem} from "./navbar";
import "../css/register.css";

import cookie from 'js-cookie';
import { client } from "../App";
import { REGISTER } from "./query/query";


export class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lastName: '',
            firstName: '',
            email: '',
            password: '',
            phone: '',
            address: '',
            zip: '',
            city: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
    }

    getRegistered(response) {
        console.log(response)
        if (response.data.createUser.status === 200) {
            cookie.set("userDataId", response.data.createUser.uid);
            window.location.href = "/dashboard";
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(
            "New account was submitted: "
            + this.state.lastName + " " + this.state.firstName + "\n"
            + this.state.email + " " + this.state.password + "\n"
            + this.state.phone + " " + this.state.address + "\n"
            + this.state.zip + " " + this.state.city);
        client.mutate({
            mutation: REGISTER,
            variables : {mail: this.state.email, pass: this.state.password, name: this.state.firstName}
        })
            .then(result => this.getRegistered(result));
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
                                        Inscription Neibee
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
                                    <MDBCard className="" style={{backgroundColor: "transparent"}}>
                                        <MDBCardBody className="mx-4">
                                            <div className="text-center">
                                                <h3 className="white-text mb-5"><strong>Inscription</strong></h3>
                                            </div>
                                            <form onSubmit={this.handleSubmit}>
                                                <MDBRow>
                                                    <MDBCol md="6" className="mb-6">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text" id="basic-addon">
                                                                    <i className="fa fa-user"></i>
                                                                </span>
                                                            </div>
                                                            <input type="text" className="form-control" placeholder="Nom" aria-label="Nom" aria-describedby="basic-addon" name={"lastName"} value={this.state.lastName} onChange={this.handleChange} required/>
                                                            </div>
                                                    </MDBCol>
                                                    <MDBCol md="6" className="mb-6">
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" placeholder="Prénom" aria-label="Prénom" aria-describedby="basic-addon" name={"firstName"} value={this.state.firstName} onChange={this.handleChange} required/>
                                                        </div>
                                                    </MDBCol>
                                                </MDBRow>
                                                <div className="input-group" id={"noMarginTop"}>
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon">
                                                            <i className="fa fa-envelope prefix" style={{fontSize: "0.7em"}}></i>
                                                        </span>
                                                    </div>
                                                    <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon" name={"email"} value={this.state.email} onChange={this.handleChange} required/>
                                                </div>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon">
                                                            <i className="fa fa-lock prefix"></i>
                                                        </span>
                                                    </div>
                                                    <input type="password" className="form-control" placeholder="Mot de passe" aria-label="Mot de passe" aria-describedby="basic-addon" name={"password"} value={this.state.password} onChange={this.handleChange} required/>
                                                </div>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon">
                                                            <i className="fa fa-phone prefix"></i>
                                                        </span>
                                                    </div>
                                                    <input type="tel" className="form-control" placeholder="Téléphone" aria-label="Téléphone" aria-describedby="basic-addon" name={"phone"} value={this.state.phone} onChange={this.handleChange}/>
                                                </div>
                                                <div className="input-group" id={"noMarginBottom"}>
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon">
                                                            <i className="fa fa-map-marker"></i>
                                                        </span>
                                                    </div>
                                                    <input type="text" className="form-control" placeholder="Adresse" aria-label="Adresse" aria-describedby="basic-addon" name={"address"} value={this.state.address} onChange={this.handleChange} required/>
                                                </div>
                                                <MDBRow>
                                                    <MDBCol md="6" className="mb-6">
                                                        <div className="input-group">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text" id="basic-addon">
                                                                    <i className="fa fa-user"></i>
                                                                </span>
                                                            </div>
                                                            <input type="text" className="form-control" placeholder="Code postal" aria-label="Code postal" aria-describedby="basic-addon" name={"zip"} value={this.state.zip} onChange={this.handleChange} required/>
                                                        </div>
                                                    </MDBCol>
                                                    <MDBCol md="6" className="mb-6">
                                                        <div className="input-group">
                                                            <input type="text" className="form-control" placeholder="Ville" aria-label="Ville" aria-describedby="basic-addon" name={"city"} value={this.state.city}  onChange={this.handleChange} required/>
                                                        </div>
                                                    </MDBCol>
                                                </MDBRow>
                                                <div className="text-center pt-3 mb-3">
                                                    <MDBBtn type="submit" gradient="sunny-morning" rounded className="btn-block z-depth-1a black-text">S'inscrire</MDBBtn>
                                                </div>
                                            </form>
                                            {/*<p className="white-text text-right d-flex justify-content-center mb-3 pt-2" style={smallStyle}> ou inscrivez-vous avec</p>*/}
                                            {/*<div className="row my-3 d-flex justify-content-center">*/}
                                                {/*<MDBBtn type="button" outline color="white" className="mr-md-3 z-depth-1a"><MDBIcon icon="facebook" className="white-text text-center" /></MDBBtn>*/}
                                                {/*<MDBBtn type="button" outline color="white" rounded className="mr-md-3 z-depth-1a"><MDBIcon icon="twitter" className="white-text" /></MDBBtn>*/}
                                                {/*<MDBBtn type="button" outline color="white" rounded className="z-depth-1a"><MDBIcon icon="google-plus" className="white-text" /></MDBBtn>*/}
                                            {/*</div>*/}
                                        </MDBCardBody>
                                        <MDBModalFooter className="mx-5 pt-3 mb-1">
                                            <p className="grey-text d-flex justify-content-end" style={smallStyle}>Vous avez déjà un compte ?<a href="/login" className="white-text ml-1"> Connectez-vous</a></p>
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
