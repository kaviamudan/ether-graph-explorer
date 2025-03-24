
import React, { useState } from 'react';
import { Bell, Globe, Key, LayoutGrid, Moon, Save, Settings as SettingsIcon, Shield, Sun, User } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from "@/hooks/use-toast";

const Settings: React.FC = () => {
  const { toast } = useToast();
  const [theme, setTheme] = useState('dark');
  
  const handleSaveSettings = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully",
    });
  };

  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar />
      
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-foreground flex items-center gap-2">
            <SettingsIcon className="h-6 w-6 text-primary" />
            Settings & Preferences
          </h1>
          
          <Button className="flex items-center gap-2" onClick={handleSaveSettings}>
            <Save className="h-4 w-4" />
            Save Settings
          </Button>
        </div>
        
        <Tabs defaultValue="general" className="w-full">
          <div className="flex">
            <div className="w-56 mr-8">
              <TabsList className="flex flex-col h-auto p-0 bg-transparent space-y-1">
                <TabsTrigger 
                  value="general" 
                  className="w-full justify-start px-4 py-2 data-[state=active]:bg-secondary"
                >
                  <LayoutGrid className="h-4 w-4 mr-2" />
                  General
                </TabsTrigger>
                <TabsTrigger 
                  value="appearance" 
                  className="w-full justify-start px-4 py-2 data-[state=active]:bg-secondary"
                >
                  <Sun className="h-4 w-4 mr-2" />
                  Appearance
                </TabsTrigger>
                <TabsTrigger 
                  value="account" 
                  className="w-full justify-start px-4 py-2 data-[state=active]:bg-secondary"
                >
                  <User className="h-4 w-4 mr-2" />
                  Account
                </TabsTrigger>
                <TabsTrigger 
                  value="notifications" 
                  className="w-full justify-start px-4 py-2 data-[state=active]:bg-secondary"
                >
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger 
                  value="security" 
                  className="w-full justify-start px-4 py-2 data-[state=active]:bg-secondary"
                >
                  <Shield className="h-4 w-4 mr-2" />
                  Security
                </TabsTrigger>
                <TabsTrigger 
                  value="api" 
                  className="w-full justify-start px-4 py-2 data-[state=active]:bg-secondary"
                >
                  <Key className="h-4 w-4 mr-2" />
                  API Access
                </TabsTrigger>
              </TabsList>
            </div>
            
            <div className="flex-1">
              <TabsContent value="general" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>General Settings</CardTitle>
                    <CardDescription>
                      Configure basic application settings and preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Default Network</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                          <input 
                            type="radio" 
                            id="ethereum" 
                            name="network" 
                            className="w-4 h-4 accent-primary"
                            defaultChecked 
                          />
                          <label htmlFor="ethereum">Ethereum Mainnet</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input 
                            type="radio" 
                            id="goerli" 
                            name="network" 
                            className="w-4 h-4 accent-primary"
                          />
                          <label htmlFor="goerli">Goerli Testnet</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input 
                            type="radio" 
                            id="polygon" 
                            name="network" 
                            className="w-4 h-4 accent-primary" 
                          />
                          <label htmlFor="polygon">Polygon</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input 
                            type="radio" 
                            id="arbitrum" 
                            name="network" 
                            className="w-4 h-4 accent-primary" 
                          />
                          <label htmlFor="arbitrum">Arbitrum</label>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">Language</h3>
                      <select className="w-full bg-card border border-border rounded-md px-4 py-2">
                        <option value="en">English</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="es">Spanish</option>
                        <option value="ja">Japanese</option>
                      </select>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">Date & Time Format</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm mb-1">Date Format</label>
                          <select className="w-full bg-card border border-border rounded-md px-4 py-2">
                            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm mb-1">Time Format</label>
                          <select className="w-full bg-card border border-border rounded-md px-4 py-2">
                            <option value="12">12-hour (AM/PM)</option>
                            <option value="24">24-hour</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="appearance" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Appearance</CardTitle>
                    <CardDescription>
                      Customize the look and feel of the application
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Theme</h3>
                      <div className="flex space-x-4">
                        <button
                          className={`relative p-4 rounded-lg border-2 ${theme === 'light' ? 'border-primary' : 'border-border'}`}
                          onClick={() => setTheme('light')}
                        >
                          <div className="w-24 h-24 bg-white rounded-md flex items-center justify-center text-black">
                            <Sun className="h-12 w-12" />
                          </div>
                          <div className="mt-2 text-center">Light</div>
                        </button>
                        
                        <button
                          className={`relative p-4 rounded-lg border-2 ${theme === 'dark' ? 'border-primary' : 'border-border'}`}
                          onClick={() => setTheme('dark')}
                        >
                          <div className="w-24 h-24 bg-[#0f172a] rounded-md flex items-center justify-center text-white">
                            <Moon className="h-12 w-12" />
                          </div>
                          <div className="mt-2 text-center">Dark</div>
                        </button>
                        
                        <button
                          className={`relative p-4 rounded-lg border-2 ${theme === 'system' ? 'border-primary' : 'border-border'}`}
                          onClick={() => setTheme('system')}
                        >
                          <div className="w-24 h-24 bg-gradient-to-r from-white to-[#0f172a] rounded-md flex items-center justify-center">
                            <Globe className="h-12 w-12 text-gray-700" />
                          </div>
                          <div className="mt-2 text-center">System</div>
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">Color Accent</h3>
                      <div className="grid grid-cols-5 gap-4">
                        <button className="w-10 h-10 rounded-full bg-purple-500 hover:ring-2 hover:ring-white/50"></button>
                        <button className="w-10 h-10 rounded-full bg-blue-500 hover:ring-2 hover:ring-white/50"></button>
                        <button className="w-10 h-10 rounded-full bg-green-500 hover:ring-2 hover:ring-white/50"></button>
                        <button className="w-10 h-10 rounded-full bg-red-500 hover:ring-2 hover:ring-white/50"></button>
                        <button className="w-10 h-10 rounded-full bg-orange-500 hover:ring-2 hover:ring-white/50"></button>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">Display Density</h3>
                      <div className="flex space-x-4">
                        <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md">Compact</button>
                        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">Default</button>
                        <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md">Comfortable</button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="account" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>
                      Manage your account information and preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <h3 className="text-lg font-medium mb-2">Please login to access account settings</h3>
                      <p className="text-muted-foreground mb-4">
                        Account settings are available after signing in
                      </p>
                      <Button>
                        Login to Continue
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="notifications" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Settings</CardTitle>
                    <CardDescription>
                      Configure how and when you receive notifications
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Notification Preferences</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <label htmlFor="alert-transactions">Large transactions</label>
                            <input 
                              type="checkbox" 
                              id="alert-transactions" 
                              className="w-4 h-4 accent-primary" 
                              defaultChecked
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <label htmlFor="alert-suspicious">Suspicious activities</label>
                            <input 
                              type="checkbox" 
                              id="alert-suspicious" 
                              className="w-4 h-4 accent-primary" 
                              defaultChecked
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <label htmlFor="alert-wallet">Watched wallet activity</label>
                            <input 
                              type="checkbox" 
                              id="alert-wallet" 
                              className="w-4 h-4 accent-primary" 
                              defaultChecked
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <label htmlFor="alert-system">System notifications</label>
                            <input 
                              type="checkbox" 
                              id="alert-system" 
                              className="w-4 h-4 accent-primary" 
                              defaultChecked
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-4">Delivery Methods</h3>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-2">
                            <input 
                              type="checkbox" 
                              id="method-browser" 
                              className="w-4 h-4 accent-primary" 
                              defaultChecked
                            />
                            <label htmlFor="method-browser">Browser notifications</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input 
                              type="checkbox" 
                              id="method-email" 
                              className="w-4 h-4 accent-primary" 
                            />
                            <label htmlFor="method-email">Email notifications</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input 
                              type="checkbox" 
                              id="method-telegram" 
                              className="w-4 h-4 accent-primary" 
                            />
                            <label htmlFor="method-telegram">Telegram bot</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input 
                              type="checkbox" 
                              id="method-discord" 
                              className="w-4 h-4 accent-primary" 
                            />
                            <label htmlFor="method-discord">Discord webhook</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="security" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                    <CardDescription>
                      Configure security options for your account
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <h3 className="text-lg font-medium mb-2">Please login to access security settings</h3>
                      <p className="text-muted-foreground mb-4">
                        Security settings are available after signing in
                      </p>
                      <Button>
                        Login to Continue
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="api" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>API Access</CardTitle>
                    <CardDescription>
                      Manage API keys and access tokens
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <h3 className="text-lg font-medium mb-2">Please login to access API settings</h3>
                      <p className="text-muted-foreground mb-4">
                        API settings are available after signing in
                      </p>
                      <Button>
                        Login to Continue
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
