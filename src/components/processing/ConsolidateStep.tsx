import React, { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { CircularProgress } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TypingIndicator from '../common/TypingIndicator';

interface ConsolidateStepProps {
    isActive: boolean;
    isCompleted: boolean;
    data: {
        title: string;
        status: string;
    };
    isLoading: boolean;
    stepNumber: number;
}

const ConsolidateStep: React.FC<ConsolidateStepProps> = ({ isActive, isCompleted, data, isLoading, stepNumber }) => {
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
                                Consolidate
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

                {isExpanded && isActive && (
                    <div className="mt-4 ml-10 pl-4">
                        <div className="text-cyan-500">
                            <TypingIndicator text="Summarising Findings..." speed={100} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ConsolidateStep;