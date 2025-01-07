import UseTitle from "../components/UseTitle";

const New = () => {
  UseTitle("FAQ")
  return (
    <div className="w-9/12 mx-auto pt-20 my-10">
      <div className="bg-[#1E1E2C] text-white collapse collapse-arrow">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          1. What is included in the subscription plans?
        </div>
        <div className="collapse-content">
          <p>
            Each subscription plan offers access to a wide library of movies,
            streaming in different quality (SD, HD, or 4K), and additional
            features like offline downloads, ad-free streaming, and simultaneous
            device support based on the chosen plan. Premium subscribers get
            exclusive content and early access to new releases.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-[#1E1E2C] text-white">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          2. Can I cancel my subscription at any time?
        </div>
        <div className="collapse-content">
          <p>
            Yes! You can cancel your subscription anytime through your account
            settings. Once canceled, you'll still have access until the end of
            the billing cycle.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-[#1E1E2C] text-white">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          3. Do you offer a free trial?
        </div>
        <div className="collapse-content">
          <p>
            Yes, we offer a 7-day free trial for new subscribers. You can
            explore all the features of your selected plan during this period.
            You can cancel before the trial ends to avoid any charges.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-[#1E1E2C] text-white">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          4. How can I change my subscription plan?
        </div>
        <div className="collapse-content">
          <p>
            You can easily upgrade or downgrade your subscription plan in the
            account settings. The changes will be applied immediately, and any
            prorated charges will be adjusted in your next billing cycle.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-[#1E1E2C] text-white">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          5. What payment methods are accepted?
        </div>
        <div className="collapse-content">
          <p>
            We accept all major credit and debit cards, PayPal, and other secure
            payment gateways. For more options, check the payment section during
            checkout.
          </p>
        </div>
      </div>
    </div>
  );
};

export default New;
