import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import banner1 from '../assets/img/banner.jpg';
import banner2 from '../assets/img/banner.jpg';
import banner3 from '../assets/img/banner.jpg';

export const HomeSection = () => {
    const slideData = [
        {
            title: 'banner1',
            imgUrl: banner1,
        },
        {
            title: 'banner2',
            imgUrl: banner2,
        },
        {
            title: 'banner3',
            imgUrl: banner3,
        },
    ]


    return (
        // <section className="home" id="home">
        //     <div className="content">
        //         <h3><span>iphone 13 series</span></h3>
        //         <p>Explore new Powerful model of Iphone</p>
        //         <a href="#" className="pri-btn">shop now</a>
        //     </div>
        // </section>
        <Carousel className='home' interval={2000}>
            {
                slideData.map((slide, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <img
                                className="w-100"
                                src={slide.imgUrl}
                                alt={slide.title}
                            />
                            <Carousel.Caption>
                                <div className='content'>
                                    <h3><span>iphone 13 series</span></h3>
                                    <p>Explore new Powerful model of Iphone</p>
                                    <a href="#" className="pri-btn">shop now</a>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>

    )
}