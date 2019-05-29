import React from 'react';

import TopNavigation from './components/topNavigation';
import {MDBRow, MDBCol, MDBBtn, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBIcon, MDBMask, MDBView, MDBBadge, MDBModal, MDBModalHeader, MDBModalBody, MDBInput, MDBModalFooter, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, Link} from 'mdbreact';

import "../css/DashboardService.css";
import "../css/Dashboard.css";

export class DashboardService extends React.Component {
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
        return (
            <div>
                <MDBRow>
                <TopNavigation/>
                </MDBRow>
                    <div style={{minHeight: "100vh"}}>
                        <MDBCarousel activeItem={1} length={3} showControls={false} showIndicators={true} className="z-depth-1" style={{backgroundSize: "cover", height: "100vh"}}>
                            <MDBCarouselInner>
                                <div className={"overlay"}>
                                    <p style={{fontFamily: "customFont2", fontSize: "8vw"}}>CREER, PARTICIPER</p>
                                    <p style={{fontFamily: "customFont", fontSize: "2vw"}}> aux services proposes par vos voisins pour le plaisir de s'entraider et de realiser de belles rencontres.</p>
                                    <hr className="hr-light my-4 w-50"/>
                                    <p style={{fontFamily: "customFont", fontSize: "1.5vw"}}>Retrouver tout les services deja proposes par votre voisinnage en dessous</p>

                                    <MDBBtn color={"white"} rounded outline onClick={this.toggle}>
                                        Demande de Service
                                    </MDBBtn>
                                    <MDBModal isOpen={this.state.modal} toggle={this.toggle} fullHeight position="left">
                                        <form onSubmit={this.handleSubmit}>
                                            <MDBModalHeader toggle={this.toggle}>Création d'un nouveau service</MDBModalHeader>
                                            <MDBModalBody style={{minHeight: "83vh"}}>
                                                <a data-toggle="tooltip"
                                                   title="Choisissez le type de service que vous voulez soumettre">
                                                    <select className="browser-default custom-select" name={"selected"}
                                                            value={this.state.selected} onChange={this.handleChange}>
                                                        <option disabled defaultValue>Type de service</option>
                                                        <option value="Livraison">Livraison de Colis</option>
                                                        <option value="Restauration">Restauration</option>
                                                        <option value="Achat">Achat(s) diver(s)</option>
                                                    </select>
                                                </a>
                                                <a data-toggle="tooltip"
                                                   title={"Décrivez en quelques mots la thèmatique de votre demande de service"}>
                                                    <MDBInput type="textarea" label="Formulaire" rows="5" style={{ fontWeight: "bold"}} name={"content"} value={this.state.content} onChange={this.handleChange} required/>
                                                </a>

                                            </MDBModalBody>
                                            <MDBModalFooter>
                                                <MDBBtn color="elegant" type={"submit"}>Soumettre</MDBBtn>
                                                <MDBBtn color="elegant" onClick={this.toggle}>Fermer</MDBBtn>
                                            </MDBModalFooter>
                                        </form>
                                    </MDBModal>

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
                <MDBRow style={{minHeight: "95vh"}}>
                    <MDBRow>
                        <MDBCol md={"4"}>
                            <MDBBtn color={"elegant"} style={{left: "30%", top: "10px"}} onClick={this.toggle}>Demande de
                                Service
                            </MDBBtn>
                            <MDBModal isOpen={this.state.modal} toggle={this.toggle} fullHeight position="left">
                                <form onSubmit={this.handleSubmit}>
                                    <MDBModalHeader toggle={this.toggle}>Création d'un nouveau service</MDBModalHeader>
                                    <MDBModalBody style={{minHeight: "83vh"}}>
                                        <a data-toggle="tooltip"
                                           title="Choisissez le type de service que vous voulez soumettre">
                                            <select className="browser-default custom-select" name={"selected"}
                                                    value={this.state.selected} onChange={this.handleChange}>
                                                <option disabled defaultValue>Type de service</option>
                                                <option value="Livraison">Livraison de Colis</option>
                                                <option value="Restauration">Restauration</option>
                                                <option value="Achat">Achat(s) diver(s)</option>
                                            </select>
                                        </a>
                                        <a data-toggle="tooltip"
                                           title={"Décrivez en quelques mots la thèmatique de votre demande de service"}>
                                            <MDBInput type="textarea" label="Formulaire" rows="5" style={{ fontWeight: "bold"}} name={"content"} value={this.state.content} onChange={this.handleChange} required/>
                                        </a>

                                    </MDBModalBody>
                                    <MDBModalFooter>
                                        <MDBBtn color="elegant" type={"submit"}>Soumettre</MDBBtn>
                                        <MDBBtn color="elegant" onClick={this.toggle}>Fermer</MDBBtn>
                                    </MDBModalFooter>
                                </form>
                            </MDBModal>
                        </MDBCol>
                        <MDBCol md={"8"} style={{backgroundColor: "white", minHeight: "95vh"}} id={"1"}>
                            <MDBRow>
                                {this.state.value.map((v) => {
                                    return <div style={{
                                        backgroundColor: "white",
                                        width: "25%",
                                        marginTop: "30px"
                                    }}
                                                key={v.id}
                                    >
                                        <MDBCol>
                                            <MDBCard >
                                                <MDBCardImage className="img-fluid"
                                                              src={require("./" + v.title + ".jpg")}
                                                              waves style={{height: "150px", width: "100%"}}/>
                                                <MDBCardBody>
                                                    <MDBCardTitle style={{textAlign: "center"}}>{v.title}</MDBCardTitle>
                                                    <MDBCardText>
                                                        Thème <br/> {v.content} <br/> {v.id}
                                                    </MDBCardText>
                                                    <MDBRow>
                                                        <MDBBtn href="#" onClick={this.handledelTodoItem.bind(this, v)}
                                                                size={"sm"}>Delete</MDBBtn>
                                                        <MDBBtn size={"sm"}><Link to={{pathname: "/info", data: v}}>+ Infos</Link></MDBBtn>
                                                    </MDBRow>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>
                                    </div>
                                })}
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                    {/*<MDBCol md={"3"} id={"sideCol"}>*/}
                    {/*</MDBCol>*/}
                    {/*<MDBCol md={"6"} id={"middleCol"}>*/}
                        {/*<MDBRow id={"sideCol"}>*/}
                            {/*<h1 id={"text2"} style={{fontFamily: "customFont2", textAlign: "center", fontSize: "7vw"}}>[Nos|Services]</h1>*/}
                        {/*</MDBRow>*/}
                        {/*<MDBRow>*/}
                        {/*{this.state.value.map((v) => {*/}
                            {/*return <div style={{*/}
                                {/*backgroundColor: "white",*/}
                                {/*width: "25%",*/}
                                {/*marginTop: "30px"*/}
                            {/*}}*/}
                                        {/*key={v.id}*/}
                            {/*>*/}
                                {/*<MDBCol>*/}
                                    {/*<MDBCard >*/}
                                        {/*<MDBCardImage className="img-fluid"*/}
                                                      {/*src={require("./" + v.title + ".jpg")}*/}
                                                      {/*waves style={{height: "150px", width: "100%"}}/>*/}
                                        {/*<MDBCardBody>*/}
                                            {/*<MDBCardTitle style={{textAlign: "center"}}>{v.title}</MDBCardTitle>*/}
                                            {/*<MDBCardText>*/}
                                                {/*Thème <br/> {v.content} <br/> {v.id}*/}
                                            {/*</MDBCardText>*/}
                                            {/*<MDBRow>*/}
                                                {/*<MDBBtn href="#" onClick={this.handledelTodoItem.bind(this, v)}*/}
                                                        {/*size={"sm"}>Delete</MDBBtn>*/}
                                                {/*<MDBBtn size={"sm"}><Link to={{pathname: "/info", data: v}}>+ Infos</Link></MDBBtn>*/}
                                            {/*</MDBRow>*/}
                                        {/*</MDBCardBody>*/}
                                    {/*</MDBCard>*/}
                                {/*</MDBCol>*/}
                            {/*</div>*/}
                        {/*})}*/}
                        {/*</MDBRow>*/}
                    {/*</MDBCol>*/}
                    {/*<MDBCol md={"3"} id={"sideCol"}>*/}
                    {/*</MDBCol>*/}
                </MDBRow>
            </div>
        );
    }
}

