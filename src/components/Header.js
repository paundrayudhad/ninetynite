
export default function Header() {
  return (
    <>
  <header className="bg-gradient-to-r from-neutral-900 to-black z-50 w-full fixed top-0">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-teal-600" href="#">
          <h1 className="font-embassy text-3xl text-white text-center">
            Ninetynite
          </h1>
        </a>
      </div>

      {/* <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a className="text-gray-100 transition hover:text-gray-500/75" href="#"> About </a>
            </li>

            <li>
              <a className="text-gray-100 transition hover:text-gray-500/75" href="#"> Careers </a>
            </li>

            <li>
              <a className="text-gray-100 transition hover:text-gray-500/75" href="#"> History </a>
            </li>

            <li>
              <a className="text-gray-100 transition hover:text-gray-500/75" href="#"> Services </a>
            </li>

            <li>
              <a className="text-gray-100 transition hover:text-gray-500/75" href="#"> Projects </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div> */}
    </div>
  </div>
</header>
    </>
  )
}
