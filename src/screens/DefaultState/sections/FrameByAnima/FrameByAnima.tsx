import { SearchIcon, X } from "lucide-react";
import React from "react";
import { Input } from "../../../../components/ui/input";

interface FrameByAnimaProps {
  onClose?: () => void;
}

export const FrameByAnima = ({ onClose }: FrameByAnimaProps): JSX.Element => {
  return (
    <header className="flex h-20 items-center gap-3 px-8 py-5 w-full border-b border-[#dcdcdc]">
      <h1 className="font-['Rubik',Helvetica] font-medium text-black text-2xl leading-[34px]">
        Media Library
      </h1>

      <div className="relative flex-1 max-w-md">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-[#949ba6]" />
          <Input
            className="h-11 pl-12 bg-[#eceef0] rounded-[20px] border-none font-forms-default text-[#949ba6]"
            placeholder="Search Media..."
          />
        </div>
      </div>

      <div className="flex-grow" />

      <button onClick={onClose}>
        <X className="h-[25px] w-[25px] text-black" />
      </button>
    </header>
  );
};