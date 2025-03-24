
import React, { useState } from 'react';
import { Activity, Filter, Info, Search, Settings } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SettingsPanel from '@/components/SettingsPanel';

const Traces: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSettingsChange = (settings: {
    maxHops: number;
    threshold: number;
    showSuspicious: boolean;
  }) => {
    console.log('Settings changed:', settings);
    // Implement settings change logic
  };
  
  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar />
      
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-foreground flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            Transaction Traces
          </h1>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Enter wallet address or TX hash..."
                className="bg-card border border-border rounded-full py-2 pl-10 pr-4 w-80 focus:outline-none focus:ring-1 focus:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <SettingsPanel onSettingsChange={handleSettingsChange} />
          </div>
        </div>
        
        <Card className="overflow-hidden mb-6">
          <CardHeader className="py-4 px-6 bg-card/50 border-b border-border flex flex-row items-center justify-between space-y-0">
            <div className="flex items-center">
              <CardTitle className="text-lg mr-2">Transaction Trace Visualization</CardTitle>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Info className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Settings className="h-4 w-4" />
                Display Options
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-[500px] w-full bg-[url('/lovable-uploads/b8bad460-31eb-4545-86c6-557983b32c84.png')] bg-cover bg-center">
              {/* Transaction graph would render here */}
              <div className="flex h-full items-center justify-center text-muted-foreground">
                <div className="text-center p-8">
                  <Activity className="h-12 w-12 mx-auto mb-4 opacity-30" />
                  <h3 className="text-lg font-medium mb-2">Enter an address or transaction hash</h3>
                  <p className="max-w-md mx-auto">
                    Search for a wallet address or transaction hash to visualize its transaction flow and trace connections
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="history" className="w-full">
          <TabsList className="mb-6 bg-card/50 p-1">
            <TabsTrigger value="history">Trace History</TabsTrigger>
            <TabsTrigger value="anomalies">Detected Anomalies</TabsTrigger>
            <TabsTrigger value="saved">Saved Traces</TabsTrigger>
          </TabsList>
          
          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium mb-2">No trace history yet</h3>
                  <p className="text-muted-foreground mb-4">
                    Search for a wallet address or transaction hash to begin tracing
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="anomalies">
            <Card>
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium mb-2">No anomalies detected</h3>
                  <p className="text-muted-foreground">
                    Anomalies will appear here when detected in your traced transactions
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="saved">
            <Card>
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium mb-2">No saved traces</h3>
                  <p className="text-muted-foreground">
                    Save interesting transaction traces for future reference
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Traces;
