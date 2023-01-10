import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { StarFill, StarHalf } from 'react-bootstrap-icons';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const ProductSection = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const res = await axios.get('http://localhost:8800/products');
                setProducts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllProducts();
    }, [])


    return (
        <section className="products" id="products">
            <Container >
                <h1 className="heading"> our <span>products</span> </h1>
                <Row className="product-items" xl={3} md={2} sm={1} xs={1}>
                    {
                        products.map((product) => {
                            return (
                                <Col className='box' key={product.id}>
                                    <img src={product.cover} alt={product.name} />
                                    <h3>{product.name}</h3>
                                    <div className="price">{`${product.minp} - ${product.maxp}$`}</div>
                                    <div className="stars">
                                        <StarFill />
                                        <StarFill />
                                        <StarFill />
                                        <StarFill />
                                        <StarHalf />
                                    </div>
                                    <a href='#' className="pri-btn">add to cart</a>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>

    )
}