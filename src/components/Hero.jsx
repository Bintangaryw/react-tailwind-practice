import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="uppercase text-[#00df9a] font-bold text-2xl md:text-4xl p-2 ">Growing with data analytics</p>
        <h1 className="md:text-6xl text-4xl font-bold p-2">Grow with data.</h1>
        <div>
          <p className="uppercase font-bold pt-1 text-xl md:text-4xl ">
            Fast flexible financing for <Typed strings={["BTB", "BTC", "Sass"]} typeSpeed={120} backSpeed={60} loop />
          </p>
        </div>
        <div className="text-medium">
          <p className="pt-1 text-gray-600 text-2xl font-bold py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, alias.</p>
          <button className="bg-[#00df9a] hover:bg-[#0c3125] hover:text-[#00df9a] duration-500 w-[200px] rounded-md py-2 mx-auto text-black">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
// max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center
// h-screen w-full flex flex-col justify-center text-center
