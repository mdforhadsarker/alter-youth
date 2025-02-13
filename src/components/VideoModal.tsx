import { FC } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
}

const VideoModal: FC<VideoModalProps> = ({ isOpen, onClose, videoSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
      <div className="relative w-full max-w-xl bg-white rounded-lg flex justify-center items-center">
        {/* Video Player */}
        <div className="relative w-full h-full">
          <video className="w-full rounded-lg" controls autoPlay>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      {/* Close button */}
      <button
        className="absolute top-8 right-4 md:right-60 bg-white rounded-full p-3 shadow-lg z-10 mt-10"
        onClick={onClose}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.0807 17.9981L30.6275 5.42624C30.8043 5.21731 30.6557 4.8999 30.3824 4.8999H27.1762C26.9874 4.8999 26.8066 4.98428 26.682 5.12892L17.9833 15.499L9.28468 5.12892C9.16414 4.98428 8.98334 4.8999 8.79048 4.8999H5.58423C5.31102 4.8999 5.16236 5.21731 5.33914 5.42624L15.886 17.9981L5.33914 30.57C5.29954 30.6166 5.27414 30.6735 5.26594 30.7341C5.25775 30.7947 5.26711 30.8563 5.29291 30.9118C5.31872 30.9672 5.35988 31.014 5.41152 31.0467C5.46316 31.0795 5.5231 31.0967 5.58423 31.0963H8.79048C8.97932 31.0963 9.16013 31.012 9.28468 30.8673L17.9833 20.4972L26.682 30.8673C26.8025 31.012 26.9833 31.0963 27.1762 31.0963H30.3824C30.6557 31.0963 30.8043 30.7789 30.6275 30.57L20.0807 17.9981Z"
            fill="black"
            fillOpacity="0.85"
          />
        </svg>
      </button>
    </div>
  );
};

export default VideoModal;
