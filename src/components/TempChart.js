import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import {connect} from "react-redux"
// const data = [{Time: 100, Temperature: 400, pv: 2400, amt: 2400}, {Time: 200, Temperature: 500, pv: 2000, amt: 200},{Time: 250, Temperature: 400, pv: 2400, amt: 2400},{Time: 400, Temperature: 400, pv: 2400, amt: 2400}];

const TempChart =(props) =>{
    const data = props.containers
    console.log("the data",data)
    return (<LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="temp" stroke="#8884d8" isAnimationActive={false}/>
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="_id" scale="time" allowDataOverflow={true}/>
    <YAxis />
    <Tooltip/>
  </LineChart>
)};
const mapStateToProps = (state)=>({
    containers:state.containers
})
export default connect(mapStateToProps)(TempChart)