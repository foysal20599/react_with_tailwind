import "font-awesome/css/font-awesome.min.css";
const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-slate-800">
      <div className="card max-w-sm p-8 bg-white  rounded-xl shadow-xl space-y-2 sm:flex sm:py-4 sm:space-y-0 sm:space-x-6 dark:bg-slate-700/[.50]">
        <img
          src="/images/foysal.png"
          className="h-24 w-24 mx-auto rounded-full ring-4 ring-green-500 transform hover:scale-105 duration-500"
          alt="foysal ahmed"
        />
        <div className="text-center space-y-1 sm:text-left">
          <div>
            <p className="text-lg text-black font-semibold dark:text-gray-300">Learn with Foysal</p>
            <p className="text-center text-md text-gray-500 font-semibold">Subscribe Now</p>
          </div>
          <button className="btn">
            Visit Now<i className="fa fa-plane fa-1x ml-1"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
