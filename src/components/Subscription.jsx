import React from 'react';

const Subscription = () => {
    return (
      <div className="bg-[#1E1E2C] text-white py-10 px-5">
      <h2 className="text-3xl font-bold text-center mb-8">Choose Your Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center mx-auto w-11/12">
          {/* Basic Plan */}
          <div className="card  bg-[#292940] shadow-lg hover:scale-105 transition-transform">
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
          <div className="card  bg-[#37375A] shadow-lg hover:scale-105 transition-transform border-2 border-yellow-300">
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
          <div className="card  bg-[#292940] shadow-lg hover:scale-105 transition-transform">
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

          {/* Lifetime Plan */}
          <div className="card  bg-[#37375A] shadow-lg hover:scale-105 transition-transform border-2 border-yellow-500">
              <div className="card-body">
                  <h3 className="text-2xl font-semibold text-yellow-300">Lifetime Plan</h3>
                  <p className="mt-3">Pay once and enjoy unlimited access forever.</p>
                  <ul className="mt-4 space-y-2">
                      <li>✔ Ultra HD (4K) streaming</li>
                      <li>✔ Access to full library and premium content</li>
                      <li>✔ Unlimited devices simultaneously</li>
                      <li>✔ Offline downloads</li>
                      <li>✔ Exclusive lifetime perks</li>
                      <li>✔ No ads ever</li>
                  </ul>
                  <p className="text-4xl font-bold mt-6">$299<span className="text-lg">/one-time</span></p>
                  <button className="btn btn-primary mt-4 w-full">Subscribe</button>
              </div>
          </div>
      </div>
  </div>
    );
};

export default Subscription;