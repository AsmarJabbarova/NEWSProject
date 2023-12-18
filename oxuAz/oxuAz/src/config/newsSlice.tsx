// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import type { PayloadAction } from "@reduxjs/toolkit";

// interface CounterState {
//   like: number;
//   disLike: number;
// }

// const initialState: CounterState = {
//   like:0,
//   disLike: 0,
// };

// export const counterSlice = createSlice({
//   name: "counter",

//   initialState,
//   reducers: {
//     handleLike: (state, actions) => {
//         state.like+=1
//         let news={
//             img:actions.payload.img,
//             title:actions.payload.title,
//             category:actions.payload.category,
//             date:actions.payload.date,
//             time:actions.payload.time,
//             disLike:actions.payload.disLike,
//             watch:actions.payload.watch,

//             like:state.like
//         }
//         axios.put(`http://localhost:3000/news/${actions.payload.id}`,news)
//     },
//   },
// });

// export const { handleLike } = counterSlice.actions;

// export default counterSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface NewsData {
  id: number;
  img: string;
  title: string;
  category: string;
  date: string;
  time: string;
  disLike: number;
  watch: number;
  like: number;
}

interface CounterState {
  newsData: NewsData | null;
}

const initialState: CounterState = {
  newsData: null,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setNewsData: (state, action: PayloadAction<NewsData>) => {
      state.newsData = action.payload;
      console.log("newsdataa");
    },
    incrementLike: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      console.log(state.newsData);

      // Eğer newsData null değilse ve itemId newsData'nın id'sine eşitse işlem yap
      if (state.newsData && state.newsData.id === itemId) {
        // Güncellenmiş like değeri içeren yeni bir nesne oluştur
        const updatedNewsData = {
          ...state.newsData,
          like: state.newsData.like + 1,
        };

        // Axios ile güncellenmiş veriyi API'ye gönder
        axios
          .put(`http://localhost:3000/news/${itemId}`, updatedNewsData)
          .then((response) => {
            // API başarılıysa Redux state'ini güncelle
            state.newsData = updatedNewsData;
          })
          .catch((error) => {
            console.error("API hatası:", error);
          });
      }
    },
  },
});
// export const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     setNewsData: (state, action: PayloadAction<NewsData>) => {
//       state.newsData = action.payload;
//     },
//     incrementLike: (state, action: PayloadAction<number>) => {
//       const itemId = action.payload;
//       console.log(itemId);
//       console.log(state.newsData);

//       if (state.newsData && state.newsData.id === itemId) {
//         console.log("ife girdi");

//         const updatedNewsData = {
//           ...state.newsData,
//           like: state.newsData.like + 1,
//         };

//         axios
//           .put(`http://localhost:3000/news/${itemId}`, updatedNewsData)
//           .then((response) => {
//             state.newsData = updatedNewsData;
//           })
//           .catch((error) => {
//             console.error("API hatası:", error);
//           });
//       }
//     },
//   },
// });

export const { setNewsData, incrementLike } = counterSlice.actions;

export default counterSlice.reducer;
// export const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     setNewsData: (state, action: PayloadAction<NewsData>) => {
//       state.newsData = action.payload;
//     },
//     incrementLike: (state) => {
//       if (state.newsData) {
//         console.log("salam");

//         state.newsData.like += 1;

//         // Güncellenmiş like değerini API'ye gönder
//         axios.put(
//           `http://localhost:3000/news/${state.newsData.id}`,
//           state.newsData
//         );
//       }
//     },
//   },
// });
