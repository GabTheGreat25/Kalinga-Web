import React, { useState } from "react";
import KalingaLogo from "@assets/Kalinga-Logo-Small.png";
import { useNavigate, NavLink } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const isActiveRoute = (route) => {
    const currentPath = window.location.pathname;
    if (
      (currentPath === "/admin" && route === "admin") ||
      currentPath === `/admin/${route}` ||
      (currentPath === "/admin/approved" && route === "forum") ||
      (currentPath === "/admin/rejected" && route === "forum")
    ) {
      return true;
    }
    return false;
  };

  const handleSignOut = () => {
    navigate("/");
  };

  return (
    <>
      <section className="flex flex-col justify-between w-full h-full p-6 body-color">
        <div>
          <div className="grid items-center justify-center grid-flow-col-dense pb-16 gap-x-2">
            <img src={KalingaLogo} alt="KalingaLogo" />
            <div>
              <h1 className="text-[2.75rem] text-center text-primary-default">
                Kalinga
              </h1>
              <h3 className="text-2xl font-medium text-center text-primary-default">
                Super Admin
              </h3>
            </div>
          </div>
          <div>
            <NavLink
              to="/admin"
              className={`grid items-center justify-center grid-flow-col-dense cursor-pointer w-full rounded-2xl gap-x-8 py-2 mb-10 ${
                isActiveRoute("admin")
                  ? "bg-secondary-default"
                  : " bg-transparent"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48       "
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#FFEECC"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M8.557 2.75H4.682A1.932 1.932 0 0 0 2.75 4.682v3.875a1.942 1.942 0 0 0 1.932 1.942h3.875a1.942 1.942 0 0 0 1.942-1.942V4.682A1.942 1.942 0 0 0 8.557 2.75m10.761 0h-3.875a1.942 1.942 0 0 0-1.942 1.932v3.875a1.943 1.943 0 0 0 1.942 1.942h3.875a1.942 1.942 0 0 0 1.932-1.942V4.682a1.932 1.932 0 0 0-1.932-1.932M8.557 13.5H4.682a1.943 1.943 0 0 0-1.932 1.943v3.875a1.932 1.932 0 0 0 1.932 1.932h3.875a1.942 1.942 0 0 0 1.942-1.932v-3.875a1.942 1.942 0 0 0-1.942-1.942m8.818-.001a3.875 3.875 0 1 0 0 7.75a3.875 3.875 0 0 0 0-7.75"
                />
              </svg>
              <h1 className="text-3xl text-neutral-primary">Dashboard</h1>
            </NavLink>
            <div>
              <div
                onClick={() => setShowDropdown(!showDropdown)}
                className={`grid items-center justify-start pl-10 grid-flow-col-dense cursor-pointer w-full rounded-2xl gap-x-8 py-2 ${
                  showDropdown ? "mb-2" : "mb-10"
                } `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#FFEECC"
                    stroke-width="1.5"
                    d="M9 21h6m-6 0v-5m0 5H3.6a.6.6 0 0 1-.6-.6v-3.8a.6.6 0 0 1 .6-.6H9m6 5V9m0 12h5.4a.6.6 0 0 0 .6-.6V3.6a.6.6 0 0 0-.6-.6h-4.8a.6.6 0 0 0-.6.6V9m0 0H9.6a.6.6 0 0 0-.6.6V16"
                  />
                </svg>
                <h1 className="text-3xl text-neutral-primary">Reports</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  className={`transform transition-transform duration-300 ${
                    showDropdown ? "rotate-0" : "rotate-180"
                  }`}
                >
                  <path fill="#FFEECC" d="m7 10l5 5l5-5z" />
                </svg>
              </div>
              {showDropdown && (
                <div className="p-2">
                  <NavLink
                    to="/admin/chart"
                    className={`grid grid-flow-col-dense items-center justify-center cursor-pointer w-full rounded-2xl gap-x-8 py-2 mb-5 ${
                      isActiveRoute("chart")
                        ? "bg-secondary-default"
                        : " bg-transparent"
                    }`}
                  >
                    <h1 className="text-xl text-neutral-primary">
                      Total Donations & Requests
                    </h1>
                  </NavLink>
                  <NavLink
                    to="/admin/city"
                    className={`grid grid-flow-col-dense items-center justify-center cursor-pointer w-full rounded-2xl gap-x-8 py-2 mb-5 ${
                      isActiveRoute("city")
                        ? "bg-secondary-default"
                        : " bg-transparent"
                    }`}
                  >
                    <h1 className="text-xl text-neutral-primary">
                      Total Donations & Requests <br /> each City
                    </h1>
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink
              to="/admin/forum"
              className={`grid items-center justify-center grid-flow-col-dense cursor-pointer w-full rounded-2xl gap-x-8 py-2 pl-4 mb-10 ${
                isActiveRoute("forum")
                  ? "bg-secondary-default"
                  : " bg-transparent"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#FFEECC"
                  d="M7.23 16.23q-.326 0-.547-.22q-.221-.222-.221-.548v-1h11.75l.634.634V6h1q.327 0 .548.221t.221.548v12.539l-3.077-3.077zm-3.845-.692V3.77q0-.327.22-.548T4.155 3h11.923q.327 0 .548.221t.221.548v7.923q0 .327-.221.548t-.548.222H6.462zm12.461-4.076V4H4.385v8.846l1.384-1.384zm-11.461 0V4z"
                />
              </svg>
              <h1 className="text-3xl text-neutral-primary">
                Forum <br /> Moderation
              </h1>
            </NavLink>
          </div>
        </div>
        <div className="grid items-center justify-center grid-flow-col-dense mb-6 gap-x-4">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
            >
              <path
                fill="#FFEECC"
                d="M4 12a1 1 0 0 0 1 1h7.59l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4-4a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76a1 1 0 0 0-.21-.33l-4-4a1 1 0 1 0-1.42 1.42l2.3 2.29H5a1 1 0 0 0-1 1M17 2H7a3 3 0 0 0-3 3v3a1 1 0 0 0 2 0V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3a1 1 0 0 0-2 0v3a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3"
              />
            </svg>
          </span>
          <button
            onClick={handleSignOut}
            className="text-3xl text-neutral-primary"
          >
            Sign Out
          </button>
        </div>
      </section>
    </>
  );
}
