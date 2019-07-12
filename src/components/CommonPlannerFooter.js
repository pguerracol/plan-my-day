import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class CommonPlannerFooter extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="p-col-12 p-lg-4">
                    <div className="card summary">
                        <span className="title">Eventos</span>
                        <span className="detail">Total de eventos del dia en tu ciudad. </span>
                        <span className="count visitors">28</span>
                    </div>
                </div>
                <div className="p-col-12" style={{ textAlign: 'center' }}>
                    <Link to="/destacados" style={{ textDecoration: 'underline' }} >  Ver Eventos destacados del dia. </Link>
                </div>
            </React.Fragment>
        );
    }
}