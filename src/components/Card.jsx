import single from "../assets/img/single.png";
import double from "../assets/img/double.png";
import triple from "../assets/img/triple.png";

const Card = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full border  flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 hover:shadow-xl">
          <img src={single} className="w-20 mx-auto mt-[-3rem] bg-white" />
          <h2 className=" text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center font-bold text-4xl">$149</p>
          <div className="text-center font-medium ">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] py-2 rounded-md mx-auto hover:bg-[#0c3125] hover:text-[#00df9a] duration-500 my-5">Start Trial</button>
        </div>
        <div className="w-full border bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 hover:shadow-xl">
          <img src={double} className="w-20 mx-auto mt-[-3rem] bg-transparent" />
          <h2 className=" text-2xl font-bold text-center py-8">Partnership</h2>
          <p className="text-center font-bold text-4xl">$179</p>
          <div className="text-center font-medium ">
            <p className="py-2 border-b mx-8 mt-8">750 GB Storage</p>
            <p className="py-2 border-b mx-8">2 Granted Users</p>
            <p className="py-2 border-b mx-8">Send up to 5 GB</p>
          </div>
          <button className="bg-black hover:bg-[#0c3125] hover:text-[#00df9a] duration-500 w-[200px] rounded-md py-2 mx-auto text-[white] my-5">Start Trial</button>
        </div>
        <div className="w-full border  flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 hover:shadow-xl">
          <img src={triple} className="w-20 mx-auto mt-[-3rem] bg-white" />
          <h2 className=" text-2xl font-bold text-center py-8">Triple User</h2>
          <p className="text-center font-bold text-4xl">$199</p>
          <div className="text-center font-medium ">
            <p className="py-2 border-b mx-8 mt-8">1000 GB Storage</p>
            <p className="py-2 border-b mx-8">3 Granted Users</p>
            <p className="py-2 border-b mx-8">Send up to 5 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] py-2 rounded-md mx-auto hover:bg-[#0c3125] hover:text-[#00df9a] duration-500 my-5">Start Trial</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
