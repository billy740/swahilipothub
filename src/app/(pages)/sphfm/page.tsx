import Image from 'next/image';
import Link from 'next/link';

export default function Spfm() {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      {/* Listen Section */}
      <div className="text-center py-12">
        <Image src="/swahilipotfm.jpg" alt="Swahilipot FM Logo" width={150} height={100} className="mx-auto" />
        <h2 className="text-3xl font-bold mt-4">Swahilipot FM Live Streaming</h2>
        <h2 className="text-3xl font-bold mt-4">Listen to Swahilipot FM</h2>
        <p className="text-lg mt-2">Enjoy live streaming and stay connected</p>
        <Link href="https://streaming-link.com">
          <button className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 transition text-white rounded-md">
            Listen Live
          </button>
        </Link>
      </div>

      {/* Streaming Section */}
      <div className="container mx-auto py-12 text-center">
        <h2 className="text-3xl font-bold">Watch Swahilipot FM Live</h2>
        <div className="mt-6 w-full max-w-3xl mx-auto bg-black text-white p-6 rounded-md shadow-lg">
          <p className="text-xl">OFFLINE</p>
        </div>
      </div>
    </div>
  );
}
