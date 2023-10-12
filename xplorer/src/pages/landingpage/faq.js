import React from "react";
import { useState } from "react";

const Faq = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  const toggleFaq = (faqNumber) => {
    switch (faqNumber) {
      case 1:
        setIsOpen1(!isOpen1);
        break;
      case 2:
        setIsOpen2(!isOpen2);
        break;
      case 3:
        setIsOpen3(!isOpen3);
        break;
      case 4:
        setIsOpen4(!isOpen4);
        break;
      case 5:
        setIsOpen5(!isOpen5);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900 m-12">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
            FAQ's
          </h1>

          <hr className="my-6 border-gray-200 dark:border-gray-700" />

          <div>
            <div>
              <button
                className="flex items-center focus:outline-none"
                onClick={() => toggleFaq(1)}
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 12H4"
                  ></path>
                </svg>

                <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
                  How long till delivery ?
                </h1>
              </button>

              {isOpen1 && (
                <div className="flex mt-8 md:mx-10">
                  <span className="border border-blue-500"></span>

                  <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                    Delivery takes upto 3 working days before arrival. Please if
                    good is not received after specified time, allow up to a
                    week before laying your complaint to our Online Customer
                    Support.
                  </p>
                </div>
              )}
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />

            <div>
              <button className="flex items-center focus:outline-none  onClick={() => toggleFaq(2)}">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-6 h-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>

                <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
                  Can I request for a refund after goods has been delivered ?
                </h1>
              </button>

              {isOpen2 && (
                <div className="flex mt-8 md:mx-10">
                  <span className="border border-blue-500"></span>

                  <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni, eum quae. Harum officiis reprehenderit ex quia
                    ducimus minima id provident molestias optio nam vel, quidem
                    iure voluptatem, repellat et ipsa.
                  </p>
                </div>
              )}
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />

            {}
            <div>
              <button className="flex items-center focus:outline-none  onClick={() => toggleFaq(3)}">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-6 h-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>

                <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
                  What are your opening hours ?
                </h1>
              </button>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />

            <div>
              <button className="flex items-center focus:outline-none  onClick={() => toggleFaq(4)}">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-6 h-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>

                <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
                  How to cancel Order ?
                </h1>
              </button>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />

            <div>
              <button className="flex items-center focus:outline-none  onClick={() => toggleFaq(5)}">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-6 h-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>

                <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
                  I can't login to my account ?
                </h1>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
