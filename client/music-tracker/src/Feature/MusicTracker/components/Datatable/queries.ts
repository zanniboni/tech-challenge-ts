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
      metricD
      metricE
      metricF
      metricG
      metricH
      metricI
      metricJ
      metricK
      metricL
      metricM
      metricN
      metricO
      metricP
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
