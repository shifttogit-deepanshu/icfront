import React from 'react'
import {AzureMap, AzureMapHtmlMarker, AzureMapsProvider} from 'react-azure-maps'
import {AuthenticationType} from 'azure-maps-control'



const DefaultMap = (props) => {
    const option= {
        authOptions: {
            authType: AuthenticationType.subscriptionKey,
            subscriptionKey: 'aMmhMWx0awFcGqoMl-qxVgFTAr834xX_nbwDf3twTEY'
        },
        style: 'grayscale_dark',
        center: [props.lat, props.long],
        zoom: 15,
        language: 'en-US',
        
    }
    return (
    <div style={{height: '500px'}}>
        <AzureMapsProvider>
            <AzureMap options={option} style={{width:'100%'}}>
            <AzureMapHtmlMarker options={{position:[props.lat, props.long],color:"red"}}/>
            </AzureMap>
            
        </AzureMapsProvider>
    </div>

)
    }
export default DefaultMap
                