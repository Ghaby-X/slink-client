'use client'

import { Input } from './ui/input'
import { useState } from 'react'
import Image from 'next/image'
import ReactPlayer from 'react-player'
import { ChevronLeft, ChevronRight, Upload } from 'lucide-react'

const MediaPreview = ({ field }: { field: any }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files ? Array.from(e.target.files) : [];
        field.onChange(files);
        setCurrentIndex(0);
    }

    const handleNext = () => {
        if (field.value && currentIndex < field.value.length - 1) {
            setCurrentIndex(prev => prev + 1)
        }
    }

    const handlePrevious = () => {
        if (field.value && currentIndex > 0) {
            setCurrentIndex(prev => prev - 1)
        }
    }

    return (
        <div className='w-full space-y-4 bg-gray-50 p-4 rounded-lg shadow-md'>
            <div className='w-full border-2 border-dashed border-gray-300 min-h-72 flex items-center justify-center overflow-hidden rounded-lg relative'>
                {field.value && field.value.length > 0 ? (
                    <>
                        <PreviewContent
                            file={field.value[currentIndex]}
                        />
                        {field.value.length > 1 && (
                            <>
                                <button
                                    onClick={handlePrevious}
                                    disabled={currentIndex === 0}
                                    className='absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow-md hover:bg-white disabled:opacity-50'
                                >
                                    <ChevronLeft className='text-gray-700' />
                                </button>
                                <button
                                    onClick={handleNext}
                                    disabled={currentIndex === field.value.length - 1}
                                    className='absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow-md hover:bg-white disabled:opacity-50'
                                >
                                    <ChevronRight className='text-gray-700' />
                                </button>
                            </>
                        )}
                        <div className='absolute bottom-2 left-0 right-0 flex justify-center'>
                            <span className='bg-black/50 text-white px-3 py-1 rounded-full text-sm'>
                                {currentIndex + 1} / {field.value.length}
                            </span>
                        </div>
                    </>
                ) : (
                    <div className='text-gray-400 text-center'>
                        <Upload className='mx-auto mb-2 text-gray-300' size={48} />
                        No files; Click upload below to upload
                    </div>
                )}
            </div>
            <label htmlFor='fileInput' className='block'>
                <div className='rounded-md p-2 border-2 border-black flex gap-2 items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer'>
                    <Upload size={20} />
                    Select Files
                </div>
            </label>
            <Input
                id='fileInput'
                type='file'
                onChange={handleFileChange}
                multiple
                className='hidden'
                accept='image/*,video/*'
            />
        </div>
    )
}

export default MediaPreview


const PreviewContent = ({ file }: { file: any }) => {

    // function to check if file is an image
    const isImage = (file: any) => file.type.startsWith('image')

    // funtion to check if file is a video
    const isVideo = (file: any) => file.type.startsWith('video')
    return (
        <div className='flex flex-col items-center justify-center w-full h-full'>
            {isImage(file) && (
                <Image
                    src={URL.createObjectURL(file)}
                    width={500}
                    height={500}
                    alt='uploaded'
                    className='max-w-full max-h-full object-contain rounded-lg'
                />
            )}
            {isVideo(file) && (
                <ReactPlayer
                    url={URL.createObjectURL(file)}
                    controls={true}
                    width='100%'
                    height='100%'
                />
            )}
        </div>
    )
}