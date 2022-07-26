import React, { useState, useEffect } from "react";

import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Post.css";

import API from "../../../../api";

const Post = () => {
    const [avatar, setAvatar] = useState("");

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

    // GET RANDOWM IMG
    const [randomPhoto, setRandomPhoto] = useState("");

    useEffect(() => {
        axios
            .get(API.RANDOM_IMG_URL)
            .then((res) => {
                setRandomPhoto(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            {/* POST 1 */}
            <div className=" d-flex flex-column personal-post p-3 mt-5">
                {/* NAME */}
                <div className="d-flex personal-post__name">
                    <div className="d-flex ">
                        <span className="avatar">
                            <img src={avatar} alt="" />
                        </span>
                        <div className="ms-3">
                            <span className="text-white text-bold fs-4">
                                Nguyễn Trần Gia Bảo
                            </span>
                            <div className="form__status d-flex align-items-center">
                                <span className="me-2 text-white">
                                    <FontAwesomeIcon icon="fa-solid fa-lock" />
                                </span>
                                <select name="" id="" defaultValue="public">
                                    <option value="public">Public</option>
                                    <option value="private">Private</option>
                                </select>
                                <span className="ms-2">● 1 phút trước</span>
                            </div>
                        </div>
                    </div>
                    <div className="dot">...</div>
                </div>
                {/* CONTENT */}
                <div
                    className="d-flex personal-post__content mt-4"
                    style={{
                        borderBottom: `${
                            avatar ? "" : "1px solid rgba(204, 204, 204, 0.147)"
                        }`,
                        paddingBottom: `${avatar ? "" : "1.5rem"}`,
                    }}
                >
                    hello
                </div>
                {/* ACTION */}
                <div className="d-flex justify-content-center personal-post__action mt-4 pt-4">
                    <div className="personal-post__action-btn d-flex justify-content-center align-items-center">
                        <span className="icon">
                            <FontAwesomeIcon icon="fa-regular fa-thumbs-up " />
                        </span>
                        Like
                    </div>
                    <div className="personal-post__action-btn d-flex justify-content-center align-items-center">
                        <span className="icon">
                            <FontAwesomeIcon icon="fa-regular fa-comment " />
                        </span>
                        Comment
                    </div>
                </div>
            </div>

            {/* POST 2 */}
            <div className=" d-flex flex-column personal-post p-3 mt-5">
                {/* NAME */}
                <div className="d-flex personal-post__name">
                    <div className="d-flex ">
                        <span className="avatar">
                            <img src={avatar} alt="" />
                        </span>
                        <div className="ms-3">
                            <span className="text-white text-bold fs-4">
                                Nguyễn Trần Gia Bảo
                            </span>
                            <div className="form__status d-flex align-items-center">
                                <span className="me-2 text-white">
                                    <FontAwesomeIcon icon="fa-solid fa-lock" />
                                </span>
                                <select name="" id="" defaultValue="public">
                                    <option value="public">Public</option>
                                    <option value="private">Private</option>
                                </select>
                                <span className="ms-2">● 1 phút trước</span>
                            </div>
                        </div>
                    </div>
                    <div className="dot">...</div>
                </div>
                {/* CONTENT */}
                <div
                    className="d-flex personal-post__content mt-4"
                    style={{
                        borderBottom: `${
                            avatar ? "" : "1px solid rgba(204, 204, 204, 0.147)"
                        }`,
                        paddingBottom: `${avatar ? "1.5rem" : ""}`,
                    }}
                >
                    hello
                </div>
                {/* IMAGE */}
                <img src={randomPhoto} alt="" />
                {/* ACTION */}
                <div className="d-flex justify-content-center personal-post__action mt-4 pt-4">
                    <div className="personal-post__action-btn d-flex justify-content-center align-items-center">
                        <span className="icon">
                            <FontAwesomeIcon icon="fa-regular fa-thumbs-up " />
                        </span>
                        Like
                    </div>
                    <div className="personal-post__action-btn d-flex justify-content-center align-items-center">
                        <span className="icon">
                            <FontAwesomeIcon icon="fa-regular fa-comment " />
                        </span>
                        Comment
                    </div>
                    <div className="personal-post__action-btn d-flex justify-content-center align-items-center">
                        <span className="icon">
                            <FontAwesomeIcon icon="fa-solid fa-share" />
                        </span>
                        Share
                    </div>
                </div>
            </div>
        </>
    );
};

export default Post;
