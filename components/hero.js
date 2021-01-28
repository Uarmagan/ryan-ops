export default function Hero() {
    return (
        <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                        <div className="lg:py-24">
                            <h1 className="text-white text-3xl italic font-extrabold">
                                Ryan-Ops
                            </h1>
                            <h1 className="mt-2 text-4xl tracking-tight font-extrabold text-white sm:mt-3 sm:text-6xl lg:mt-4 xl:text-6xl">
                                <span className="block">Ryan Jones</span>
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 block">
                                    As A Service
                                </span>
                            </h1>
                            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                Ryan can help your team use Docker to build,
                                network, secure, and manage containers and from
                                development to production.
                            </p>
                            <div className="mt-10 sm:mt-12">
                                <form
                                    action="#"
                                    className="sm:max-w-xl sm:mx-auto lg:mx-0">
                                    <div className="sm:flex">
                                        <div className="min-w-0 flex-1">
                                            <label
                                                htmlFor="email"
                                                className="sr-only">
                                                Email address
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                placeholder="Enter your email"
                                                className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                                            />
                                        </div>
                                        <div className="mt-3 sm:mt-0 sm:ml-3">
                                            <button
                                                type="submit"
                                                className="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900">
                                                Let's Talk
                                            </button>
                                        </div>
                                    </div>
                                    <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                                        Get a free consultation that includes a
                                        devops and infrastructure audit!
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                            <img
                                className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
