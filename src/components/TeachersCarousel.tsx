import React from 'react';
import heroImage1 from '@/assets/teacher-hero-1.jpg';
import heroImage2 from '@/assets/teacher-hero-2.jpg';
import heroImage3 from '@/assets/teacher-hero-3.jpg';
import heroImage4 from '@/assets/teacher-hero-4.jpg';
import heroImage5 from '@/assets/teacher-hero-5.jpg';

const TeachersCarousel = () => {
  const slides = [
    {
      id: 1,
      image: heroImage1,
      title: "Happy Teachers' Day",
      subtitle: "Celebrating those who inspire us every day"
    },
    {
      id: 2,
      image: heroImage2,
      title: "Moments of Appreciation",
      subtitle: "Students showing gratitude to their mentors"
    },
    {
      id: 3,
      image: heroImage3,
      title: "Inspiring Learning",
      subtitle: "Teachers making science come alive"
    },
    {
      id: 4,
      image: heroImage4,
      title: "Wisdom Shared",
      subtitle: "Passing knowledge from generation to generation"
    },
    {
      id: 5,
      image: heroImage5,
      title: "Classroom Celebrations",
      subtitle: "Honoring our dedicated educators"
    }
  ];

  return (
    <section className="teachers-carousel">
      <div className="carousel-container">
        {/* Radio inputs for navigation */}
        {slides.map((slide, index) => (
          <input
            key={`radio-${slide.id}`}
            type="radio"
            id={`slide-${slide.id}`}
            name="carousel"
            className="carousel-radio"
            defaultChecked={index === 0}
          />
        ))}

        {/* Main display area */}
        <div className="carousel-main">
          <div className="carousel-track">
            {slides.map((slide) => (
              <div key={`slide-${slide.id}`} className="carousel-slide">
                <figure className="slide-figure">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="slide-image"
                  />
                  <figcaption className="slide-caption">
                    <h2 className="slide-title">{slide.title}</h2>
                    <p className="slide-subtitle">{slide.subtitle}</p>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="carousel-nav">
            {slides.map((slide, index) => (
              <React.Fragment key={`nav-${slide.id}`}>
                {index > 0 && (
                  <label
                    htmlFor={`slide-${slides[index - 1].id}`}
                    className="nav-arrow nav-prev"
                    aria-label="Previous slide"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </label>
                )}
                {index < slides.length - 1 && (
                  <label
                    htmlFor={`slide-${slides[index + 1].id}`}
                    className="nav-arrow nav-next"
                    aria-label="Next slide"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </label>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Thumbnail navigation */}
        <div className="carousel-thumbnails">
          {slides.map((slide) => (
            <label
              key={`thumb-${slide.id}`}
              htmlFor={`slide-${slide.id}`}
              className="thumbnail-item"
            >
              <img
                src={slide.image}
                alt={`Preview of ${slide.title}`}
                className="thumbnail-image"
              />
              <span className="thumbnail-indicator"></span>
            </label>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersCarousel;