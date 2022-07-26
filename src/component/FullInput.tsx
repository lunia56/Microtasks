import React, {ChangeEvent, useState} from 'react';

export type FullInputType ={
    title:string
    setTitle:(title:string)=>void
    message:Array<messageType>
    addMessage:(title:string)=> void
}
export type messageType ={
    message:string
}

export function FullInput(props:FullInputType) {

    const onChangeInputHandler =(event:ChangeEvent<HTMLInputElement>)=>{
        props.setTitle(event.currentTarget.value)

    }
    return (
        <div style={{display:'block'}}>
            {props.message.map((el,index)=>{
                return (
                    <div key={index}>{el.message}</div>)

            })}
            <input onChange={onChangeInputHandler} placeholder={"Введите сообщение"} value={props.title}/>
            {/*<button onClick={()=>(props.addMessage(props.title))}>Добавить</button >*/}
        </div>
    );
}

