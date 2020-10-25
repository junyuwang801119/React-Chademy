import React, { useState, useEffect } from 'react'
import ProductFirst from '../components/ProductFirst'
import { withRouter, useParams } from 'react-router-dom'

import '../styles/product.css'

function Product(props) {
  const [product, setProduct] = useState([])

  let { sid } = useParams()
  console.log('sid' + sid)

  async function getItemFromSQL() {
    const url = 'http://localhost:3001/man_product/reactitem/' + sid

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    // const response = await fetch(request).then((v) => console.log(v))
    const response = await fetch(request)
    const data = await response.json()

    console.log('response' + response) // [object Response]
    console.log('data' + data) // [object Object]

    setProduct(data.slice(0))
  }

  useEffect(() => {
    getItemFromSQL()
  }, [])

  return (
    <>
      {product.map((item, index) => {
        return <ProductFirst key={index} item={item} product={product} />
      })}
    </>
  )
}

export default Product
