import React from 'react'
import {
    DataGrid,
    useGridApiRef,
    gridVisibleColumnDefinitionsSelector,
    gridExpandedSortedRowIdsSelector,
} from '@mui/x-data-grid';

const ScrollableDataGrid = ({ styles, fields, data, slots }) => {
    const apiRef = useGridApiRef();

    const [coordinates, setCoordinates] = React.useState({
        rowIndex: 0,
        colIndex: 0,
    });

    React.useEffect(() => {
        const { rowIndex, colIndex } = coordinates;
        const id = gridExpandedSortedRowIdsSelector(apiRef)[rowIndex];
        const column = gridVisibleColumnDefinitionsSelector(apiRef)[colIndex];
        apiRef.current.setCellFocus(id, column.field);
    }, [apiRef, coordinates]);

    const handleCellClick = (params) => {
        const rowIndex = gridExpandedSortedRowIdsSelector(apiRef).findIndex(
            (id) => id === params.id,
        );
        const colIndex = gridVisibleColumnDefinitionsSelector(apiRef).findIndex(
            (column) => column.field === params.field,
        );
        setCoordinates({ rowIndex, colIndex });
    };
    return (
        <DataGrid
            apiRef={apiRef}
            onCellClick={handleCellClick}            
            hideFooter
            columns={fields}
            rows={data}
            slots={slots}
            disableColumnResize
            disableColumnMenu
        />

    )
}

export default ScrollableDataGrid