import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/lib/redux/hooks";
import { useLogout } from "@/features/auth/components/useLogout";

function UserDropdown() {
  const authUser = useAppSelector((state) => state.auth);
  const { handleSubmit } = useLogout();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={authUser?.avatarUrl} alt={authUser.name} />
            <AvatarFallback className="bg-slate-200 text-slate-700">
              {authUser?.name
                ?.split(" ")
                ?.map((n) => n[0])
                ?.join("")
                ?.toUpperCase() || ""}
            </AvatarFallback>
          </Avatar>
          <span>{authUser.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="p-2">
          <p className="font-medium">{authUser.name}</p>
          <p className="text-sm text-slate-500">{authUser.email}</p>
          <p className="text-sm text-slate-500">ID: {authUser.studentId}</p>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <User className="mr-2 h-4 w-4" />
          <span>My Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleSubmit}
          className="cursor-pointer text-red-500"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserDropdown;
