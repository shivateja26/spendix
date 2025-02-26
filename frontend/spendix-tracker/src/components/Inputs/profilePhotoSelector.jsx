import React, { useRef, useState } from 'react';
import { LuUser, LuUpload, LuTrash } from 'react-icons/lu';

const ProfilePhotoSelector = ({ image, setImage }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Update image state
      setImage(file);
      // Generate preview URL from the file
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  return (
    <div className="flex justify-center mb-6">
           
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
        {!image ? (
          <div className='w-20 h-20 flex items-center justify-center bg-gray-200 rounded-full '>
            <LuUser className='text-4xl text-sky-400  relative -right-4' />
            <button type='button'
              className ='w-8 h-8 flex items-center justify-center bg-cyan-400 text-white rounded-full relative -bottom-7'
              onClick ={onChooseFile}>
              <LuUpload/>
            </button>
            </div>
        ):(
          <div className=''>
            <img 
            src={previewUrl}
            alt ="profile Photo"
            className=' w-20 h-20 rounded-full object-cover'
            />
            <button type='button'
              className ='w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full relative -top-5 -right-8'
              onClick ={handleRemoveImage}>
              <LuTrash/>
            </button>
            </div>

        )}
    </div>
  );
};

export default ProfilePhotoSelector;
