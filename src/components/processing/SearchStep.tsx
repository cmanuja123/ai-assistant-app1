import React, { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { CircularProgress } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';

interface SearchStepProps {
    isActive: boolean;
    isCompleted: boolean;
    data: {
        title: string;
        query: string;
        sources: string[];
    };
    isLoading: boolean;
    stepNumber: number;
}

const SearchStep: React.FC<SearchStepProps> = ({ isActive, isCompleted, data, isLoading, stepNumber }) => {
    const [isExpanded, setIsExpanded] = useState(true);

    const renderStepIndicator = () => {
        if (isCompleted) {
            return (
                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                    <CheckCircleIcon className="text-white w-4 h-4" />
                </div>
            );
        }
        if (isActive) {
            return isLoading ? (
                <CircularProgress size={24} className="text-blue-600" />
            ) : (
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium">
                    {stepNumber}
                </div>
            );
        }
        return (
            <div className="w-6 h-6 rounded-full border-2 border-gray-300 text-gray-400 flex items-center justify-center text-sm font-medium">
                {stepNumber}
            </div>
        );
    };

    return (
        <div className="relative">
            {!isCompleted && (
                <div className="absolute left-3 top-12 bottom-0 w-0.5 bg-gray-200" />
            )}
            <div className="relative">
                <div
                    className="flex items-center cursor-pointer group"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <div className="flex items-center flex-grow">
                        {renderStepIndicator()}
                        <div className="ml-4 flex items-center">
                            <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                                Search
                            </div>
                            <h3 className="ml-3 text-gray-900 font-medium">
                                {data.title}
                            </h3>
                        </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                        {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </button>
                </div>

                {isExpanded && (
                    <div className="mt-4 ml-10 pl-4">
                        <div className="text-gray-500 text-sm mb-2">Searching</div>
                        <div className="flex items-center bg-gray-50 p-3 rounded-lg mb-3">
                            <SearchIcon className="text-gray-400 w-5 h-5 mr-2" />
                            <span className="text-gray-700 text-sm">{data.query}</span>
                        </div>
                        <div className="text-gray-500 text-sm mb-2">Reading...</div>
                        <div className="flex flex-wrap gap-2">
                            {data.sources.map((source, index) => (
                                <div
                                    key={index}
                                    className="flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                                >
                                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-2" />
                                    {source}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchStep;