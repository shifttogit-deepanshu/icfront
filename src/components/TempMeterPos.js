import React from "react"
import TempMeter from "./TempMeter"

const TempMeterPos = ()=>{
    const data = [
        {
          "name": "35-39",
          "temp": 100,
          "fill": "white"
        },
        {
          "name": "Temperature",
          "temp": 80,
          "fill": "#ffc658"
        }
      ]
    return (
        <TempMeter startAngle={0} endAngle={360} data={data}/>
    )
}

export default TempMeterPos