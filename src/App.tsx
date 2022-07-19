import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";

const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
]


export type NewComponentType ={

}


function App() {

    return (
        <div className="App">
            <NewComponent topCars={topCars}/>
        </div>
    );
}

export default App;
