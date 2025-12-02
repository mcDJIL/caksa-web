'use client';
import Image from 'next/image';
import news from '../../../../public/assets/img/news/news-1.png';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import ReactCurvedText from 'react-curved-text';
import { faArrowRight, faChevronRight, faTimes, faLink, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';

interface NewsData {
    id: number;
    category: string;
    title: string;
    author: string;
    date: string;
    image: any;
    content: string;
}

const newsData: NewsData[] = [
    {
        id: 1,
        category: 'SAFMC',
        title: 'CAKSA PENS Enters International Stage at SAFMC 2024 Competition',
        author: 'Areal',
        date: '10 October 2025',
        image: news,
        content: `CAKSA PENS has proudly represented Indonesia at the Singapore Amazing Flying Machine Competition (SAFMC) 2024, marking a significant milestone in our journey as a robotics team. This international competition brought together talented teams from across Asia to showcase their innovations in unmanned aerial vehicle (UAV) technology.

Our team competed in Category D1, demonstrating our custom-built hybrid VTOL drone, the "Cakrawala X1." This advanced UAV features fully autonomous payload delivery capabilities, equipped with precision dropping mechanisms and state-of-the-art LIDAR for obstacle avoidance in urban environments.

The competition tested our technical skills, teamwork, and problem-solving abilities under pressure. Our months of preparation, countless hours of testing, and continuous improvements paid off as we successfully completed all mission objectives with exceptional precision.

This achievement wouldn't have been possible without the dedication of our team members, the support of PENS, and our sponsors who believed in our vision. The experience gained at SAFMC has invaluable lessons that will drive our future innovations.

Looking ahead, we're more motivated than ever to push the boundaries of UAV technology and continue representing Indonesia on the global stage. Stay tuned for more exciting developments from Team CAKSA!`
    },
    {
        id: 2,
        category: 'SAFMC',
        title: 'CAKSA PENS Enters International Stage at SAFMC 2024 Competition',
        author: 'Areal',
        date: '10 October 2025',
        image: news,
        content: `CAKSA PENS has proudly represented Indonesia at the Singapore Amazing Flying Machine Competition (SAFMC) 2024, marking a significant milestone in our journey as a robotics team. This international competition brought together talented teams from across Asia to showcase their innovations in unmanned aerial vehicle (UAV) technology.`
    },
    {
        id: 3,
        category: 'SAFMC',
        title: 'CAKSA PENS Enters International Stage at SAFMC 2024 Competition',
        author: 'Areal',
        date: '10 October 2025',
        image: news,
        content: `CAKSA PENS has proudly represented Indonesia at the Singapore Amazing Flying Machine Competition (SAFMC) 2024, marking a significant milestone in our journey as a robotics team.`
    }
];

const News = () => {
    const [selectedNews, setSelectedNews] = useState<NewsData | null>(null);
    const [showShareMenu, setShowShareMenu] = useState(false);
    const [copySuccess, setCopySuccess] = useState(false);

    const openModal = (news: NewsData) => {
        setSelectedNews(news);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedNews(null);
        setShowShareMenu(false);
        setCopySuccess(false);
        document.body.style.overflow = 'unset';
    };

    const getShareUrl = () => {
        if (typeof window !== 'undefined') {
            return `${window.location.origin}${window.location.pathname}#news`;
        }
        return '';
    };

    const handleCopyLink = async () => {
        if (!selectedNews) return;
        
        try {
            await navigator.clipboard.writeText(getShareUrl());
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const handleShare = (platform: string) => {
        if (!selectedNews) return;
        
        const url = getShareUrl();
        const title = encodeURIComponent(selectedNews.title);
        const text = encodeURIComponent(`Check out this news: ${selectedNews.title}`);
        
        let shareUrl = '';
        
        switch (platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                break;
            case 'whatsapp':
                shareUrl = `https://wa.me/?text=${text}%20${url}`;
                break;
            case 'telegram':
                shareUrl = `https://t.me/share/url?url=${url}&text=${title}`;
                break;
        }
        
        if (shareUrl) {
            window.open(shareUrl, '_blank', 'width=600,height=400');
        }
    };

    return (
        <div id="news" className="relative w-full px-4 py-16 md:py-20 lg:px-10 xl:px-20 2xl:px-[117px]">
            <div className="w-full">
                <div className="flex items-center justify-center gap-6 md:gap-8 lg:gap-12 xl:gap-20 w-screen relative left-1/2 -translate-x-1/2">
                    <div className="flex-1 h-2 bg-[#F58A07]" />
                    <div className="text-center mb-0 shrink-0">
                        <h2 className="font-bold leading-tight text-2xl md:text-3xl lg:text-[40px]">Explore Our <span className="text-[#F58A07]">News</span></h2>
                    </div>
                    <div className="flex-1 h-2 bg-[#F58A07]" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-12 md:mt-16 lg:mt-20">
                    <div className="flex flex-col relative sm:w-[553px] lg:w-full xl:w-[553px]">
                        <div className="relative w-full">
                            <div className="hidden sm:block absolute -top-4 -left-4 md:-top-5 md:-left-5 w-32 h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 border-t-20 border-l-20 lg:border-t-28 lg:border-l-28 border-[#084887] z-10 [clip-path:polygon(0_0,100%_0,0_100%)]"></div>
                            <Image src={newsData[0].image} className='' alt="News" />
                        </div>

                        <div className="mt-4 md:mt-5">
                            <p className='text-[#084887] font-bold text-sm md:text-base border-l-4 border-l-[#084887] pl-3'>
                                {newsData[0].category} <span className='font-medium ms-3 md:ms-6 text-black text-sm md:text-base'>Competition</span>
                            </p>
                            <p className='text-[#084887] font-bold text-lg md:text-xl lg:text-2xl mt-2'>{newsData[0].title}</p>

                            <div className="flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8 mt-4 md:mt-5 mb-6 md:mb-8 lg:mb-10">
                                <div className="flex items-center gap-1 md:gap-2">
                                    <FontAwesomeIcon className='text-[#084887] text-lg md:text-xl' icon={faUserCircle} />
                                    <p className='text-gray-500 text-xs md:text-sm'> By {newsData[0].author}</p>
                                </div>
                                <div className="flex items-center gap-1 md:gap-2">
                                    <FontAwesomeIcon className='text-[#084887] text-lg md:text-xl' icon={faCalendar} />
                                    <p className='text-gray-500 text-xs md:text-sm'> {newsData[0].date}</p>
                                </div>
                            </div>

                            <button 
                                onClick={() => openModal(newsData[0])}
                                className='cursor-pointer text-white bg-[#F58A07] hover:bg-[#d97a06] transition-all duration-300 ease-in-out px-6 py-2 md:px-8 md:py-3 rounded-bl-4xl rounded-r-4xl font-semibold text-sm md:text-base'
                            >
                                READ MORE
                            </button>
                        </div>

                        <div className="hidden sm:block absolute bottom-0 right-0 bg-linear-to-b from-[#0848871A] to-[#08488766] rounded-full flex justify-center">
                            <div className="relative flex items-center justify-center">
                                <img
                                    src="/assets/img/logo/logo-black.png"
                                    alt="logocaksa"
                                    loading="lazy"
                                    className="sm:w-[20%] absolute"
                                />
                                <div className="animate-spin-slow">
                                    <ReactCurvedText
                                        width={100}
                                        height={100}
                                        cx={50}
                                        cy={50}
                                        rx={25}
                                        ry={25}
                                        startOffset={20}
                                        reversed={true}
                                        text="cakrawala skala"
                                        textProps={{
                                            style: { fontSize: 11.3, letterSpacing: 3 },
                                        }}
                                        textPathProps={{ fill: '#000' }}
                                        tspanProps={{}}
                                        ellipseProps={{}}
                                        svgProps={{}}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 md:gap-6 lg:gap-7 relative mt-8 lg:mt-0">
                        {newsData.slice(1).map((item) => (
                            <div key={item.id} className="flex gap-3 md:gap-4 lg:gap-5">
                                <div className="relative shrink-0">
                                    <div className="hidden lg:block absolute -top-3 -left-3 md:-top-4 md:-left-4 lg:-top-5 lg:-left-5 w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 border-t-20 border-l-20 border-[#084887] z-10 [clip-path:polygon(0_0,100%_0,0_100%)]"></div>
                                    <Image src={item.image} className='w-24 md:w-32 lg:w-[270px]' alt="News" />
                                </div>
                                
                                <div className="flex-1 min-w-0">
                                    <p className='text-[#084887] font-bold text-xs md:text-sm lg:text-base border-l-4 border-l-[#084887] pl-2 md:pl-3'>
                                        {item.category} <span className='font-medium ms-1 md:ms-2 lg:ms-4 text-black text-xs md:text-sm lg:text-base'>Competition</span>
                                    </p>
                                    <p className='text-[#084887] font-bold text-sm md:text-base lg:text-xl mt-1 md:mt-2 line-clamp-2 lg:line-clamp-none'>{item.title}</p>

                                    <div className="flex flex-wrap items-center gap-3 md:gap-4 lg:gap-6 mt-3 md:mt-4 lg:mt-5">
                                        <div className="flex items-center gap-1">
                                            <FontAwesomeIcon className='text-[#084887] text-base md:text-lg lg:text-xl' icon={faUserCircle} />
                                            <p className='text-gray-500 text-xs md:text-sm'> By {item.author}</p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <FontAwesomeIcon className='text-[#084887] text-base md:text-lg lg:text-xl' icon={faCalendar} />
                                            <p className='text-gray-500 text-xs md:text-sm'> {item.date}</p>
                                        </div>
                                    </div>

                                    <p 
                                        onClick={() => openModal(item)}
                                        className='text-gray-500 font-semibold cursor-pointer text-xs sm:text-base mt-2 sm:mt-6 hover:text-[#F58A07] transition-colors duration-300'
                                    >
                                        READ MORE <FontAwesomeIcon icon={faChevronRight} />
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedNews && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
                    <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="sticky top-4 float-right mr-4 z-10 bg-[#084887] hover:bg-[#F58A07] text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 shadow-lg"
                        >
                            <FontAwesomeIcon icon={faTimes} className="text-xl" />
                        </button>

                        {/* Modal Content */}
                        <div className="p-6 md:p-8 lg:p-10">
                            {/* Category Badge */}
                            <div className="inline-block">
                                <p className='text-[#084887] font-bold text-sm md:text-base border-l-4 border-l-[#084887] pl-3 mb-4'>
                                    {selectedNews.category} <span className='font-medium ms-3 text-black'>Competition</span>
                                </p>
                            </div>

                            {/* Title */}
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#084887] mb-4 md:mb-6">
                                {selectedNews.title}
                            </h2>

                            {/* Meta Info */}
                            <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-6 md:mb-8 pb-6 border-b-2 border-gray-200">
                                <div className="flex items-center gap-2">
                                    <FontAwesomeIcon className='text-[#084887] text-xl' icon={faUserCircle} />
                                    <p className='text-gray-600 text-sm md:text-base font-medium'>By {selectedNews.author}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FontAwesomeIcon className='text-[#084887] text-xl' icon={faCalendar} />
                                    <p className='text-gray-600 text-sm md:text-base font-medium'>{selectedNews.date}</p>
                                </div>
                            </div>

                            {/* Featured Image */}
                            <div className="relative mb-8 rounded-xl overflow-hidden shadow-lg">
                                <div className="absolute -top-4 -left-4 w-32 h-32 md:w-40 md:h-40 border-t-20 border-l-20 border-[#084887] z-10 [clip-path:polygon(0_0,100%_0,0_100%)]"></div>
                                <Image 
                                    src={selectedNews.image} 
                                    alt={selectedNews.title} 
                                    className="w-full h-auto"
                                />
                            </div>

                            {/* Content */}
                            <div className="prose prose-lg max-w-none">
                                {selectedNews.content.split('\n\n').map((paragraph, index) => (
                                    <p key={index} className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t-2 border-gray-200">
                                <div className="relative">
                                    <button 
                                        onClick={() => setShowShareMenu(!showShareMenu)}
                                        className="cursor-pointer flex items-center gap-2 px-6 py-3 bg-[#084887] hover:bg-[#063661] text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                                    >
                                        <FontAwesomeIcon icon={faArrowRight} />
                                        Share Article
                                    </button>

                                    {/* Share Menu */}
                                    {showShareMenu && (
                                        <div className="absolute bottom-full mb-2 left-0 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 min-w-[280px] z-50 animate-slideUp">
                                            <p className="text-sm font-semibold text-gray-700 mb-3">Share this article</p>
                                            
                                            {/* Social Media Buttons */}
                                            <div className="grid grid-cols-3 gap-3 mb-3">
                                                <button
                                                    onClick={() => handleShare('facebook')}
                                                    className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                                                    title="Share on Facebook"
                                                >
                                                    <FontAwesomeIcon icon={faFacebook} className="text-2xl text-[#1877F2] group-hover:scale-110 transition-transform" />
                                                    <span className="text-xs text-gray-600">Facebook</span>
                                                </button>
                                                
                                                <button
                                                    onClick={() => handleShare('twitter')}
                                                    className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                                                    title="Share on Twitter"
                                                >
                                                    <FontAwesomeIcon icon={faTwitter} className="text-2xl text-[#1DA1F2] group-hover:scale-110 transition-transform" />
                                                    <span className="text-xs text-gray-600">Twitter</span>
                                                </button>
                                                
                                                <button
                                                    onClick={() => handleShare('linkedin')}
                                                    className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                                                    title="Share on LinkedIn"
                                                >
                                                    <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-[#0A66C2] group-hover:scale-110 transition-transform" />
                                                    <span className="text-xs text-gray-600">LinkedIn</span>
                                                </button>
                                                
                                                <button
                                                    onClick={() => handleShare('whatsapp')}
                                                    className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-green-50 transition-colors group"
                                                    title="Share on WhatsApp"
                                                >
                                                    <FontAwesomeIcon icon={faWhatsapp} className="text-2xl text-[#25D366] group-hover:scale-110 transition-transform" />
                                                    <span className="text-xs text-gray-600">WhatsApp</span>
                                                </button>
                                                
                                                <button
                                                    onClick={() => handleShare('telegram')}
                                                    className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                                                    title="Share on Telegram"
                                                >
                                                    <FontAwesomeIcon icon={faTelegram} className="text-2xl text-[#0088cc] group-hover:scale-110 transition-transform" />
                                                    <span className="text-xs text-gray-600">Telegram</span>
                                                </button>
                                            </div>

                                            {/* Copy Link Button */}
                                            <div className="border-t pt-3">
                                                <button
                                                    onClick={handleCopyLink}
                                                    className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                                                        copySuccess 
                                                            ? 'bg-green-500 text-white' 
                                                            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                                                    }`}
                                                >
                                                    <FontAwesomeIcon icon={copySuccess ? faCheck : faLink} />
                                                    {copySuccess ? 'Link Copied!' : 'Copy Link'}
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                
                                <button 
                                    onClick={closeModal}
                                    className="cursor-pointer px-6 py-3 border-2 border-[#084887] text-[#084887] hover:bg-[#084887] hover:text-white font-semibold rounded-lg transition-all duration-300"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default News;
