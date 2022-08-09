import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import product1 from '../assets/img/iphone-se-2020-trang-600x600-600x600.jpg'
import product2 from '../assets/img/iphone-12-mini-do-600x600.jpeg'
import product3 from '../assets/img/iphone-13-pro-max-graphite-600x600.jpg'
import product4 from '../assets/img/iphone-13-mini-pink-1-600x600.jpg'
import { StarFill, StarHalf } from 'react-bootstrap-icons'

export const ProductSection = () => {
    // call api later
    const products = [
        {
            name: 'iphone se 2020',
            imgUrl: product1,
            price: 10.99,
            star: 5
        },
        {
            name: 'iphone 12 mini',
            imgUrl: product2,
            price: 10.99,
            star: 5
        },
        {
            name: 'iphone 13 pro max',
            imgUrl: product3,
            price: 10.99,
            star: 5
        },
        {
            name: 'iphone 13 mini',
            imgUrl: product4,
            price: 10.99,
            star: 5
        }
    ]

    return (
        <section className="products" id="products">
            <Container >
                <h1 className="heading"> our <span>products</span> </h1>
                <Row className="product-items" xl={3} md={2} sm={1} xs={1}>
                    {
                        products.map((product, index) => {
                            return (
                                <Col className='box' key={index}>
                                    <img src={product.imgUrl} alt={product.name} />
                                    <h3>{product.name}</h3>
                                    <div className="price">{product.price}$</div>
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