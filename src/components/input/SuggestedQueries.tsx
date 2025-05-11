import React from 'react';

interface SuggestedQueriesProps {
    onQuerySelect: (query: string) => void;
}

const suggestions = [
    'I need help brainstorming ideas for a new product. How can I start?',
    'I need help brainstorming ideas for a new product. How can I start?',
    'I need help brainstorming ideas for a new product. How can I start?',
];

const SuggestedQueries: React.FC<SuggestedQueriesProps> = ({ onQuerySelect }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 w-full">
            {suggestions.map((suggestion, index) => (
                <button
                    key={index}
                    onClick={() => onQuerySelect(suggestion)}
                    className="bg-blue-50 hover:bg-blue-100 text-blue-700 text-sm p-4 rounded-xl text-left transition-all border border-blue-100 hover:border-blue-200"
                >
                    {suggestion}
                </button>
            ))}
        </div>
    );
};

export default SuggestedQueries;