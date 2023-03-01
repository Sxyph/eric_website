"use client";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Projects",
        href: "/projects",
    },
];

const Navigation = () => {
    const pathName = usePathname();

    return (
        <Disclosure as="nav" className="z-10">
            {({ open }) => (
                <>
                    <div
                        className={clsx(
                            "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative",
                            open && "bg-white"
                        )}
                    >
                        <div className="flex h-16 justify-between">
                            <div className="flex">
                                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                    {/* Current: "border-custom-accent text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}

                                    {routes.map((route) => (
                                        <Link
                                            key={`desktop route ${route.name}`}
                                            href={route.href}
                                            className={clsx(
                                                "inline-flex items-center border-b-2  px-1 pt-1 text-sm font-medium ",
                                                pathName === route.href
                                                    ? "border-custom-accent text-white"
                                                    : "border-transparent text-gray-200 hover:border-gray-200 hover:text-gray-300"
                                            )}
                                        >
                                            {route.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="-mr-2 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-custom-accent">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                        <Disclosure.Panel className="sm:hidden bg-white shadow-md absolute h-max top-full left-0 right-0">
                            <div className="space-y-1 pt-2 pb-3">
                                {/* Current: "bg-indigo-50 border-custom-accent text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                                {routes.map((route) => (
                                    <Disclosure.Button
                                        as="div"
                                        key={`mobile route ${route.name}`}
                                    >
                                        <Link
                                            href={route.href}
                                            className={clsx(
                                                "block border-l-4 py-2 pl-3 pr-4 text-base font-medium",
                                                pathName === route.href
                                                    ? "bg-indigo-50 border-custom-accent-dark text-custom-accent-dark"
                                                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                                            )}
                                        >
                                            {route.name}
                                        </Link>
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </div>
                </>
            )}
        </Disclosure>
    );
};

export default Navigation;