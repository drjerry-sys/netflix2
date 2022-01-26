import React, { useState } from 'react';
import './ListItem.scss';
import { PlayArrow, ThumbUpAltOutlined, Add, ThumbDownOutlined } from '@material-ui/icons';
import imgItem from '../../assets/images/bulb_as_dummy_logo.png';

const ListItem = ({ index }) => {
    const [ isHovered, setIsHovered ] = useState(false);
    return ( 
        <div className="listItem" onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} style={{left: isHovered && index * 225 - 50 + index * 2.5}}>
            <img src={imgItem} alt="thumnail" />
            {isHovered && (
                <>
                    <video src={"https://youtu.be/deG25y_r6OY"} autoPlay={true} muted loop ></video>
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className="icon" />
                            <Add className="icon" />
                            <ThumbUpAltOutlined className="icon" />
                            <ThumbDownOutlined className="icon" />
                        </div>
                        <div className="itemInfoTop">
                            <span>1 hr 14 mins </span>
                            <span className="limit">+16</span>
                            <span>1999</span>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi magni maxime, et nisi placeat ipsam quaerat reprehenderit cumque quisquam doloremque praesentium harum.
                        </div>
                        <div className="genre">Action</div>
                    </div>
                </>)
            }
        </div>
     );
}
 
export default ListItem;
