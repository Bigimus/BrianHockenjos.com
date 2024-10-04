import { 
    React, 
    useState, 
    useEffect 
} from 'react';

import {
    Dialog,
    DialogContent,
    DialogActions,
    IconButton,
    Stack,
    Typography,
    Button,
    Box
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

import ScrollableDataGrid from '../Components/Scrollable_DataGrid';
import DropdownMenu from '../Components/Dropdown_Menu';
import AmountCounter from '../Components/Amount_Counter';
import { renderActionsCell } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

const InventoryTrackerPopup = ({ state, stateHandler }) => {
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        fetch("/api/InventoryTracker")  // Since the proxy is set, you don't need the full URL.
            .then((response) => response.json())
            .then((data) => setInventory(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    const inventory_fields = [
        //{ field: 'id', headerName: 'ID', width: 75, sortable: false, hide: true },
        { 
            field: 'name', 
            headerName: 'Resource', 
            headerAlign: 'center', 
            align: 'center', 
            flex: 1 / 2, 
            renderCell: (params) => (
                <a href={params.row.link} target='_blank' rel="noopener noreferrer" children={params.row.name}/>
            )},
        { 
            field: 'remaining', 
            headerName: 'Remaining', 
            type: 'number', 
            headerAlign: 'center', 
            align: 'center', 
            flex: 1 / 4 
        },
        { 
            field: 'total', 
            headerName: 'Total', 
            type: 'number', 
            headerAlign: 'center', 
            align: 'center', 
            flex: 1 / 4 
        }
    ];

    const InventoryTracker = ({ defaultResource }) => {

        const [resource, updateResource] = useState('');
        const [amount, updateAmount] = useState(0);

        const updateInventory = ({ name, amount }) => {
            var total = 0
            if (amount > 0) {
                total = amount
            }

            setInventory(prevInv =>
                prevInv.map(element =>
                    element.name === name ? {
                        ...element,
                        remaining: (element.remaining + amount),
                        total: (element.total + total)
                    }
                        :
                        element
            ))}

        return (
            <Box sx={{ width: 1 / 2, height: 1 }}>
                <Typography align='center' style={{ fontSize: '28px' }} children='Inventory Update Request' />

                <hr />

                <DropdownMenu
                    label="Resource"
                    defaultValue={defaultResource}
                    handler={updateResource}
                    menu_items={inventory.map((element) => element.name)} />

                <hr />

                <AmountCounter amountHandler={updateAmount} amount={amount} negative />

                <hr />

                <Button
                    variant='contained'
                    color='primary'
                    size='small'
                    onClick={() => updateInventory({ name: resource, amount: amount })} >
                    Add
                </Button>

            </Box >
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
                <Stack direction={'row'} sx={{ width: 1, ml: 2.5 }}>
                    <Typography children='Inventory Tracker Demo' align='left' sx={{ width: 1, fontSize: '28px' }} />
                    <IconButton align='right' onClick={() => stateHandler(!state)}>
                        <CloseIcon />
                    </IconButton>
                </Stack>
            </DialogActions>
            <DialogContent>
                <Stack direction={'row'} m={1.25} spacing={1.25} >
                    <ScrollableDataGrid fields={inventory_fields} data={inventory} />
                    <InventoryTracker defaultResource='Fabulosos' />
                </Stack>
            </DialogContent>

        </Dialog>
    )
}

export default InventoryTrackerPopup