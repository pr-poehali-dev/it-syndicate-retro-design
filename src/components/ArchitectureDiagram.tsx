import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ArchNode {
  id: string;
  label: string;
  x: number;
  y: number;
  icon: string;
  color: string;
}

interface ArchConnection {
  from: string;
  to: string;
  label?: string;
}

interface ArchitectureDiagramProps {
  title: string;
  nodes: ArchNode[];
  connections: ArchConnection[];
  className?: string;
}

const ArchitectureDiagram = ({ title, nodes, connections, className = "" }: ArchitectureDiagramProps) => {
  const [visibleNodes, setVisibleNodes] = useState<string[]>([]);
  const [visibleConnections, setVisibleConnections] = useState<string[]>([]);
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById(`arch-${title}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [title]);

  useEffect(() => {
    if (!isInView) return;

    nodes.forEach((node, index) => {
      setTimeout(() => {
        setVisibleNodes(prev => [...prev, node.id]);
      }, index * 300);
    });

    setTimeout(() => {
      connections.forEach((conn, index) => {
        setTimeout(() => {
          setVisibleConnections(prev => [...prev, `${conn.from}-${conn.to}`]);
        }, index * 200);
      });
    }, nodes.length * 300 + 500);
  }, [isInView, nodes, connections]);

  const getNodeById = (id: string) => nodes.find(n => n.id === id);

  return (
    <Card id={`arch-${title}`} className={`bg-vintage-cream border-vintage-brown/30 ${className}`}>
      <CardHeader>
        <CardTitle className="text-xl font-serif text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-96 bg-vintage-accent/10 rounded-lg overflow-hidden">
          <svg className="absolute inset-0 w-full h-full">
            {connections.map((conn, index) => {
              const fromNode = getNodeById(conn.from);
              const toNode = getNodeById(conn.to);
              if (!fromNode || !toNode) return null;

              const connectionKey = `${conn.from}-${conn.to}`;
              const isVisible = visibleConnections.includes(connectionKey);

              return (
                <g key={index}>
                  <line
                    x1={fromNode.x + 30}
                    y1={fromNode.y + 30}
                    x2={toNode.x + 30}
                    y2={toNode.y + 30}
                    stroke="#8B4513"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className={isVisible ? 'animate-draw-line' : 'opacity-0'}
                    style={{
                      strokeDasharray: isVisible ? '100 0' : '0 100',
                      transition: 'stroke-dasharray 2s ease-in-out'
                    }}
                  />
                  {conn.label && isVisible && (
                    <text
                      x={(fromNode.x + toNode.x) / 2 + 30}
                      y={(fromNode.y + toNode.y) / 2 + 25}
                      fill="#8B4513"
                      fontSize="12"
                      textAnchor="middle"
                      className="animate-fadeInUp"
                    >
                      {conn.label}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>

          {nodes.map((node, index) => {
            const isVisible = visibleNodes.includes(node.id);
            return (
              <div
                key={node.id}
                className={`absolute w-16 h-16 rounded-lg flex flex-col items-center justify-center text-white text-xs font-semibold shadow-lg transition-all duration-500 ${
                  isVisible ? 'animate-fadeInUp scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
                style={{
                  left: node.x,
                  top: node.y,
                  backgroundColor: node.color,
                  animationDelay: `${index * 300}ms`
                }}
              >
                <Icon name={node.icon as any} size={20} className="mb-1" />
                <span className="text-center leading-tight px-1">{node.label}</span>
              </div>
            );
          })}

          <div className="absolute bottom-4 left-4 text-sm text-vintage-brown/70">
            <div className="animate-pulse-slow">● Архитектура в режиме реального времени</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArchitectureDiagram;