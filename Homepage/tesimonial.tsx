import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
const brand = process.env.NEXT_PUBLIC_BRAND_NAME;
const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Parvinder Kaur',
      // role: 'Legal Consultant',
      content: `I was looking to digitize document signature and was happy to find ${brand} platform, which is best for e-signature. Integration is seamless with the existing applications. I recommend it for all who use e-sign for documents.`,
      rating: 5,
    },
    {
      id: 2,
      name: 'Danish Handa',
      // role: 'Small Business Owner',
      content: `I was happy now that there is no printing,scanning or emailing, just a few tap and it is done. ${brand} is the best application I have used after trying all other similar applications.`,
      rating: 5,
    },
    {
      id: 3,
      name: 'George Williams ',
      // role: 'HR Director',
      content: `Privacy and encryption is the best feature I found in ${brand}. They are commited to it as client and contracts are securely handled.It is trustworthy and convenient.`,
      rating: 4.5,
    },
    {
      id: 4,
      name: 'David Rohilla',
      // role: 'Real Estate Broker',
      content: `Fast onboarding, clear UX, and no hidden catches, exited us. This really fits the pace of a growing business.`,
      rating: 4,
    },
    {
      id: 5,
      name: 'Josheph Ksida',
      // role: 'Creative Director',
      content: `Signing the forms now has become very easy with ${brand}, It feels like using the next generation app.`,
      rating: 5,
    },
    {
      id: 6,
      name: 'Faizal Shah',
      // role: 'Nonprofit Executive',
      content: `I deal with lot of contracts. ${brand} makes it painless—my clients love how smooth it is to use it.`,
      rating: 5,
    }
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar 
        key={i}
        className={`${i < rating ? 'text-warning' : 'text-secondary'} me-1`}
      />
    ));
  };

  return (
    <section className="py-5 bg-light mt-lg-5">
      <Container className="py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3 text-blue">
            Trusted by <span className="text-primary">professionals</span> worldwide
          </h2>
          {/* <p className="lead text-muted">
            Join thousands of satisfied users who streamlined their document workflow with our solution
          </p> */}
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={false}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.testimonial-pagination',
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="h-100">
                <div className="card h-100 border-0 shadow-sm p-4">
                  <div className="card-body d-flex flex-column">
                    <div className="mb-4">
                      <FaQuoteLeft className="text-primary fs-3 mb-3" />
                      <p className="fs-5 text-muted mb-4">{testimonial.content}</p>
                    </div>
                    <div className="mt-auto">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h5 className="mb-1 fw-bold">{testimonial.name}</h5>
                          {/* <p className="text-muted small mb-0">{testimonial.role}</p> */}
                        </div>
                        {/* <div className="d-flex align-items-center">
                          {renderStars(testimonial.rating)}
                          <span className="ms-2 small text-muted">{testimonial.rating.toFixed(1)}</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="testimonial-pagination d-flex justify-content-center mt-4" />

       
      </Container>
    </section>
  );
};

export default TestimonialCarousel;