import clsx from "clsx";
import React, { useEffect, useRef } from "react";
import { Link, matchPath, useResolvedPath } from "react-router-dom";

const NavItems = (props) => {
    const { navData, setIndicatorBounds } = props;
    const navRef = useRef();
    const url = useResolvedPath();
    useEffect(() => {
        if (matchPath(navData.href, url.pathname)) {
            if (!navRef || !navRef.current) {
                return;
            }
            setIndicatorBounds({
                width: navRef.current.offsetWidth,
                left: navRef.current.offsetLeft,
            });
        }
    }, [url.pathname]);

    const navLinkClick = () => {
        if (!navRef || !navRef.current) {
            return;
        }
        setIndicatorBounds({
            width: navRef.current.offsetWidth,
            left: navRef.current.offsetLeft,
        });
    };

    return (
        <div>
            <Link
                className={clsx(
                    "",
                    matchPath(navData.href, url.pathname)
                        ? " h-full"
                        : ""
                )}
                ref={navRef}
                to={navData.href}
                onClick={navLinkClick}
            >
                {" "}
                {navData.lable}
            </Link>
        </div>
    );
};

export default NavItems;