export class Dashboard2 extends React.Component {
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
            <TopNavigation/>
            {/*<SideNavigation/>*/}
                    {/*<MDBRow>*/}
                        {/*<div style={{minHeight: "100vh"}}>*/}
                            {/*<MDBCarousel activeItem={1} length={3} showControls={false} showIndicators={true} className="z-depth-1" style={{backgroundSize: "cover", height: "100vh"}}>*/}
                                {/*<MDBCarouselInner>*/}
                                    {/*<div className={"overlay"}>*/}
                                        {/*<p style={{fontFamily: "customFont2", fontSize: "8vw"}}>CREER, PARTICIPER</p>*/}
                                        {/*<p style={{fontFamily: "customFont", fontSize: "2vw"}}> aux services proposes par vos voisins pour le plaisir de s'entraider et de realiser de belles rencontres.</p>*/}
                                        {/*<hr className="hr-light my-4 w-50"/>*/}
                                        {/*<p style={{fontFamily: "customFont", fontSize: "1.5vw"}}>Retrouver tout les services deja proposes par votre voisinnage en dessous</p>*/}

                                        {/*<MDBBtn color={"white"} rounded outline onClick={this.toggle}>*/}
                                            {/*Demande de Service*/}
                                        {/*</MDBBtn>*/}
                                        {/*<MDBModal isOpen={this.state.modal} toggle={this.toggle} fullHeight position="left">*/}
                                            {/*<form onSubmit={this.handleSubmit}>*/}
                                                {/*<MDBModalHeader toggle={this.toggle}>Création d'un nouveau service</MDBModalHeader>*/}
                                                {/*<MDBModalBody style={{minHeight: "83vh"}}>*/}
                                                    {/*<a data-toggle="tooltip"*/}
                                                       {/*title="Choisissez le type de service que vous voulez soumettre">*/}
                                                        {/*<select className="browser-default custom-select" name={"selected"}*/}
                                                                {/*value={this.state.selected} onChange={this.handleChange}>*/}
                                                            {/*<option disabled defaultValue>Type de service</option>*/}
                                                            {/*<option value="Livraison">Livraison de Colis</option>*/}
                                                            {/*<option value="Restauration">Restauration</option>*/}
                                                            {/*<option value="Achat">Achat(s) diver(s)</option>*/}
                                                        {/*</select>*/}
                                                    {/*</a>*/}
                                                    {/*<a data-toggle="tooltip"*/}
                                                       {/*title={"Décrivez en quelques mots la thèmatique de votre demande de service"}>*/}
                                                        {/*<MDBInput type="textarea" label="Formulaire" rows="5" style={{ fontWeight: "bold"}} name={"content"} value={this.state.content} onChange={this.handleChange} required/>*/}
                                                    {/*</a>*/}

