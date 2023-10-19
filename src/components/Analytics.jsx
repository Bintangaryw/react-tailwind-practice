import laptop from "../assets/img/laptop.jpg";

const Analytics = () => {
  return (
    <>
      <div className=" w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className="w-[500px] my-4 mx-auto md:w-[700px]" src={laptop} alt="" />
          <div className="flex flex-col justify-center">
            <p className="font-bold text-[#00df9a]">DATA ANALYTICS DASHBOARD</p>
            <p className="font-bold text-2xl my-2 md:text-4xl">Manage Data Analytics Centrally</p>
            <p className="py-2 pb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id pariatur accusamus ut recusandae tenetur minima consequatur aperiam libero unde maxime ab, suscipit aut, esse doloribus quisquam exercitationem, voluptatum quos
              natus.
            </p>
            <button className="bg-black hover:bg-[#0c3125] hover:text-[#00df9a] duration-500 w-[200px] rounded-md py-2 mx-auto md:mx-0 text-[white]">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
