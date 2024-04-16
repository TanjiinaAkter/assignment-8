import { useLoaderData } from "react-router-dom";
import { checkExistStorageId } from "../../Utility/localstorage";
import { PieChart, Pie, ResponsiveContainer, Cell, Legend } from "recharts";

const Statistics = () => {
  const getAllDataFromJson = useLoaderData();
  const local = parseInt(getAllDataFromJson.length);
  const getLocalNumber = checkExistStorageId();
  const datas = getLocalNumber.length;
  const result = (datas * 100) / local;
  const resultbig = 100 - result;

  console.log("Local:", local);
  console.log("Datas:", datas);
  console.log("Result:", result);
  console.log("ResultBig:", resultbig);

  const data = [
    { name: "Total Donation", value: resultbig },
    { name: "Your Donation", value: result },
  ];

  const COLORS = ["#FF0000", "#00c49f"];

  console.log("Data:", data);

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text
        x={x}
        y={y}
        fill="#ffffff"
        textAnchor="middle"
        dominantBaseline="central">
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div>
      <h1 className="">Statistics</h1>
      <div className="flex justify-center items-center">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={130}
              labelLine={false}
              label={renderCustomizedLabel}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index]}
                  strokeWidth={2}
                />
              ))}
            </Pie>
            <Legend
              payload={[
                {
                  value: "Your Donation",
                  type: "rect",
                  color: "#00c49f",
                },

                { value: "Total Donation", color: " #FF0000", type: "rect" },
              ]}
              iconSize={30}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
