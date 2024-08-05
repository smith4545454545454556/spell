import React, { useEffect } from "react";

const useClickOutside = (
    drawerMainRef,
    drawerContentRef,
    allowedElement,
    close
) => {
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                drawerMainRef.current &&
                e.target == drawerMainRef.current &&
                e.target != allowedElement.current &&
                e.target != drawerContentRef.current
            ) {
                close();
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    });
};

export default useClickOutside;
