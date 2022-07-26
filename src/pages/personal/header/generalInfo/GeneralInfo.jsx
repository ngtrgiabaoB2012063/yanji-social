import React, { useState, useRef, useEffect } from "react";
import { UilCamera } from "@iconscout/react-unicons";

import AvatarFriends from "./AvatarFriends";
import avtarImg from "../../../../images/9183187b4cdc35c7ab00aa084cefed22.jpg";

import "./generalInfo.css";

function GeneralInfo() {
    const [avatar, setAvatar] = useState("");
    const avatarImg = useRef(null);

    // CLEANUP URL WHEN CHANGE IMG
    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar]);

    // SAVE IMG TO LOCAL
    useEffect(() => {
        avatar && window.localStorage.setItem("avatar", avatar);
    }, [avatar]);

    // GET IMG FROM LOCAL
    useEffect(() => {
        const data = window.localStorage.getItem("avatar");
        setAvatar(data);
    }, [avatar]);

    const handleUploadAvatar = (e) => {
        const file = e.target.files[0];
        if (file && file.type.substring(0, 5) === "image") {
            setAvatar(URL.createObjectURL(file));
        } else {
            setAvatar(null);
        }
    };

    return (
        <div className="px-5 header-title">
            <div className="d-flex align-items-center justify-content-between header-title-container">
                <div
                    className="avatar position-relative"
                    onClick={() => {
                        avatarImg.current.click();
                    }}
                >
                    <img
                        src={avatar || avtarImg}
                        alt="avatar"
                        className="rounded-circle"
                    />
                    <input
                        type="file"
                        ref={avatarImg}
                        style={{ display: "none" }}
                        onChange={handleUploadAvatar}
                    />
                    <span className="position-absolute border border-primary rounded-circle p-2 edit-avatar">
                        <UilCamera />
                    </span>
                </div>

                <div className="information ms-4 mt-5">
                    <p className="name">Nguyen Tran Gia Bao</p>
                    <div className="friends mb-4">1,2k Friends</div>

                    <div className="profile-title">
                        <AvatarFriends />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GeneralInfo;
