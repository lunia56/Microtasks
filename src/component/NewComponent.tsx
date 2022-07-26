import React from "react";

export type NewComponentType = {
    topCars: topCarsType[]
}
type topCarsType = {
    manufacturer: string
    model: string
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <>
            <ul>
                {props.topCars.map((el, index) => {
                    return (
                        <>
                            {/*<li key={index}>` завод: {el.manufacturer}, модель: {el.model}`</li>*/}


                            <table key={index} width="10%" cellSpacing="0" border={1}>
                                <tr>
                                    <th>Номер</th>
                                    <th>Завод</th>
                                    <th>Модель</th>
                                </tr>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{el.manufacturer}</td>
                                    <td>{el.model}</td>
                                </tr>
                            </table>

                        </>
                    )
                })}
            </ul>
        </>
    )
}