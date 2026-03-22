// Source - https://stackoverflow.com/a/68979570
// Posted by ABHIJEET KHIRE, modified by community. See post 'Timeline' for change history
// Retrieved 2026-03-22, License - CC BY-SA 4.0

import React, { useState } from "react";

function UploadCard() {
    // Define a state variable to store the selected image
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <label className = "upload-placeholder">
            <input
                type="file"
                accept="image/*"
                hidden
                onChange={(event) => {
                    const file = event.target.files[0];
                    if(!file) return;

                    if(!file.type.startsWith("image/")) {
                        alert("Only images allowed");
                        return;
                    }
                    setSelectedImage(file);
                }        
                }
            />

            {!selectedImage && (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="whitesmoke"
                    strokeWidth="2"
                >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" /> 
                </svg>
            )}

            {selectedImage && (
                <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="preview"
                    className="preview"
                />
            )}
        </label>
    )
}

export default UploadCard;