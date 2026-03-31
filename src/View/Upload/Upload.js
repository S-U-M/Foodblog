import React, { useState } from "react";

// Define a functional component named UploadAndDisplayImage
const Upload = ({ setImages }) => {
    // Define a state variable to store the selected image
    const [selectedImage, setSelectedImage] = useState(null);

    // Return the JSX for rendering
    return (
        <div>
            {/* Conditionally render the selected image if it exists */}
            {selectedImage && (
                <div>
                    {/* Display the selected image */}
                    <img
                        alt="not found"
                        width={"250px"}
                        src={URL.createObjectURL(selectedImage)}
                    />
                    <br /> <br />
                    {/* Button to remove the selected image */}
                    <button onClick={() => setSelectedImage(null)}>Remove</button>
                </div>
            )}

            <br />

            {/* Input element to select an image file */}
            <input
                type="file"
                accept="image/*"
                onChange={(event) => {
                    const file = event.target.files[0];
                    if (!file) return;

                    setImages(prev => {
                        const newImages = [...prev];
                        const index = newImages.findIndex(img => img === null);

                        if (index !== -1) {
                            newImages[index] = file;
                        } else {
                            alert("All upload slots are full!");
                        }

                        return newImages;
                    });
                }}
            />
        </div>
    );
};

// Export the Upload component as default
export default Upload;