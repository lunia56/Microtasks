import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {NewComponent} from './component/NewComponent';
import Button from './component/Button';
import ImStupidBtn from './component/ImStupidBtn';
import FilterLearn from './component/FilterLearn';
import {FullInput} from './component/FullInput';


const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]
const moneyData = [
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

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message3'},
        {message: 'message3'},
    ])

    let [title, setTitle] = useState('')
    console.log(title)


    const addMessage = (title: string) => {
        setMessage([...message, {message: title}])
        setTitle('')

    }
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
    const callBackButtonHandler=()=>{
        addMessage(title)
    }
    return (
        <div className="App">
            <NewComponent topCars={topCars}/>

            <Button name={'Who i am'} callBack={() => whoIAm('Im Darya')}/>
            <ImStupidBtn title={'im NOT Stupid!!!'}
                         callBack={() => whoIAm('Im smart button!')}/>
            {count}

            <Button name={'Counter'} callBack={counter}/>
            <Button name={'0'} callBack={zeroing}/>
            <FilterLearn state={currentMoney} callBack={filtered}/>
            <FullInput addMessage={addMessage}
                       message={message}
                       title={title}
                       setTitle={setTitle}
            />

            <Button name={"Вторая кнопка"} callBack={callBackButtonHandler}/>
        </div>
    );
}

export default App;
