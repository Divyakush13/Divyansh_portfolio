import React from 'react';
import FeedbackCard from './FeedbackCard';

const App = () => {
  const feedbackData = [
    {
      profileImage: 'path_to_image1.jpg',
      name: 'John Doe',
      position: 'Product Manager',
      feedback: 'Great experience working with this team!',
      rating: 5,
    },
    {
      profileImage: 'path_to_image2.jpg',
      name: 'Jane Smith',
      position: 'Designer',
      feedback: 'Highly recommended. Their work is exceptional.',
      rating: 4,
    },
    // Add more feedback data objects here
  ];

  return (
    <div className="app">
      <h1>Customer Feedback</h1>
      {feedbackData.map((feedback, index) => (
        <FeedbackCard key={index} {...feedback} />
      ))}
    </div>
  );
};

export default App;
