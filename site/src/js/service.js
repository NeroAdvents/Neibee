import React, {Fragment } from 'react';
import { updateState } from "./HomePage";

export class ServiceList extends React.Component {
    change() {
        let vue = <AddService />;
        updateState(vue);
    }
    render() {
        return (
            <div>
                <p>ServiceList</p>
                <button onClick={this.change}>Ajouter un Service</button>
            </div>
        );
    }
}

export class AddService extends React.Component {
    change() {
        let vue = <ServiceList />;
        updateState(vue);
    }
    render() {
        return (
            <div>
                <p>AddService</p>
                <button onClick={this.change}>lol</button>
            </div>
        );
    }
}