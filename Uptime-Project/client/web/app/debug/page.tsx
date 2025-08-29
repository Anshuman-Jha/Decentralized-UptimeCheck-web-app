"use client";
import { useWebsites } from '@/hooks/useWebsites';

export default function DebugPage() {
    const { websites, refreshWebsites } = useWebsites();

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold mb-6">Debug: Raw API Data</h1>

                <button
                    onClick={refreshWebsites}
                    className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Refresh Data
                </button>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-4">Raw Websites Data:</h2>
                    <pre className="bg-gray-100 p-4 rounded overflow-auto text-sm">
                        {JSON.stringify(websites, null, 2)}
                    </pre>
                </div>

                <div className="bg-white p-6 rounded-lg shadow mt-6">
                    <h2 className="text-lg font-semibold mb-4">Data Analysis:</h2>
                    <div className="space-y-2">
                        <p><strong>Total websites:</strong> {websites.length}</p>
                        {websites.map((website, index) => (
                            <div key={website.id} className="border-l-4 border-blue-500 pl-4">
                                <p><strong>Website {index + 1}:</strong></p>
                                <p>ID: {website.id}</p>
                                <p>URL: {website.url}</p>
                                <p>Has WebsiteTicks: {website.WebsiteTicks ? 'Yes' : 'No'}</p>
                                <p>WebsiteTicks count: {website.WebsiteTicks?.length || 0}</p>
                                {website.WebsiteTicks && website.WebsiteTicks.length > 0 && (
                                    <div className="ml-4">
                                        <p><strong>First tick:</strong></p>
                                        <pre className="bg-gray-100 p-2 rounded text-xs">
                                            {JSON.stringify(website.WebsiteTicks[0], null, 2)}
                                        </pre>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
