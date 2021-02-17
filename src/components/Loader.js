import React from "react"
import { SpinnerCircular } from 'spinners-react';

const Loader = ()=> (
    <div className="loader">
        <div><SpinnerCircular size={100} thickness={200} color="rgba(42, 187, 155, 1)" secondaryColor="white" speed={150}/></div>
    </div>
    );

export default Loader