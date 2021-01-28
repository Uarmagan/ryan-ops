export default function Header() {
  return (
    <header className="relative">
      <div className="bg-gray-900 pt-6">
        <nav
          className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
          aria-label="Global">
          <div className="flex items-center flex-1">
            <div className="flex">
              <a href="#">
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-teal-200-cyan-400.svg"
                />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
