import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBadge} from 'mdbreact';
import {DropdownItem} from "../navbar";

class TopNavigation extends React.Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <MDBNavbar color={"sunny-morning-gradient"} dark expand={"md"} scrolling fixed={"top"}>
                <div className={"container"}>
                <MDBNavbarBrand>
                    <strong className={"black-text"} >NEIBEE</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem>
                        <MDBNavLink to="/dashboard" className={"black-text"}><MDBIcon icon="plus-square" /> Acceuil</MDBNavLink>
                    </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#!" className={"black-text"} disabled><MDBIcon icon="align-left" /> Tutoriel | Demande de services <MDBBadge color="warning">Soon</MDBBadge></MDBNavLink>
                        </MDBNavItem>

                        <MDBNavItem>
                            <MDBNavLink to="/dashboardService" className={"black-text"}><MDBIcon icon="shopping-cart" /> Nos services <MDBBadge color="red">New</MDBBadge></MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret className={"black-text"}>
                                    <MDBIcon icon="user" />
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className="dropdown-default" right>
                                    <MDBDropdownItem href="#!"><MDBIcon icon="user" /> Profil <MDBBadge color="warning">Soon</MDBBadge></MDBDropdownItem>
                                    <MDBDropdownItem href="#!"><MDBIcon icon="cog" /> Paramètres <MDBBadge color="warning">Soon</MDBBadge></MDBDropdownItem>
                                    <MDBDropdownItem divider />
                                    <MDBDropdownItem href="#!"><MDBIcon icon="sign-out" /> Déconnexion <MDBBadge color="warning">Soon</MDBBadge></MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
                </div>
            </MDBNavbar>
        );
    }
}

export default TopNavigation;