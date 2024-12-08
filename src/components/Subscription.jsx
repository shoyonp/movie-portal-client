import React from 'react';

const Subscription = () => {
    return (
        <div className="bg-[#1E1E2C] text-white py-10 px-5">
      <h2 className="text-3xl font-bold text-center mb-8">Choose Your Plan</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
        {/* Basic Plan */}
        <div className="card w-80 bg-[#292940] shadow-lg hover:scale-105 transition-transform">
          <div className="card-body">
            <h3 className="text-2xl font-semibold text-yellow-300">Basic Plan</h3>
            <p className="mt-3">Perfect for casual viewers with essential features.</p>
            <ul className="mt-4 space-y-2">
              <li>✔ SD streaming quality</li>
              <li>✔ Access to full library</li>
              <li>✔ 1 device at a time</li>
              <li>✔ Limited ads</li>
            </ul>
            <p className="text-4xl font-bold mt-6">$5<span className="text-lg">/month</span></p>
            <button className="btn btn-primary mt-4 w-full">Subscribe</button>
          </div>
        </div>

        {/* Standard Plan */}
        <div className="card w-80 bg-[#37375A] shadow-lg hover:scale-105 transition-transform border-2 border-yellow-300">
          <div className="card-body">
            <h3 className="text-2xl font-semibold text-yellow-300">Standard Plan</h3>
            <p className="mt-3">Great for families or frequent movie lovers.</p>
            <ul className="mt-4 space-y-2">
              <li>✔ HD streaming quality</li>
              <li>✔ Access to full library</li>
              <li>✔ 2 devices simultaneously</li>
              <li>✔ Ad-free experience</li>
              <li>✔ Personalized recommendations</li>
            </ul>
            <p className="text-4xl font-bold mt-6">$10<span className="text-lg">/month</span></p>
            <button className="btn btn-primary mt-4 w-full">Subscribe</button>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="card w-80 bg-[#292940] shadow-lg hover:scale-105 transition-transform">
          <div className="card-body">
            <h3 className="text-2xl font-semibold text-yellow-300">Premium Plan</h3>
            <p className="mt-3">The ultimate experience with all features unlocked.</p>
            <ul className="mt-4 space-y-2">
              <li>✔ Ultra HD (4K) streaming</li>
              <li>✔ Access to all premium content</li>
              <li>✔ 4 devices simultaneously</li>
              <li>✔ Offline downloads</li>
              <li>✔ Early access to new releases</li>
              <li>✔ Bonus exclusive content</li>
            </ul>
            <p className="text-4xl font-bold mt-6">$15<span className="text-lg">/month</span></p>
            <button className="btn btn-primary mt-4 w-full">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Subscription;