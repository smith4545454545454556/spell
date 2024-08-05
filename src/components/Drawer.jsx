import React, { useRef } from "react";
import useToggle from "../hooks/useToggle";
import clsx from "clsx";
import useClickOutside from "../hooks/useClickOutside";
import { IoMdClose } from "react-icons/io";

const Drawer = (props) => {
    const { children, isOpen, close, drawerButtonRef } = props;
    const drawerMainRef = useRef();
    const drawerContentRef = useRef();

    useClickOutside(drawerMainRef, drawerButtonRef, drawerContentRef, close);

    return (
        <div
            ref={drawerMainRef}
            className={clsx(
                " top-0 left-0 bg-gray-400/25 h-full w-full absolute z-50",
                isOpen ? "visible opacity-100" : "invisible opacity-0"
            )}
        >
            <div
                ref={drawerContentRef}
                className={clsx(
                    " top-0 right-0 w-[300px] bg-gray-100 h-screen absolute z-50",
                    isOpen ? "visible opacity-100" : "invisible opacity-0"
                )}
            >
                <IoMdClose
                    onClick={close}
                    className=" text-4xl absolute top-4 right-10 cursor-pointer"
                />
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Drawer;
