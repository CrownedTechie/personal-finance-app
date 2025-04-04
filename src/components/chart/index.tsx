import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Typography } from "../typography";

ChartJS.register(ArcElement, Tooltip, Legend);

interface IDoughnutChartProps {
  data: number[];
  backgroundColors: string[];
  overallBudget: number;
};

export const DoughnutChart = ({  data, backgroundColors, overallBudget }: IDoughnutChartProps) => {
  // const formattedAmount = `$${totalBudgetAmount.toLocaleString()}`;
  const formattedText = `of $${overallBudget.toLocaleString()} limit`;

  const chartData = {
    datasets: [
      {
        data,
        backgroundColor: backgroundColors,
        borderColor: backgroundColors,
        hoverOffset: 4,
      },
    ],
  };

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
          $338
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