export enum Step {
    Search,
    Consolidate,
    Response,
}

export interface SearchData {
    title: string;
    query: string;
    sources: string[];
}

export interface ConsolidateData {
    title: string;
    status: string;
}

export interface ResponseData {
    title: string;
    steps: { title: string; content: string }[];
}

export const mockApiResponse = {
    search: {
        title: 'Identify use cases designed to check policy compliance with market regulations',
        query: 'policy compliance with market regulations',
        sources: ['PMI Marketplace', 'ideaxyz.com', 'abxyz.com'],
    },
    consolidate: {
        title: 'Consolidate findings',
        status: 'Summarising Findings...',
    },
    response: {
        title: 'Building a Use Case for Policy Compliance Check',
        steps: [
            {
                title: 'Identify Relevant Policies',
                content: 'First, gather all internal policies that need to be checked for compliance. This includes company guidelines, procedures, and operational standards.',
            },
            {
                title: 'Map Regulations',
                content: 'Create a comprehensive list of applicable market regulations and map them to corresponding internal policies.',
            },
        ],
    },
};