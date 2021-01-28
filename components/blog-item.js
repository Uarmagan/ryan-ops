export default function BlogItem({ image, name, type, desc, date, readTime }) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={image} />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-cyan-600">
            <a href="#" className="hover:underline">
              {type}
            </a>
          </p>
          <a href="#" className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">{name}</p>
            <p className="mt-3 text-base text-gray-500">{desc}</p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex space-x-1 text-sm text-gray-500">
            <time>{date}</time>
            <span aria-hidden="true">·</span>
            <span>{readTime} min read</span>
          </div>
        </div>
      </div>
    </div>
  );
}
