import React from 'react'
import { CommonPlannerFooter } from './CommonPlannerFooter';
import CommonPlannerTop from './CommonPlannerTop';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';

/*
handleClick1 = event => {
    console.log('click -> handleClick1.');    
    event.preventDefault();
};
*/

function PlannerStep2(props) {    
    // Paso 2. Seleccionar actividades/ eventos de los planes escogidos.
    // Listado de actividades segun planes seleccionados: this.state.plans.
    var eventsFilteredByPlan = props.eventsByPlan[1].events; // todo> filter events by selected plans (props.plans).
    // console.log(eventsFilteredByPlan);

    return (
        <div>
            <CommonPlannerTop step={2} />
            <div className="p-grid p-fluid dashboard">


                {eventsFilteredByPlan.map((event) =>

                    <div className="p-col-12 p-md-6 p-xl-3" key={event.id}>
                        <div className="highlight-box">
                            <div className="initials" style={{ backgroundImage: `url("${event.picture}")`, backgroundPosition: 'center center', backgroundColor: '#007be5', color: '#fff' }}>
                                <span>                                   
                                        <i className="pi pi-search" /> ver detalle
                                </span>
                            </div>
                            <div className="highlight-details ">
                                {/*<i className="pi pi-search" />*/}
                                <i className={`pi ${event.icon} `} />
                                
                                <span style={{fontWeight:'bold'}} >{event.label}</span>
                                <span>&nbsp;&nbsp;</span>
                                <Checkbox value={event.id} onChange={props.onChange} checked={props.events.includes(event.id)}></Checkbox>
                                <span className="count">{event.cost}</span>
                            </div>
                        </div>
                    </div>

                )}


                <div className="p-col-12">
                    <Button type="button" label="Armar plan!" icon="fa-send" onClick={props.handleStep3} />
                </div>
                <CommonPlannerFooter />
            </div>
        </div>
    );
}

export default PlannerStep2;






/*
//console.log(eventsByPlan);
var eventsFilteredByPlan = eventsByPlan[1].events; // todo> filter events by selected plans (plans).
console.log(eventsFilteredByPlan);
return (
    <div>
        <CommonPlannerTop step={2} />
        <div className="p-grid p-fluid dashboard">

            <div className="p-col-12 p-lg-4">
                <div className="card summary">

                    <ul className='task-list'>
                        {eventsFilteredByPlan.map((event) =>
                            <li key={event.id}>
                                <span className="task-name">{event.label}</span>
                                <span className="task-name">{event.text}</span>
                                <span className="task-name">{event.place}</span>
                                <i className={`pi ${event.icon} `} />
                            </li>
                        )}
                    </ul>

                </div>
            </div>
            <div className="p-col-12">
                <Button type="button" label="Armar plan!" icon="fa-send" onClick={this.handleStep3} />
            </div>
            <CommonPlannerFooter />
        </div>
    </div>
);

*/





