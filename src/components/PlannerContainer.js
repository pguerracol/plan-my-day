import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { CommonPlannerFooter } from './CommonPlannerFooter';
import CommonPlannerTop from './CommonPlannerTop';
import PlannerStep1 from './PlannerStep1';
import PlannerStep2 from './PlannerStep2';
import PlannerStep3 from './PlannerStep3';

export class PlannerContainer extends Component {

    constructor() {
        super();
        this.state = {
            currentStep: 1,
            events: [],
            // plans: ['plan1','plan2'],
            plans: [],
            planTypes: [
                { id: 'plan1', label: 'Arte', icon: 'pi-chart-bar' },
                { id: 'plan2', label: 'Musica', icon: 'pi-dollar' },
                { id: 'plan3', label: 'Comida', icon: 'pi-user' },
                { id: 'plan4', label: 'Deportes', icon: 'pi-users' },
                { id: 'plan5', label: 'Teatro', icon: 'pi-briefcase' },
                { id: 'plan6', label: 'Cine', icon: 'pi-briefcase' },
                { id: 'plan7', label: 'Rumba', icon: 'pi-dollar' },
                { id: 'plan8', label: 'Sitios turisticos', icon: 'pi-chart-bar' }
            ],
            eventsByPlan: [
                {
                    id: 'plan1', events: [
                        { id: 'event1', label: 'Exhibicion Leonardo Davinci', text: 'La vida de Davinci en sus mejores obras al oleo.', picture: 'assets/layout/images/img1.png', place: 'Museo arte moderno', icon: 'pi-chart-bar', cost: '$52,800' },
                        { id: 'event2', label: 'Monet: The Late Years', text: 'Los ultimos dias en la vida de Claude Monet.', picture: 'assets/layout/images/img1.png', place: 'Museo arte moderno', icon: 'pi-chart-bar', cost: '$28,500' },
                        { id: 'event3', label: 'Expocultura 2019', text: 'El arte de Medellin se presenta ante el mundo en: EXPOCULTURA 2019.', picture: 'assets/layout/images/img1.png', place: 'Jardin Botanico Joaquín Antonio Uribe, MAM', icon: 'pi-chart-bar', cost: '$37,000' },
                    ]
                },
                {
                    id: 'plan2', events: [
                        { id: 'event4', label: 'Jazz en vivo', text: 'La vida de Davinci en sus mejores obras al oleo.', picture: 'assets/demo/images/nature/music-jazz-1.jpg', place: 'Museo arte moderno', icon: 'pi-chart-bar', cost: '$36,100' },
                        { id: 'event5', label: 'Tributo a Soda Stereo', text: 'Los ultimos dias en la vida de Claude Monet.', picture: 'assets/demo/images/nature/music-soda-1.jpg', place: 'Museo arte moderno', icon: 'pi-chart-bar', cost: '$48,900' },
                        { id: 'event7', label: 'Batallas de Rap', text: 'El arte de Medellin se presenta ante el mundo en: EXPOCULTURA 2019.', picture: 'assets/demo/images/nature/rap-1.jfif', place: 'Jardin Botanico Joaquín Antonio Uribe, MAM', icon: 'pi-chart-bar', cost: '$8,000' },
                        { id: 'event8', label: 'Bolera Suramericana', text: 'El arte de Medellin se presenta ante el mundo en: EXPOCULTURA 2019.', picture: 'assets/demo/images/nature/bolera-3.jpg', place: 'Jardin Botanico Joaquín Antonio Uribe, MAM', icon: 'pi-users', cost: '$27,000' },
                        { id: 'event9', label: 'Bubble Foot Medellin', text: 'El arte de Medellin se presenta ante el mundo en: EXPOCULTURA 2019.', picture: 'assets/demo/images/nature/bubble-foot-1.png', place: 'Jardin Botanico Joaquín Antonio Uribe, MAM', icon: 'pi-users', cost: '$11,000' },
                        { id: 'event10', label: 'Show de cocina en vivo!', text: 'El arte de Medellin se presenta ante el mundo en: EXPOCULTURA 2019.', picture: 'assets/demo/images/nature/cocina-1.jpg', place: 'Jardin Botanico Joaquín Antonio Uribe, MAM', icon: 'pi-dollar', cost: '$75,800' },
                        { id: 'event11', label: 'Colombia coffee Tour', text: 'El arte de Medellin se presenta ante el mundo en: EXPOCULTURA 2019.', picture: 'assets/demo/images/nature/coffee-2.jpg', place: 'Jardin Botanico Joaquín Antonio Uribe, MAM', icon: 'pi-dollar', cost: '$38,900' },
                    ]
                },
                {
                    id: 'plan3', events: [
                        { id: 'event7', label: 'Bolera Suramericana', text: 'La vida de Davinci en sus mejores obras al oleo.', picture: 'assets/layout/images/img1.png', place: 'Museo arte moderno', icon: 'pi-chart-bar', cost: '$21,000' },
                        { id: 'event8', label: 'Tenis de mesa', text: 'Los ultimos dias en la vida de Claude Monet.', picture: 'assets/layout/images/img1.png', place: 'Museo arte moderno', icon: 'pi-chart-bar', cost: '$15,000' },
                        { id: 'event9', label: 'Bubble Foot Medellin', text: 'El arte de Medellin se presenta ante el mundo en: EXPOCULTURA 2019.', picture: 'assets/layout/images/img1.png', place: 'Jardin Botanico Joaquín Antonio Uribe, MAM', icon: 'pi-chart-bar', cost: '$8,000' },
                    ]
                },
                {
                    id: 'plan4', events: [
                        { id: 'event7', label: 'Show de cocina en vivo', text: 'La vida de Davinci en sus mejores obras al oleo.', picture: 'assets/layout/images/img1.png', place: 'Museo arte moderno', icon: 'pi-chart-bar', cost: '$18,000' },
                        { id: 'event8', label: 'Burguer Master Medellin', text: 'Los ultimos dias en la vida de Claude Monet.', picture: 'assets/layout/images/img1.png', place: 'Museo arte moderno', icon: 'pi-chart-bar', cost: '$10,000' },
                        { id: 'event9', label: 'Colombia coffee Tour', text: 'El arte de Medellin se presenta ante el mundo en: EXPOCULTURA 2019.', picture: 'assets/layout/images/img1.png', place: 'Jardin Botanico Joaquín Antonio Uribe, MAM', icon: 'pi-chart-bar', cost: '$9,000' },
                    ]
                },

            ]
        };

        //this.onTaskChange = this.onTaskChange.bind(this);
    }

