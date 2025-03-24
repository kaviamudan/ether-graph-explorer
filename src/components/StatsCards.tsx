
import React from 'react';
import { 
  Activity, 
  ArrowUpRight, 
  BarChart2, 
  Users, 
  Wallet, 
  Zap 
} from 'lucide-react';

const StatsCards: React.FC = () => {
  const stats = [
    {
      title: 'Total Transactions',
      subtitle: 'Daily transaction count',
      value: '1.48M',
      change: '+2.5%',
      icon: <Activity className="h-5 w-5" />,
      chartColor: '#9b87f5',
    },
    {
      title: 'Network Volume',
      subtitle: 'Total ETH transferred',
      value: '$84.2M',
      change: '+5.7%',
      icon: <BarChart2 className="h-5 w-5" />,
      chartColor: '#36b3cd',
    },
    {
      title: 'Gas Used',
      subtitle: 'Total gas consumption',
      value: '124.5 ETH',
      change: '-0.8%',
      negative: true,
      icon: <Zap className="h-5 w-5" />,
      chartColor: '#f87575',
    },
    {
      title: 'Active Users',
      subtitle: 'Unique wallet addresses',
      value: '285.3K',
      change: '+1.2%',
      icon: <Users className="h-5 w-5" />,
      chartColor: '#4ade80',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard 
          key={index}
          title={stat.title}
          subtitle={stat.subtitle}
          value={stat.value}
          change={stat.change}
          negative={stat.negative}
          icon={stat.icon}
          chartColor={stat.chartColor}
          delay={index * 100}
        />
      ))}
    </div>
  );
};

interface StatCardProps {
  title: string;
  subtitle: string;
  value: string;
  change: string;
  negative?: boolean;
  icon: React.ReactNode;
  chartColor: string;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  subtitle, 
  value, 
  change, 
  negative, 
  icon,
  chartColor,
  delay
}) => {
  return (
    <div 
      className="bg-card rounded-xl p-6 border border-border animation-fade h-[140px]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-medium text-foreground">{title}</h3>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
        <div className="p-2 rounded-lg bg-muted/40">
          {icon}
        </div>
      </div>
      
      <div className="flex items-end justify-between">
        <span className="text-2xl font-bold">{value}</span>
        <div className={`flex items-center text-xs ${negative ? 'text-destructive' : 'text-success'}`}>
          {change}
          <ArrowUpRight className="h-3 w-3 ml-0.5" />
        </div>
      </div>
      
      <div className="h-[3px] w-full mt-4 bg-muted rounded-full overflow-hidden">
        <div 
          className="h-full rounded-full" 
          style={{ 
            width: '70%', 
            backgroundColor: chartColor 
          }} 
        />
      </div>
    </div>
  );
};

export default StatsCards;
