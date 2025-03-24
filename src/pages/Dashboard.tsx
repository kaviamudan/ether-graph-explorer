
import React, { useState } from 'react';
import { 
  Activity, AlertTriangle, BarChart2, Download, 
  FileText, Search, Zap 
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import Sidebar from '@/components/Sidebar';
import ActivityFeed from '@/components/ActivityFeed';
import StatsCards from '@/components/StatsCards';
import TransactionCharts from '@/components/TransactionCharts';

const Dashboard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Top Search Bar */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-foreground flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            Blockchain Analytics Dashboard
          </h1>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search wallets or transactions..."
                className="bg-card border border-border rounded-full py-2 pl-10 pr-4 w-64 focus:outline-none focus:ring-1 focus:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Button className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Generate Report
            </Button>
          </div>
        </div>
        
        {/* Stats Cards */}
        <StatsCards />
        
        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="mt-8">
          <TabsList className="mb-6 bg-card/50 p-1">
            <TabsTrigger value="overview" className="data-[state=active]:bg-card">
              Activity Overview
            </TabsTrigger>
            <TabsTrigger value="alerts" className="data-[state=active]:bg-card">
              Alerts & Notifications
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-card">
              Network Analytics
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            {/* Transaction Activity Card */}
            <Card className="shadow-sm animation-fade">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xl font-semibold">
                  Global Transaction Activity
                </CardTitle>
                <div className="text-sm text-muted-foreground">
                  Real-time visualization of blockchain activity
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-[350px] w-full bg-[url('/lovable-uploads/b8bad460-31eb-4545-86c6-557983b32c84.png')] bg-cover bg-center rounded-b-lg overflow-hidden">
                  {/* This is where the actual transaction graph would render */}
                </div>
              </CardContent>
            </Card>
            
            {/* Recent Activity */}
            <div className="flex gap-6">
              <div className="w-2/3">
                <ActivityFeed />
              </div>
              
              <div className="w-1/3 space-y-6">
                {/* Monitored Wallets Card */}
                <Card className="neo-glow animation-fade">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-muted-foreground">Monitored Wallets</h3>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <FileText className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-bold text-primary">1258</span>
                      <span className="text-success text-sm">↑ 12%</span>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Suspicious Flows Card */}
                <Card className="warning-glow animation-fade">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-muted-foreground">Suspicious Flows</h3>
                      <AlertTriangle className="h-5 w-5 text-warning" />
                    </div>
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-bold text-warning">53</span>
                      <span className="text-warning text-sm">↑ 7%</span>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Active Investigations Card */}
                <Card className="success-glow animation-fade">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-muted-foreground">Active Investigations</h3>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Zap className="h-4 w-4 text-success" />
                      </Button>
                    </div>
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-bold text-success">24</span>
                      <span className="text-success text-sm">↑ 3%</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="alerts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Alerts & Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ActivityFeed showFilters={true} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics" className="space-y-6">
            <div className="mb-4">
              <h2 className="text-xl font-medium mb-2">Comprehensive blockchain network analytics</h2>
              <Tabs defaultValue="network" className="w-full">
                <TabsList className="mb-6 bg-card/50">
                  <TabsTrigger value="network">Network Overview</TabsTrigger>
                  <TabsTrigger value="metrics">Transaction Metrics</TabsTrigger>
                  <TabsTrigger value="geo">Geographical Activity</TabsTrigger>
                </TabsList>
                
                <TabsContent value="network" className="space-y-6">
                  <TransactionCharts />
                </TabsContent>
                
                <TabsContent value="metrics">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-medium mb-4">Transaction Metrics Coming Soon</h3>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="geo">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-medium mb-4">Geographical Activity Coming Soon</h3>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
