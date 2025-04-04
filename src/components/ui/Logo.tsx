import React from "react";

const Logo: React.FC = () => {
  return (
    <a href="#home" className="flex items-center">
      <div className="relative">
        <span className="font-bold text-2xl tracking-tight flex items-center">
          <span className="text-[#FFC300] mr-1">Brujo</span>
          <span className="text-[#EC2A4B]">Influence</span>
          <span className="absolute -top-2 -right-4 w-3 h-3 bg-[#FFC300] rounded-full"></span>
        </span>
      </div>
    </a>
  );
};

export default Logo;
