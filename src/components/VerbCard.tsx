
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { GermanVerb } from '../data/germanVerbs';

interface VerbCardProps {
  verb: GermanVerb;
  prefix: string;
}

const VerbCard = ({ verb, prefix }: VerbCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="mb-4 hover:shadow-md transition-shadow duration-200">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-blue-600 font-bold text-lg">{verb.verb}</span>
            <span className="text-gray-500 text-sm">({verb.translation})</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="h-8 w-8 p-0"
          >
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </Button>
        </CardTitle>
      </CardHeader>
      
      {isExpanded && (
        <CardContent className="pt-0">
          <div className="space-y-4">
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="text-sm font-medium text-blue-800 mb-1">Key Point:</p>
              <p className="text-blue-700">{verb.keyPoint}</p>
            </div>
            
            <div>
              <p className="text-sm font-medium text-gray-800 mb-2">Examples:</p>
              <ul className="space-y-2">
                {verb.examples.map((example, index) => (
                  <li key={index} className="text-sm text-gray-700 bg-gray-50 p-2 rounded">
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default VerbCard;
