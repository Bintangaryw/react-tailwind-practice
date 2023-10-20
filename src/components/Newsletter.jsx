const Newsletter = () => {
  return (
    <div className="w-full py-16 px-4 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <p className="text-3xl font-bold my-2 md:text-4xl sm:text-3xl">Want tips & tricks to optimize your flow?</p>
          <p className="text-[18px] my-2 ">Sign up to our newsletter and stay up to date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input type="text" className="p-2 my-3 w-full rounded-md text-black md:mx-2 sm:mx-2" placeholder="your email here" />
            <button className="bg-[#00df9a] w-[200px] py-2 rounded-md mx-auto hover:bg-[#0c3125] hover:text-[#00df9a] duration-500">Notify me</button>
          </div>
          <p className="py-2">
            We care about the protection of your data. Read our{" "}
            <span className="text-[#00df9a]">
              <a href="">Privacy Policy.</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
