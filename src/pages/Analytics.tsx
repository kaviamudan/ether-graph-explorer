
import React, { useState } from 'react';
import { BarChart2, Download, Filter, Search, Settings } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TransactionCharts from '@/components/TransactionCharts';
import StatsCards from '@/components/StatsCards';

const Analytics: React.FC = () => {
  const [dateRange, setDateRange] = useState('7d');
  
  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar />
      
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-foreground flex items-center gap-2">
            <BarChart2 className="h-6 w-6 text-primary" />
            Blockchain Analytics
          </h1>
          
          <div className="flex items-center gap-4">
            <div className="flex bg-card border border-border rounded-lg overflow-hidden">
              <button 
                className={`px-3 py-1.5 text-sm font-medium ${dateRange === '24h' ? 'bg-secondary text-secondary-foreground' : 'hover:bg-secondary/50'}`}
                onClick={() => setDateRange('24h')}
              >
                24H
              </button>
              <button 
                className={`px-3 py-1.5 text-sm font-medium ${dateRange === '7d' ? 'bg-secondary text-secondary-foreground' : 'hover:bg-secondary/50'}`}
                onClick={() => setDateRange('7d')}
              >
                7D
              </button>
              <button 
                className={`px-3 py-1.5 text-sm font-medium ${dateRange === '30d' ? 'bg-secondary text-secondary-foreground' : 'hover:bg-secondary/50'}`}
                onClick={() => setDateRange('30d')}
              >
                30D
              </button>
              <button 
                className={`px-3 py-1.5 text-sm font-medium ${dateRange === 'all' ? 'bg-secondary text-secondary-foreground' : 'hover:bg-secondary/50'}`}
                onClick={() => setDateRange('all')}
              >
                All
              </button>
            </div>
            
            <Button className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
            
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <StatsCards />
        
        <Tabs defaultValue="overview" className="mt-8">
          <TabsList className="mb-6 bg-card/50 p-1">
            <TabsTrigger value="overview">Network Overview</TabsTrigger>
            <TabsTrigger value="transactions">Transaction Metrics</TabsTrigger>
            <TabsTrigger value="wallets">Wallet Analysis</TabsTrigger>
            <TabsTrigger value="custom">Custom Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <TransactionCharts />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="py-4 px-6">
                  <CardTitle className="text-lg">Top Gas Consumers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center">
                    <p className="text-muted-foreground">Gas consumer chart will render here</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="py-4 px-6">
                  <CardTitle className="text-lg">Contract Interactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center">
                    <p className="text-muted-foreground">Contract interactions chart will render here</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="transactions">
            <Card>
              <CardHeader className="py-4 px-6 flex flex-row items-center justify-between">
                <CardTitle className="text-lg">Detailed Transaction Metrics</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium mb-2">Transaction Metrics Coming Soon</h3>
                  <p className="text-muted-foreground">
                    Detailed transaction metrics and analysis will be available here
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="wallets">
            <Card>
              <CardHeader className="py-4 px-6">
                <CardTitle className="text-lg">Wallet Activity Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium mb-2">Wallet Analysis Coming Soon</h3>
                  <p className="text-muted-foreground">
                    In-depth wallet activity analysis will be available here
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="custom">
            <Card>
              <CardHeader className="py-4 px-6">
                <CardTitle className="text-lg">Custom Analytics Builder</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium mb-2">Build Your Own Analytics</h3>
                  <p className="text-muted-foreground mb-4">
                    Create custom analytics dashboards based on your specific needs
                  </p>
                  <Button>
                    Start Building
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Analytics;
