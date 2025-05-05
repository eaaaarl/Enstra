import UserDropdown from "./User";

function Nav() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src="https://res.cloudinary.com/dzl4yhak4/image/upload/v1746282807/zpkie8yyjd2c4zlz58vo.jpg"
            className="h-12 w-12 rounded-full"
          />
          <span className="hidden sm:inline font-semibold">
            North Eastern Mindanao State University - Lianga Campus
          </span>
          <span className="inline sm:hidden font-semibold">
            NEMSU-Lianga Campus
          </span>
        </div>

        <UserDropdown />
      </div>
    </header>
  );
}

export default Nav;
