import { IVenda, VendaDia } from "../Types/Data";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function transformData(data: IVenda[]): VendaDia[] {
  const dias = data.reduce((acc: { [key: string]: VendaDia }, item) => {
    const dia = item.data.split(" ")[0];
    if (!acc[dia]) {
      acc[dia] = {
        data: dia,
        pago: 0,
        processando: 0,
        falha: 0,
      };
    }
    acc[dia][item.status] += item.preco;
    return acc;
  }, {});

  return Object.values(dias). map((dia) => ({...dia, data: dia.data.substring(5)}));
}

const GraficoVendas = ({ data }: { data: IVenda[] }) => {
  const transformedData = transformData(data);

  return (
    <div>
      <ResponsiveContainer height={400} width="99%">
        <LineChart data={transformedData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pago"
            stroke="#008000"
            activeDot={{ r: 8 }}
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="processando"
            stroke="#FBCB21"
            strokeWidth={3}
          />
          <Line type="monotone" dataKey="falha" stroke="#B22222"   strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoVendas;
