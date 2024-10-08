import AdminSidebar from "../../components/AdminSidebar";
import { LineChart } from "../../components/Charts";

const months: string[] = [
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

const LineCharts = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Line Charts</h1>
        <section>
          <LineChart
            data={[200, 444, 343, 556, 778, 455, 990, 1444, 122, 334, 890, 909]}
            labels={months}
            label="Users"
            backgroundColor="rgba(53, 162, 255, 0.5)"
            borderColor="rgb(53, 162, 255)"
          />
          <h2>Active Users</h2>
        </section>

        <section>
          <LineChart
            data={[40, 60, 244, 100, 143, 120, 41, 47, 50, 56, 32]}
            labels={months}
            label="Users"
            backgroundColor="#C1A1E2"
            borderColor="#6314B8"
          />
          <h2>Total Products (SKU)</h2>
        </section>

        <section>
          <LineChart
            data={[
              24000, 14400, 24100, 34300, 90000, 20000, 25600, 44700, 99000,
              144400, 100000, 120000,
            ]}
            labels={months}
            label="Users"
            backgroundColor="#A1E2AB"
            borderColor="#0CB826"
          />
          <h2>Total Revenue</h2>
        </section>
        <section>
          <LineChart
            data={[
              9000, 12000, 12000, 9000, 1000, 5000, 4000, 1200, 1100, 1500,
              2000, 5000,
            ]}
            labels={months}
            label="Users"
            backgroundColor="#E2C1A1"
            borderColor="#B86314"
          />
          <h2>Discount Allotted</h2>
        </section>
      </main>
    </div>
  );
};

export default LineCharts;
