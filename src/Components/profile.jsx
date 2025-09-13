import React, { useState } from "react";

const ProfileCard = ({ name, bio, image }) => {

    const [showBio, setShowBio] = useState(false);

    return (
        <div className="profile-card">

            <img
                src={image}
                alt={name}
                className="w-32 h-32 mx-auto rounded-full shadow-md"
            />

            <h2 className="text-xl font-semibold mt-4">{name}</h2>


            <button onClick={() => setShowBio(!showBio)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                {showBio ? "Hide Bio" : "Show Bio"}
            </button>


            {showBio && (
                <p className="mt-3 text-gray-700">{bio}</p>
            )}
        </div>
    );
};

export default ProfileCard;
