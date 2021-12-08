import { HeaderStyle } from "./Tracker.style";
import DataTable from "../../components/Datatable/Datatable.component";
import { Link } from 'react-router-dom'

const Tracker = () => {
    return (
        <>
            <HeaderStyle>Music Tracker</HeaderStyle>
            <DataTable></DataTable>
        </>
    )
};

export default Tracker;
