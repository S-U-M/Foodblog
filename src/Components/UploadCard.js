// Source - https://stackoverflow.com/a/68979570
// Posted by ABHIJEET KHIRE, modified by community. See post 'Timeline' for change history
// Retrieved 2026-03-22, License - CC BY-SA 4.0

import React, { useEffect, useState } from "react";
import PlusIcon from "../Asset/SVGIcons/PlusIcon";
import ProgressRing from "../Asset/SVGIcons/ProgressRing";

function UploadCard() {
    // Define a state variable to store the selected image
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageUrl, setSelectedImageUrl] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);

    useEffect(() => {
        return () => {
            if (selectedImageUrl) {
                URL.revokeObjectURL(selectedImageUrl);
            }
        };
    }, [selectedImageUrl]);

    const simulateUpload = (file) => {
        setIsUploading(true);
        setUploadProgress(0);

        let progress = 0;

        const interval = setInterval(() => {
            progress += 10;
            setUploadProgress(progress);

            if (progress >= 100) {
                clearInterval(interval);
                setIsUploading(false);
            }
        }, 150); // speed of upload (adjustable)
    }

    return (
        <label className = "upload-placeholder">
            <input
                type="file"
                accept="image/*"
                hidden
                onChange={(event) => {
                    const file = event.target.files[0];
                    if (!file) return;

                    if (!file.type.startsWith("image/")) {
                        alert("Only images allowed");
                        return;
                    }

                    if (selectedImageUrl) {
                        URL.revokeObjectURL(selectedImageUrl);
                    }

                    const objectUrl = URL.createObjectURL(file);
                    setSelectedImage(file);
                    setSelectedImageUrl(objectUrl);
                    simulateUpload(file);
                }}
            />

            {/*Loader */}
            {isUploading && (
                <div className="loader-overlay">
                    <div className="spinner">
                        <ProgressRing progress={uploadProgress} />
                        <div className="loader-text">
                            {uploadProgress}%
                        </div>
                    </div>
                </div>
            )}

            {/*Plus Icon*/}
            <PlusIcon style={{ width: 35}} />

            {/*Preview*/}            
            {selectedImage && selectedImageUrl && (
                <img
                    src={selectedImageUrl}
                    alt="preview"
                    className="preview"
                />
            )}
        </label>
    );
}

export default UploadCard;