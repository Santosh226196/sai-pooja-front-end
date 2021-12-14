import React from 'react'
import {Row ,Col} from 'react-bootstrap'
import product from '../product.js'
import Product from '../component/Product'

const HomeScreen = () => {
    return (
        <>
           <h1>Latest pooja items</h1> 
           <Row>
            {product.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4}>
                <Product product={product}></Product>
                </Col>
            ))}
           </Row>
        </>
    )
}

export default HomeScreen
