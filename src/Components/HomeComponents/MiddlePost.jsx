import React from "react";
import styles from "./MiddlePost.module.css";
import { storiesAction } from "../../store";
import { useSelector } from "react-redux/es/hooks/useSelector";
import MoreOptionsIcon from "./PostIcons/MoreOptionsIcon";
import LikeIcon from "./PostIcons/LikeIcon";
import CommentIcon from "./PostIcons/CommentIcon";
import SharePostIcon from "./PostIcons/SharePostIcon";
import SaveIcon from "./PostIcons/SaveIcon";
import EmojiIcon from "./PostIcons/EmojiIcon";
const MiddlePost = () => {
    const storiesArr = useSelector((state) => state.stories);
    const postsArr = useSelector((state) => state.posts);
    return (
        <div className={styles["middle"]}>
            <div className={styles["stories"]}>
                <div className={styles["story-list"]}>
                    {/* Render stories here */}
                    {storiesArr.map((item) => {
                        return (
                            <div
                                className={styles["story-list__item"]}
                                key={item.storyAvatar}
                            >
                                <div className={styles["story-avatar"]}>
                                    <img src={item.storyAvatar} alt="avatar" />
                                </div>
                                <div className={styles["story-name"]}>
                                    {item.ownerName}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className={styles["posts"]}>
                <div className={styles["post-list"]}>
                    {/* render post here */}
                    {postsArr.map((item) => {
                        return (
                            <div className={styles["post-list__item"]}>
                                <div className={styles["header"]}>
                                    <div className={styles["avatar"]}>
                                        <img
                                            src="https://i.pinimg.com/originals/b4/1a/04/b41a04050d7f84ee62d88f64484399ba.png"
                                            alt="avatar"
                                        />
                                    </div>
                                    <div
                                        className={styles["post-header__name"]}
                                    >
                                        {item.ownerName}
                                    </div>
                                    <div className={styles["date"]}>1d</div>
                                    <div
                                        className={`${styles["post-more-icon"]} ${styles.btn}`}
                                    >
                                        <MoreOptionsIcon />
                                    </div>
                                </div>
                                <div className={styles["body"]}>
                                    <div className={styles["post-content"]}>
                                        <div className={styles["pictures"]}>
                                            <img
                                                src={item.pictureContent}
                                                alt="pic 1"
                                            />
                                        </div>
                                    </div>

                                    <div className={styles["post-desc"]}>
                                        <div
                                            className={styles["post-interact"]}
                                        >
                                            <div
                                                className={`${styles["like"]} ${styles.btn}`}
                                            >
                                                <LikeIcon />
                                            </div>
                                            <div
                                                className={`${styles["comment"]} ${styles.btn}`}
                                            >
                                                <CommentIcon />
                                            </div>
                                            <div
                                                className={`${styles["send"]} ${styles.btn}`}
                                            >
                                                <SharePostIcon />
                                            </div>
                                            <div
                                                className={`${styles["save"]} ${styles.btn}`}
                                            >
                                                <SaveIcon />
                                            </div>
                                        </div>

                                        <div
                                            className={
                                                styles["post-like-count"]
                                            }
                                        >
                                            <div>999 likes</div>
                                        </div>

                                        <div className={styles["post-status"]}>
                                            <div
                                                className={
                                                    styles["post-status__name"]
                                                }
                                            >
                                                {item.ownerName}
                                            </div>
                                            <div
                                                className={
                                                    styles["post-status__text"]
                                                }
                                            >
                                                <p>{item.postStatus}</p>
                                            </div>
                                        </div>

                                        <div className={styles["view-comment"]}>
                                            Xem tất cả bình luận
                                        </div>
                                        <div className={styles["post-comment"]}>
                                            <form action="">
                                                <input
                                                    type="text"
                                                    name="comment"
                                                    id="comment"
                                                    placeholder="Thêm bình luận..."
                                                />
                                            </form>
                                            <EmojiIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default MiddlePost;
