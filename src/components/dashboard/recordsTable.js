import React, { useState } from "react";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import { Pagination, Stack } from '@mui/material';
import { useFont } from '../../context/FontContext';
import view from '../../assets/images/view.svg'

function createData(ack, date, from, to, status) {
    return {
        ack, date, from, to, status

    };
}

const rows = [
    createData('355250-09', '22/07/2023', 'supplier@domain.com', 'jennifer@CookandBoardman.com', 'Pending review'),
    createData('355250-09', '22/07/2023', 'supplier@domain.com', 'jennifer@CookandBoardman.com', 'Pending review'),
    createData('355250-09', '22/07/2023', 'supplier@domain.com', 'jennifer@CookandBoardman.com', 'Pending review'),
    createData('355250-09', '22/07/2023', 'supplier@domain.com', 'jennifer@CookandBoardman.com', 'Acknowledged'),
    createData('355250-09', '22/07/2023', 'supplier@domain.com', 'jennifer@CookandBoardman.com', 'Acknowledged'),
    createData('355250-09', '22/07/2023', 'supplier@domain.com', 'jennifer@CookandBoardman.com', 'PO not found'),
    createData('355250-09', '22/07/2023', 'supplier@domain.com', 'jennifer@CookandBoardman.com', 'PO not found'),
    createData('355250-09', '22/07/2023', 'supplier@domain.com', 'jennifer@CookandBoardman.com', 'PO not found'),
    createData('355250-09', '22/07/2023', 'supplier@domain.com', 'jennifer@CookandBoardman.com', 'Acknowledged'),
    createData('355250-09', '22/07/2023', 'supplier@domain.com', 'jennifer@CookandBoardman.com', 'Acknowledged'),
    createData('355250-09', '22/07/2023', 'supplier@domain.com', 'jennifer@CookandBoardman.com', 'Acknowledged'),
    createData('355250-09', '22/07/2023', 'supplier@domain.com', 'jennifer@CookandBoardman.com', 'Acknowledged'),
    createData('355250-09', '22/07/2023', 'supplier@domain.com', 'jennifer@CookandBoardman.com', 'Acknowledged'),
    createData('355250-09', '22/07/2023', 'supplier@domain.com', 'jennifer@CookandBoardman.com', 'Acknowledged'),
    createData('355250-09', '22/07/2023', 'supplier@domain.com', 'jennifer@CookandBoardman.com', 'Acknowledged'),
    createData('355250-09', '22/07/2023', 'supplier@domain.com', 'jennifer@CookandBoardman.com', 'Acknowledged'),
    createData('355250-09', '22/07/2023', 'supplier@domain.com', 'jennifer@CookandBoardman.com', 'Acknowledged'),
    createData('355250-09', '22/07/2023', 'supplier@domain.com', 'jennifer@CookandBoardman.com', 'Acknowledged'),
    createData('355250-09', '22/07/2023', 'supplier@domain.com', 'jennifer@CookandBoardman.com', 'Acknowledged'),
    createData('355250-09', '22/07/2023', 'supplier@domain.com', 'jennifer@CookandBoardman.com', 'Acknowledged'),
    createData('355250-09', '22/07/2023', 'supplier@domain.com', 'jennifer@CookandBoardman.com', 'Acknowledged'),
    createData('355250-09', '22/07/2023', 'supplier@domain.com', 'jennifer@CookandBoardman.com', 'Acknowledged'),
    createData('355250-09', '22/07/2023', 'supplier@domain.com', 'jennifer@CookandBoardman.com', 'Acknowledged'),
    createData('355250-09', '22/07/2023', 'supplier@domain.com', 'jennifer@CookandBoardman.com', 'Acknowledged'),
    createData('355250-09', '22/07/2023', 'supplier@domain.com', 'jennifer@CookandBoardman.com', 'Acknowledged'),
    createData('355250-09', '22/07/2023', 'supplier@domain.com', 'jennifer@CookandBoardman.com', 'Acknowledged'),
    createData('355250-09', '22/07/2023', 'supplier@domain.com', 'jennifer@CookandBoardman.com', 'Acknowledged'),
    createData('355250-09', '22/07/2023', 'supplier@domain.com', 'jennifer@CookandBoardman.com', 'Acknowledged'),
    createData('355250-09', '22/07/2023', 'supplier@domain.com', 'jennifer@CookandBoardman.com', 'Acknowledged'),
    createData('355250-09', '22/07/2023', 'supplier@domain.com', 'jennifer@CookandBoardman.com', 'Acknowledged'),
    createData('355250-09', '22/07/2023', 'supplier@domain.com', 'jennifer@CookandBoardman.com', 'Acknowledged'),
    createData('355250-09', '22/07/2023', 'supplier@domain.com', 'jennifer@CookandBoardman.com', 'Acknowledged'),
    createData('355250-09', '22/07/2023', 'supplier@domain.com', 'jennifer@CookandBoardman.com', 'Acknowledged'),
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 1,
        numeric: false,
        disablePadding: false,
        label: 'Ack #',
    },
    {
        id: 2,
        numeric: true,
        disablePadding: false,
        label: 'Date',
    },
    {
        id: 3,
        numeric: true,
        disablePadding: false,
        label: 'From',
    },
    {
        id: 4,
        numeric: true,
        disablePadding: false,
        label: 'To',
    },
    {
        id: 5,
        numeric: true,
        disablePadding: false,
        label: 'Status',
    },
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const CreateSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead sx={{ backgroundColor: '#E5ECF1', border: '1px solid #CCCCCC' }} className='table-header'>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={CreateSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
                <TableCell></TableCell>
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(1);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [hoveredRow, setHoveredRow] = useState(-1);
    const { setFont } = useFont();

    const HandleMouseEnter = (index) => {
        setHoveredRow(index);
      };
      
      const HandleMouseLeave = () => {
        setHoveredRow(-1);
      };

    const HandleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
    const HandleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.name);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const HandleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    const HandleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(1);
    };

    const IsSelected = (name) => selected.indexOf(name) !== -1;

    const emptyRows = page > 0 ? Math.max(0, (1 + page - 1) * rowsPerPage - rows.length) : 0;

    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    const VisibleRows = React.useMemo(() =>
        stableSort(rows, getComparator(order, orderBy)).slice(start, end),
        [order, orderBy, page, rowsPerPage]);

    const HandlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const totalPages = Math.ceil(rows.length / rowsPerPage);

    return (
        <Box sx={{ width: '100%'}} className="p-0">
            {/* <RecordsTableHeader /> */}
            <Paper sx={{ width: '100%', mb: 2 }} className={setFont}>
                <div style={{ display: 'flex', alignItems: 'center', margin: '0px', padding: '0px', justifyContent: 'space-between', backgroundColor: '#E5ECF1', border: '1px solid #CCCCCC' }}>
                    <Typography variant="body2" color="textSecondary" sx={{ padding: '0.3rem' }}>
                        Records: {rows.length}
                    </Typography>

                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page - 1}
                        onPageChange={(event, newPage) => HandlePageChange(event, newPage + 1)}
                        onRowsPerPageChange={HandleChangeRowsPerPage}
                    />
                </div>
                <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    <TableContainer>
                        <Table
                            sx={{ minWidth: 750  }}
                            aria-labelledby="tableTitle"
                            size={'small'}
                        >
                            <EnhancedTableHead
                                numSelected={selected.length}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={HandleSelectAllClick}
                                onRequestSort={HandleRequestSort}
                                rowCount={rows.length}
                            />
                            <TableBody>
                                {VisibleRows.map((row, index) => {
                                    const isItemSelected = IsSelected(row.name);
                                    const labelId = `enhanced-table-checkbox-${index}`;
                                    const status = `${row.status === 'Pending review' ? 'status-pending' : row.status === 'Acknowledged' ? 'status-acknowledged' : 'status-po-not-found'}`
                                    const pendingStatus = `${row.status === 'Pending review' ? 'font-bold' : ''}`
                                    return (
                                        <TableRow
                                            onMouseEnter={() => HandleMouseEnter(index)}
                                            onMouseLeave={HandleMouseLeave}
                                            className={setFont}
                                            hover
                                            onClick={(event) => HandleClick(event, row.name)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.name}
                                            selected={isItemSelected}
                                            sx={{ cursor: 'pointer', border: '1px solid #CCCCCC' }}
                                        >
                                            <TableCell
                                            className={pendingStatus}
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                align='left'
                                            // className='table-padding'
                                            >
                                                {row.ack}
                                            </TableCell>
                                            <TableCell align="left" className={pendingStatus}>{row.date}</TableCell>
                                            <TableCell align="left" className={pendingStatus}>{row.from}</TableCell>
                                            <TableCell align="left" className={pendingStatus}>{row.to}</TableCell>
                                            <TableCell align="left" className={pendingStatus}><span className={status}>{row.status}</span></TableCell>
                                            <TableCell align="right" sx={{width: '6rem'}} className={pendingStatus}>
                                                {hoveredRow === index ? <div><img src={view}></img> <span>View</span></div>: ""}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                                {emptyRows > 0 && (
                                    <TableRow
                                        style={{
                                            height: (33) * emptyRows,
                                        }}
                                    >
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <Stack spacing={2} direction="row" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#E5ECF1' }}>
                    <TablePagination
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page - 1}
                        rowsPerPageOptions={[]}
                        nextIconButtonProps={{ style: { display: 'none' } }}
                        backIconButtonProps={{ style: { display: 'none' } }}
                    />
                    <Pagination
                        count={totalPages}
                        page={page}
                        onChange={HandlePageChange}
                        showFirstButton
                        showLastButton
                    />
                </Stack>
            </Paper>
        </Box>
    );
}
