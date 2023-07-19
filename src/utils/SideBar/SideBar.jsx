import React from "react";
import styles from "./SideBar.module.css";
import LogoText from "./SideBarIcon/LogoText";
import LogoImg from "./SideBarIcon/LogoImg";
import HomeIcon from "./SideBarIcon/HomeIcon";
import SearchIcon from "./SideBarIcon/SearchIcon";
import DiscoveryIcon from "./SideBarIcon/DiscoveryIcon";
import ReelsIcon from "./SideBarIcon/ReelsIcon";
import MessageIcon from "./SideBarIcon/MessageIcon";
import NotificationIcon from "./SideBarIcon/NotificationIcon";
import NewIcon from "./SideBarIcon/NewIcon";
const SideBar = () => {
    // Context:

    return (
        <div className={styles["left-side-bar"]}>
            <div className={styles["container"]}>
                {/* LOGO */}
                <a href="#!">
                    <div className={styles["logo"]}>
                        <a href="#home" className={styles["logo-text"]}>
                            {/* Logo Text Here */}
                            <LogoText />
                        </a>

                        <a href="#home" className={styles["logo-img"]}>
                            {/* Logo image here */}
                            <LogoImg />
                        </a>
                    </div>
                </a>

                {/* Navigation list */}
                <div className={styles["nav-list"]}>
                    <div className={styles["nav-list__wrapper"]}>
                        {/* Home */}
                        <a href="#home">
                            <div
                                className={`${styles["nav-list__item"]} ${styles["home"]} `}
                            >
                                <div className="icon">
                                    {/* Home icon here */}
                                    <HomeIcon />
                                </div>
                                <div className={styles["category"]}>
                                    Trang chủ
                                </div>
                            </div>
                        </a>

                        {/* Search */}
                        <div
                            className={`${styles["nav-list__item"]} ${styles["search"]} `}
                        >
                            <div className={styles["icon"]}>
                                {/* Search icon here */}
                                <SearchIcon />
                            </div>
                            <div className={styles["category"]}>Tìm kiếm</div>
                        </div>

                        {/* Discovery */}
                        <a href="./discovery.html">
                            <div
                                className={`${styles["nav-list__item"]} ${styles["discovery"]} `}
                            >
                                <div className={styles["icon"]}>
                                    {/* Discovery icon here */}
                                    <DiscoveryIcon />
                                </div>
                                <div className={styles["category"]}>
                                    Khám phá
                                </div>
                            </div>
                        </a>

                        {/* Reels */}
                        <div
                            className={`${styles["nav-list__item"]} ${styles["reels"]} `}
                        >
                            <div className={styles["icon"]}>
                                {/* Reels Icon here */}
                                <ReelsIcon />
                            </div>
                            <div className={styles["category"]}>Reels</div>
                        </div>

                        {/* Message */}
                        <a href="./message.html">
                            <div
                                className={`${styles["nav-list__item"]} ${styles["message"]} `}
                            >
                                <div className={styles["icon"]}>
                                    {/* Message Icon here */}
                                    <MessageIcon />
                                </div>
                                <div className={styles["category"]}>
                                    Tin nhắn
                                </div>
                            </div>
                        </a>

                        {/* Notification */}
                        <div
                            className={`${styles["nav-list__item"]} ${styles["notification"]} `}
                        >
                            <div className={styles["icon"]}>
                                {/* Notification Icon here */}
                                <NotificationIcon />
                            </div>
                            <div className={styles["category"]}>Thông báo</div>
                        </div>

                        {/* New */}
                        <div
                            className={`${styles["nav-list__item"]} ${styles["new-post"]} `}
                        >
                            <div className={styles["icon"]}>
                                {/* New Icon here */}
                                <NewIcon />
                            </div>
                            <div className={styles["category"]}>Tạo</div>
                        </div>

                        {/* Personal page */}
                        <a href="./personalPage.html">
                            <div
                                className={`${styles["nav-list__item"]} ${styles["personal-page"]} `}
                            >
                                <div className={styles["icon"]}>
                                    <img
                                        src="./asset/image/avatar.jpg"
                                        alt="avatar"
                                    />
                                </div>
                                <div className={styles["category"]}>
                                    HuyQuynh
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className={styles["more"]}>
                    <div className={`${styles["icon"]} ${styles["setting"]}`}>
                        <svg
                            aria-label="Cài đặt"
                            className="_ab6-"
                            color="rgb(245, 245, 245)"
                            fill="rgb(245, 245, 245)"
                            height="24"
                            role="img"
                            viewBox="0 0 24 24"
                            width="24"
                        >
                            <line
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                x1="3"
                                x2="21"
                                y1="4"
                                y2="4"
                            ></line>
                            <line
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                x1="3"
                                x2="21"
                                y1="12"
                                y2="12"
                            ></line>
                            <line
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                x1="3"
                                x2="21"
                                y1="20"
                                y2="20"
                            ></line>
                        </svg>
                    </div>
                    <div className={styles["category"]}>Xem thêm</div>
                </div>
            </div>

            {/* <div className="container-search-bar">
                <div class="wrapper">
                    <div class="heading">
                        <h2>Tìm kiếm</h2>
                    </div>
                    <div class="search-input">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Tìm kiếm"
                        />
                    </div>
                    <div class="latest-search">
                        <div class="heading">
                            <p>Gần đây</p>
                            <div class="btn">Xóa tất cả</div>
                        </div>
                        <div class="body">
                            <div class="search-list__item">
                                <div class="avatar">
                                    <img
                                        src="https://i.pinimg.com/236x/ea/77/1a/ea771a1d4d83b0f61660194fa579619a.jpg"
                                        alt="avatar"
                                    />
                                </div>
                                <div class="desc">
                                    <div class="name">pdqn_n</div>
                                    <div class="real-name">Phạm Diễm Quỳnh</div>
                                </div>
                                <div class="del-btn btn">
                                    <svg
                                        aria-label="Đóng"
                                        class="x1lliihq x1n2onr6"
                                        color="rgb(142, 142, 142)"
                                        fill="rgb(142, 142, 142)"
                                        height="16"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        width="16"
                                    >
                                        <title>Đóng</title>
                                        <polyline
                                            fill="none"
                                            points="20.643 3.357 12 12 3.353 20.647"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="3"
                                        ></polyline>
                                        <line
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="3"
                                            x1="20.649"
                                            x2="3.354"
                                            y1="20.649"
                                            y2="3.354"
                                        ></line>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-notification-bar">
                <div class="wrapper">
                    <div class="heading">
                        <h2>Thông báo</h2>
                    </div>

                    <div class="body">
                        <h3>Bạn chưa có thông báo nào</h3>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default SideBar;
