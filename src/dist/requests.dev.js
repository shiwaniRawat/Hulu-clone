"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var API_KEY = "82d39d9d240a2ee07ceaaaa711644cf9";
var _default = {
  fetchTrending: "/trending/all/week?api_key=".concat(API_KEY, "&language=en-US"),
  fetchTopRated: "/movie/top_rated?api_key=".concat(API_KEY, "&language=en-US"),
  fetchActionMovies: "/discover/movie/?api_key=".concat(API_KEY, "&with_genres=28&append_to_response=videos"),
  fetchComedyMovies: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=35"),
  fetchHorrowMovies: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=27"),
  fetchRomanceMovies: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=10749"),
  fetchMystery: "/discover/movie/?api_key=".concat(API_KEY, "&with_genres=9648&append_to_response=videos"),
  fetchSciFi: "/discover/movie/?api_key=".concat(API_KEY, "&with_genres=878&append_to_response=videos"),
  fetchWestern: "/discover/movie/?api_key=".concat(API_KEY, "&with_genres=37&append_to_response=videos"),
  fetchAnimation: "/discover/movie/?api_key=".concat(API_KEY, "&with_genres=16&append_to_response=videos"),
  fetchTv: "/discover/tv?api_key=".concat(API_KEY, "&with_networks=213")
}; // fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
// fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
// fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
// fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
// fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
// fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
// fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
// // fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

exports["default"] = _default;