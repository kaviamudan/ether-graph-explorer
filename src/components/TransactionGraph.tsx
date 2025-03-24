
import React, { useEffect, useRef, useState } from 'react';
import { Graph, Node, Edge } from '@/lib/mockData';
import { formatAddress, formatAmount } from '@/lib/validators';

interface TransactionGraphProps {
  data: Graph;
  highlightedNodes?: string[];
  highlightedEdges?: string[];
  onNodeClick?: (nodeId: string) => void;
  onEdgeClick?: (edgeId: string) => void;
}

const TransactionGraph: React.FC<TransactionGraphProps> = ({
  data,
  highlightedNodes = [],
  highlightedEdges = [],
  onNodeClick,
  onEdgeClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null);
  const [hoveredEdge, setHoveredEdge] = useState<Edge | null>(null);
  
  // Calculate positions for nodes
  const calculateNodePositions = () => {
    const positions: Record<string, { x: number, y: number }> = {};
    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2;
    const radius = Math.min(dimensions.width, dimensions.height) * 0.35;
    
    // Position nodes in a circle
    data.nodes.forEach((node, index) => {
      const angle = (2 * Math.PI * index) / data.nodes.length;
      positions[node.id] = {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      };
    });
    
    return positions;
  };
  
  // Draw the graph
  const drawGraph = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    
    if (!canvas || !ctx || dimensions.width === 0) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Apply transformations
    ctx.save();
    ctx.translate(offset.x, offset.y);
    ctx.scale(scale, scale);
    
    const nodePositions = calculateNodePositions();
    
    // Draw edges
    data.edges.forEach(edge => {
      const sourcePos = nodePositions[edge.source];
      const targetPos = nodePositions[edge.target];
      
      if (!sourcePos || !targetPos) return;
      
      const isHighlighted = highlightedEdges.includes(edge.id);
      
      ctx.beginPath();
      ctx.moveTo(sourcePos.x, sourcePos.y);
      ctx.lineTo(targetPos.x, targetPos.y);
      
      // Edge styling
      ctx.strokeStyle = edge.suspicious 
        ? 'rgba(220, 38, 38, 0.7)' 
        : isHighlighted
          ? 'rgba(37, 99, 235, 0.9)'
          : 'rgba(156, 163, 175, 0.4)';
      
      ctx.lineWidth = edge.suspicious || isHighlighted ? 2 : 1;
      ctx.stroke();
      
      // Draw arrow
      const angle = Math.atan2(targetPos.y - sourcePos.y, targetPos.x - sourcePos.x);
      const arrowLength = 10;
      
      const arrowX = targetPos.x - Math.cos(angle) * 20;
      const arrowY = targetPos.y - Math.sin(angle) * 20;
      
      ctx.beginPath();
      ctx.moveTo(arrowX, arrowY);
      ctx.lineTo(
        arrowX - arrowLength * Math.cos(angle - Math.PI / 6),
        arrowY - arrowLength * Math.sin(angle - Math.PI / 6)
      );
      ctx.lineTo(
        arrowX - arrowLength * Math.cos(angle + Math.PI / 6),
        arrowY - arrowLength * Math.sin(angle + Math.PI / 6)
      );
      ctx.closePath();
      ctx.fillStyle = edge.suspicious 
        ? 'rgba(220, 38, 38, 0.7)' 
        : isHighlighted
          ? 'rgba(37, 99, 235, 0.9)'
          : 'rgba(156, 163, 175, 0.4)';
      ctx.fill();
      
      // Draw value label
      if (scale > 0.6) {
        const labelX = (sourcePos.x + targetPos.x) / 2;
        const labelY = (sourcePos.y + targetPos.y) / 2;
        
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.lineWidth = 2;
        
        ctx.font = '12px Inter';
        const text = `${edge.value} ETH`;
        const metrics = ctx.measureText(text);
        const padding = 4;
        
        ctx.beginPath();
        ctx.roundRect(
          labelX - metrics.width / 2 - padding,
          labelY - 8,
          metrics.width + padding * 2,
          16,
          4
        );
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillText(text, labelX - metrics.width / 2, labelY + 4);
      }
    });
    
    // Draw nodes
    data.nodes.forEach(node => {
      const pos = nodePositions[node.id];
      if (!pos) return;
      
      const isHighlighted = highlightedNodes.includes(node.id);
      const radius = node.type === 'contract' ? 15 : node.type === 'exchange' ? 18 : 12;
      
      // Node background
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
      
      // Fill based on node type and state
      let fillColor = 'rgba(37, 99, 235, 0.8)'; // Default blue for wallets
      
      if (node.type === 'contract') {
        fillColor = 'rgba(162, 28, 175, 0.8)'; // Purple for contracts
      } else if (node.type === 'exchange') {
        fillColor = 'rgba(21, 128, 61, 0.8)'; // Green for exchanges
      }
      
      if (node.suspicious) {
        fillColor = 'rgba(220, 38, 38, 0.8)'; // Red for suspicious
      }
      
      if (isHighlighted) {
        // Add glow effect for highlighted nodes
        const gradient = ctx.createRadialGradient(
          pos.x, pos.y, radius,
          pos.x, pos.y, radius * 1.5
        );
        gradient.addColorStop(0, fillColor);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.save();
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, radius * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.restore();
      }
      
      ctx.fillStyle = fillColor;
      ctx.fill();
      
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Draw label if zoomed in enough
      if (scale > 0.6) {
        ctx.font = 'bold 12px Inter';
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.lineWidth = 3;
        
        const label = formatAddress(node.id);
        const metrics = ctx.measureText(label);
        
        ctx.strokeText(label, pos.x - metrics.width / 2, pos.y + radius + 15);
        ctx.fillText(label, pos.x - metrics.width / 2, pos.y + radius + 15);
      }
    });
    
    ctx.restore();
  };
  
  // Find node or edge under cursor
  const findElementUnderCursor = (x: number, y: number) => {
    const nodePositions = calculateNodePositions();
    
    // Adjust coordinates for pan and zoom
    const adjustedX = (x - offset.x) / scale;
    const adjustedY = (y - offset.y) / scale;
    
    // Check for nodes first (they're on top)
    for (const node of data.nodes) {
      const pos = nodePositions[node.id];
      if (!pos) continue;
      
      const radius = node.type === 'contract' ? 15 : node.type === 'exchange' ? 18 : 12;
      const distance = Math.sqrt(
        Math.pow(adjustedX - pos.x, 2) + Math.pow(adjustedY - pos.y, 2)
      );
      
      if (distance <= radius) {
        setHoveredNode(node);
        setHoveredEdge(null);
        return;
      }
    }
    
    // Then check edges
    for (const edge of data.edges) {
      const sourcePos = nodePositions[edge.source];
      const targetPos = nodePositions[edge.target];
      
      if (!sourcePos || !targetPos) continue;
      
      // Calculate distance from point to line segment
      const lineLength = Math.sqrt(
        Math.pow(targetPos.x - sourcePos.x, 2) + Math.pow(targetPos.y - sourcePos.y, 2)
      );
      
      if (lineLength === 0) continue;
      
      const t = Math.max(0, Math.min(1, (
        (adjustedX - sourcePos.x) * (targetPos.x - sourcePos.x) +
        (adjustedY - sourcePos.y) * (targetPos.y - sourcePos.y)
      ) / (lineLength * lineLength)));
      
      const nearestX = sourcePos.x + t * (targetPos.x - sourcePos.x);
      const nearestY = sourcePos.y + t * (targetPos.y - sourcePos.y);
      
      const distance = Math.sqrt(
        Math.pow(adjustedX - nearestX, 2) + Math.pow(adjustedY - nearestY, 2)
      );
      
      if (distance <= 5) {
        setHoveredNode(null);
        setHoveredEdge(edge);
        return;
      }
    }
    
    // Nothing found
    setHoveredNode(null);
    setHoveredEdge(null);
  };
  
  // Mouse event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    if (isDragging) {
      setOffset({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    } else {
      findElementUnderCursor(x, y);
    }
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleMouseLeave = () => {
    setIsDragging(false);
    setHoveredNode(null);
    setHoveredEdge(null);
  };
  
  const handleClick = () => {
    if (hoveredNode && onNodeClick) {
      onNodeClick(hoveredNode.id);
    } else if (hoveredEdge && onEdgeClick) {
      onEdgeClick(hoveredEdge.id);
    }
  };
  
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Determine direction and calculate new scale
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    const newScale = Math.max(0.1, Math.min(2, scale + delta));
    
    if (newScale !== scale) {
      // Calculate new offset to zoom towards cursor position
      const scaleRatio = newScale / scale;
      
      setOffset({
        x: x - (x - offset.x) * scaleRatio,
        y: y - (y - offset.y) * scaleRatio,
      });
      
      setScale(newScale);
    }
  };
  
  // Set up canvas dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);
  
  // Set up canvas with correct dimensions
  useEffect(() => {
    if (canvasRef.current && dimensions.width > 0) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      if (ctx) {
        // Set canvas dimensions considering device pixel ratio
        const dpr = window.devicePixelRatio || 1;
        canvas.width = dimensions.width * dpr;
        canvas.height = dimensions.height * dpr;
        
        // Scale canvas to match dimensions
        canvas.style.width = `${dimensions.width}px`;
        canvas.style.height = `${dimensions.height}px`;
        
        // Scale context to match DPR
        ctx.scale(dpr, dpr);
        
        // Center the graph initially
        setOffset({
          x: dimensions.width / 2,
          y: dimensions.height / 2,
        });
      }
    }
  }, [dimensions]);
  
  // Draw the graph when data or display parameters change
  useEffect(() => {
    drawGraph();
  }, [
    data, 
    dimensions, 
    scale, 
    offset, 
    highlightedNodes, 
    highlightedEdges,
  ]);
  
  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[600px] rounded-xl bg-card shadow-sm overflow-hidden animation-fade"
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        onWheel={handleWheel}
      />
      
      <div className="absolute bottom-4 right-4 flex gap-2">
        <button 
          className="p-2 rounded-full bg-card shadow-sm"
          onClick={() => setScale(scale + 0.1)}
        >
          +
        </button>
        <button 
          className="p-2 rounded-full bg-card shadow-sm"
          onClick={() => setScale(Math.max(0.1, scale - 0.1))}
        >
          −
        </button>
        <button 
          className="p-2 rounded-full bg-card shadow-sm"
          onClick={() => {
            setScale(1);
            setOffset({ x: dimensions.width / 2, y: dimensions.height / 2 });
          }}
        >
          Reset
        </button>
      </div>
      
      {(hoveredNode || hoveredEdge) && (
        <div 
          className="absolute bottom-4 left-4 p-3 bg-card/90 backdrop-blur rounded-lg shadow-sm max-w-xs"
        >
          {hoveredNode && (
            <div>
              <h4 className="font-medium">{hoveredNode.label}</h4>
              <div className="text-sm text-muted-foreground">
                Type: {hoveredNode.type}
              </div>
              {hoveredNode.balance !== undefined && (
                <div className="text-sm">
                  Balance: {formatAmount(hoveredNode.balance)}
                </div>
              )}
              {hoveredNode.suspicious && (
                <div className="text-destructive text-sm font-medium mt-1">
                  Suspicious activity detected
                </div>
              )}
            </div>
          )}
          
          {hoveredEdge && (
            <div>
              <h4 className="font-medium">Transaction</h4>
              <div className="text-sm">
                Value: {formatAmount(hoveredEdge.value)}
              </div>
              <div className="text-sm text-muted-foreground">
                From: {formatAddress(hoveredEdge.source)}
              </div>
              <div className="text-sm text-muted-foreground">
                To: {formatAddress(hoveredEdge.target)}
              </div>
              <div className="text-sm text-muted-foreground">
                Time: {new Date(hoveredEdge.timestamp).toLocaleString()}
              </div>
              {hoveredEdge.suspicious && (
                <div className="text-destructive text-sm font-medium mt-1">
                  Suspicious transaction
                </div>
              )}
            </div>
          )}
        </div>
      )}
      
      <div className="absolute top-4 left-4 flex gap-2 items-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[rgba(37,99,235,0.8)]"></div>
          <span className="text-xs">Wallet</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[rgba(162,28,175,0.8)]"></div>
          <span className="text-xs">Contract</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[rgba(21,128,61,0.8)]"></div>
          <span className="text-xs">Exchange</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[rgba(220,38,38,0.8)]"></div>
          <span className="text-xs">Suspicious</span>
        </div>
      </div>
    </div>
  );
};

export default TransactionGraph;
