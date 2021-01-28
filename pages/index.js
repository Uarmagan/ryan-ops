import Header from '../components/header';
import Hero from '../components/hero';
import Features from '../components/features';

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <div className="relative overflow-hidden">
          <Header />
          <main>
            <Hero />
            <Features />
            {/* Testimonial section */}
            <div className="pb-16 bg-gradient-to-r from-teal-500 to-cyan-600 lg:pb-0 lg:z-10 lg:relative">
              <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
                <div className="relative lg:-my-8">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
                  />
                  <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                    <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                      <img
                        className="object-cover lg:h-full lg:w-full"
                        src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                    <blockquote>
                      <div>
                        <svg
                          className="h-12 w-12 text-white opacity-25"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true">
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="mt-6 text-2xl font-medium text-white">
                          DevOps astonishingly enables us to simultaneously
                          improve organizational performance, achieve the goals
                          of all the various functional technology roles, and
                          improve the human condition.
                        </p>
                      </div>
                      <footer className="mt-6">
                        <p className="text-base font-medium text-white">
                          Ryan Jones
                        </p>
                        <p className="text-base font-medium text-cyan-100">
                          Founder of Ryan-Ops
                        </p>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            {/* Blog section */}
            <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
              <div className="relative">
                <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                  <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
                    Learn
                  </h2>
                  <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                    Helpful Resources
                  </p>
                  <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500">
                    Phasellus lorem quam molestie id quisque diam aenean nulla
                    in. Accumsan in quis quis nunc, ullamcorper malesuada.
                    Eleifend condimentum id viverra nulla.
                  </p>
                </div>
                <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
                  <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                      <img
                        className="h-48 w-full object-cover"
                        src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                      />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-cyan-600">
                          <a href="#" className="hover:underline">
                            Article
                          </a>
                        </p>
                        <a href="#" className="block mt-2">
                          <p className="text-xl font-semibold text-gray-900">
                            Boost your conversion rate
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Architecto accusantium praesentium eius, ut
                            atque fuga culpa, similique sequi cum eos quis
                            dolorum.
                          </p>
                        </a>
                      </div>
                      <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                          <a href="#">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            />
                          </a>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            <a href="#" className="hover:underline">
                              Roel Aufderehar
                            </a>
                          </p>
                          <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime="2020-03-16">Mar 16, 2020</time>
                            <span aria-hidden="true">·</span>
                            <span>6 min read</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                      <img
                        className="h-48 w-full object-cover"
                        src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                      />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-cyan-600">
                          <a href="#" className="hover:underline">
                            Video
                          </a>
                        </p>
                        <a href="#" className="block mt-2">
                          <p className="text-xl font-semibold text-gray-900">
                            How to use search engine optimization to drive sales
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Velit facilis asperiores porro quaerat
                            doloribus, eveniet dolore. Adipisci tempora aut
                            inventore optio animi., tempore temporibus quo
                            laudantium.
                          </p>
                        </a>
                      </div>
                      <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                          <a href="#">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            />
                          </a>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            <a href="#" className="hover:underline">
                              Brenna Goyette
                            </a>
                          </p>
                          <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime="2020-03-10">Mar 10, 2020</time>
                            <span aria-hidden="true">·</span>
                            <span>4 min read</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                      <img
                        className="h-48 w-full object-cover"
                        src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                      />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-cyan-600">
                          <a href="#" className="hover:underline">
                            Case Study
                          </a>
                        </p>
                        <a href="#" className="block mt-2">
                          <p className="text-xl font-semibold text-gray-900">
                            Improve your customer experience
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sint harum rerum voluptatem quo recusandae
                            magni placeat saepe molestiae, sed excepturi cumque
                            corporis perferendis hic.
                          </p>
                        </a>
                      </div>
                      <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                          <a href="#">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            />
                          </a>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            <a href="#" className="hover:underline">
                              Daniela Metz
                            </a>
                          </p>
                          <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime="2020-02-12">Feb 12, 2020</time>
                            <span aria-hidden="true">·</span>
                            <span>11 min read</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer className="bg-gray-50" aria-labelledby="footerHeading">
            <div className="max-w-md mx-auto pt-5 px-4 sm:max-w-7xl sm:px-6 lg:pt-5 lg:px-8">
              <div className="mt-12 border-t border-gray-200 py-8">
                <p className="text-base text-gray-400 xl:text-center">
                  © 2020 Ryan-Ops, Inc. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
