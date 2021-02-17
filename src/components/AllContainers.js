import React from "react"
import Containers from "./Containers"
import Map from "./ContainersMap"
import {connect} from "react-redux"
import ContainerDetails from "./ContainerDetails"
import ReactToPdf from "react-to-pdf"

const AllContainers = (props)=>{
    const ref = React.createRef();
    const options = {
        orientation: 'landscape'
    };
    
        return (
            <div className="allcontainers" ref={ref}>
                {Object.keys(props.containers).length===0 && <div className="allcontainertab"><Containers /></div>}
                {Object.keys(props.containers).length!==0 && <div className="allcontainertab"><ContainerDetails/></div>}
                <div className="maptab"><Map /></div>
                <div>
                <ReactToPdf targetRef={ref} filename="container-stats.pdf" scale={0.8} options={options}>
                    {({toPdf}) => (
                        <button onClick={toPdf} className="pdfbutton">Generate pdf</button>
                    )}
                </ReactToPdf>
            </div>
            </div>
        ) 

    
}
const mapStateToProps = (state)=>{
    return ({
        containers:state.containers
    })
}

export default connect(mapStateToProps)(AllContainers)