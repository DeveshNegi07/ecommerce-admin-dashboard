import { IconType } from "react-icons";
import { Link, Location, useLocation } from "react-router-dom";

import {
  RiCoupon3Fill,
  RiDashboardFill,
  RiShoppingBag3Fill,
} from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { AiFillFileText } from "react-icons/ai";
import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaGamepad,
  FaStopwatch,
} from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { useEffect, useState } from "react";

const AdminSidebar = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100
  );

  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <HiMenu />
        </button>
      )}
      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? "0" : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
        <h2>Logo.</h2>
        <div>
          <div>
            <h5>dashboard</h5>
            <ul>
              {[
                {
                  url: "/admin/dashboard",
                  text: "Dashboard",
                  Icon: RiDashboardFill,
                },
                {
                  url: "/admin/product",
                  text: "Product",
                  Icon: RiShoppingBag3Fill,
                },
                {
                  url: "/admin/customer",
                  text: "Customer",
                  Icon: IoIosPeople,
                },
                {
                  url: "/admin/transaction",
                  text: "Transaction",
                  Icon: AiFillFileText,
                },
              ].map((item, index) => (
                <Li
                  key={index}
                  url={item.url}
                  text={item.text}
                  Icon={item.Icon}
                  location={location}
                />
              ))}
            </ul>
          </div>
          <div>
            <h5>charts</h5>
            <ul>
              {[
                { url: "/admin/chart/bar", text: "Bar", Icon: FaChartBar },
                { url: "/admin/chart/pie", text: "Pie", Icon: FaChartPie },
                { url: "/admin/chart/line", text: "Line", Icon: FaChartLine },
              ].map((item, index) => (
                <Li
                  key={index}
                  url={item.url}
                  text={item.text}
                  Icon={item.Icon}
                  location={location}
                />
              ))}
            </ul>
          </div>
          <div>
            <h5>apps</h5>
            <ul>
              {[
                {
                  url: "/admin/app/stopwatch",
                  text: "Stopwatch",
                  Icon: FaStopwatch,
                },
                {
                  url: "/admin/app/coupon",
                  text: "Coupon",
                  Icon: RiCoupon3Fill,
                },
                { url: "/admin/app/toss", text: "Toss", Icon: FaGamepad },
              ].map((item, index) => (
                <Li
                  key={index}
                  url={item.url}
                  text={item.text}
                  Icon={item.Icon}
                  location={location}
                />
              ))}
            </ul>
          </div>
          {phoneActive && (
            <button id="close-sidebar" onClick={() => setShowModal(false)}>
              Close
            </button>
          )}
        </div>
      </aside>
    </>
  );
};

interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}
const Li = ({ url, text, location, Icon }: LiProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url) ? "#E5F1FF" : "#FFFFFF",
    }}
  >
    <Link
      to={url}
      style={{ color: location.pathname.includes(url) ? "#009DFF" : "#000000" }}
    >
      <Icon />
      {text}
    </Link>
  </li>
);

export default AdminSidebar;
