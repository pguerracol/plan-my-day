import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'

export class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            redirect: false,
            isLoaded: false,
            items: []
        }
        console.log('constructor main')
    }

    handleEventMain = event => { 
        this.setState({
            redirect: true
        });
        event.preventDefault();
    };

    componentDidMount() {
        fetch("https://lab-tourist-api.herokuapp.com/api/v1/categories")
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result);
                
                this.setState({
                    isLoaded: true,
                    items: result.response
                });
            },
            // Nota: es importante manejar errores aquí y no en 
            // un bloque catch() para que no interceptemos errores
            // de errores reales en los componentes.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    render() {

        if (this.state.redirect) {
            return <Redirect to='/planner' />
        }

        const { error, isLoaded, items } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {

            return (
                <div>
                    {/*
                    <div className="p-grid p-fluid">
                        <div className="p-col-12">
                            <div className="card">
                                <h1>Main</h1>
                                <p>Eventos del dia en la ciudad!.</p>
                            </div>
                        </div>
                    </div>
                    */
                    }
                    <div className="p-grid p-fluid">
                        <div className="p-col-12 p-lg-4">
                            <Message severity="info" text="28 Eventos encontrados para hoy en la ciudad... Let's rock it!" />
                        </div>
                    </div>
                    <div className="p-grid p-fluid dashboard">
                        <div className="p-col-12 p-lg-4">
                            <div className="card summary">
                                <span className="title">Arte y Música</span>
                                <span className="detail">Eventos en Teatros, museos, conciertos de música. </span>
                                <span className="count visitors">12</span>
                            </div>
                        </div>
                        <div className="p-col-12 p-lg-4">
                            <div className="card summary">
                                <span className="title">Deporte</span>
                                <span className="detail">Eventos deportivos, caminatas ecologicas, actividades extremas.</span>
                                <span className="count purchases">5</span>
                            </div>
                        </div>
                        <div className="p-col-12 p-lg-4">
                            <div className="card summary">
                                <span className="title">Costo promedio!</span>
                                <span className="detail">Costo promedio de actividades del día, por persona.</span>
                                <span className="count revenue">$52,800</span>
                            </div>
                        </div>
                        <div className="p-col-12 p-lg-4">
                            <div className="card summary" style={{ backgroundColor: '#f9c851' }} >
                                <span className="title">Gastronomía</span>
                                <span className="detail">Eventos en restaurantes, shows de cocina.</span>
                                <span className="count " style={{ backgroundColor: '#ef6262' }}>6</span>
                            </div>
                        </div>
                        <div className="p-col-12 p-lg-4">
                            <div className="card summary"  >
                                <span className="title">Rumba/ Night life</span>
                                <span className="detail">Vida nocturna y las mejores discotecas de la ciudad.</span>
                                <span className="count " style={{ backgroundColor: '#ef6262', color: '#fff' }}>5</span>
                            </div>
                        </div>
                        <div className="p-col-12">
                            <Button type="button" label="Arma tu plan aquí!" icon="fa-send" onClick={this.handleEventMain} />
                        </div>
                        <div className="p-col-12" style={{ textAlign: 'center'}}>
                            <Link to="/destacados" style={{ textDecoration: 'underline' }} >  Ver Eventos destacados del dia. </Link>
                        </div>
                    </div>

                    <div className="p-grid p-fluid">
                        {items.map(item => (
                            <div className="p-col-12 p-lg-4" key={item.id}>
                                <Message severity="info" text={item.name} />
                            </div>
                        ))}
                    </div>
                </div>
            );

        }


    }
}