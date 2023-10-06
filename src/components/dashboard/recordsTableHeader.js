import React, { useState } from 'react'
import { Col, Dropdown, DropdownItemText, Row } from 'react-bootstrap'
import Sortby from "../../assets/images/sort-by.svg"
import Filter from "../../assets/images/filter.svg"
import Search from "../../assets/images/search.svg"
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TabHeader from './tabHeader';
import sort from '../../assets/images/sort.svg'
import SingleInputDateRangePicker from './dateRangePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

const RecordsTableHeader = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const [age, setAge] = React.useState("");
    const handleDropdownSelect = (eventKey) => {
        console.log('eventKey', eventKey);
        setSelectedValue(eventKey);
    };

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className='w-100 p-4'>
            <Row>
                <Col xs={4}><div className='text-dark fs-2 font-bold text-blue'>Dashboard</div></Col>
                <Col className="d-flex align-content-center">
                    <div className="d-flex align-content-center w-100 justify-content-center">
                        <div className='w-75 search-box rounded-start d-flex align-items-center'>
                            <img className='px-3' src={Search} />
                            <input className='w-100 border-0 ' placeholder='Search' />
                        </div>
                        <div className='filters'>
                            <Dropdown onSelect={handleDropdownSelect} className='h-100 '>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" >
                                    <div><img src={Filter} />Filters</div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu  >
                                    <Dropdown.Item className='px-4' onClick={(e) => e.stopPropagation()}>

                                        {/* <span onClick={(e) => setSelectedValue("small")}>Small</span> */}
                                        <div className='filter-pop'>
                                            <Row className='h-100'>
                                                <Col xs={6} >
                                                    <section>
                                                        <div className='fs-5'>Apply personal filters</div>
                                                        <div className='text-wrap'>To use a saved filter, select the
                                                            filter name from the List. Click Apply filters. </div>
                                                    </section>

                                                </Col>
                                                <Col xs={2}></Col>
                                                <Col xs={4} className='d-flex justify-content-end'>
                                                    <FormControl variant="standard" sx={{ minWidth: 180 }}>
                                                        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-standard-label"
                                                            id="demo-simple-select-standard"
                                                            value={age}
                                                            onChange={handleChange}
                                                            label="Age"
                                                        >
                                                            <MenuItem value={10}>Ten</MenuItem>
                                                            <MenuItem value={20}>Twenty</MenuItem>
                                                            <MenuItem value={30}>Thirty</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Col>
                                            </Row>
                                            <hr />
                                            <Row >
                                                <Col xs={8}>
                                                    <div className='fs-5'>Apply filters</div>
                                                    <div className='text-wrap'>You can create simple to complex custom filters. You can restrict the data that is displayed by a filter by using queries.</div>
                                                </Col>
                                            </Row>
                                            <Row className='my-4'>
                                                <Col xs={6}>
                                                    <FormControl variant="standard" sx={{ width: "100%" }}>
                                                        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-standard-label"
                                                            id="demo-simple-select-standard"
                                                            value={age}
                                                            onChange={handleChange}
                                                            label="Supplier"
                                                        >
                                                            <MenuItem value={10}>Ten</MenuItem>
                                                            <MenuItem value={20}>Twenty</MenuItem>
                                                            <MenuItem value={30}>Thirty</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Col>
                                                <Col xs={6}>
                                                    <FormControl variant="standard" sx={{ minWidth: "100%" }}>
                                                        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-standard-label"
                                                            id="demo-simple-select-standard"
                                                            value={age}
                                                            onChange={handleChange}
                                                            label="Status"
                                                        >
                                                            <MenuItem value={10}>Ten</MenuItem>
                                                            <MenuItem value={20}>Twenty</MenuItem>
                                                            <MenuItem value={30}>Thirty</MenuItem>
                                                        </Select>
                                                    </FormControl></Col>
                                            </Row>
                                            <Row className='my-4'>
                                                <Col xs={6} >
                                                    <FormControl variant="standard" sx={{ width: "100%" }}>
                                                        {/* <InputLabel id="demo-simple-select-standard-label">Age</InputLabel> */}
                                                        {/* <Select
                                                            labelId="demo-simple-select-standard-label"
                                                            id="demo-simple-select-standard"
                                                            value={age}
                                                            onChange={handleChange}
                                                            label="Supplier"
                                                        >
                                                            <MenuItem value={10}>Ten</MenuItem>
                                                            <MenuItem value={20}>Twenty</MenuItem>
                                                            <MenuItem value={30}>Thirty</MenuItem>
                                                        </Select> */}
                                                        <SingleInputDateRangePicker/>
                                                        {/* <LocalizationProvider dateAdapter={AdapterDayjs} >
                                                            <DemoContainer components={['SingleInputDateRangeField']} >
                                                                <DateRangePicker slots={{ field: SingleInputDateRangeField }} variant="filled" calendars={1} className='display-none' />
                                                            </DemoContainer>
                                                        </LocalizationProvider> */}

                                                    </FormControl>
                                                </Col>
                                                <Col xs={6}>
                                                    <FormControl variant="standard" sx={{ minWidth: "100%" }}>
                                                        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-standard-label"
                                                            id="demo-simple-select-standard"
                                                            value={age}
                                                            onChange={handleChange}
                                                            label="Status"
                                                        >
                                                            <MenuItem value={10}>Ten</MenuItem>
                                                            <MenuItem value={20}>Twenty</MenuItem>
                                                            <MenuItem value={30}>Thirty</MenuItem>
                                                        </Select>
                                                    </FormControl></Col>
                                            </Row>
                                            <Row className='mt-4'>
                                                <Col xs={2} className='d-flex align-items-center font-bold text-primary'>+ Save filters</Col>
                                                <Col xs={10}>
                                                    <section className='d-flex justify-content-end '>
                                                        <div className='mx-2 border border-primary px-3 py-2 rounded-2 font-bold'>Clear All</div>
                                                        <div className='mx-2 border border-primary bg-primary px-3 py-2 rounded-2 text-white font-bold'>Apply filter</div>
                                                    </section>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <div className='filters'>
                            <Dropdown onSelect={handleDropdownSelect} className='h-100'>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className='rounded'>
                                    <div > <img src={Sortby} />Sort by</div>

                                </Dropdown.Toggle>

                                <Dropdown.Menu >
                                    <Dropdown.Item eventKey="small">
                                        <div className='w-100 d-flex justify-content-between filter-pop'>
                                            <div>
                                                Ack #
                                            </div>
                                            <img src={sort} alt='sort' />
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="medium">
                                        <div className='w-100 d-flex justify-content-between filter-pop'>
                                            <div>
                                                Date
                                            </div>
                                            <img src={sort} alt='sort' />
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="large">
                                        <div className='w-100 d-flex justify-content-between filter-pop'>
                                            <div>
                                                From Supplier
                                            </div>
                                            <img src={sort} alt='sort' />
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="large">
                                        <div className='w-100 d-flex justify-content-between filter-pop'>
                                            <div>
                                                Status
                                            </div>
                                            <img src={sort} alt='sort' />
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div></Col>
            </Row>
            <Row className="my-3 d-flex justify-content-between align-items-center" >
                <div className="d-flex justify-content-end select align-items-center">
                    <TabHeader />
                </div>
            </Row>
        </div>
    )
}

export default RecordsTableHeader