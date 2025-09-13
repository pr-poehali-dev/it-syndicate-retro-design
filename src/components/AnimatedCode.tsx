import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CodeLine {
  text: string;
  delay: number;
}

interface AnimatedCodeProps {
  title: string;
  language: string;
  lines: CodeLine[];
  className?: string;
}

const AnimatedCode = ({ title, language, lines, className = "" }: AnimatedCodeProps) => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [currentChar, setCurrentChar] = useState<number>(0);
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

    const element = document.getElementById(`code-${title}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [title]);

  useEffect(() => {
    if (!isInView || visibleLines >= lines.length) return;

    const currentLine = lines[visibleLines];
    if (currentChar < currentLine.text.length) {
      const timer = setTimeout(() => {
        setCurrentChar(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setVisibleLines(prev => prev + 1);
        setCurrentChar(0);
      }, currentLine.delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, visibleLines, currentChar, lines]);

  return (
    <Card id={`code-${title}`} className={`bg-vintage-dark text-vintage-cream border-vintage-brown/30 font-mono ${className}`}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-serif text-vintage-accent">{title}</CardTitle>
          <span className="text-xs text-vintage-brown bg-vintage-brown/20 px-2 py-1 rounded">
            {language}
          </span>
        </div>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-1 text-sm leading-relaxed">
          {lines.slice(0, visibleLines + 1).map((line, index) => (
            <div key={index} className="flex">
              <span className="text-vintage-brown/60 mr-4 select-none w-8 text-right">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="flex-1">
                {index < visibleLines ? (
                  line.text
                ) : (
                  <>
                    {line.text.slice(0, currentChar)}
                    <span className="animate-blink border-r-2 border-vintage-accent"></span>
                  </>
                )}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AnimatedCode;