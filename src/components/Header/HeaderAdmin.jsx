import DropdowUser from "./DropdowUser";

const HeaderAdmin = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-tertiary drop-shadow-1">
      <div className="flex flex-grow items-center lg:justify-end justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="z-99999 block rounded-sm  bg-white p-1.5 shadow-sm lg:hidden"
          >
            <span className="relative block h-6 w-6">
              {/* Line 1 */}
              <span
                className={`absolute top-0 left-0 block h-0.5 w-full bg-black rounded transition-all duration-300 ease-in-out  ${
                  sidebarOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              ></span>
              {/* Line 2 */}
              <span
                className={`absolute top-2.5 left-0 block h-0.5 w-full bg-black rounded transition-all duration-300 ease-in-out  ${
                  sidebarOpen ? "opacity-0" : ""
                }`}
              ></span>
              {/* Line 3 */}
              <span
                className={`absolute top-5 left-0 block h-0.5 w-full bg-black rounded transition-all duration-300 ease-in-out  ${
                  sidebarOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              ></span>
            </span>
          </button>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* <!-- Dark Mode Toggler --> */}
            {/* <DarkModeSwitcher /> */}
            {/* <!-- Dark Mode Toggler --> */}
          </ul>

          {/* <!-- User Area --> */}
          <DropdowUser />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default HeaderAdmin;
