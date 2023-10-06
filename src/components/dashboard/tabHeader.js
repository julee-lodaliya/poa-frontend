import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EnhancedTable from "./recordsTable";
import vector from "../../assets/images/vector.svg"

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const [supplierValue, setSupplierValue] = React.useState('');
    const [divisionValue, setDivisionValue] = React.useState('');
    const [assigneeValue, setAssigneeValue] = React.useState('');

    // const handleDropdownSelect = (eventKey) => {
    //     console.log('eventKey', eventKey);
    //     setSelectedValue(eventKey);
    // };

    const handleSupplierChange = (event) => {
        setSupplierValue(event.target.value);
    };
    const handleDivisionChange = (event) => {
        setDivisionValue(event.target.value);
    };
    const handleAssigneeChange = (event) => {
        setAssigneeValue(event.target.value);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const all = (<div className='nav-link'>All<span className='border rounded-5 px-2 bg-light text-black'>6245</span></div>)
    const pending = (<div className='nav-link'>Pending review <span className='border rounded-5 px-2 bg-light text-black'>3</span></div>)
    const acknowledged = (<div className='nav-link'>Acknowledged <span className='border rounded-5 px-2 bg-light text-black'>6247</span></div>)
    const poNotFound = (<div className='nav-link'>PO not found<span className='border rounded-5 px-2 bg-light text-black'>3</span></div>)
    const failed = (<div className='nav-link'>Failed</div>)
    const cancelled = (<div className='nav-link'>Cancelled</div>)

    return (
        <Box sx={{ width: '100%' }}>
            <Box className="d-flex">
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{ sx: { backgroundColor: "#FF9610", height: "2px" } }}>
                    <Tab label={all} {...a11yProps(0)} />
                    <Tab label={pending} {...a11yProps(1)} />
                    <Tab label={acknowledged} {...a11yProps(2)} />
                    <Tab label={poNotFound} {...a11yProps(2)} />
                    <Tab label={failed} {...a11yProps(2)} />
                    <Tab label={cancelled} {...a11yProps(2)} />

                </Tabs>
                    <div className="d-flex justify-content-end select align-items-center ms-auto">
                        <div className='w-50'>
                            {supplierValue ?
                                (<div className='border-1 px-2 rounded-5 bg-light ms-3 text-black text-nowrap' name="cars" id="cars"><img src={vector} className='p-1' onClick={() => { setSupplierValue('') }}></img>Supplier: <span className='font-bold text-black'>{supplierValue}</span></div>)
                                : (<div className='w-100'><select
                                    className='border-1 px-2 rounded-5 bg-light ms-3 w-75 select'
                                    name="cars"
                                    id="cars"
                                    value={supplierValue}
                                    onChange={handleSupplierChange}
                                >
                                    <option value="Supplier">Supplier</option>
                                    <option value="Assa">Assa</option>
                                    <option value="SteelCraft">SteelCraft</option>
                                    <option value="Audi">Audi</option>
                                </select></div>)}
                        </div>
                        <div className='w-50'>
                            {divisionValue ?
                                (<div className='border-1 px-2 rounded-5 bg-light ms-3 text-black text-nowrap' name="cars" id="cars"><img src={vector} className='p-1' onClick={() => { setDivisionValue('') }}></img>Division: <span className='font-bold text-black'>{divisionValue}</span></div>)
                                : (<div className='w-100'><select
                                    className='border-1 px-2 rounded-5 bg-light ms-3 w-75'
                                    name="cars"
                                    id="cars"
                                    value={divisionValue}
                                    onChange={handleDivisionChange}
                                >
                                    <option value="Division">Division</option>
                                    <option value="Division -300">Division -300</option>
                                    <option value="Division -302">Division -302</option>
                                    <option value="Division -305">Division -305</option>
                                    <option value="Division -310">Division -310</option>
                                    <option value="Division -315">Division -315</option>
                                </select></div>)}

                        </div>
                        <div className='w-50'>
                        {assigneeValue ?
                                (<div className='border-1 px-2 rounded-5 bg-light ms-3 text-black text-nowrap' name="cars" id="cars"><img src={vector} className='p-1' onClick={() => { setAssigneeValue('') }}></img>Assignee: <span className='font-bold text-black'>{assigneeValue}</span></div>)
                                : (<div className='w-100'><select
                                    className='border-1 px-2 rounded-5 bg-light ms-3 w-75'
                                    name="cars"
                                    id="cars"
                                    value={assigneeValue}
                                    onChange={handleAssigneeChange}
                                >
                                    <option value="Assignee">Assignee</option>
                                    <option value="poa151@gmail.com">poa151@gmail.com</option>
                                    <option value="poa151@gmail.com">poa151@gmail.com</option>
                                </select></div>)}

                            
                        </div>

                    </div>
            </Box >
            <CustomTabPanel value={value} index={0}>
                <EnhancedTable />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Pending review
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Acknowledged
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                PO not found
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                Failed
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
                Cancelled
            </CustomTabPanel>
        </Box>
    );
}