import React, {useState} from 'react';
import './App.css';
import {NewComponent} from './NewComponent';
import Button from './Button';
import ImStupidBtn from './ImStupidBtn';
import FilterLearn from './FilterLearn';

const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]
const moneyData =[
    {banknots: 'Dollars', value: 100, number: ' a1234567890'},
    {banknots: 'Dollars', value: 50, number: ' z1234567890'},
    {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
    {banknots: 'Dollars', value: 100, number: ' e1234567890'},
    {banknots: 'Dollars', value: 50, number: ' c1234567890'},
    {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
    {banknots: 'Dollars', value: 50, number: ' x1234567890'},
    {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
]
export type FilterType = 'all' | 'dollars' | 'rubls'



function App() {

    const [money, setMoney] = useState(moneyData)
    let [count, setCount] = useState(0)
    const [filter, setFilter] = useState<FilterType>('all')


    const whoIAm = (subscriber: string) => console.log(subscriber)
    const counter = () => setCount(++count)
    const zeroing = () => setCount(0)


    let currentMoney = money;
    if (filter === 'dollars') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots == 'Dollars')
    }
    if (filter === 'rubls') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots == 'RUBLS')
    }

    const filtered = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    return (
        <div className="App">
            <NewComponent topCars={topCars}/>

            <Button name={'Who i am'} callBack={() => whoIAm('Im Vasya')}/>
            <Button name={'Who i am'} callBack={() => whoIAm('Im Darya')}/>
            <ImStupidBtn title={'im NOT Stupid!!!'} callBack={() => whoIAm('Im smart button!')}/>
            {count}
            <Button name={'Counter'} callBack={counter}/>
            <Button name={'0'} callBack={zeroing}/>

            <FilterLearn state={currentMoney} callBack={filtered}/>
        </div>
    );
}

export default App;
