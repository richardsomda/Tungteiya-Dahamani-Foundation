'use client'// ProjectGalleryComponent.js
import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { ModalGateway } from 'react-images';

const ProjectGalleryComponent = ({ projectFolder, numImages, imagesPerPage }) => {
    const basePath = `/${projectFolder}/`;

    const [currentPage, setCurrentPage] = useState(1);
    const [currentImages, setCurrentImages] = useState(() =>
        Array.from({ length: imagesPerPage }, (_, index) => ({
            src: `${basePath}${index + 1}.jpg`,
            width: 1,
            height: 1,
        }))
    );
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((index) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const totalPages = Math.ceil(numImages / imagesPerPage);

    const handlePreviousPage = () => {
        const newPage = currentPage - 1;
        if (newPage >= 1) {
            setCurrentPage(newPage);
            const startIndex = (newPage - 1) * imagesPerPage;
            const endIndex = startIndex + imagesPerPage;
            const newImages = Array.from({ length: imagesPerPage }, (_, index) => ({
                src: `${basePath}${startIndex + index + 1}.jpg`,
                width: 1,
                height: 1,
            }));
            setCurrentImages(newImages);
        }
    };

    const handleNextPage = () => {
        const newPage = currentPage + 1;
        if (newPage <= totalPages) {
            setCurrentPage(newPage);
            const startIndex = (newPage - 1) * imagesPerPage;
            const endIndex = startIndex + imagesPerPage;
            const newImages = Array.from({ length: imagesPerPage }, (_, index) => ({
                src: `${basePath}${startIndex + index + 1}.jpg`,
                width: .5,
                height: .5,
            }));
            setCurrentImages(newImages);
        }
    };

    return (
        <div className=''>

            <div className=''>
                {viewerIsOpen ? (
                    <Carousel
                        currentIndex={currentImage}
                        views={currentImages.map((photo) => ({
                            ...photo,
                            srcset: photo.src,
                            caption: '',
                        }))}
                        onClose={closeLightbox}
                    />
                ) : null}


            </div>
            <div className=''>
                <div className='rounded-2xl'>
                    <Gallery photos={currentImages} onClick={(e, { index }) => openLightbox(index)} />
                </div>

                {totalPages > 1 && (
                    <div className='flex justify-center mt-4'>
                        <button
                            className={`mx-1 px-2 py-1 rounded bg-gray-300`}
                            onClick={handlePreviousPage}
                        >
                            Previous
                        </button>
                        <button
                            className={`mx-1 px-2 py-1 rounded bg-gray-300`}
                            onClick={handleNextPage}
                        >
                            Next
                        </button>
                    </div>
                )}

            </div>


        </div>
    );
};

export default ProjectGalleryComponent;
