import React,{ useEffect } from "react";
import { getImg } from "../../action/fetch_img";
import { useDispatch, useSelector } from "react-redux";
import './background.scss';

const Background = () => {
  console.log("background")
  
  const dispatch = useDispatch();
  const img = useSelector(state => state.image);
  useEffect(() =>{
    dispatch(getImg);
  },[])

    return (
        <div className="background">
          <div className="background-image" style={{backgroundImage: `url(${img})`}}> 
          </div>
        </div>
    )
}

export default Background;