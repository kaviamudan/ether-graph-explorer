
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer } from '@/components/ui/chart';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const monthlyData = [
  { month: 'Jan', transactions: 60, volume: 350, gasUsed: 240 },
  { month: 'Feb', transactions: 50, volume: 300, gasUsed: 220 },
  { month: 'Mar', transactions: 70, volume: 450, gasUsed: 280 },
  { month: 'Apr', transactions: 80, volume: 600, gasUsed: 290 },
  { month: 'May', transactions: 90, volume: 500, gasUsed: 300 },
  { month: 'Jun', transactions: 100, volume: 420, gasUsed: 240 },
  { month: 'Jul', transactions: 85, volume: 350, gasUsed: 220 },
  { month: 'Aug', transactions: 70, volume: 220, gasUsed: 170 },
  { month: 'Sep', transactions: 110, volume: 780, gasUsed: 320 },
  { month: 'Oct', transactions: 80, volume: 600, gasUsed: 240 },
  { month: 'Nov', transactions: 70, volume: 550, gasUsed: 280 },
  { month: 'Dec', transactions: 90, volume: 650, gasUsed: 270 },
];

const TransactionCharts: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="animation-fade">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Transaction Volume Over Time</CardTitle>
          <p className="text-xs text-muted-foreground">Monthly transaction trends for the past year</p>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="h-[300px] w-full">
            <ChartContainer 
              config={{
                transactions: { color: "#9b87f5" },
                volume: { color: "#36b3cd" },
              }}
            >
              <LineChart data={monthlyData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid vertical={false} stroke="#333" strokeDasharray="3 3" />
                <XAxis 
                  dataKey="month"
                  tick={{ fill: '#888' }}
                  axisLine={{ stroke: '#444' }}
                />
                <YAxis 
                  yAxisId="left"
                  tick={{ fill: '#888' }}
                  axisLine={{ stroke: '#444' }}
                />
                <YAxis 
                  yAxisId="right"
                  orientation="right"
                  tick={{ fill: '#888' }}
                  axisLine={{ stroke: '#444' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(22, 22, 30, 0.8)',
                    borderColor: '#444',
                    color: '#fff'
                  }} 
                />
                <Legend />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="transactions" 
                  name="Transactions"
                  stroke="#9b87f5" 
                  dot={{ r: 3 }} 
                  activeDot={{ r: 5 }} 
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="volume" 
                  name="Volume"
                  stroke="#36b3cd" 
                  dot={{ r: 3 }} 
                  activeDot={{ r: 5 }} 
                />
              </LineChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
      
      <Card className="animation-fade">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Resource Consumption</CardTitle>
          <p className="text-xs text-muted-foreground">Gas used by month (in thousands)</p>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="h-[300px] w-full">
            <ChartContainer 
              config={{
                gasUsed: { color: "#f87575" },
              }}
            >
              <BarChart data={monthlyData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid vertical={false} stroke="#333" strokeDasharray="3 3" />
                <XAxis 
                  dataKey="month"
                  tick={{ fill: '#888' }}
                  axisLine={{ stroke: '#444' }}
                />
                <YAxis 
                  tick={{ fill: '#888' }}
                  axisLine={{ stroke: '#444' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(22, 22, 30, 0.8)',
                    borderColor: '#444',
                    color: '#fff'
                  }} 
                />
                <Legend />
                <Bar 
                  dataKey="gasUsed" 
                  name="Gas Used"
                  fill="#f87575" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransactionCharts;
