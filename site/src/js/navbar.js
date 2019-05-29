import React, {Fragment} from 'react';
import {
    Badge,
    Collapse,
    Dropdown, DropdownItem, DropdownMenu,
    DropdownToggle, MDBBtn,
    MDBIcon, Navbar,
    NavbarBrand,
    NavbarNav,
    NavbarToggler,
    NavItem,
    NavLink
} from "mdbreact";

export class NavbarItem extends React.Component {
    state = {
        isOpen: false
    };

    toggleCollapse = this.setState({isOpen: !this.state.isOpen});
    render() {
        return (
            <Navbar color={"sunny-morning-gradient"} dark expand={"md"} scrolling fixed={"top"}>
                <div className={"container"}>
                    <NavbarBrand href={"/dashboard"}>
                        <strong className={"black-text"}>NEIBEE</strong>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleCollapse}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <NavbarNav left>
                            <NavItem>
                                <NavLink to={"/"} className={"black-text"}><MDBIcon icon="home" /> Accueil</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to={"/service"} className={"black-text"}><MDBIcon icon="briefcase" /> Services  <Badge color="amber darken-2" style={{position: "relative", top: "-5px"}}>En cours</Badge></NavLink>
                            </NavItem>
                            <NavItem>
                                <Dropdown >
                                    <DropdownToggle nav caret className={"black-text"} >
                                        <div className="d-none d-md-inline" > À propos</div>
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdown-default"right>
                                        <DropdownItem to={"/"} disabled><MDBIcon icon="book" /> CGU  <Badge color="amber darken-2" style={{position: "relative", top: "-5px"}}>En cours</Badge></DropdownItem>
                                        <DropdownItem to={"/"} disabled><MDBIcon icon="envelope" /> Contacts  <Badge color="amber darken-2" style={{position: "relative", top: "-5px"}}>En cours</Badge></DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem to={"/"} disabled><MDBIcon icon="users" /> Portfolio <Badge color="amber darken-2" style={{position: "relative", top: "-5px"}}>En cours</Badge></DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                            <Fragment>
                                <MDBBtn outline color={"elegant"} href="/register"><MDBIcon icon="user-plus"/> S'inscrire </MDBBtn>
                                <MDBBtn outline color={"elegant"} href="/login"><MDBIcon icon="user"/> Se Connecter </MDBBtn>
                            </Fragment>
                        </NavbarNav>
                    </Collapse>
                </div>
            </Navbar>
        );
    }
}