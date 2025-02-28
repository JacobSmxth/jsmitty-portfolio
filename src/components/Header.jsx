import { IoIosMoon } from "react-icons/io";
import {  MdLightMode } from "react-icons/md";

const Header =() => {
    
    
    return (
        <div className="flex items-center justify-between p-3">
            <h1 className="p-0 text-xl dark:text-white">
                jsmitty.com
            </h1>
            <div className="text-2xl dark:text-amber-300 p-0 ">
                <MdLightMode />
            </div>
        </div>
    )
}
export default Header;