import React from 'react'
import { CommonPlannerFooter } from './CommonPlannerFooter';
import CommonPlannerTop from './CommonPlannerTop';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { Link } from 'react-router-dom';

function PlannerStep3(props) {

    // Paso 3. Muestra el plan del dia ordenado por hora y lugar de los eventos.
    // var eventsFilteredByPlan = props.eventsByPlan[1].events; // todo> filter events by selected plans (plans).
    // console.log(eventsFilteredByPlan);

    
    return (
        <div>
            {window.scrollTo(0, 0)}
            <CommonPlannerTop step={3} />
            <div className="p-grid p-fluid dashboard">
                <div className="p-col-12 p-lg-4">


                    { /*<div style={{ height: '100%', backgroundColor: '#fff', padding: '1em' }}> </div> */}

                    <Panel header="" style={{ height: '100%' }}>

                        <ul className="activity-list">
                            <li>
                                <div className="p-grid">
                                    <div className="p-col-6" style={{ fontWeight: 'bold' }}>Bolera Suramericana</div>
                                    <div className="p-col-6">5pm</div>
                                    <div className="p-col-6">Unidad deportiva Envigado</div>
                                    <div className="p-col-6">5 reservas disponibles.</div>
                                </div>

                                <div className="p-grid">
                                    <div className="p-col-6"><div className="count" style={{ backgroundColor: '#20d077' }}>$27,000</div></div>
                                    <div className="p-col-6">
                                        <Button type="button" label="Reservar" icon="fa-send" />
                                        <Link to="/detalle" style={{ textDecoration: 'underline' }} >  Ver detalles del evento. </Link>
                                    </div>
                                </div>
                            </li>


                            <li>
                                <div className="p-grid">
                                    <div className="p-col-6" style={{ fontWeight: 'bold' }}>Show de cocina en vivo</div>
                                    <div className="p-col-6">7pm</div>
                                    <div className="p-col-6">Hotel Dann</div>
                                    <div className="p-col-6">2 reservas disponibles.</div>
                                </div>

                                <div className="p-grid">
                                    <div className="p-col-6"><div className="count" style={{ backgroundColor: '#20d077' }}>$75,800</div></div>
                                    <div className="p-col-6">
                                        <Button type="button" label="Reservar" icon="fa-send" />
                                        <Link to="/detalle" style={{ textDecoration: 'underline' }} >  Ver detalles del evento. </Link>
                                    </div>
                                </div>
                            </li>


                            <li>
                                <div className="p-grid">
                                    <div className="p-col-6" style={{ fontWeight: 'bold' }}>Jazz en vivo!</div>
                                    <div className="p-col-6">9pm</div>
                                    <div className="p-col-6">Hard rock cafe</div>
                                    <div className="p-col-6">1 reservas disponibles.</div>
                                </div>

                                <div className="p-grid">
                                    <div className="p-col-6"><div className="count" style={{ backgroundColor: '#20d077' }}>$36,100</div></div>
                                    <div className="p-col-6">
                                        <Button type="button" label="Reservar" icon="fa-send" />
                                        <Link to="/detalle" style={{ textDecoration: 'underline' }} >  Ver detalles del evento. </Link>
                                    </div>
                                </div>
                            </li>


                            <li>
                                <div className="p-grid">
                                    <div className="p-col-6" style={{ fontWeight: 'bold' }}>Batallas de Rap</div>
                                    <div className="p-col-6">11pm</div>
                                    <div className="p-col-6">Hard rock cafe</div>
                                    <div className="p-col-6">0 reservas disponibles.</div>
                                </div>

                                <div className="p-grid">
                                    <div className="p-col-6"><div className="count" style={{ backgroundColor: '#20d077' }}>free</div></div>
                                    <div className="p-col-6">
                                        <span style={{ fontWeight: 'bold' }}>(Sold out)</span>
                                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br> </span>
                                        <Link to="/detalle" style={{ textDecoration: 'underline' }} >  Ver detalles del evento. </Link>
                                    </div>
                                </div>
                            </li>


                        </ul>

                    </Panel>

                </div>

                <div className="p-col-12">
                    <Button type="button" label="Guardar Plan!" icon="fa-send" />
                </div>

                <CommonPlannerFooter />

            </div>
        </div>
    );
}

export default PlannerStep3;









