import React, {useState} from "react";
import "./style.scss";

interface Props {
    text: string;
}

function Color(props: Props) {
    const [rgbColors, setRgbColors] = useState([0,0,0]);

    const handleChange = (newValue, index: number)=> {
        const currentValue: number[] = JSON.parse(JSON.stringify(rgbColors));
        currentValue[index] = newValue;
        setRgbColors(currentValue);
    }

    return (<div>
        <div className={"pageTitle"}>{props.text}</div>
        <div style={{backgroundColor:`rgb(${rgbColors[0]}, ${rgbColors[1]}, ${rgbColors[2]})`}} className={"colorContainer"}></div>
        <div className={"inputsContainer"}>
            <div className={"inputColorContainer"}>R:<input value={rgbColors[0]} type={"number"} min={0} max={255} onChange={(event)=>{handleChange(Number(event.target.value), 0)}}/></div>
            <div className={"inputColorContainer"}>G:<input value={rgbColors[1]} type={"number"} min={0} max={255} onChange={(event)=>{handleChange(Number(event.target.value), 1)}}/></div>
            <div className={"inputColorContainer"}>B:<input value={rgbColors[2]} type={"number"} min={0} max={255} onChange={(event)=>{handleChange(Number(event.target.value), 2)}}/></div>
        </div>
    </div>);
}

export {Color}
