import React from 'react';

type ImStupidBtnType ={
    title:string
    callBack:()=>void
}
function ImStupidBtn(props:ImStupidBtnType) {
    const onClickHandler =()=>{
        props.callBack()
    }
    return (
        <button onClick={onClickHandler}>{props.title}</button>
    );
}

export default ImStupidBtn;