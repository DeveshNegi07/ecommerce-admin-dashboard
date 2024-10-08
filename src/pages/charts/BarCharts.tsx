import AdminSidebar from "../../components/AdminSidebar";
import { BarChart } from "../../components/Charts";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const BarCharts = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Bar Charts</h1>
        <section>
          <BarChart
            data_1={[200, 444, 343, 556, 778, 455, 990]}
            data_2={[300, 144, 433, 655, 237, 755, 190]}
            title_1="products"
            title_2="users"
            bgColor_1="#341179"
            bgColor_2="#FCCFCF"
          />
          <h2>top selling products & top customers</h2>
        </section>

        <section>
          <BarChart
            data_1={[
              200, 444, 343, 556, 778, 455, 990, 444, 122, 334, 890, 909,
            ]}
            data_2={[]}
            title_1="orders"
            title_2=""
            bgColor_1="#2EBABA"
            bgColor_2=""
            labels={months}
            horizontal={true}
          />
          <h2>orders throughout the year</h2>
        </section>
      </main>
    </div>
  );
};

export default BarCharts;
