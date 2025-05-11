import React, { useState } from 'react';
import Header from '../common/Header';
import QueryInput from '../input/QueryInput';
import SuggestedQueries from '../input/SuggestedQueries';
import AgenticReasoning from '../processing/AgenticReasoning';
import SourcesSidebar from './SourcesSidebar';

const MainLayout: React.FC = () => {
    const [showProcessing, setShowProcessing] = useState(false);
    const [query, setQuery] = useState('');
    const mockSources = [
        { name: 'Test file.pdf', type: 'pdf' as const, path: '#' },
        { name: 'Policy update.pdf', type: 'pdf' as const, path: '#' },
        { name: 'www.abcpolicy.com', type: 'web' as const, path: '#' },
    ];

    const handleQuerySubmit = (submittedQuery: string) => {
        setQuery(submittedQuery);
        setShowProcessing(true);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="flex-grow flex flex-col">
                {showProcessing ? (
                    <>
                        <div className="w-full px-4 py-4 border-b border-gray-200 bg-white">
                            <div className="max-w-7xl mx-auto">
                                <QueryInput onSubmit={handleQuerySubmit} />
                            </div>
                        </div>
                        <div className="flex flex-1 px-4 py-6">
                            <div className="max-w-7xl mx-auto w-full flex gap-8">
                                <div className="w-1/4">
                                    <SourcesSidebar sources={mockSources} />
                                </div>
                                <div className="w-3/4">
                                    <AgenticReasoning query={query} />
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex-grow flex flex-col items-center px-4 py-8">
                        <div className="w-full max-w-2xl">
                            <div className="text-center mb-8">
                                <h1 className="text-3xl font-semibold text-gray-900">Welcome, John</h1>
                                <p className="text-gray-600 mt-2">How can I help you today?</p>
                            </div>
                            <button
                                className="text-sm text-blue-600 hover:text-blue-800 mb-6 font-medium mx-auto block"
                                onClick={() => console.log('Try Asking clicked')}
                            >
                                Try Asking
                            </button>
                            <SuggestedQueries onQuerySelect={handleQuerySubmit} />
                            <QueryInput onSubmit={handleQuerySubmit} />
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default MainLayout;