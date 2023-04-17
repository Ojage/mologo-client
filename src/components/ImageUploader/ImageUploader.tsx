import axios from 'axios';
import { SetStateAction, useCallback, useState } from 'react';
import Dropzone from 'react-dropzone';
import { Helmet } from 'react-helmet';

import './ImageUploader.css';

export interface ImageUploaderProps {
  prop?: string;
}

export function ImageUploader({ prop = 'default value' }: ImageUploaderProps) {
  const [file, setFile] = useState<File | null>(null);
  const [compressedFile, setCompressedFile] = useState<File | null>(null);

  const handleDrop = useCallback(
    (acceptedFiles: SetStateAction<File | null>[]) => {
      setFile(acceptedFiles[0]);
      setCompressedFile(null);
    },
    [],
  );
  function formatFileSize(bytes: number): string {
    const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let unitIndex = 0;
    let size = bytes;

    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex++;
    }

    return `${size.toFixed(2)} ${units[unitIndex]}`;
  }

  const handleCompress = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post(
        `https://mologo.vercel.app/compress/${file?.type?.split('/')[1]}`,
        formData,
        {
          responseType: 'blob',
        },
      );

      const compressedBlob = new Blob([response.data], {
        type: response.headers['content-type'],
      });

      const compressedFile = new File([compressedBlob], file.name, {
        type: response.headers['content-type'],
      });

      setCompressedFile(compressedFile);
    }
  };
  let fileSize = 0;
  if (file) {
    fileSize=file.size
  }
  console.log(compressedFile);
  return (
    <div className="stuf">
      <Helmet>
        <title>Image Uploader</title>
      </Helmet>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {file ? (
              <img
                src={URL.createObjectURL(file)}
                alt="Selected file"
                className="preview-image"
              />
            ) : (
              <p>Drag and drop an image file here, or click to select one</p>
            )}
          </div>
        )}
      </Dropzone>

      {file && <button onClick={handleCompress}>Compress Image</button>}
      <p>
        {file?.name} of size:{" "} {formatFileSize(fileSize)}
      </p>
      {compressedFile && (
        <div>
          <p>Compressed File:</p>
          <a
            href={URL.createObjectURL(compressedFile)}
            download={`mologo_compressed-${file?.name}`}
          >
            Download Compressed Image
          </a>
          <br />
          <img
            src={URL.createObjectURL(compressedFile)}
            alt="Compressed file"
            className="preview-image"
          />
          <strong>
            Of size <u>{" "} {formatFileSize(compressedFile.size)}</u>
          </strong>
        </div>
      )}
    </div>
  );
}
