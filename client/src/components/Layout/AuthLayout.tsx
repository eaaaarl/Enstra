import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <img
                src="https://res.cloudinary.com/dzl4yhak4/image/upload/v1746282807/zpkie8yyjd2c4zlz58vo.jpg"
                height={200}
                width={200}
              />
            </div>
            <span className="uppercase text-blue-600 font-bold text-2xl border-b-3 border-b-blue-500 ">
              ENSTRA.
            </span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="https://res.cloudinary.com/dzl4yhak4/image/upload/v1746282676/bijns20bwjyx3xujk8ly.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}

export default AuthLayout;
