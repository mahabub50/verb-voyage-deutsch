
import { Button } from '@/components/ui/button';
import { germanSeparableVerbs } from '../data/germanVerbs';

interface PrefixFilterProps {
  selectedPrefix: string;
  onPrefixChange: (prefix: string) => void;
}

const PrefixFilter = ({ selectedPrefix, onPrefixChange }: PrefixFilterProps) => {
  const prefixes = ['all', ...germanSeparableVerbs.map(group => group.prefix)];

  return (
    <div className="mb-6">
      <p className="text-sm font-medium text-gray-700 mb-3">Filter by prefix:</p>
      <div className="flex flex-wrap gap-2">
        {prefixes.map((prefix) => (
          <Button
            key={prefix}
            variant={selectedPrefix === prefix ? 'default' : 'outline'}
            size="sm"
            onClick={() => onPrefixChange(prefix)}
            className="capitalize"
          >
            {prefix}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default PrefixFilter;
