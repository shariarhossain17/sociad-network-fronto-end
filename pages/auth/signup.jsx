import { useForm } from "react-hook-form";
import { CiCircleRemove } from "react-icons/ci";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  console.log();
  return (
    <>
      <div className="w-[350px] mx-auto border border-gray-400 py-6 px-5 mt-[150px]">
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

          <input type="submit" />
        </form>
      </div>
    </>
  );
};

// className=""

export default SignUp;
