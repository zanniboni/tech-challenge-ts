/* Imports */
import client from '../../../../services/ApolloSetup'
import { getMusicsQuery } from "./queries";
import { useState, useEffect } from 'react'
import config from './config.json'

/* Componentes */
import { DataGrid, GridRowsProp } from "@mui/x-data-grid";
const columns = config.column


const Playlist = () => {

  const [data, setData] = useState({ musics: [{ musics: {} }] });
  useEffect(() => {
    client.query({
      query: getMusicsQuery
    })
      .then(result => {
        console.log(result.data)
        setData(result.data.musics);

      });
  }, [])

  return (


    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        getRowId={(row) =>
          `${row.artist}-${row.song}-${row.songReleaseDate}`
            .split(" ")
            .join("_")
        }
        rows={data as any}
        columns={columns}
        pageSize={50}
        rowsPerPageOptions={[20]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}


export default Playlist;
