import { IoIosMoon } from "react-icons/io";
import {  MdLightMode } from "react-icons/md";
import { fromTop } from "../utils/animationVariants";
import AnimationWrapper from "./AnimationWrapper";

const Header =() => {
    
    
    return (
        <AnimationWrapper variants={fromTop}>
            <div className="flex items-center justify-between p-3">
                <h1 className="p-0 text-xl dark:text-white">
                    &lt;jsmitty.com /&gt;
                </h1>
                <div className="text-2xl dark:text-amber-300 p-0 ">
                    <MdLightMode />
                </div>
            </div>
        </AnimationWrapper>
    )
}
export default Header;