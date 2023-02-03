import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SMinputs from "../../components/input";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { sendData } from "../../config/firebase/firebasemethods";
import SMbuttons from "../../components/button";
import Footer from "../../components/footers";


export default function Payments() {

    const [userObg, setUserObg] = useState({})

    const locatsas = useLocation()

    const [filter, setFilter] = useState({})
    const navigate = useNavigate()
    console.log(userObg);

    console.log(locatsas.state.information.hotel.name);


    const AllDtaa = ({
        ...locatsas.state.information,
        userPayment: userObg

    })

    // console.log(filter);

    let jjkjkjkjkjkj = () => {
        navigate("/")
        sendData(AllDtaa, "User Bookings").then((res) => {
            console.log("sucessfully Send Booking");
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <>


            <Grid container>


                <Grid sx={{ marginTop: 3 }} xl={6} lg={6} md={6} sm={12} xs={12}>
                    <h1 >Book Now</h1>
                    <Box>

                        <Box>
                            <img width={340} src={locatsas.state.information.hotel.img} alt="" />

                        </Box>

                    </Box>

                    <table>
                        <tr>
                            Hotel Name : {locatsas.state.information.hotel.name}
                        </tr><tr>
                            City : {locatsas.state.information.hotel.city}
                        </tr>
                        <tr>
                            Price : {locatsas.state.information.hotel.price}
                        </tr>
                        <tr>
                            Rooms :{locatsas.state.information.hotel.rooms}
                        </tr>
                        <tr>
                            Services : {locatsas.state.information.hotel.services}
                        </tr>
                    </table>
                </Grid>

                <Grid xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Box>

                        <Box sx={{ marginTop: 4 }}>
                            <h4 style={{ fontWeight: "bold" }}>Payment Deteals</h4>
                            <div style={{ backgroundColor: "black", width: 40, height: 3, marginLeft: "2px", marginBottom: 20 }}>

                            </div>
                        </Box>

                        <Box sx={{ margin: 1.2, marginLeft: 2.5 }}>
                            <FormControl sx={{ minWidth: 200 }}>
                                <InputLabel>Bank Name </InputLabel>
                                <Select label="Bank Name" onChange={(e) => setFilter({ ...filter, BankName: e.target.value })}>
                                    <MenuItem value="Bank aAlfallah">Bank aAlfallah</MenuItem>
                                    <MenuItem value="Bank Al Habib">Bank Al Habib</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box sx={{ margin: 1.2 }}>
                            <SMinputs type='number' onChange={(e) => setUserObg({ ...userObg, CreditCardNumber: e.target.value })} label='Credit Card Number' />
                        </Box>

                        <Box sx={{ margin: 1.2 }}>
                            <SMinputs type='number' onChange={(e) => setUserObg({ ...userObg, CardCode: e.target.value })} label='Card Code' />
                        </Box>
                        <Box sx={{ margin: 1.2, marginLeft: 4 }} >
                            <SMinputs id="kasnanaaaaa" type='date' onChange={(e) => setUserObg({ ...userObg, CardExpiryDate: e.target.value })} />
                        </Box>

                        <Box sx={{ marginTop: 5, marginLeft: 6.4 }}>
                            <SMbuttons id="sajbakn" onClick={jjkjkjkjkjkj} label="Book Now" />
                        </Box>
                    </Box>
                </Grid>

            </Grid>
            <div>
                <Footer id="ooterrr" />
            </div >
        </>
    )
}