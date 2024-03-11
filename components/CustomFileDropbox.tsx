import React, { useRef, useState } from "react";

interface CustomFileDropboxProps {
  selectedFile: File | undefined;
  inputRef: any;
  onFileSelected: (files: File | undefined) => void;
  onButtonClick: (files: any) => void;
}

const CustomFileDropbox: React.FC<CustomFileDropboxProps> = ({
  onFileSelected,
  selectedFile,
  inputRef,
  onButtonClick,
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [imageDimensionSupported, setImageDimensionSupported] = useState(false);

  const checkFileSize = (file: File | null) => {
    const previewImage = document.getElementById("preview-image");

    if (file) {
      const img = document.createElement("img");

      // const selectedImage = file;

      const objectURL = URL.createObjectURL(file);

      img.onload = function handleLoad() {
        console.log(`Width: ${img.width}, Height: ${img.height}`);

        if (img.width > 400 || img.height > 400) {
          alert("The image's width or height is more than 400px");
          setImageDimensionSupported(false);
        }
        setImageDimensionSupported(true);
        URL.revokeObjectURL(objectURL);
      };
      img.src = objectURL;
      console.log(img.src);
      const fileReader = new FileReader();
      console.log(fileReader);
      // fileReader.onload = function handleLoad() {
      //   previewImage?.setAttribute('src', img.src);
      //   //  = fileReader.result;

      //   previewImage!.classList.remove("hidden") = 'block';
      // };

      // if (selectedFile) {
      //   container?.appendChild(img);
      // }
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);

    const file = event.dataTransfer.files[0];
    // onFileSelected(file);
    checkFileSize(file);
    if (imageDimensionSupported) {
      onFileSelected(file);
      console.log(imageDimensionSupported);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files && event.target.files[0];
    if (event.target.files && event?.target?.files.length > 0) {
      checkFileSize(event.target.files[0]);
      if (imageDimensionSupported) {
        onFileSelected(event.target.files[0]);
        console.log(imageDimensionSupported);
      }
    }
  };

  return (
    <div
      className={`border-2 border-dashed border-[#A4D0F2] py-[0.875rem] px-[1.1875rem] rounded-lg 
      `}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <input
        id="fileInput"
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={handleFileInputChange}
        accept="image/*" // You can change this to accept other file types
      />
      {!selectedFile ? (
        <span
          className="group-hover:underline cursor-pointer text-transparent bg-clip-text bg-gradient-linear from-[#77CDEB] to-[#1177C8] via-[#d9d9d9]"
          onClick={(event) => {
            event.stopPropagation();
            onButtonClick?.(inputRef);
          }}
        >
          Click to upload file{" "}
          <span className="text-[#D1D1D6]"> or drag and drop</span>
        </span>
      ) : (
        <p className="truncate">{selectedFile.name}</p>
      )}
    </div>
  );
};

export default CustomFileDropbox;
