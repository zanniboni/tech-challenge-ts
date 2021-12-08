/* Imports */
import { graphql } from '@apollo/client/react/hoc';
import { getMusicsQuery } from "./queries";
import config from './config.json'

/* Componentes */
import { DataGrid, GridRowsProp } from "@mui/x-data-grid";
const columns = config.column

interface Prop {
  musics?: GridRowsProp
}

const Playlist = (props: Prop) => {
  console.log(props.musics);
  return (
    <div style={{ height: 400, width: "100%" }}>
      {/* <DataGrid
        getRowId={(row) =>
          `${row.artist}-${row.song}-${row.songReleaseDate}`
            .split(" ")
            .join("_")
        }
        rows={props.musics}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      /> */}
    </div>
  );
}


export default Playlist;
