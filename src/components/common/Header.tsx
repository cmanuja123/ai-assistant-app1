import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-white p-4 flex justify-between items-center border-b border-gray-200">
            <div className="flex items-center">
                <div className="bg-blue-600 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-medium mr-2">
                    XX
                </div>
                <span className="text-gray-900 font-medium">Project name</span>
            </div>
            <div className="flex items-center">
                <div className="bg-blue-600 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-medium">
                    XX
                </div>
                <span className="ml-2 text-gray-900">John D</span>
                <svg className="w-4 h-4 ml-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </header>
    );
};

export default Header;