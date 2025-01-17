import React from 'react'
import { withRouter } from 'react-router-dom'

function ProductCard(props) {
  const { item } = props

  return (
    <>
      <div className="productCard col-lg-4 col-md-6 col-sm-12" id={item.sid}>
        <div
          className="productCardImg"
          // onClick={() => {
          //   props.history.push('/product/' + item.sid)
          // }}
        >
          <img
            src={`http://localhost:3001/img/` + item.photo}
            alt=""
            onClick={() => {
              props.history.push('/product/' + item.sid)
            }}
          />
        </div>

        {/* <div className="productCardImgHover">
          <img
            src={`http://localhost:3001/img/` + item.photo_hover}
            // src={item.photo_hover}
            alt=""
            onClick={() => {
              props.history.push('/product/' + item.sid)
            }}
          />
        </div> */}

        <p>{item.product_name}</p>
        <p>${item.price}</p>
      </div>
    </>
  )
}

export default withRouter(ProductCard)
