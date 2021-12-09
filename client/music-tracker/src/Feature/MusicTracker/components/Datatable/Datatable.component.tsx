/* Imports */
import client from '../../../../services/ApolloSetup'
import { getMusicsQuery } from "./queries";
import MaterialTable from "material-table";
/* import config from './config.json' */

/* Componentes */
/* import { DataGrid, GridRowsProp } from "@mui/x-data-grid"; */
/* const columns = config.column */

/* interface Prop {
  musics?: GridRowsProp
}
 */

const tableColumnConfig = [
  {
    tile: "Song name",
    field: "song",
  },
  {
    title: "Artist Name",
    field: "artist"
  },
  {
    title: "Release date",
    field: "songReleaseDate",
  },
  {
    title: "Play count",
    field: "playCount",
  },
  {
    title: "Metric A",
    field: "metricA",
  },
  {
    title: "Metric B",
    field: "metricB",
  },
  {
    title: "Metric C",
    field: "metricC",
  }
]

const remoteData = () => {
  return client.query({
    query: getMusicsQuery
  }).then((res) => {
    return {
      data: res.data.musics,
      page: 50,
      totalCount: 100
    }
  })
}

const Playlist = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      {<MaterialTable
        columns={tableColumnConfig}
        data={remoteData}
        options={{
          toolbar: false
        }}
      />}
    </div>
  );
}


export default Playlist;
