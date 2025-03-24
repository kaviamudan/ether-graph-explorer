
import React, { useState } from 'react';
import { Wallet, Plus, Search, ExternalLink, Filter } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Wallets: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample wallet data
  const wallets = [
    { 
      address: '0x28c6c06298d514db089934071355e5743bf21d60', 
      name: 'Main Portfolio',
      balance: '125.48 ETH',
      transactions: 542,
      lastActivity: '2 hours ago',
      tags: ['Personal', 'Staking']
    },
    { 
      address: '0x9e84f78d813bb0a1fedee16100b1e18d28cb68d3', 
      name: 'Trading Account',
      balance: '47.32 ETH',
      transactions: 1242,
      lastActivity: '4 hours ago',
      tags: ['Trading', 'High Volume']
    },
    { 
      address: '0x71c7656ec7ab88b098defb751b7401b5f6d8976f', 
      name: 'Cold Storage',
      balance: '350.12 ETH',
      transactions: 32,
      lastActivity: '3 months ago',
      tags: ['Storage', 'Long-term']
    },
    { 
      address: '0xffa5e1d7e87da9c8fb5cedc5182ffc464ad5e6ec', 
      name: 'DeFi Investments',
      balance: '78.91 ETH',
      transactions: 321,
      lastActivity: '1 day ago',
      tags: ['DeFi', 'Yield']
    },
  ];

  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar />
      
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-foreground flex items-center gap-2">
            <Wallet className="h-6 w-6 text-primary" />
            Wallet Management
          </h1>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search wallets..."
                className="bg-card border border-border rounded-full py-2 pl-10 pr-4 w-64 focus:outline-none focus:ring-1 focus:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Wallet
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6 bg-card/50 p-1">
            <TabsTrigger value="all">All Wallets</TabsTrigger>
            <TabsTrigger value="watched">Watched</TabsTrigger>
            <TabsTrigger value="suspicious">Suspicious</TabsTrigger>
            <TabsTrigger value="groups">Groups</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {wallets.map((wallet) => (
                <Card key={wallet.address} className="overflow-hidden transition-all duration-300 hover:neo-glow">
                  <CardHeader className="bg-card/50 border-b border-border p-4 flex flex-row items-center justify-between space-y-0">
                    <div>
                      <CardTitle className="text-lg">{wallet.name}</CardTitle>
                      <p className="text-xs text-muted-foreground font-mono mt-1">{wallet.address.substr(0, 8)}...{wallet.address.substr(-6)}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Filter className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Balance</p>
                        <p className="text-lg font-semibold">{wallet.balance}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Transactions</p>
                        <p className="text-lg font-semibold">{wallet.transactions}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Last Activity</p>
                        <p className="text-base">{wallet.lastActivity}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Tags</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {wallet.tags.map((tag) => (
                            <span key={tag} className="px-2 py-0.5 bg-secondary text-xs rounded-full">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border flex justify-end">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="watched" className="space-y-6">
            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-lg font-medium mb-2">No watched wallets</h3>
                <p className="text-muted-foreground mb-4">Add wallets to your watchlist to monitor their activity</p>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Wallet to Watchlist
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="suspicious">
            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-lg font-medium mb-2">No suspicious wallets</h3>
                <p className="text-muted-foreground">Suspicious wallets will appear here when detected by the system</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="groups">
            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-lg font-medium mb-2">No wallet groups</h3>
                <p className="text-muted-foreground mb-4">Create groups to organize related wallets together</p>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Wallet Group
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Wallets;
