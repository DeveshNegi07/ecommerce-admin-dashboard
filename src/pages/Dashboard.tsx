import { BsSearch } from "react-icons/bs";
import AdminSidebar from "../components/AdminSidebar";
import { FaRegBell } from "react-icons/fa";
import userImage from "../assets/userImage.png";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../assets/admin/data.json";
import { BarChart, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import DashboardTable from "../components/DashboardTable";

const Dashboard = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={userImage} alt="user" />
        </div>
        <section className="widget-container">
          <WidgetItem
            heading="Revenue"
            value={340000}
            percent={40}
            color="#0073FF"
            amount={true}
          />
          <WidgetItem
            heading="Users"
            value={400}
            percent={-14}
            color="#00C6CA"
          />
          <WidgetItem
            heading="Transactions"
            value={23000}
            percent={80}
            color="#FFC400"
          />
          <WidgetItem
            heading="Products"
            value={1000}
            percent={30}
            color="#4C00FF"
          />
        </section>

        <section className="graph-container">
          <div className="revenue-chart">
            <h2>Revenue & Transaction</h2>
            <BarChart
              data_2={[300, 144, 433, 655, 237, 755, 190]}
              data_1={[200, 444, 343, 556, 778, 455, 990]}
              title_1="Revenue"
              title_2="Transaction"
              bgColor_1="rgb(0, 115, 255)"
              bgColor_2="rgba(53, 162, 235, 0.8)"
            />
          </div>

          <div className="dashboard-categories">
            <h2>Inventory</h2>
            {data.categories.map((item, index) => (
              <CategoryItem
                key={index}
                heading={item.heading}
                value={item.value}
                color={`hsl(${item.value * 4}, ${item.value}%, 50%)`}
              />
            ))}
          </div>
        </section>

        <section className="transaction-container">
          <div className="gender-chart">
            <h2>gender ratio</h2>
            <DoughnutChart
              labels={["Female", "Male"]}
              data={[12, 19]}
              backgroundColor={[
                "hsl(340, 82%, 56%)",
                "rgba(53, 162, 235, 0.8)",
              ]}
              cutout={90}
            />
            <p>
              <BiMaleFemale />
            </p>
          </div>
          <DashboardTable data={data.transaction} />
        </section>
      </main>
    </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount = false,
}: WidgetItemProps) => (
  <article className="widget">
    <div className="widget-info">
      <p>{heading}</p>
      <h4>{amount ? `₹${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp />+{percent}%{" "}
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown />
          {percent}%{" "}
        </span>
      )}
    </div>
    <div
      className="widget-circle"
      style={{
        background: `conic-gradient(
      ${color} ${(Math.abs(percent) / 100) * 360}deg, #ffffff 0deg
      )`,
      }}
    >
      <span style={{ color }}>{percent}%</span>
    </div>
  </article>
);

interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({ color, value, heading }: CategoryItemProps) => (
  <div className="category-item">
    <h5>{heading}</h5>
    <div>
      <div style={{ backgroundColor: color, width: `${value}% ` }}></div>
    </div>
    <span>{value}%</span>
  </div>
);

export default Dashboard;
