
import React, { useState } from 'react';
import { 
  AlertTriangle, 
  FileText, 
  Filter, 
  Wallet as WalletIcon
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ActivityItem {
  id: string;
  type: 'transaction' | 'wallet' | 'alert' | 'suspicious';
  title: string;
  description: string;
  address: string;
  time: string;
  risk?: 'high' | 'medium' | 'low';
}

const mockActivityData: ActivityItem[] = [
  {
    id: '1',
    type: 'transaction',
    title: 'New Transaction Detected',
    description: '98.97 ETH transferred between wallets',
    address: '0xe6b28...855c',
    time: '5s ago'
  },
  {
    id: '2',
    type: 'transaction',
    title: 'New Transaction Detected',
    description: '20.05 ETH transferred between wallets',
    address: '0xc876...a8f3',
    time: '30s ago'
  },
  {
    id: '3',
    type: 'transaction',
    title: 'New Transaction Detected',
    description: '52.04 ETH transferred between wallets',
    address: '0x75da...c408',
    time: '35s ago'
  },
  {
    id: '4',
    type: 'wallet',
    title: 'Wallet Update',
    description: 'New wallet added to monitoring list',
    address: '0xebcc...8915',
    time: '36s ago'
  },
  {
    id: '5',
    type: 'wallet',
    title: 'Wallet Update',
    description: 'New wallet added to monitoring list',
    address: '0xdb27...825b',
    time: '1m ago'
  },
  {
    id: '6',
    type: 'alert',
    title: 'Suspicious Activity Alert',
    description: 'Unusual transaction pattern identified',
    address: '0xa371...735c',
    time: '1m ago'
  },
  {
    id: '7',
    type: 'wallet',
    title: 'Wallet Update',
    description: 'New wallet added to monitoring list',
    address: '0x7810...83e8',
    time: '1m ago'
  },
  {
    id: '8',
    type: 'transaction',
    title: 'Large Transaction Detected',
    description: '120 ETH transferred to exchange wallet',
    address: '0x7f42...744c',
    time: '7m ago'
  },
  {
    id: '9',
    type: 'suspicious',
    title: 'Suspicious Pattern Detected',
    description: 'Possible layering activity through multiple wallets',
    address: '0x5a07...1fed',
    time: '19m ago',
    risk: 'high'
  },
  {
    id: '10',
    type: 'wallet',
    title: 'New Wallet Added to Watchlist',
    description: 'Wallet associated with previous fraud cases',
    address: '0x88a1...8a72',
    time: '44m ago'
  }
];

interface ActivityFeedProps {
  showFilters?: boolean;
}

const ActivityFeed: React.FC<ActivityFeedProps> = ({ showFilters = false }) => {
  const [filter, setFilter] = useState<string | null>(null);
  const [activities, setActivities] = useState<ActivityItem[]>(mockActivityData);

  const filteredActivities = filter
    ? activities.filter(activity => activity.type === filter)
    : activities;

  return (
    <Card className="shadow-sm animation-fade">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-semibold">
          Recent Activity
        </CardTitle>
        <div className="flex items-center gap-2">
          {showFilters && (
            <div className="flex items-center gap-2 mr-4">
              <Button
                variant={filter === null ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(null)}
                className="text-xs h-8"
              >
                All
              </Button>
              <Button
                variant={filter === "transaction" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("transaction")}
                className="text-xs h-8"
              >
                Transactions
              </Button>
              <Button
                variant={filter === "wallet" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("wallet")}
                className="text-xs h-8"
              >
                Wallets
              </Button>
              <Button
                variant={filter === "alert" || filter === "suspicious" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("alert")}
                className="text-xs h-8"
              >
                Alerts
              </Button>
            </div>
          )}
          <Button size="sm" variant="outline" className="text-xs">
            View All <span className="ml-1">→</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="px-0 py-0">
        <div className="max-h-[400px] overflow-y-auto">
          {filteredActivities.map((activity) => (
            <ActivityRow key={activity.id} activity={activity} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

interface ActivityRowProps {
  activity: ActivityItem;
}

const ActivityRow: React.FC<ActivityRowProps> = ({ activity }) => {
  const getIcon = () => {
    switch (activity.type) {
      case 'transaction':
        return <FileText className="h-4 w-4 text-primary" />;
      case 'wallet':
        return <WalletIcon className="h-4 w-4 text-success" />;
      case 'alert':
      case 'suspicious':
        return <AlertTriangle className="h-4 w-4 text-destructive" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="flex items-start gap-4 p-4 border-b border-border hover:bg-card/60 transition-colors">
      <div className={`p-2 rounded-lg ${
        activity.type === 'transaction' ? 'bg-primary/10' : 
        activity.type === 'wallet' ? 'bg-success/10' : 
        'bg-destructive/10'
      }`}>
        {getIcon()}
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex justify-between">
          <h4 className="font-medium text-sm">{activity.title}</h4>
          <span className="text-xs text-muted-foreground">{activity.time}</span>
        </div>
        <p className="text-sm text-muted-foreground mt-1">{activity.description}</p>
        <div className="flex items-center mt-1 gap-2">
          <code className="text-xs bg-background px-1.5 py-0.5 rounded">{activity.address}</code>
          {activity.risk === 'high' && (
            <span className="text-xs px-1.5 py-0.5 bg-destructive/20 text-destructive rounded">HIGH RISK</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
