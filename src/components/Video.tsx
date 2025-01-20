import { useState } from "react";
import Image from "next/image";
import VideoModal from "./VideoModal";

const Video = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsModalOpen(true);
    setIsPlaying(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsPlaying(false);
  };

  return (
    <div className="relative mt-10 max-w-screen-xl md:mx-auto md:flex md:justify-between md:items-center lg:p-5">
      <h1 className="mb-3 font-bold text-xl text-center md:hidden">
        Embark on a scholarship journey
      </h1>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-10 lg:w-full">
        <div className="flex-1 w-full max-w-7xl">
          {!isPlaying ? (
            <div
              className="relative w-full cursor-pointer group"
              onClick={handlePlay}
            >
              {/* Thumbnail with zoom effect */}
              <div className="relative w-full h-full">
                <Image
                  src="/images/ay_video_poster.jpg"
                  alt="Video Thumbnail"
                  width={500}
                  height={500}
                  priority
                  className="w-full h-full object-cover md:rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  width="71"
                  height="71"
                  viewBox="0 0 71 71"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="35.5"
                    cy="35.5"
                    r="35.5"
                    fill="black"
                    fillOpacity="0.7"
                  />
                  <path
                    d="M49 33.268C50.3333 34.0378 50.3333 35.9623 49 36.7321L29.5 47.9904C28.1667 48.7602 26.5 47.7979 26.5 46.2583L26.5 23.7417C26.5 22.2021 28.1667 21.2398 29.5 22.0096L49 33.268Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          ) : (
            <div
              className="relative w-full h-full flex justify-center items-center"
              onClick={handlePlay}
            ></div>
          )}
        </div>

        {/* Description Section */}
        <div className="flex-1 w-full mt-5 lg:mt-0 lg:px-4">
          <p className="mt-5 px-4 pt-3 text-left text-sm md:hidden">
            Here&apos;s a 100 second video that takes you to a village of Bangladesh
            and shows how your scholarship impacts a day in the life of a
            student who needs it
          </p>

          <div className="flex flex-col">
            <h1 className="mb-3 text-2xl font-bold lg:text-3xl hidden lg:block">
              The scholarship app
            </h1>
            <p className="pt-3 text-left hidden lg:block">
              In Bangladesh, while 98% of children enroll in school, 2 million
              children drop out to work before achieving literacy in order to
              support their families financially. On the flipside, Bangladesh
              has a diaspora population of 10 million in advanced economies who
              wish to make an impact on their homeland. AlterYouth, imagine Uber
              for scholarships, is a C2C scholarship app enabling users from
              around the world to start scholarships directly for financially
              struggling students in Government Primary Schools of Bangladesh,
              through digital banking.
            </p>
          </div>
        </div>
      </div>

      {/* VideoModal Component */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        videoSrc="/ay_explainer.mp4"
      />
    </div>
  );
};

export default Video;
