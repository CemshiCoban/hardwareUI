import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const ChartContainer = styled.div`
  margin: 20px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0,0,0, 0.75);
`;

const ChartTitle = styled.h3`
  margin-bottom: 20px;
`;

interface ChartData {
    name: string;
    CPU: number;
    Ram: number;
    Disk: number;
  }

  interface ChartProps {
    title: string;
    data: ChartData[];
    dataKey: keyof ChartData;
    grid?: boolean;
  }

const Chart:React.FC<ChartProps>= ({title, data, dataKey, grid }) => {
  return (
    <ChartContainer>
        <ChartTitle>{title}</ChartTitle>
        <ResponsiveContainer width="100%" aspect= {4/1}>
        <LineChart data={data}>
          <XAxis dataKey= {dataKey} stroke = '#555' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="CPU" stroke="#5be12c" />
          <Line type="monotone" dataKey="Ram" stroke="#e6da2a" />
          <Line type="monotone" dataKey="Disk" stroke="#e88f29" />
          {grid && <CartesianGrid stroke = '#e0dfdf' strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

export default Chart
