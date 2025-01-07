import React from 'react';
import { Link } from 'react-router-dom';

const Section2 = () => {
    return (
        <section className=" py-12">
  <div className="container mx-auto text-center">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h2 className="text-[#FFD700] text-4xl font-bold mb-4">
        Movie of the Week: <span>The Grand Adventure</span>
      </h2>
      <p className="text-gray-500 mb-6">
        Embark on an unforgettable journey filled with mystery, action, and drama. Watch the movie that everyone's talking about.
      </p>
      <div className="flex justify-center space-x-4">
        <Link to="/allmovies"><button className="btn btn-error text-white">Watch Now</button></Link>
        <Link to="/faq"><button className="btn btn-success text-white">Learn More</button></Link>
      </div>
    </div>
  </div>
</section>

    );
};

export default Section2;