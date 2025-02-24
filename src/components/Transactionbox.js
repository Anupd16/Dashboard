import {
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  YAxis,
  BarChart,
  Legend,
  Bar,
  XAxis,
} from "recharts";

// Sample data
const data = [
  { name: "Jan", Expense: 4000, Income: 2400 },
  { name: "Feb", Expense: 3000, Income: 1398 },
  { name: "Mar", Expense: 2000, Income: 9800 },
  { name: "Apr", Expense: 2780, Income: 3908 },
  { name: "May", Expense: 1890, Income: 4800 },
  { name: "Jun", Expense: 2390, Income: 3800 },
  { name: "Jul", Expense: 3490, Income: 4300 },
  { name: "Aug", Expense: 3490, Income: 4300 },
  { name: "Sep", Expense: 3490, Income: 4300 },
  { name: "Oct", Expense: 3490, Income: 4300 },
  { name: "Nov", Expense: 3490, Income: 4300 },
  { name: "Dec", Expense: 3490, Income: 4300 },
];

const Transactionbox = () => {
  return (
    <div className="h-[22rem] bg-white p-3 rounded-sm border border-gray-200 flex flex-col flex-1">
      <strong className="text-gray-700 font-medium">
        Monthly Income and Expenses
      </strong>
      <div className="w-full mt-3 flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 20, right: 10, left: -10, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="name" angle={-45} textAnchor="end" />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
              formatter={(value) =>
                new Intl.NumberFormat("en-US").format(value)
              }
            />
            <Legend />
            <Bar dataKey="Income" fill="#8ea5e9" name="Income" />
            <Bar dataKey="Expense" fill="#ea580c" name="Expense" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Transactionbox;
