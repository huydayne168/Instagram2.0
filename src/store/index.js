import { createSlice, configureStore } from "@reduxjs/toolkit";

//////////////////////////////
////////// Stories Store:
const storiesInitials = [
    {
        storyAvatar:
            "https://i.pinimg.com/236x/ea/77/1a/ea771a1d4d83b0f61660194fa579619a.jpg",
        ownerName: "pdqn_n",
    },
    {
        storyAvatar:
            "https://i.pinimg.com/236x/0f/dc/69/0fdc69a47e9d082652ff46d6e33f1f86.jpg",
        ownerName: "nthasim",
    },
    {
        storyAvatar:
            "https://i.pinimg.com/236x/ca/fb/b6/cafbb62a06614acccf5e95965f0aff82.jpg",
        ownerName: "RPTmck",
    },
    {
        storyAvatar:
            "https://i.pinimg.com/236x/30/8e/e3/308ee3de8a31472e5831280c1ddcde69.jpg",
        ownerName: "melody",
    },
    {
        storyAvatar:
            "https://i.pinimg.com/236x/3b/91/24/3b912453bb9716f0db2c793b1d53f628.jpg",
        ownerName: "showMe",
    },
    {
        storyAvatar:
            "https://i.pinimg.com/236x/8c/82/82/8c8282c1fa8c92fde30f66be7f48c7df.jpg",
        ownerName: "huyviet_1608",
    },
    {
        storyAvatar:
            "https://i.pinimg.com/236x/f4/24/14/f42414eaa5d220d5c9f4b636a59a3168.jpg",
        ownerName: "cristiano",
    },
    {
        storyAvatar:
            "https://i.pinimg.com/236x/dc/92/1e/dc921ec2e07f9437dc51f2a10694578d.jpg",
        ownerName: "dumpdumphieu",
    },
];

const storiesSlice = createSlice({
    name: "stories",
    initialState: storiesInitials,
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },

        delete(state, action) {
            const index = state.indexOf(action.payload);
            state.slice(index, 1);
        },
    },
});

export const storiesAction = storiesSlice.actions;

//////////////////////////////
////////// Stories Store:
const postsInitials = [
    {
        pictureContent:
            "https://www.h69.design/wp-content/uploads/2020/04/vietnam-maps.jpg",
        ownerName: "huyviet_1608",
        postStatus: "Hoàng Sa, Trường Sa là của Việt Nam!!!",
    },
    {
        pictureContent:
            "https://www.researchgate.net/publication/291346278/figure/fig1/AS:391376370978823@1470322806903/Location-of-Bac-Ninh-and-Dong-Nai-provinces-on-a-map-of-Vietnam.png",
        ownerName: "huyviet_1608",
        postStatus: "Hoàng Sa, Trường Sa là của Việt Nam!!!",
    },
];

const postsSlice = createSlice({
    name: "posts",
    initialState: postsInitials,
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },

        delete(state, action) {
            const index = state.indexOf(action.payload);
            state.slice(index, 1);
        },
    },
});

export const postsAction = postsSlice.actions;

///////////////////////////////////////////////
// store all slices:
const store = configureStore({
    reducer: {
        stories: storiesSlice.reducer,
        posts: postsSlice.reducer,
    },
});
export default store;
