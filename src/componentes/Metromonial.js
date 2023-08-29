import React, { useState, useEffect } from 'react';
import "./Metromonial.css"

const TestimonialCard = ({ image, name, title, organization, testimonial, isActive, position }) => {
  const cardStyle = {
    transform: `translateX(${position * 200}px) scale(${isActive ? 1.2 : 0.8})`,
    zIndex: isActive ? 2 : 1,
  };

  return (
    <div className={`testimonial-card ${isActive ? 'active' : ''}`} style={cardStyle}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{title} - {organization}</p>
      <p>{testimonial}</p>
    </div>
  );
};
const TestimonialList = () => {
  const testimonials = [
    {
             image: "https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg",
             name: "John Doe",
             title: "CEO",
             organization: "ABC Inc.",
             testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac quam vel risus finibus vulputate."
           },
           {
             image: "https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg",
             name: "John Doe",
             title: "CEO",
             organization: "ABC Inc.",
             testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac quam vel risus finibus vulputate."
           },
           {
             image: "https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg",
             name: "John Doe",
             title: "CEO",
             organization: "ABC Inc.",
             testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac quam vel risus finibus vulputate."
           },
           {
             image: "https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg",
             name: "John Doe",
             title: "CEO",
             organization: "ABC Inc.",
             testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac quam vel risus finibus vulputate."
           },
           {
             image: "https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg",
             name: "Jane Smith",
             title: "Designer",
             organization: "Design Co.",
             testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac quam vel risus finibus vulputate."

           }
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Adjust the interval time (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="testimonial-list">
      <div className="testimonial-carousel">
        {testimonials.map((testimonial, index) => {
          const position = (index - activeIndex + testimonials.length) % testimonials.length;
          return (
            <TestimonialCard
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              title={testimonial.title}
              organization={testimonial.organization}
              testimonial={testimonial.testimonial}
              isActive={index === activeIndex}
              position={position}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialList;