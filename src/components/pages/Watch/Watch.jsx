import React from 'react';
import './Watch.scss';
import { ArrowBackOutlined } from '@material-ui/icons';

const Watch = () => {
    return ( 
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined  className="icon"/>
                <span>Home</span>
            </div>
            <video src={'https://youtu.be/deG25y_r6OY'} className="video" autoPlay progress controls />
        </div>
     );
}
 
export default Watch;
