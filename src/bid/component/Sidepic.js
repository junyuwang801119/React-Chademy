import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { withRouter, useParams } from 'react-router-dom'

function Sidepic(props) {
  const{setChair,setProductpic,item} = props
  return (
    <>
              <div className="pic">
                <img 
                onClick={()=>{setChair(`http://localhost:3000/uploads/${item}`)}}
                src={`http://localhost:3000/uploads/${item}`}/>
              </div>
        
   
    </>
  )
}

export default Sidepic