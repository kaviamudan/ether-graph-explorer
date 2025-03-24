
import React from 'react';
import { Anomaly } from '@/lib/mockData';
import { AlertTriangle, Clock } from 'lucide-react';
import { formatAddress } from '@/lib/validators';

interface AnomalyPanelProps {
  anomalies: Anomaly[];
  onAnomalyClick: (anomaly: Anomaly) => void;
}

const AnomalyPanel: React.FC<AnomalyPanelProps> = ({ 
  anomalies,
  onAnomalyClick
}) => {
  // Format timestamp
  const formatTime = (timestamp: number): string => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  // Format elapsed time
  const getTimeAgo = (timestamp: number): string => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    
    if (seconds < 60) return `${seconds}s ago`;
    
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };
  
  // Get severity class
  const getSeverityClass = (severity: Anomaly['severity']): string => {
    switch (severity) {
      case 'high':
        return 'bg-destructive/20 text-destructive border-destructive/50';
      case 'medium':
        return 'bg-orange-500/20 text-orange-700 border-orange-500/50';
      case 'low':
        return 'bg-yellow-500/20 text-yellow-700 border-yellow-500/50';
      default:
        return 'bg-gray-500/20 text-gray-700 border-gray-500/50';
    }
  };
  
  return (
    <div className="w-full rounded-xl bg-card shadow-sm p-6 animation-slide-up">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          <span>Anomalies Detected</span>
        </h3>
        
        <div className="text-xs px-3 py-1 bg-destructive/10 text-destructive rounded-full">
          {anomalies.length} issues
        </div>
      </div>
      
      {anomalies.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          No anomalies detected
        </div>
      ) : (
        <div className="space-y-4">
          {anomalies.map((anomaly) => (
            <div 
              key={anomaly.id}
              className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${getSeverityClass(anomaly.severity)}`}
              onClick={() => onAnomalyClick(anomaly)}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`px-2 py-0.5 rounded text-xs uppercase font-medium ${
                      anomaly.severity === 'high' 
                        ? 'bg-destructive text-destructive-foreground' 
                        : anomaly.severity === 'medium'
                          ? 'bg-orange-500 text-white'
                          : 'bg-yellow-500 text-white'
                    }`}>
                      {anomaly.severity}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase">
                      {anomaly.type.replace('-', ' ')}
                    </div>
                  </div>
                  
                  <p className="text-sm font-medium">
                    {anomaly.description}
                  </p>
                  
                  <div className="mt-2 flex flex-wrap gap-1">
                    {anomaly.relatedNodeIds.map((nodeId) => (
                      <span 
                        key={nodeId}
                        className="text-xs bg-background rounded-full px-2 py-0.5"
                      >
                        {formatAddress(nodeId)}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center text-xs text-muted-foreground whitespace-nowrap ml-2">
                  <Clock className="h-3 w-3 mr-1" />
                  {getTimeAgo(anomaly.timestamp)}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {anomalies.length > 0 && (
        <div className="mt-4 text-center">
          <button className="text-sm text-primary hover:underline">
            View all anomalies
          </button>
        </div>
      )}
    </div>
  );
};

export default AnomalyPanel;
