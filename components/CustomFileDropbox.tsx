import React, { useRef, useState } from "react";

interface CustomFileDropboxProps {
  selectedFile: File | null;
  inputRef: any;
  onFileSelected: (files: File | null) => void;
  onButtonClick: (files: any) => void;
}

const CustomFileDropbox: React.FC<CustomFileDropboxProps> = ({
  onFileSelected,
  selectedFile,
  inputRef,
  onButtonClick,
}) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);

    const file = event.dataTransfer.files[0];
    onFileSelected(file);
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
    onFileSelected(file);
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
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={handleFileInputChange}
        accept="image/*" // You can change this to accept other file types
      />
      {!selectedFile && (
        <label htmlFor="fileInput" className="cursor-pointer group">
          <span
            className="font-bold group-hover:underline bg-gradient-to-r from-[#77CDEB] to-[#1177C8] bg-clip-text text-transparent"
            onClick={onButtonClick}
          >
            Click to upload file
          </span>{" "}
          or drag and drop.
        </label>
      )}
      {selectedFile && <p className="truncate">{selectedFile.name}</p>}
    </div>
  );
};

export default CustomFileDropbox;
