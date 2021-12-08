import { gql } from "@apollo/client";

const getMusicsQuery = gql`
  query musics {
    musics {
      song
      artist
      songReleaseDate
      playCount
      metricA
      metricB
      metricC
    }
  }
`;

const getSingleMusicQuery = gql`
  query ($song: ID) {
    music(song: $song) {
      song
      artist
      songReleaseDate
      playCount
    }
  }
`;

export { getMusicsQuery, getSingleMusicQuery };