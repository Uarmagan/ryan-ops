import Header from '../components/header';
import Hero from '../components/hero';
import Features from '../components/features';
import Testimonial from '../components/testimonial';
import Blog from '../components/blog';

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <div className="relative overflow-hidden">
          <Header />
          <main>
            <Hero />
            <Features />
            <Testimonial />
            <Blog />
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
