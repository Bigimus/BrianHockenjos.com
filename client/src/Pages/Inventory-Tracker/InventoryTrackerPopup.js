import { React, useState } from 'react';

import {
    Dialog,
    DialogContent,
    DialogActions,
    IconButton,
    Stack,
    Divider,
    Typography,
    Button,
    TextField,
    Box
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

import ScrollableDataGrid from '../Components/Scrollable_DataGrid';
import DropdownMenu from '../Components/Dropdown_Menu';
import ScrollableTextField from '../Components/Scrollable_Text_Field';
import AmountCounter from '../Components/Amount_Counter';

const InventoryTrackerPopup = ({ state, stateHandler }) => {
    const [page, setPage] = useState(false)

    const sdg_styles = {
        width: 1
    }

    const inventory_fields = [
        //{ field: 'id', headerName: 'ID', width: 75, sortable: false, hide: true },
        { field: 'resource', headerName: 'Resource', headerAlign: 'center', align: 'left', flex: 1/2},
        { field: 'remaining', headerName: 'Remaining', type: 'number', headerAlign: 'center', align: 'center', flex: 1/4},
        { field: 'total', headerName: 'Total', type: 'number', headerAlign: 'center', align: 'center', flex: 1/4}
    ];
    const inventory_data = [
        { id: 0, resource: 'Bleach', remaining: 24, total: 50 },
        { id: 1, resource: 'Fabuloso', remaining: 13, total: 24 },
        { id: 2, resource: 'Windex', remaining: 34, total: 45 },
        { id: 3, resource: 'Gloves', remaining: 2, total: 16 },
        { id: 4, resource: 'Stainless Steel Cleaner', remaining: 50, total: 50 },
        { id: 5, resource: 'Toilet Bowl Cleaner', remaining: 10, total: 10 },
        { id: 6, resource: 'Toilet Paper', remaining: 55, total: 150 },
        { id: 7, resource: 'Paper Towels', remaining: 20, total: 20 },
        { id: 8, resource: 'Febreeze', remaining: 20, total: 20 },
    ]

    const InventoryTracker = ({ defaultResource }) => {
        const resourceMenuItems = ["Fabuloso", "Bleach", "Gloves", "Windex"];

        const [resource, updateResource] = useState('');
        const [amount, updateAmount] = useState(0);
        const [ID, updateID] = useState('');
        const [data, updateData] = useState([]);

        return (
            <Box sx={{ width: 1 / 2, height: 1 }}>
                <Typography align='center' style={{ fontSize: '28px'}} children='Inventory Update Request' />

                <hr />

                <DropdownMenu
                    label="Resource"
                    defaultValue={defaultResource}
                    handler={updateResource}
                    menu_items={resourceMenuItems} />

                <hr />

                <AmountCounter amountHandler={updateAmount} amount={amount} negative/>

                <hr />

                <TextField onChange={updateID} variant='outlined' label='Employee ID Number ' size='small' fullWidth />

                <hr />

                <Button
                    variant='contained'
                    color='primary'
                    size='small'
                    onClick={() => updateData([...data, { resource: resource, amount: amount }])}>
                    Add
                </Button>

                <ScrollableTextField
                    data={data}
                    handler={updateData}
                    disabled={true}
                    rows={7}
                />
            </Box>
        )
    }
    return (
        <Dialog open={state}
            sx={{
                '& .MuiPaper-root': {
                    width: '70%', // Adjust width here
                    maxWidth: '90%', // Optional: max width to ensure responsiveness
                    maxHeight: '%'
                },
            }}>
            <DialogActions>
                <Stack direction={'row'} sx={{width: 1, ml: 2.5}}>
                    <Typography children='Inventory Tracker Demo' align='left' sx={{width: 1, fontSize: '28px'}}/>
                    <IconButton align='right' onClick={() => stateHandler(!state)}>
                        <CloseIcon />
                    </IconButton>
                </Stack>
            </DialogActions>
            <DialogContent>
                <Stack direction={'row'} m={1.25} spacing={1.25} >
                    <ScrollableDataGrid fields={inventory_fields} data={inventory_data}/>
                    <InventoryTracker defaultResource='Fabulosos' />
                </Stack>
            </DialogContent>

        </Dialog>
    )
}

export default InventoryTrackerPopup