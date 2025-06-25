
import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, BookOpen, Users } from 'lucide-react';
import { germanSeparableVerbs } from '../data/germanVerbs';
import { generateVerbsPDF } from '../utils/pdfGenerator';
import VerbCard from '../components/VerbCard';
import SearchBar from '../components/SearchBar';
import PrefixFilter from '../components/PrefixFilter';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPrefix, setSelectedPrefix] = useState('all');

  const filteredVerbs = useMemo(() => {
    let filtered = germanSeparableVerbs;

    // Filter by prefix
    if (selectedPrefix !== 'all') {
      filtered = filtered.filter(group => group.prefix === selectedPrefix);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.map(group => ({
        ...group,
        verbs: group.verbs.filter(verb => 
          verb.verb.toLowerCase().includes(searchTerm.toLowerCase()) ||
          verb.translation.toLowerCase().includes(searchTerm.toLowerCase()) ||
          verb.keyPoint.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(group => group.verbs.length > 0);
    }

    return filtered;
  }, [searchTerm, selectedPrefix]);

  const totalVerbs = germanSeparableVerbs.reduce((acc, group) => acc + group.verbs.length, 0);
  const displayedVerbs = filteredVerbs.reduce((acc, group) => acc + group.verbs.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                German Separable Verbs
              </h1>
              <p className="text-gray-600">
                Master German separable verbs with translations, key points, and examples (AI)
              </p>
            </div>
            <Button 
              onClick={generateVerbsPDF}
              className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
            >
              <Download size={16} />
              Download PDF
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Verbs</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalVerbs}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Prefixes</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{germanSeparableVerbs.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Displayed</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{displayedVerbs}</div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <PrefixFilter selectedPrefix={selectedPrefix} onPrefixChange={setSelectedPrefix} />
        </div>

        {/* Verb Groups */}
        <div className="space-y-8">
          {filteredVerbs.map((group) => (
            <div key={group.prefix} className="bg-white rounded-lg shadow-sm p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {group.prefix.toUpperCase()}
                </h2>
                <p className="text-gray-600 text-lg">{group.description}</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {group.verbs.map((verb, index) => (
                  <VerbCard
                    key={`${group.prefix}-${index}`}
                    verb={verb}
                    prefix={group.prefix}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredVerbs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No verbs found matching your search criteria.</p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedPrefix('all');
              }}
              variant="outline"
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
