import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Player from '@vimeo/player';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Testimonial {
  name: string;
  company: string;
  vimeoId: string;  // Changed from vimeoId to vimeoId
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Scott",
    company: "Landscaper",
    vimeoId: "1050841052",
    rating: 5,
  },
  {
    name: "Chris Stuart",
    company: "Dermatologist",
    vimeoId: "1050834775",
    rating: 5,
  },
  {
    name: "Roman",
    company: "Cabinet Remodeling",
    vimeoId: "1050841257",
    rating: 5,
  },
  {
    name: "Ashley",
    company: "Hair Salon",
    vimeoId: "1050929586" ,
    rating: 5,
  },
  // {
  //   name: "Tre",
  //   company: "Detailer",
  //   vimeoId: "1050839834",
  //   rating: 5,
  // },
  {
    name: "Bill",
    company: "Roofer",
    vimeoId: "1050840424",
    rating: 5,
  },
  {
    name: "Diego",
    company: "Commercial Cleaning",
    vimeoId: "1050841540",
    rating: 5,
  },
  

];

const VideoTestimonials = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set());
  const playerRefs = useRef<(Player | null)[]>([]);
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const swiperRef = useRef<any>(null);

  const initializePlayer = async (index: number) => {
    if (!containerRefs.current[index]) return;
    
    const options = {
      id: testimonials[index].vimeoId,
      controls: false,
      responsive: true,
      autoplay: false,
      loop: false,
      background: false, // Changed from true to false
      muted: false, // Explicitly set muted to false
      autopause: true,
      speed: true,
      playsinline: true,
      quality: 'auto'
    };

    const player = new Player(containerRefs.current[index]!, options);
    playerRefs.current[index] = player;

    // Load the video
    try {
      await player.ready();
      // Get and set a thumbnail as poster
      const videoData = await player.getVideoTitle();
      if (videoData) {
        setLoadedVideos(prev => new Set([...prev, index]));
      }
    } catch (error) {
      console.error('Error loading video:', error);
    }

    // Add event listeners
    player.on('ended', () => {
      setPlayingVideo(null);
    });

    return player;
  };

  // Preload visible slides
  const preloadVisibleSlides = async () => {
    if (!swiperRef.current) return;
    
    const activeIndex = swiperRef.current.activeIndex;
    const slidesPerView = swiperRef.current.params.slidesPerView;
    
    // Preload current and next few slides
    for (let i = activeIndex; i < activeIndex + slidesPerView + 1; i++) {
      if (i < testimonials.length && !playerRefs.current[i]) {
        await initializePlayer(i);
      }
    }
  };

  useEffect(() => {
    // Initialize first few videos on mount
    const initializeFirstVideos = async () => {
      // Initialize first 3 videos (or however many are visible initially)
      for (let i = 0; i < Math.min(3, testimonials.length); i++) {
        await initializePlayer(i);
      }
    };

    initializeFirstVideos();
  }, []);

  const stopAllVideos = () => {
    playerRefs.current.forEach((player) => {
      if (player) {
        player.pause();
        player.setCurrentTime(0);
      }
    });
    setPlayingVideo(null);
  };

  const handleVideoClick = async (index: number) => {
    let player = playerRefs.current[index];
    if (!player) {
      player = await initializePlayer(index);
    }
    if (!player) return;

    if (playingVideo === index) {
      player.pause();
      setPlayingVideo(null);
    } else {
      stopAllVideos();
      try {
        await player.setVolume(1); // Ensure volume is up
        await player.play();
        setPlayingVideo(index);
      } catch (error) {
        console.error('Error playing video:', error);
      }
    }
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAllVideos();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      // Cleanup players
      playerRefs.current.forEach((player) => {
        if (player) {
          player.destroy();
        }
      });
    };
  }, []);

  return (
    <section className="-translate-y-44  md:-translate-y-20 px-8 py-4 md:py-8 relative overflow-hidden -mb-20  " style={{
      background: 'radial-gradient(circle at center, rgba(85, 40, 160, 0.76) 0%, rgba(20, 10, 60, 0.9) 55%, transparent 80%)'
    }}>
      <div className="container mx-auto px-0 md:px-4  max-w-3xl xl:max-w-4xl 2xl:max-w-5xl"> {/* Added max-w-6xl */}
        <div className="text-center mb-4 md:mb-6"> {/* Reduced vertical margins */}
          <div className="inline-block px-3 py-1 mb-2 text-xs md:text-sm font-semibold rounded-full bg-primary/10 text-primary">
            Video Testimonials
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-2">Happy Client Reviews</h2>
          <p className="text-sm md:text-base text-muted-foreground">Don't just take our word for it...</p>
        </div>

        <div className="mx-auto testimonials-slider relative">
       
        <button 
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 md:hidden bg-primary/90 text-white p-1 rounded-r-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-2 h-4" />
          </button>
          <button 
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 md:hidden bg-primary/90 text-white p-1 rounded-l-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-2 h-4" />
          </button>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={12} // Reduced spacing
            slidesPerView={1}
            navigation
            pagination={{ 
              clickable: true,
              el: '.testimonials-pagination'
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              stopAllVideos();
              preloadVisibleSlides();
            }}
            className="!pb-8 md:!pb-10 !px-4" // Reduced padding
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="pb-4">
                <div className="relative rounded-lg overflow-hidden group"> {/* Changed to rounded-lg */}
                  <div 
                    className={`relative aspect-video ${loadedVideos.has(index) ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`} // Changed aspect ratio
                    ref={el => containerRefs.current[index] = el}
                    onClick={() => handleVideoClick(index)}
                  >
                    {/* Loading indicator */}
                    {!loadedVideos.has(index) && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/90" />
                    
                    {/* Play button */}
                    {playingVideo !== index && (
                      <button 
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 group-hover:scale-110 transition-transform duration-300"
                        onClick={() => handleVideoClick(index)}
                      >
                        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-primary text-white shadow-lg">
                          <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </button>
                    )}

                    {/* Text overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
                      <div className="space-y-1">
                        <h3 className="text-sm font-bold leading-tight">{testimonial.name}</h3>
                        <p className="text-xs text-white/90 leading-tight">{testimonial.company}</p>
                        <div className="flex text-[10px] text-primary pt-0.5">
                          {"⭐".repeat(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="testimonials-pagination flex justify-center gap-2 mt-4" />
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;