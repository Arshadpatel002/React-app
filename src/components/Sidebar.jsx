import React from 'react';

const Sidebar = ({ toggleForm, setViewToggle, viewToggle }) => {
  return (
    <aside className="flex flex-col shrink-0 lg:w-[300px] w-[250px] fixed z-40 inset-y-0 left-0 bg-gray-100 ">
      <div className="flex items-center justify-between px-2 py-3 m-5 bg-white shadow-lg rounded-lg relative">
        <div className="flex items-center mr-5 ">
          <div className="mr-5">
            <div className="inline-block relative shrink-0 cursor-pointer rounded-[.95rem]">
              <img
                className="w-[50px] h-[50px] shrink-0 inline-block rounded-full"
                src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar1.jpg"
                alt="avatar"
              />
            </div>
          </div>
          <div className="mr-2">
            <a href="javascript:void(0)" className="hover:text-primary transition-colors duration-200 ease-in-out text-[1.075rem] font-medium text-secondary-inverse">
              Robert Jason
            </a>
            <span className="text-secondary-dark font-medium block text-[0.85rem]">
              SEO Manager
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-2 py-3 m-5 bg-white shadow-lg rounded-lg relative">
        <div className="flex flex-col justify-center items-center ml-6">
          <h2 className="font-bold px-12">View Toggle</h2>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
            onClick={()=>{setViewToggle(!viewToggle)}}
          >
            Toggle View
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between px-2 py-3 m-5 bg-white shadow-lg rounded-lg relative">
        <div className="flex flex-col justify-center items-center ml-3">
          <h2 className="font-bold px-12">Have Feedback?</h2>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
            onClick={toggleForm}
          >
            Open Feedback Form
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
