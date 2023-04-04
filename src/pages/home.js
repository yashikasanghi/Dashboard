import React, { useState } from "react";
import "../index.css";
import {
  Navigate,
  useLocation,
  useNavigate,
  useOutlet,
} from "react-router-dom";
import { ShoppingCartIcon, Square2StackIcon, ArchiveBoxIcon , UsersIcon, UserGroupIcon, CircleStackIcon, TrophyIcon, ClipboardDocumentCheckIcon, CurrencyDollarIcon, QuestionMarkCircleIcon  } from "@heroicons/react/20/solid";

const navigation = [
  { name: "Dashboard", path: "/", icon: <Square2StackIcon className="h-6 w-6 mr-4 inline-block"/>},
  { name: "Orders", path: "/orders", icon: <ArchiveBoxIcon className="h-6 w-6 mr-4 inline-block"/> },
  { name: "Team Members", path: "/team-members", icon: <UsersIcon className="h-6 w-6 mr-4 inline-block"/> },
  { name: "Partners", path: "/partners", icon: <UserGroupIcon className="h-6 w-6 mr-4 inline-block"/> },
  { name: "Product Listings", path: "/product-listings", icon: <CircleStackIcon className="h-6 w-6 mr-4 inline-block"/> },
  { name: "Awards & Honours", path: "/awards-honours", icon: <TrophyIcon className="h-6 w-6 mr-4 inline-block"/> },
  { name: "About Us", path: "/about-us", icon: <ClipboardDocumentCheckIcon className="h-6 w-6 mr-4 inline-block"/> },
  { name: "Payment Info", path: "/payment-info", icon: <CurrencyDollarIcon className="h-6 w-6 mr-4 inline-block"/> },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Home(props) {
  const { pathname } = useLocation();
  const outlet = useOutlet();
 
  const navigate = useNavigate();
  const getActiveTabName =
    navigation.find((it) => it.path === pathname)?.name || navigation[0].name;
  const [activeSidebarTab, setActiveSidebarTab] = useState(getActiveTabName);
  const handleTabChange = (item) => {
    setActiveSidebarTab(item.name);
    navigate(item.path);
  };

  return (
    <div className="search_bar_bg_color">
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-60 md:flex-col mt-20 ml-4 mb-4 ">
        <div className="flex flex-grow flex-col overflow-y-auto pt-2 bg-white rounded-lg">
          <div className="mt-5 flex flex-1 flex-col">
            <nav className="flex-1 space-y-1 px-2 pb-4">
              <img
                src="logo.png"
                className="rounded-md h-16 w-32 fixed mb-8 relative ml-8"
              />
              {navigation.map((item) => (

                <div
                  key={item.name}
                  onClick={() => handleTabChange(item)}
                  
                  className={classNames(
                    item.name === activeSidebarTab
                      ? "text-red-700 bg-red-200"
                      : "text-gray-400 ",
                    "text-xs mx-2 py-3 px-6 cursor-pointer"
                  )}
                >
                  {item.icon}
                  {item.name}
                </div>
              ))}
            </nav>
          </div>
          <div className="h-fit w-fit border border-gray-300 rounded-md m-4 py-2 px-8 text-center">
          <QuestionMarkCircleIcon className="h-8 w-8 text-gray-300 mr-4 ml-10"/>
          <span className="font-bold block text-sm mb-2">Need Help?</span>
          <span className="block text-xs">Our support team is</span>
          <span className="block text-xs">at your disposal.</span>

          <button className="h-fit w-28 p-1 text-sm rounded-lg text-white bg-black mt-4">Get Help</button>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
          <button
            type="button"
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500 md:hidden"
          >
            <span className="sr-only">Open sidebar</span>
          </button>
          <div className="flex flex-1 justify-between px-4">
            <div className="flex flex-1">
              <img src="logo.png" className="rounded-md h-16 w-28 fixed" />
              <form className="flex w-full md:ml-32" action="#" method="GET">
                <div className="w-96 h-10 search_bar_bg_color flex mt-3 ml-32">
                  <img
                    src="search-icon.png"
                    className="m-2 h-5 w-5 float-left "
                  />
                  <input
                    placeholder="Search..."
                    className="w-96 h-10 search_bar_bg_color ml-2 float-right"
                  />
                </div>
              </form>
            </div>

            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-black cursor-pointer font-inherit text-white border-none px-10 py-1 flex justify-around items-center rounded-sm ">
                <ShoppingCartIcon className="h-6 w-6 text-white mr-4" />

                <span className="text-sm">Checkout (200)</span>
              </button>

              <button className="cursor-pointer font-inherit bg-white border-none px-8 py-2 flex justify-around items-center rounded-sm">
                <div class="mx-auto w-12 h-12 relative border-4 border-white rounded-full overflow-hidden">
                  <img
                    class="object-cover object-center h-12"
                    src="myImage.jpg"
                    alt="User Admin"
                  />
                </div>
                <span className="text-gray-600">User Admin</span>
                <img
                  src="down-arrow.png"
                  className="h-4 w-4 ml-4"
                  alt="down-arrow"
                />
              </button>
            </div>
          </div>
        </div>
        <main>
          <div className="p-6">
            <main>{outlet}</main>
          </div>
        </main>
      </div>
    </div>
  );
}
