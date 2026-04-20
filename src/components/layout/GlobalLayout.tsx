import { Link, Outlet } from "react-router";
import logo from "@/assets/pushlog-logo.svg";
import { SunIcon } from "lucide-react";
import defalutAvatar from "@/assets/default-avatar.png";
export default function GlobalLayout() {
  return (
    <div className="flex min-h-[100vh] flex-col">
      <header className="h-[64px] border-b">
        <div className="mx-auto flex h-full max-w-[1280px] justify-between px-2">
          <Link to={"/"} className="flex items-center">
            <img src={logo} />
          </Link>
          <div className="flex items-center gap-5">
            <div className="cursor-pointer">
              <SunIcon />
            </div>
            <img className="h-6" src={defalutAvatar} />
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-[1280px] px-2 py-6">
        {/* 페이지 컴포넌트가 렌더링되는 위치 */}
        <Outlet />
      </main>
    </div>
  );
}
