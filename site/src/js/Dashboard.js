import React from 'react';
import "../css/Dashboard.css";
import "../css/register.css";
import TopNavigation from "./components/topNavigation.js";
import {
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBContainer,
    MDBModal,
    MDBModalHeader,
    MDBModalBody,
    MDBModalFooter,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBInput,
    MDBView,
    MDBMask,
    MDBIcon,
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselCaption,
    MDBJumbotron,
    MDBBadge
} from 'mdbreact';

import { Footer } from "./components/Footer.js";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import cookie from 'js-cookie';
import { client } from "../App";
import { GET_OFFER_USR } from "./query/query";

//ICI LE SLIDER POUR LES DERNIERES DEMANDES CREER PAR TOUT LES USERS
class SimpleSliderAll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabCard: <div></div>
        };
        this.createTabCard();
    }

    addElems(response) {
        console.log(response)
    }

    createTabCard() {
        client.query({
            query: GET_OFFER_USR,
            variables : {uid: "nsnKvRq212QsSLBdFyaEoKNSIWm2"}
        })
            .then(result => this.addElems(result));
    }

    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrow: true
        };
        return (
            <Slider {...settings}>
                {/*TU PRENDS LE PATTERN DE CARD ET TU METS TA MAP ICI*/}
                <div><MDBCard style={{ width: "20rem", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
                    <MDBCardImage className="img-fluid" src={require("./Livraison.jpg")} style={{height: "200px", width: "100%"}} waves />
                    <MDBCardBody>
                        <MDBCardTitle>Colis</MDBCardTitle>
                        <MDBCardText>
                            <p>La Poste</p>
                            <p>75017 la poste rue legendre</p>
                            <p>03/03/19</p>
                        </MDBCardText>
                        <MDBBtn href="#" style={{background: "linear-gradient(to right, #f6d365 0%, #fda085 100%)"}}><MDBIcon icon="plus-square" /> Infos</MDBBtn>
                    </MDBCardBody>
                </MDBCard></div>
                <div><MDBCard style={{ width: "20rem", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
                    <MDBCardImage id={"imgcard"} className="img-fluid" src={require("./Restauration.jpg")} waves />
                    <MDBCardBody>
                        <MDBCardTitle>Restauration</MDBCardTitle>
                        <MDBCardText>
                            <p>Mc Donald</p>
                            <p>75009 Place de Clichy</p>
                            <p>21/02/19</p>
                        </MDBCardText>
                        <MDBBtn href="#" style={{background: "linear-gradient(to right, #f6d365 0%, #fda085 100%)"}}><MDBIcon icon="plus-square" /> Infos</MDBBtn>
                    </MDBCardBody>
                </MDBCard></div>
                <div><MDBCard style={{ width: "20rem", marginLeft: "auto", marginRight: "auto" , textAlign: "center" }}>
                    <MDBCardImage id={"imgcard"} className="img-fluid" src={require("./Achat.jpg")} waves />
                    <MDBCardBody>
                        <MDBCardTitle>Courses</MDBCardTitle>
                        <MDBCardText>
                            <p>Monoprix</p>
                            <p>75017 rue de Lévis</p>
                            <p>19/02/19</p>
                        </MDBCardText>
                        <MDBBtn href="#" style={{background: "linear-gradient(to right, #f6d365 0%, #fda085 100%)"}}><MDBIcon icon="plus-square" /> Infos</MDBBtn>
                    </MDBCardBody>
                </MDBCard></div>
                <div><MDBCard style={{ width: "20rem" , marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
                    <MDBCardImage id={"imgcard"} className="img-fluid" src={require("./Restauration.jpg")} waves />
                    <MDBCardBody>
                        <MDBCardTitle>Restauration</MDBCardTitle>
                        <MDBCardText>
                            <p>thé vert</p>
                            <p>75017 Rue Legendre</p>
                            <p>19/02/19</p>
                        </MDBCardText>
                        <MDBBtn href="#" style={{background: "linear-gradient(to right, #f6d365 0%, #fda085 100%)"}}><MDBIcon icon="plus-square" /> Infos</MDBBtn>
                    </MDBCardBody>
                </MDBCard></div>
            </Slider>
        );
    }
}
//ICI LE SLIDER POUR LES DERNIERES DEMANDES CREER PAR LE USER SELECTIONNE
class SimpleSliderPerso extends React.Component {
    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrow: true
        };
        return (
            <Slider {...settings}>
                {/*TU PRENDS LE PATTERN DE CARD ET TU METS TA MAP ICI*/}
                <div><MDBCard style={{ width: "20rem", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
                    <MDBCardImage className="img-fluid" src={require("./Livraison.jpg")} waves />
                    <MDBCardBody>
                        <MDBCardTitle>Demande retrait Colis</MDBCardTitle>
                        <MDBCardText>
                            <p>75017 la poste rue legendre</p>
                            <p>07/03/19</p>
                        </MDBCardText>
                        <MDBBtn href="#" style={{background: "linear-gradient(to right, #f6d365 0%, #fda085 100%)"}}><MDBIcon icon="plus-square" /> Infos</MDBBtn>
                    </MDBCardBody>
                </MDBCard></div>
            </Slider>
        );
    }
};

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.location);

        this.state = {
            modal: false,
            selected: 'Livraison',
            value: [],
            index: 0,
            content: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handledelTodoItem = this.handledelTodoItem.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
    }

    handleSubmit(event) {
        this.setState({
            modal: !this.state.modal,
        });
        alert('Votre type de service sélectionné est: ' + this.state.selected);

        this.state.value.push({
            id: this.state.index,
            title: this.state.selected,
            content: this.state.content
        });
        this.setState({
            index: this.state.index + 1
        });
        event.preventDefault();
    }

    handledelTodoItem(v) {
        for (var i = 0; i < this.state.value.length; i++) {
            if (this.state.value[i].id === v.id) {
                this.state.value.splice(i, 1);
            }
        }
        this.setState({
            value: this.state.value
        });
        console.log(this.state.value)
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        })
    };
    render() {
        return <div className={"flexible-content"}>
            <MDBRow>
                <MDBCol>
                    <TopNavigation/>
                </MDBCol>
            </MDBRow>
            <div style={{minHeight: "100vh"}}>
                        <MDBCarousel activeItem={1} length={3} showControls={false} showIndicators={true} className="z-depth-1" style={{backgroundSize: "cover", height: "100vh"}}>
                            <MDBCarouselInner>
                                <div className={"overlay"}>
                                        <p style={{fontFamily: "customFont2", fontSize: "8vw"}}>PARTAGER, ECHANGER</p>
                                        <p style={{fontFamily: "customFont", fontSize: "2vw"}}>des services entre voisins pour le plaisir de s'entraider et de realiser de belles rencontres.</p>
                                        <hr className="hr-light my-4 w-50"/>
                                        <p style={{fontFamily: "customFont", fontSize: "1.5vw"}}>Retrouver tout les services deja proposes par votre voisinnage ici:</p>
                                    <MDBBtn outline rounded color="white" href={"/dashboardService"}>
                                        <MDBIcon icon="shopping-cart" size={"lg"} /> Nos Services <MDBBadge color="red">New</MDBBadge>
                                    </MDBBtn>
                                </div>
                                <MDBCarouselItem itemId="1">
                                    <MDBView>
                                        <img className="d-block w-100" src={require("./assets/LivraisonColis.jpg")} alt="First slide" style={{height: "100vh"}} />
                                        <MDBMask overlay="black-strong" />
                                    </MDBView>
                                    <MDBCarouselCaption>
                                    </MDBCarouselCaption>
                                </MDBCarouselItem>
                                <MDBCarouselItem itemId="2">
                                    <MDBView>
                                        <img className="d-block w-100" src={require("./assets/LivraisonRepas.jpg")} alt="Second slide" style={{height: "100vh"}}/>
                                        <MDBMask overlay="black-strong" />
                                    </MDBView>
                                    <MDBCarouselCaption>
                                    </MDBCarouselCaption>
                                </MDBCarouselItem>
                                <MDBCarouselItem itemId="3">
                                    <MDBView>
                                        <img className="d-block w-100" src={require("./assets/AchatMagasin.jpg")} alt="Third slide" style={{height: "100vh"}}/>
                                        <MDBMask overlay="black-strong" />
                                    </MDBView>
                                    <MDBCarouselCaption>
                                    </MDBCarouselCaption>
                                </MDBCarouselItem>
                            </MDBCarouselInner>
                        </MDBCarousel>
            </div>
                <MDBRow>
                <MDBCol  md={"4"} style={{ backgroundColor: "black", textAlign: "center"}}>
                    <div className={"container"} style={{marginTop: "25%"}}>
                        <p style={{color: "white", fontSize: "2vw", fontFamily: "customFont"}}><strong style={{fontFamily: "ornement", fontSize: "2vw"}}>Q </strong> Toutes les nouvelles <strong style={{fontFamily: "ornement"}}> R</strong></p>
                        <p style={{color: "white", fontSize: "2vw", fontFamily: "customFont"}}><strong className={"text2"} style={{fontSize: "4vw", fontFamily: "customFont"}}>demandes de services</strong> effectuees dans votre voisinnages.</p>
                        <p style={{color: "white", fontSize: "2vw", fontFamily: "customFont"}}> Pour en voir <strong className={"text2"} style={{fontSize: "4vw", fontFamily: "customFont"}}>davantages</strong>, cliquez ici: </p>
                        <MDBBtn outline rounded color="white" href={"/dashboardService"}>
                            <MDBIcon icon="shopping-cart" size={"lg"} /> Nos Services <MDBBadge color="red">New</MDBBadge>
                        </MDBBtn>
                    </div>
                </MDBCol>
                <MDBCol md={"8"} style={{backgroundColor: "rgb(5, 5, 5)"}}>
                    <h1 className={"text2"} style={{fontFamily: "customFont2", textAlign: "center", fontSize: "7vw", marginTop: "30px"}} >[Les|plus|récentes..]</h1>
                    <MDBJumbotron className={"container"} style={{background: "rgba(0, 0, 0, 0.9)" }}>
                     <SimpleSliderAll/>
                    </MDBJumbotron>
                </MDBCol>
                </MDBRow>
            <MDBRow style={{backgroundColor: "rgb(23, 23, 23)"}}>
                    <div className={"container"} style={{backgroundColor: "rgb(23, 23, 23)", marginTop: "7%", marginBottom: "7%"}}>
                        <MDBRow>
                            <MDBCol style={{textAlign: "center"}}>
                                <img id={"imgicon"} src={require("./assets/package.png")}/>
                                <h1 id={"titleimgicon"}>"Livraison|de|colis"</h1>
                                <p id={"textimgicon"}>Impossible de receptionner votre colis a la maison car vous n'etes pas disponible ? Demandez a votre voisinnage de le receptionner pour vous !</p>
                            </MDBCol>
                            <MDBCol style={{textAlign: "center"}}>
                                <img id={"imgicon"} src={require("./assets/basket.png")}/>
                                <h1 id={"titleimgicon"}>"Achats|divers"</h1>
                                <p id={"textimgicon"}>Besoin d'effectuer un achat mais vous manquez de temps ? Verifier si quelqu'un est a proximite d'un magasin ouvert.</p>
                            </MDBCol>
                            <MDBCol style={{textAlign: "center"}}>
                                <img id={"imgicon"} src={require("./assets/fast-food.png")}/>
                                <h1 id={"titleimgicon"}>"Restauration"</h1>
                                <p id={"textimgicon"}>Envie de vous faire livrer a manger mais aucuns services ne delivrent chez vous ? Verifier si un de vos voisins est a proximite d'un restaurant a emporter. Un moyen de ne pas manger seul cette fois !</p>
                            </MDBCol>
                        </MDBRow>
                    </div>
            </MDBRow>
            <MDBRow>
                <MDBCol md={"8"} style={{backgroundColor: "rgb(46, 46, 46)"}}>
                <h1 className={"text2"} style={{fontFamily: "customFont2", textAlign: "center", fontSize: "7vw", marginTop: "40px"}}>[Vos|demandes|persos.]</h1>
                <MDBJumbotron className={"container"} style={{background: "rgba(35, 35, 35, 0.9)" }}>
                    <SimpleSliderPerso/>
                </MDBJumbotron>
                </MDBCol>
                <MDBCol md={"4"} style={{ backgroundColor: "rgb(35, 35, 35)", textAlign: "center"}}>
                    <div className={"container"} style={{marginTop: "25%"}}>
                    <p style={{color: "white", fontSize: "2vw", fontFamily: "customFont"}}><strong style={{fontFamily: "ornement", fontSize: "2vw"}}>Q </strong>Retrouver toutes vos<strong style={{fontFamily: "ornement"}}> R</strong></p>
                    <p className={"text2"} style={{color: "white", fontSize: "4vw", fontFamily: "customFont"}}>demandes de services</p>
                    <p style={{color: "white", fontSize: "2vw", fontFamily: "customFont"}}> persos sur votre profil.</p>
                        <p style={{color: "white", fontSize: "2vw", fontFamily: "customFont"}}>Vous pouvez modifier, supprimer<br/> vos <strong className={"text2"} style={{fontSize: "4vw", fontFamily: "customFont"}} > demandes </strong> ici:</p>
                    <MDBBtn outline rounded color="white">
                        <MDBIcon icon="user" size={"lg"}/> Mon Profil <MDBBadge color="warning">Soon</MDBBadge>
                    </MDBBtn>
                    </div>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol style={{backgroundColor: "rgb(46, 46, 46)"}}>
                    <div className={"container"} style={{textAlign: "center", marginTop: "5%", marginBottom: "5%", backgroundColor: "rgb(46, 46, 46)"}}>
                    <MDBJumbotron id={"section1"} style={{border: "5px solid black", borderRadius: "12px"}}>
                        <h2 className="h1 display-3" style={{marginTop: "45%", fontFamily: "customFont2"}}>[MAP|BIENTOT|!]</h2>
                    </MDBJumbotron>
                    </div>
                </MDBCol>
            </MDBRow>
        </div>;
    }
}
