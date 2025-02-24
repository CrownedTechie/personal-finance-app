import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = () => {
  // Data for the outer doughnut chart
  const innerData = {
    datasets: [
      {
        data: [19, 12, 7, 2], // Outer chart data
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
        borderWidth: 1,
      },
    ],
  };

  // Data for the inner doughnut chart
  const outerData = {
    datasets: [
      {
        data: [19, 12, 7, 2], // Inner chart data
        backgroundColor: [
          "rgba(144, 202, 213, 1)", // Lighter version of outer colors
          "rgba(245, 202, 158, 1)",
          "rgba(96, 94, 112, 1)",
          "rgba(39, 112, 108, 1)",
        ],
        borderColor: [
          "rgba(144, 202, 213, 1)",
          "rgba(245, 202, 158, 1)",
          "rgba(96, 94, 112, 1)",
          "rgba(39, 112, 108, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="relative size-60 hover:cursor-pointer">
      {/* Inner Doughnut Chart */}
      <div className="opacity-75 absolute size-full ">
        <Doughnut
          data={innerData}
          options={{
            cutout: "60%", 
          }}
        />
      </div>

      {/* Outer Doughnut Chart */}
      <div className="absolute size-full">
        <Doughnut
          data={outerData}
          options={{
            cutout: "75%", 
          }}
        />
      </div>
    </div>
  );
};