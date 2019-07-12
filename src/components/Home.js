import React, { Component } from 'react';
import { Redirect } from 'react-router'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            error: null,
            redirect: false
        }
        console.log('constructor home')
    }

    handleLogin = event => { 
        this.setState({
            redirect: true
        });
        event.preventDefault();
    };

    render() {

        if (this.state.redirect) {
            return <Redirect to='/main' />
        }

        return (
            <div className="p-grid p-fluid">

                <div className="p-col-12">
                    <div className="card">
                        <h1>Home</h1>
                        <p>The home page.</p>
                    </div>
                </div>

                <div className="p-col-12">
                    <div className="card card-w-title">
                        <h1>Login</h1>
                        <div className="p-col-12">
                            <InputText type="text" placeholder="Username" />
                        </div>
                        <div className="p-col-12">
                            <InputText type="password" placeholder="Password" />
                        </div>
                        <div className="p-col-12">
                            <Button type="button" label="Send" icon="fa-send" onClick={this.handleLogin} />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default (Home);