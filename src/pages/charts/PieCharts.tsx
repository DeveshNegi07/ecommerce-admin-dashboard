import AdminSidebar from "../../components/AdminSidebar";
import { DoughnutChart, PieChart } from "../../components/Charts";
import data from "../../assets/admin/data.json";

const PieCharts = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Pie & Doughnut Charts</h1>
        <section>
          <div>
            <PieChart
              data={[12, 9, 13]}
              backgroundColor={["#88FF70", "#3BE619", "#45BA2E"]}
              labels={["Processing", "Shipped", "Delivered"]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>Order Fulfillment Ratio</h2>
        </section>

        <section>
          <div>
            <DoughnutChart
              data={data.categories.map((i) => i.value)}
              backgroundColor={data.categories.map(
                (i) => `hsl(${i.value * 4}, ${i.value}%, 50%)`
              )}
              labels={data.categories.map((i) => i.heading)}
              legends={false}
              offset={[0, 0, 0, 80]}
            />
          </div>
          <h2>Product Categories Ratio</h2>
        </section>

        <section>
          <div>
            <DoughnutChart
              data={[40, 20]}
              backgroundColor={["#5F0CB8", "#35A2FF"]}
              labels={["In Stock", "Out Of Stock"]}
              legends={false}
              offset={[0, 80]}
              cutout={"70%"}
            />
          </div>
          <h2>Stock Availability</h2>
        </section>

        <section>
          <div>
            <DoughnutChart
              data={[32, 18, 5, 20, 25]}
              backgroundColor={[
                "#1FB800",
                "#B83A00",
                "#9FB814",
                "#B800B8",
                "#1692FF",
              ]}
              labels={[
                "Marketing cost",
                "Discount",
                "Burnt",
                "Production Cost",
                "Net Margin",
              ]}
              legends={false}
              cutout={90}
              offset={[20, 30, 20, 30, 80]}
            />
          </div>
          <h2>Revenue Distribution</h2>
        </section>

        <section>
          <div>
            <PieChart
              labels={[
                "Teenager(Below 20)",
                "Adult (20-40)",
                "Older (above 40)",
              ]}
              data={[30, 250, 70]}
              backgroundColor={[
                `hsl(10, ${80}%, 80%)`,
                `hsl(10, ${80}%, 50%)`,
                `hsl(10, ${40}%, 50%)`,
              ]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>Users Age Group</h2>
        </section>

        <section>
          <div>
            <DoughnutChart
              labels={["Admin", "Customers"]}
              data={[40, 250]}
              backgroundColor={[`hsl(335, 100%, 38%)`, "hsl(44, 98%, 50%)"]}
              offset={[0, 50]}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default PieCharts;
