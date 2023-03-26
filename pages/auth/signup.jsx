import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CiCircleRemove } from "react-icons/ci";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const SignUp = () => {
  const [userData, setUserData] = useState({});
  const [passwordShown, setPasswordShown] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  watch((data) => setUserData(data));
  const onSubmit = (data) => console.log(data);

  const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <>
      <div className="w-[350px] mx-auto border border-gray-400 py-6 px-5 mt-[130px]">
        <div className="mb-4 ">
          <h1 className="text-[26px] italic font-sans font-bold text-center text-[#262626]">
            Medium Share
          </h1>

          <p className="text-center text-[20px] font-[500] text-gray-400 leading-6">
            Sign up to see photos and videos from your friends.
          </p>
        </div>

        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <div className="mx-auto relative w-[250px]">
            <input
              className="outline-none border border-gray-400 bg-[#fafafa] w-[250px] py-1 pl-2 pr-7 rounded-sm  text-gray-500 relative text-[14px]"
              {...register("email", {
                required: {
                  value: true,
                  message: "required",
                },

                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "provide your email",
                },
              })}
              placeholder="Enter your email"
              autoComplete="off"
            />

            <div className="absolute right-0 bottom-[4px]">
              {errors?.email?.type === "required" ||
              errors?.email?.type === "pattern" ? (
                <CiCircleRemove size={26} className="text-red-600 font-bold" />
              ) : null}

              {pattern.test(watch("email")) && (
                <IoCheckmarkDoneCircleOutline
                  size={26}
                  className="text-gray-600"
                />
              )}
            </div>
          </div>
          <div className="mx-auto relative w-[250px] mt-3">
            <input
              className="outline-none border border-gray-400 bg-[#fafafa] w-[250px] py-1 pl-2 pr-7 rounded-sm  text-gray-500 relative text-[14px]"
              {...register("fullName", {
                required: {
                  value: true,
                  message: "required",
                },
              })}
              placeholder="Full Name"
              autoComplete="off"
            />

            <div className="absolute right-0 bottom-[4px]">
              {errors?.fullName?.type === "required" && (
                <CiCircleRemove size={26} className="text-red-600 font-bold" />
              )}

              {userData?.fullName && (
                <IoCheckmarkDoneCircleOutline
                  size={26}
                  className="text-gray-600"
                />
              )}
            </div>
          </div>
          <div className="mx-auto relative w-[250px] mt-3">
            <input
              className="outline-none border border-gray-400 bg-[#fafafa] w-[250px] py-1 pl-2 pr-7 rounded-sm  text-gray-500 relative text-[14px]"
              {...register("userName", {
                required: {
                  value: true,
                  message: "required",
                },
              })}
              placeholder="Username"
              autoComplete="off"
            />

            <div className="absolute right-0 bottom-[4px]">
              {errors?.userName?.type === "required" && (
                <CiCircleRemove size={26} className="text-red-600 font-bold" />
              )}

              {userData?.userName && (
                <IoCheckmarkDoneCircleOutline
                  size={26}
                  className="text-gray-600"
                />
              )}
            </div>
          </div>
          <div className="mx-auto relative w-[250px] mt-3">
            <input
              className="outline-none border border-gray-400 bg-[#fafafa] w-[250px] py-1 pl-2 pr-20 rounded-sm  text-gray-500 relative text-[14px]"
              {...register("password", {
                required: {
                  value: true,
                  message: "required",
                },
              })}
              placeholder="password"
              autoComplete="off"
              type={passwordShown ? "text" : "password"}
            />

            <div className={`absolute right-0 bottom-[4px] ${userData?.password && "flex items-center px-2"}`}>
              <div>
                {errors?.password?.type === "required" && (
                  <CiCircleRemove
                    size={26}
                    className="text-red-600 font-bold"
                  />
                )}

                {userData?.password && (
                  <IoCheckmarkDoneCircleOutline
                    size={26}
                    className="text-gray-600"
                  />
                )}
              </div>
              {userData?.password && (
                <div
                  className="cursor-pointer text-gray-800 font-[500] hover:text-gray-500"
                  onClick={togglePassword}
                >
                  {!passwordShown ? "Show" : "Hide"}
                </div>
              )}
            </div>
          </div>
          <div className="text-center text-gray-400 text-[12px] px-5 mt-4">
            <p className="leading-4">
              People who use our service may have uploaded your contact
              information to Medium Share.{" "}
              <Link className="text-blue-900 text-[13px]" href="/learn-more">
                Learn More
              </Link>
            </p>
            <p className="leading-4 mt-2">
              By signing up, you agree to our{" "}
              <Link className="text-blue-900 text-[12px]" href="/terms">
                Terms
              </Link>{" "}
              ,
              <Link
                className="text-blue-900 text-[12px]"
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>{" "}
              , and
              <Link
                className="text-blue-900 text-[12px] ml-1"
                href="/cookie-policy"
              >
                Cookies Policy
              </Link>{" "}
              ,
            </p>
          </div>

          <button
            type="submit"
            className="mt-4 bg-[#4cb5f9] text-white font-[600] text-[16px]  py-1 rounded-md w-[270px] mx-auto"
          >
            Sign up
          </button>
        </form>
      </div>
    </>
  );
};

// className=""

export default SignUp;
