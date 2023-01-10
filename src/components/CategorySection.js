import { Col, Container, Row } from "react-bootstrap"
import cate1 from "../assets/img/11-green.jpg"
import cate2 from "../assets/img/12-purple.jpg"
import cate3 from "../assets/img/13-starlight.jpg"
import cate4 from "../assets/img/se-red.jpg"

export const CategorySection = () => {
    // Call api later
    const categories = [
        { imgUrl: cate1, name: "iphone 11 series", status: "upto 45% off" },
        { imgUrl: cate2, name: "iphone 12 series", status: "upto 45% off" },
        { imgUrl: cate3, name: "iphone 13 series", status: "upto 45% off" },
        { imgUrl: cate4, name: "iphone se series", status: "upto 45% off" }
    ]


    return (
        <section className="categories" id="categories">
            <Container>
                <h1 className="heading"> product <span>categories</span> </h1>
                <Row className="box-container">
                    {
                        categories.map((category, index) => {
                            return (
                                <Col className="box" key={index}>
                                    <img src={category.imgUrl} alt="" />
                                    <h3>{category.name}</h3>
                                    <p>{category.status}</p>
                                    <a href="#" className="pri-btn">shop now</a>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}