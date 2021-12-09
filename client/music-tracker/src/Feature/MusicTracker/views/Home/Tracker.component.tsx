import { HeaderStyle } from "./Tracker.style";
import DataTable from "../../components/Datatable/Datatable.component";
import RefreshButton from '../../components/ButtonAPI/Button.component'
import { Link } from 'react-router-dom'

const Tracker = () => {
    return (
        <>

            <HeaderStyle>Music Tracker</HeaderStyle>
            <a href="http://localhost:4000/aws/refresh"><RefreshButton></RefreshButton></a>

            <DataTable></DataTable>
        </>
    )
};

export default Tracker;
