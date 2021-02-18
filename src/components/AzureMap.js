import React from 'react'
import {AzureMap, AzureMapHtmlMarker, AzureMapsProvider} from 'react-azure-maps'
import {AuthenticationType} from 'azure-maps-control'
import moment from "moment"



const DefaultMap = (props) => {
    // console.log(Number(props.containers[0].lat))
    if(props.alldata){
        console.log("haha" + props.alldata[0])
    }
    const option= {
        authOptions: {
            authType: AuthenticationType.subscriptionKey,
            subscriptionKey: 'aMmhMWx0awFcGqoMl-qxVgFTAr834xX_nbwDf3twTEY'
        },
        style: 'grayscale_dark',
        center: [Number(props.containers[0].lat), Number(props.containers[0].long)],
        zoom: 1,
        language: 'en-US',
        
    }
    return (
        
        <AzureMapsProvider>
            <AzureMap options={option} className="azure-maps">
            {props.containers.map((container)=><AzureMapHtmlMarker key={container._id} options={{position:[Number(container.long), Number(container.lat)],color:"rgba(42, 187, 155, 1)",text:"<p style='color:rgba(42, 187, 155, 1)'>" + container._id + "<p>",secondaryColor:"white"}}/>)}
            {props.alldata && props.alldata.map((allcontainer)=><AzureMapHtmlMarker key={allcontainer._id} options={{position:[Number(allcontainer.long),Number(allcontainer.lat)],text:"<p style='color:rgba(42, 187, 155, 1)'>" + moment(allcontainer._id ).format("Do MMM YYYY , HH:mm:ss:SS") + "<p>",secondaryColor:"white"}} markerContent={<div className="map-point"></div>} />)}
            </AzureMap>
            
        </AzureMapsProvider>


)
    }
export default DefaultMap
                