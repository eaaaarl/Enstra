import { School } from "lucide-react";
import UserDropdown from "./User";

function Nav() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <School className="h-6 w-6 text-slate-700" />
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
