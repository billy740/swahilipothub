import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  const youtubeVideoId = "bscypssE8Ms"; // Replace with your video ID
  const youtubeThumbnail = `https://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg`;


  return (
    <div className="overflow-hidden bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
            Our mission is to help the Community <br />
            <span className="text-warning">Grow itself</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mt-4">
            Swahilipot Hub Foundation is a non-profit organization that
            meaningfully engages and empowers youth (18 to 35 years) to enable
            them to unleash their full potential. Based in the coastal city of
            Mombasa in Kenya, it is regulated by the NGO Coordination Board of
            Kenya.
          </p>
        </div>

        {/* ✅ Video Section with YouTube Thumbnail */}
        <div className="relative flex justify-center mt-8">
          <a
            href={`https://www.youtube.com/watch?v=${youtubeVideoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
          >
            {/* ✅ Display YouTube Thumbnail */}
            <Image
              className="rounded-lg shadow-lg"
              src={youtubeThumbnail}
              width={800}
              height={450}
              alt="Swahilipot Hub Community Video"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-50 transition">
              <div className="bg-white p-4 rounded-full shadow-lg">
                <i className="bi-play-circle-fill text-primary text-4xl"></i>
              </div>
            </div>
          </a>
        </div>

        {/* ✅ Button */}
        <div className="text-center mt-6">
          <Link href="/about/origin" legacyBehavior>
            <a className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition">
              Our History <i className="bi-chevron-right ml-2"></i>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
