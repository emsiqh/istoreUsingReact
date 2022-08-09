import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// images import
import feature1 from '../assets/img/feature-img-1.png'
import feature2 from '../assets/img/feature-img-2.png'
import feature3 from '../assets/img/feature-img-3.png'


export const FeatureSection = () => {
    const features = [
        {
            name: 'various model',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!',
            imgUrl: feature1
        },
        {
            name: 'Free Delivery',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!',
            imgUrl: feature2
        },
        {
            name: 'Easy Payments',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!',
            imgUrl: feature3
        }
    ]

    return (
        <section className="features" id="features">
            <Container>
                <h1 className="heading">our <span>features</span></h1>
                <Row xl={3} md={2} sm={1} xs={1}>
                    {
                        features.map((feature, index) => {
                            return (
                                <Col className='box' key={index} >
                                    <img src={feature.imgUrl} alt={`${feature.name}`} />
                                    <h3>{feature.name}</h3>
                                    <p>{feature.description}</p>
                                    <a href='#' className='btn'>read more</a>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>

        </section>
    )
}