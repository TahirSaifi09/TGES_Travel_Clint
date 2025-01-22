import { SiTicktick } from "react-icons/si";
import { TbEyeDollar } from "react-icons/tb";
import { AiOutlineComment } from "react-icons/ai";

export default function MoreDetails(){
    return(
        <div className="bg-slate-100 ">
            <div className="px-16 py-10 flex  justify-between max-lg:flex-wrap max-sm:px-2 max-md:gap-3 max-2xl:gap-8 max-xl:px-14 max-md:px-6">
                    <div className="flex px-14 gap-2 py-5 shadow-lg rounded-lg bg-gray-100 max-xl:px-2 max-2xl:px-5 max-xl:w-full items-center max-xl:justify-center ">
                      <div className="flex gap-4">
                        <SiTicktick className="text-4xl text-center text-blue-600 " />
                        <h1 className="text-2xl max-sm:text-xl max-2xl:text-xl font-medium">
                          Free Cancellation
                        </h1>
                      </div>
                    </div>
                    <div className="flex px-14 gap-2 py-5 shadow-lg rounded-lg items-center bg-gray-100 max-xl:w-full max-2xl:px-5 max-xl:px-2 max-xl:justify-center">
                      <div className="flex gap-4 text-center">
                        <TbEyeDollar className="text-4xl text-blue-600 " />
            
                        <h1 className="text-2xl max-sm:text-xl max-2xl:text-xl font-medium">
                          No Hidden Charges
                        </h1>
                      </div>
                    </div>
                    <div className="flex px-14 gap-2 rounded-lg shadow-lg py-5 items-center bg-gray-100 max-xl:px-2 max-2xl:px-5 max-xl:w-full max-xl:justify-center">
                      <div className="flex gap-4">
                        <AiOutlineComment className="text-4xl text-blue-600 " />
                        <h1 className="text-2xl max-sm:text-xl max-xl:text-2xl max-2xl:text-xl font-medium">
                          24/7 Customer Service
                        </h1>
                      </div>
                    </div>
                  </div>
        </div>
    )
}