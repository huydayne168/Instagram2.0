import React, { useReducer } from "react";
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
import SettingIcon from "./SideBarIcon/SettingIcon";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import NotificationBar from "./NotificationBar";
const SideBar = () => {
    // Context:
    const init = {
        isSearch: false,
        isNotification: false,
    };

    function reducer(state, action) {
        switch (action.type) {
            case "SEARCH":
                return {
                    isSearch: !state.isSearch,
                    isNotification: false,
                };
            case "NOTIFICATION":
                return {
                    isSearch: false,
                    isNotification: !state.isNotification,
                };
            default:
                break;
        }
    }

    const [state, dispatch] = useReducer(reducer, init);

    // show Search Bar function:
    function showSearch() {
        dispatch({ type: "SEARCH" });
    }

    // show Notification Bar function:
    function showNotification() {
        dispatch({ type: "NOTIFICATION" });
    }

    return (
        <div
            className={`${styles["left-side-bar"]} ${
                state.isSearch ? styles["in-search"] : ""
            } ${state.isNotification ? styles["in-notification"] : ""}`}
        >
            <div className={styles["container"]}>
                {/* LOGO */}

                <div className={styles["logo"]}>
                    <Link to="/" className={styles["logo-text"]}>
                        {/* Logo Text Here */}
                        <LogoText />
                    </Link>

                    <Link to="/" className={styles["logo-img"]}>
                        {/* Logo image here */}
                        <LogoImg />
                    </Link>
                </div>

                {/* Navigation list */}
                <div className={styles["nav-list"]}>
                    <div className={styles["nav-list__wrapper"]}>
                        {/* Home */}
                        <Link to="/">
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
                        </Link>

                        {/* Search */}
                        <div
                            className={`${styles["nav-list__item"]} ${styles["search"]} `}
                            onClick={showSearch}
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
                            onClick={showNotification}
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
                                        src="https://i.pinimg.com/originals/b4/1a/04/b41a04050d7f84ee62d88f64484399ba.png"
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
                        <SettingIcon />
                    </div>
                    <div className={styles["category"]}>Xem thêm</div>
                </div>
            </div>

            {/* Search Bar */}
            <div className={styles["container-search-bar"]}>
                <SearchBar />
            </div>
            {/* Notification Bar */}
            <div className={styles["container-notification-bar"]}>
                <NotificationBar />
            </div>
        </div>
    );
};

export default SideBar;
