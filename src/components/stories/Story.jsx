import StoriesData from "../../ApiJSON/StoriesData";
import CurrentUserStory from "../../ApiJSON/CurrentUserStory";

import ImgAdd from "../../assets/svg/add.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./story.css";

export default function Story() {
  return (
    <div
      className="stories-wrapper py-3 px-2 mt-2"
      style={{
        background: "#f4f4f4",
        width: "100%",
      }}
    >
      <div className="stories">
        <div className="story current-user">
          <div className="user">
            <img
              src={
                CurrentUserStory &&
                CurrentUserStory.map((user) => user.storyProfile)
              }
              alt="StoryPicture"
            />
          </div>

          <img
            className="story-profile"
            src={CurrentUserStory && CurrentUserStory.map((user) => user.story)}
            style={{ minHeight: "200px", height: "170px" }}
            alt="StoryPicture"
          />

          <span>
            <img
              src={ImgAdd && ImgAdd}
              alt=""
              style={{ minHeight: "20px", height: "20px", width: "20px" }}
            />
          </span>
          <span>your story</span>
        </div>
        <Swiper
          className="swiper-class"
          style={{ width: "80%" }}
          slidesPerView={4}
          spaceBetween={7}
        >
          {StoriesData.map((story) => (
            <SwiperSlide style={{ width: "80%" }}>
              <div className="story" key={story.id}>
                <div className="user">
                  <img src={story.storyProfile} alt="" />
                </div>
                <img
                  className="story-profile"
                  src={story.story}
                  alt=""
                  style={{ minHeight: "200px", height: "170px" }}
                />
                <span>{story.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
