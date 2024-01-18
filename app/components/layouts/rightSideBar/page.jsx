import React from "react";

const RightSideBar = () => {
  return (
    <div className="sticky right-0 top-0 z-20 h-screen w-[300px] flex flex-col gap-12 py-6 px-4 overflow-auto  max-lg:hidden xl:w-[350]">
      <div className="flex flex-col gap-4">
        <h4 className="text-heading4-bold">Following</h4>
        <div>maping people</div>
      </div>
      <div>
        <h4 className="text-heading4-bold">Suggested</h4>
        <div>maping people</div>
      </div>
    </div>
  );
};

export default RightSideBar;
