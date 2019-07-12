import React from 'react'
import { CommonPlannerFooter } from './CommonPlannerFooter';
import CommonPlannerTop from './CommonPlannerTop';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';

function PlannerStep1(props) {
    // Paso1- seleccionar tipo de plan.
    return <div>
        <CommonPlannerTop step={1} />
        <div className="p-grid p-fluid dashboard">
            <div className="p-col-12 p-lg-4">
                <div className="card summary">
                    <ul className='task-list'>

                        {props.planTypes.map((plan) =>
                            <li key={plan.id}>
                                <Checkbox value={plan.id} onChange={props.onChange} checked={props.plans.includes(plan.id)}></Checkbox>
                                <span className="task-name">{plan.label}</span>
                                <i className={`pi ${plan.icon} `} />
                            </li>
                        )}

                    </ul>
                </div>
            </div>
            <div className="p-col-12">
                <Button type="button" label="Consultar actividades!" icon="fa-send" onClick={props.handleStep2} />
            </div>
            <CommonPlannerFooter />
        </div>
    </div>
}

export default PlannerStep1;