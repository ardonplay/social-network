import React from "react";

const Pages = (props) => {
  return (
    <div className="flex flex-row items-center justify-center space-x-3 ">
      {props.pages.map((page) => (
        <div
          onClick={() => {
            props.onPageChanged(page);
          }}
          key={page}
          className={
            (props.currentPage === page
              ? " text-amber-500 font-bold"
              : "font-bold") + " cursor-pointer"
          }
        >
          {page}
        </div>
      ))}
    </div>
  );
};

export default Pages;
