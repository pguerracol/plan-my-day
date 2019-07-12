import React from 'react';
import { Message } from 'primereact/message';

function CommonPlannerTop({ step }) {

    var texto = "";
    if (step === 1)
        texto = "Paso 1: Que tipo de plan buscas?";
    else if (step === 2)
        texto = "Paso 2: Selecciona las actividades que te interesan!!";
    else if (step === 3)
        texto = "Listo! Este es tu plan para hoy!!";

    return <React.Fragment>
        <div className="p-grid p-fluid">
            <div className="p-col-12 p-lg-4">
                <Message severity="success" text={texto} />
            </div>
        </div>
    </React.Fragment>

}
export default CommonPlannerTop;