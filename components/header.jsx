import React from "react";
import { Settings, UserCircle } from "lucide-react";

function Header() {
  return (
    <div className="flex items-center gap-4">
      <UserCircle className="w-6 h-6 cursor-pointer text-gray-700 hover:text-black" />
      <Settings className="w-5 h-5 cursor-pointer text-gray-700 hover:text-black" />
    </div>
  );
}

export default Header;
