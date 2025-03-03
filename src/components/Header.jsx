import { IoIosMoon } from "react-icons/io";
import {  MdLightMode } from "react-icons/md";
import { fromTop } from "../utils/animationVariants";
import AnimationWrapper from "./AnimationWrapper";

const Header =() => {
    
    
    return (
        <AnimationWrapper variants={fromTop}>
            <p className="text-center text-2xl bg-red-500 p-5 text-gray-100 hidden md:block">This page is currently only styled for mobile. It's a work in progress</p>
            <div className="flex items-center justify-between p-3">
                <h1 className="p-0 text-xl dark:text-white">
                    jsmitty.com
                </h1>
                <div className="text-2xl dark:text-amber-300 p-0 ">
                    <MdLightMode />
                </div>
            </div>
        </AnimationWrapper>
    )
}
export default Header;