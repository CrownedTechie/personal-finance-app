import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Typography } from "../typography";

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = () => {
  const rawData = [750, 150, 100, 75];
  const totalBudget = 975;

  const chartData = {
    datasets: [
      {
        data: rawData.map((value) => (value / totalBudget) * 100),
        backgroundColor: [
          "rgba(144, 202, 213, 1)", // hsl(190, 52%, 68%)
          "rgba(245, 202, 158, 1)", // hsl(28, 73%, 81%)
          "rgba(96, 94, 112, 1)",  // hsl(248, 8%, 41%)
          "rgba(39, 112, 108, 1)", // hsl(177, 52%, 32%)
        ],
        borderColor: [
          "rgba(144, 202, 213, 1)",
          "rgba(245, 202, 158, 1)",
          "rgba(96, 94, 112, 1)",
          "rgba(39, 112, 108, 1)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const totalAmount = rawData.reduce((sum, value) => sum + value, 0);

  const formattedAmount = `$${totalAmount.toLocaleString()}`;
  const formattedText = `of $${totalBudget.toLocaleString()} limit`;

  return (
    <div className="relative size-60 hover:cursor-pointer">
      {/* INNER DOUGHNUT CHART */}
      <div className="opacity-75 absolute size-full ">
        <Doughnut
          data={chartData}
          options={{
            cutout: "67%",
            responsive: true,
            maintainAspectRatio: true,
          }}
          redraw={true}
        />
      </div>

      {/* OUTER DOUGHNUT CHART */}
      <div className="absolute size-full">
        <Doughnut
          data={chartData}
          options={{
            cutout: "80%",
            responsive: true,
            maintainAspectRatio: true,
          }}
          redraw={true}
        />
      </div>

      {/* CENTERED TEXT */}
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center gap-100 pointer-events-none mt-200"
      >
        <Typography
          fontSize="xl"
          fontWeight="bold"
          customClass="text-center"
        >
          {formattedAmount}
        </Typography>
        <Typography
          as="span"
          color="grey500"
        >
          {formattedText}
        </Typography>
      </div>
    </div>
  );
};