import React from 'react';
import {FilterType} from '../App';

type FilterLearnType = {
    state: Array<moneyType>
    callBack:(nameButton: FilterType)=>void
}
type moneyType = {
    banknots: string
    value: number
    number: string
}

function FilterLearn(props: FilterLearnType) {


    return (
        <>
            <ul>
                {props.state.map((el, index) => {
                        return (
                            <li key={index}>
                                <span/>{el.banknots} {el.value} {el.number}
                            </li>
                        )
                    }
                )}
            </ul>
            <div>
                <button onClick={()=>props.callBack("all")}>All</button>
                <button onClick={()=>props.callBack("rubls")}>Rubls</button>
                <button onClick={()=>props.callBack("dollars")}>Dollars</button>
            </div>
        </>
    );
}

export default FilterLearn;