    componentDidMount() {
        console.log('componentDidMount PlannerContainer');
        // hacer un fetch a una lib generica y leer de un .json con los datos en el archivo local, luego connectar con un endpoint real.
        /*
        fetch("/my-comments.json")
          .then(res => res.json())
          .then(comments => this.setState({ comments }))

          */
    }

    onPlanChange = (e) => {
        console.log('onPlanChange-Planner.');
        let selectedTasks = [...this.state.plans];
        if (e.checked)
            selectedTasks.push(e.value);
        else
            selectedTasks.splice(selectedTasks.indexOf(e.value), 1);

        this.setState({ plans: selectedTasks });
    }

    onEventChange = (e) => {
        console.log('onEventChange-Planner.');
        let selectedEvents = [...this.state.events];
        if (e.checked)
            selectedEvents.push(e.value);
        else
            selectedEvents.splice(selectedEvents.indexOf(e.value), 1);

        this.setState({ events: selectedEvents });
    }


    handleStep2 = event => {
        console.log('click -> handleStep2.');
        this.setState({
            currentStep: 2
        });
        event.preventDefault();
    };

    handleStep3 = event => {
        console.log('click -> handleStep3.');
        this.setState({
            currentStep: 3
        });
        event.preventDefault();
    };


    render() {
        const { currentStep, planTypes, plans, eventsByPlan } = this.state;

         // Paso 1. Seleccionar tipos de planes.
         if (currentStep === 1) {
            return <PlannerStep1 planTypes={this.state.planTypes} plans={this.state.plans} onChange={this.onPlanChange} handleStep2={this.handleStep2} />;
        }

        // Paso 2. Seleccionar actividades/ eventos, segun los planes escogidos.        
        if (currentStep === 2) {
            return <PlannerStep2 eventsByPlan={this.state.eventsByPlan} plans={this.state.plans} onChange={this.onEventChange} events={this.state.events} handleStep3={this.handleStep3} />;
        }

        // Paso 3. Mostrar el plan armado y ordenado al usuario, con opcion de guardarlo.
        if (currentStep === 3) {
            return <PlannerStep3  />;
        }

       

        return (<div>&nbsp;</div>);

    }
}