import React, { useState } from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';

interface QueryInputProps {
    onSubmit: (query: string) => void;
}

const QueryInput: React.FC<QueryInputProps> = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            onSubmit(inputValue.trim());
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full bg-white rounded-xl shadow-sm border border-gray-200 p-3 flex items-center">
            <button type="button" className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                <AttachFileIcon className="w-5 h-5" />
            </button>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="I want to create a use case to fact check if our internal policies are compliant with market regulations"
                className="flex-grow px-3 py-2 text-gray-700 text-sm focus:outline-none"
            />
            <button
                type="submit"
                className={`p-2 rounded-lg ${
                    inputValue.trim() 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-gray-100 text-gray-400'
                } transition-colors ml-2`}
                disabled={!inputValue.trim()}
            >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
            </button>
        </form>
    );
};

export default QueryInput;