                                                {/*</MDBModalBody>*/}
                                                {/*<MDBModalFooter>*/}
                                                    {/*<MDBBtn color="elegant" type={"submit"}>Soumettre</MDBBtn>*/}
                                                    {/*<MDBBtn color="elegant" onClick={this.toggle}>Fermer</MDBBtn>*/}
                                                {/*</MDBModalFooter>*/}
                                            {/*</form>*/}
                                        {/*</MDBModal>*/}

                                    {/*</div>*/}
                                    {/*<MDBCarouselItem itemId="1">*/}
                                        {/*<MDBView>*/}
                                            {/*<img className="d-block w-100" src={require("./assets/LivraisonColis.jpg")} alt="First slide" style={{height: "100vh"}} />*/}
                                            {/*<MDBMask overlay="black-strong" />*/}
                                        {/*</MDBView>*/}
                                        {/*<MDBCarouselCaption>*/}
                                        {/*</MDBCarouselCaption>*/}
                                    {/*</MDBCarouselItem>*/}
                                    {/*<MDBCarouselItem itemId="2">*/}
                                        {/*<MDBView>*/}
                                            {/*<img className="d-block w-100" src={require("./assets/LivraisonRepas.jpg")} alt="Second slide" style={{height: "100vh"}}/>*/}
                                            {/*<MDBMask overlay="black-strong" />*/}
                                        {/*</MDBView>*/}
                                        {/*<MDBCarouselCaption>*/}
                                        {/*</MDBCarouselCaption>*/}
                                    {/*</MDBCarouselItem>*/}
                                    {/*<MDBCarouselItem itemId="3">*/}
                                        {/*<MDBView>*/}
                                            {/*<img className="d-block w-100" src={require("./assets/AchatMagasin.jpg")} alt="Third slide" style={{height: "100vh"}}/>*/}
                                            {/*<MDBMask overlay="black-strong" />*/}
                                        {/*</MDBView>*/}
                                        {/*<MDBCarouselCaption>*/}
                                        {/*</MDBCarouselCaption>*/}
                                    {/*</MDBCarouselItem>*/}
                                {/*</MDBCarouselInner>*/}
                            {/*</MDBCarousel>*/}
                        {/*</div>*/}
                    {/*</MDBRow>*/}
                    <MDBRow>
                        <MDBCol md={"4"} style={{backgroundColor: "black"}} >
                            <MDBBtn color={"elegant"} style={{left: "30%", top: "80px"}} onClick={this.toggle}>Demande de
                                Service
                            </MDBBtn>
                            <MDBModal isOpen={this.state.modal} toggle={this.toggle} fullHeight position="left">
                                <form onSubmit={this.handleSubmit}>
                                    <MDBModalHeader toggle={this.toggle}>Création d'un nouveau service</MDBModalHeader>
                                    <MDBModalBody style={{minHeight: "83vh"}}>
                                        <a data-toggle="tooltip"
                                           title="Choisissez le type de service que vous voulez soumettre">
                                            <select className="browser-default custom-select" name={"selected"}
                                                    value={this.state.selected} onChange={this.handleChange}>
                                                <option disabled defaultValue>Type de service</option>
                                                <option value="Livraison">Livraison de Colis</option>
                                                <option value="Restauration">Restauration</option>
                                                <option value="Achat">Achat(s) diver(s)</option>
                                            </select>
                                        </a>
                                        <a data-toggle="tooltip"
                                           title={"Décrivez en quelques mots la thèmatique de votre demande de service"}>
                                            <MDBInput type="textarea" label="Formulaire" rows="5" style={{ fontWeight: "bold"}} name={"content"} value={this.state.content} onChange={this.handleChange} required/>
                                        </a>

                                    </MDBModalBody>
                                    <MDBModalFooter>
                                        <MDBBtn color="elegant" type={"submit"}>Soumettre</MDBBtn>
                                        <MDBBtn color="elegant" onClick={this.toggle}>Fermer</MDBBtn>
                                    </MDBModalFooter>
                                </form>
                            </MDBModal>
                        </MDBCol>
                        <MDBCol md={"8"} style={{backgroundColor: "grey", minHeight: "95vh"}} id={"1"}>
                            <MDBRow style={{marginTop: "100px", backgroundColor: "grey"}}>
                                {this.state.value.map((v) => {
                                    return <div style={{
                                        backgroundColor: "grey",
                                        width: "25%",
                                        marginTop: "30px"
                                    }}
                                                key={v.id}
                                    >
                                        <MDBCol>
                                            <MDBCard >
                                                <MDBCardImage className="img-fluid"
                                                              src={require("./" + v.title + ".jpg")}
                                                              waves style={{height: "150px", width: "100%"}}/>
                                                <MDBCardBody>
                                                    <MDBCardTitle style={{textAlign: "center"}}>{v.title}</MDBCardTitle>
                                                    <MDBCardText>
                                                       <p>{v.content}</p>
                                                    </MDBCardText>
                                                    <MDBRow>
                                                        <MDBBtn href="#" onClick={this.handledelTodoItem.bind(this, v)}
                                                                size={"sm"}>Delete</MDBBtn>
                                                    </MDBRow>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>
                                    </div>
                                })}
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
            </div>
            {/*<Footer/>*/}
    }
}