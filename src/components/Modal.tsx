import React from "react";
import Image from "next/image";
import { School } from '../utils/types'


interface ModalProps {
  isModalOpen: boolean;
  selectedSchool: School | null;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({
  isModalOpen,
  selectedSchool,
  closeModal,
}) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-90 flex z-50 transition-all duration-300 ${
        isModalOpen ? "opacity-100 translate-y" : "opacity-0 translate-y-full"
      }`}
      style={{
        transition: "opacity 0.3s ease, transform 0.3s ease",
      }}
    >
      <div className="w-full flex justify-center items-end">
        <div className="w-full max-w-2xl">
          <div className="flex flex-col w-full md:rounded-2xl rounded-t-2xl ">
            <div className="w-full h-full overflow-hidden relative">
              <button
                className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-lg z-10"
                onClick={closeModal}
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
              <Image
                src={selectedSchool?.image || "/images/school1.jpeg"}
                alt={selectedSchool?.school_name || "school name"}
                className="w-full h-72 object-cover rounded-t-2xl shadow-lg"
                width={500}
                height={500}
              />
            </div>
            <div className="px-5 py-5 bg-white w-full h-full md:rounded-b-2xl">
              <div>
                <h1 className="text-md font-bold mt-4">
                  {selectedSchool?.school_name}
                </h1>
                <div className="text-sm text-gray-500 mt-1">
                  <span className="bg-green-500 text-white text-xs py-1 px-2 rounded-md">
                    {selectedSchool?.scholarshipCount} Scholarship Applicants
                  </span>
                </div>
                <div className="flex items-center mt-2 text-sm text-gray-600">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_6_13109)">
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9C5 10.74 5.5 12.37 6.41 13.84C7.36 15.38 8.61 16.7 9.57 18.24C10.04 18.99 10.38 19.69 10.74 20.5C11 21.05 11.21 22 12 22C12.79 22 13 21.05 13.25 20.5C13.62 19.69 13.95 18.99 14.42 18.24C15.38 16.71 16.63 15.39 17.58 13.84C18.5 12.37 19 10.74 19 9C19 5.13 15.87 2 12 2ZM12 11.75C10.62 11.75 9.5 10.63 9.5 9.25C9.5 7.87 10.62 6.75 12 6.75C13.38 6.75 14.5 7.87 14.5 9.25C14.5 10.63 13.38 11.75 12 11.75Z"
                        fill="#1dc468"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6_13109">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span> {selectedSchool?.location}, Bangladesh</span>
                </div>
              </div>
              <p className="mt-5 text-sm">{selectedSchool?.description}</p>
              <div className="w-full h-full bg-[#f5f5f] opacity-60 mt-5 mb-5 border-t-2"></div>
              <div className="flex flex-col mt-4">
                <div className=" flex flex-row space-x-4">
                  <Image
                    src={selectedSchool?.teacherImage || '/images/ht5.jpeg'}
                    alt={selectedSchool?.school_name || 'teacher name'}
                    className="w-12 h-12 object-cover rounded-full"
                    width={500}
                    height={500}
                  />
                  <div>
                    <h4 className="font-semibold">
                      {selectedSchool?.teacherName}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {selectedSchool?.teacherRole}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 31.887 26.63"
                    className="inline-block"
                  >
                    <g data-name="Group 2220" fill="#1dc468">
                      <path
                        data-name="Path 3103"
                        d="M10.206 12.068a8.449 8.449 0 00-2.335-.341 7.337 7.337 0 00-2.927.6c.736-2.694 2.5-7.342 6.025-7.866a.837.837 0 00.682-.6l.77-2.753a.836.836 0 00-.692-1.054A5.846 5.846 0 0010.942 0C6.715 0 2.529 4.412.762 10.729c-1.036 3.706-1.34 9.278 1.214 12.785a7.625 7.625 0 006.2 3.115h.033a7.418 7.418 0 002-14.561z"
                      />

                      <path
                        data-name="Path 3104"
                        d="M30.93 15.572a7.436 7.436 0 00-4.46-3.5 8.449 8.449 0 00-2.334-.341 7.339 7.339 0 00-2.928.6c.736-2.694 2.5-7.342 6.025-7.866a.837.837 0 00.682-.6l.77-2.753a.836.836 0 00-.692-1.054 5.838 5.838 0 00-.787-.054c-4.227 0-8.413 4.412-10.18 10.729-1.037 3.706-1.341 9.278 1.214 12.786a7.624 7.624 0 006.2 3.115h.033a7.418 7.418 0 006.457-11.062z"
                      />
                    </g>
                  </svg>
                  <span className="text-sm"> {selectedSchool?.quote}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
