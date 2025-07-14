import React from 'react'
import PageBanner from '../components/PageBanner'

// const Checkout = () => {
//   return (
//     <>
//     <PageBanner title={"Checkout"}/>
//     </>
//   )
// }

// export default Checkout


const Checkout = () => {
  return (
    <>
    <section>
    <PageBanner title={"Checkout"}/>
        <div className="container flex gap-7 py-15">
          {/* Billing Details */}
          <div className="w-1/2 py-9">
            <h2 className="text-2xl font-bold mb-6">Billing details</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="w-53 border p-3 rounded" />
              <input type="text" placeholder="Last Name" className="w-53 border p-3 rounded" />
              <div className="md:col-span-2">
                <input type="text" placeholder="Company Name (Optional)" className="border p-3 rounded w-full" />
              </div>
              <div className="md:col-span-2">
                <select className="border p-3 rounded w-full">
                  <option>Bangladesh</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <input type="text" placeholder="Street address" className="border p-3 rounded w-full" />
              </div>
              <div className="md:col-span-2">
                <input type="text" placeholder="Town / City" className="border p-3 rounded w-full" />
              </div>
              <div className="md:col-span-2">
                <select className="border p-3 rounded w-full">
                  <option>Western Province</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <input type="text" placeholder="ZIP code" className="border p-3 rounded w-full" />
              </div>
              <div className="md:col-span-2">
                <input type="text" placeholder="Phone" className="border p-3 rounded w-full" />
              </div>
              <div className="md:col-span-2">
                <input type="email" placeholder="Email address" className="border p-3 rounded w-full" />
              </div>
              <div className="md:col-span-2">
                <input type="text" placeholder="Additional information" className="border p-3 rounded w-full" />
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="w-1/2 py-22 px-9">
            <h2 className="text-lg font-semibold mb-4">Product</h2>

            <div className="flex justify-between">
              <p>Asgaard sofa x 1</p>
              <p>Rs. 250,000.00</p>
            </div>

            <div className="flex justify-between py-6">
              <p>Subtotal</p>
              <p>Rs. 250,000.00</p>
            </div>

            <div className="flex justify-between font-bold text-lg mt-2 border-b-1 pb-8">
              <p>Total</p>
              <p className='text-brand'>Rs. 250,000.00</p>
            </div>

            {/* Payment Methods */}
            <div className="space-y-3 pt-6 text-sm text-gray-600 ">
              <div>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="payment" checked readOnly />
                  <span className="font-semibold text-black">Direct Bank Transfer</span>
                </label>
                <p className="mt-1 text-xs text-gray-500">
                  Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                  Your order will not be shipped until the funds have cleared in our account.
                </p>
              </div>
              <div className="text-secondary">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="payment"  />
                  <span>Direct Bank Transfer</span>
                </label>
              </div>
              <div className="text-secondary">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="payment"  />
                  <span>Cash On Delivery</span>
                </label>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              Your personal data will be used to support your experience throughout this website, to manage access to
              your account, and for other purposes described in our <span className="font-semibold">privacy policy</span>.
            </p>

            <button className="px-26 py-4 flex mx-auto  mt-6 border-1 border-black  rounded-2xl hover:bg-black hover:text-white transition">
              Place order
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
