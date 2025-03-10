"use client";

import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const partners = [
  { name: 'ABSA', logo: '/absa.jpg', url: 'https://www.absabank.co.ke/personal/' },
  { name: 'Cisco', logo: '/cisco.png', url: 'https://www.cisco.com' },
  { name: 'Hilton', logo: '/hilton.jpg', url: 'https://www.hiltonfoundation.org' },
  { name: 'County', logo: '/county.jpg', url: 'https://web.mombasa.go.ke/' },
  { name: 'Datacamp', logo: '/datacamp.webp', url: 'https://www.datacamp.com/donates' },
  { name: 'GDI', logo: '/global.webp', url: 'https://globaldevincubator.org' },
  { name: 'Huawei', logo: '/huawei.jpg', url: 'https://e.huawei.com/en/talent/learning/#/home' },
  { name: 'ICT', logo: '/ict.jpg', url: 'https://ict.go.ke/ict-and-digital-economy' },
  { name: 'KNCCI', logo: '/kncci.jpg', url: 'https://www.kenyachamber.or.ke/' },
  { name: 'Konza', logo: '/konza.webp', url: 'https://konza.go.ke/' },
  { name: 'Liquid', logo: '/liquid.jpg', url: 'https://liquid.tech' },
  { name: 'Mastercard', logo: '/mastercard.webp', url: 'https://mastercardfdn.org/en/' },
  { name: 'NGO Source', logo: '/ngo.jpg', url: 'https://www.ngosource.org/about-equivalency-determination-on-file-badge' },
  { name: 'NMK', logo: '/nmk.jpg', url: 'https://museums.or.ke/' },
  { name: 'Seacom', logo: '/seacom.jpg', url: 'https://seacom.com' },
];

const Partners = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 logos at a time
    slidesToScroll: 3, // Scroll 3 logos at a time
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Tablets and below
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640, // Mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold text-center">Our Partners</h2>
      <div className="mt-8 max-w-5xl mx-auto">
        <Slider {...settings}>
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center">
              <Link href={partner.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  width={150}
                  height={80}
                  className="cursor-pointer hover:opacity-80 transition"
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Partners;
