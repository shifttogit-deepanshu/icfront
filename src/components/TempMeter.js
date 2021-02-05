import React from "react"
import { RadialBarChart, RadialBar,Tooltip } from 'recharts';
const TempMeter = (props)=>{
    
        
                                  
      return (
          
        
        <RadialBarChart 
        width={730} 
        height={250} 
        innerRadius="10%" 
        outerRadius="100%" 
        data={props.data} 
        startAngle={props.startAngle} 
        endAngle={props.endAngle}
      >
        <RadialBar label={{ fill: 'white', position: 'insideStart' }} dataKey='temp' />
        <Tooltip />
      </RadialBarChart>)
}


export default TempMeter