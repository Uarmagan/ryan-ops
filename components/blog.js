import BlogItem from '../components/blog-item';
import { blogData } from '../data/blog';

export default function Blog() {
  return (
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
            Learn more on the best practices and subject master knowledge from
            Ryan Ops through our detailed and educational posts.
          </p>
        </div>
        <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
          {blogData.map((data) => (
            <BlogItem key={data.name} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
}
