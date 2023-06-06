import "font-awesome/css/font-awesome.min.css";
const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="card max-w-sm mx-auto p-8 bg-white rounded-xl shadow-xl space-y-2 sm:flex sm:py-4 sm:space-y-0 sm:space-x-6">
        {/* <Image src="/images/logo.webp" className="" width={200}
        height={200}
        /> */}
        <img
          src="/images/foysal.png"
          className="h-24 w-24 mx-auto rounded-full ring-4 ring-green-400 sm:mx-0 sm:flex-shrink-0 transform hover:scale-105 duration-500"
          alt="Image name"
        />
        <div className="text-center space-y-2 sm:text-left">
          <div>
            <p className="text-lg text-black font-semibold">Learn with Foysal</p>
            <p className="text-gray-500 font-medium">Subscribe Now</p>
          </div>
          <button className="px-10 py-1 hover:bg-purple-800 transform hover:scale-105 duration-500  hover:text-white border rounded-full border-purple-300 text-purple-500 text-sm font-semibold hover:border-transparent focus:outline-none">
            Visit Now <i className="fa fa-plane fa-1x"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
