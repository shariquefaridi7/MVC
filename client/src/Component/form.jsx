import { Box, Button, TextField, Card, CardContent, CardActions, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import axios from 'axios';



const Form = () => {

    const [data, setData] = useState({
        name: "",
        phone: ""
    });

    const [info, setInfo] = useState([]);

    const submit = async () => {

        console.log(data.name, data.phone);
        await axios.post("http://localhost:4000/form/post-data", data);

        setData(() => {
            return {
                name: "",
                phone: ""
            }

        })
        const res = await axios.get("http://localhost:4000/form/get-data");

        setInfo(res.data)
        console.log(info)

    }

    const change = (e) => {

        setData((pre) => {
            if (e.target.name == "name") {
                return {
                    name: e.target.value,
                    phone: pre.phone
                }

            } else {
                return {
                    name: pre.name,
                    phone: e.target.value
                }
            }
        })
    }

useEffect(()=>{
   async function fetch(){
        const res = await axios.get("http://localhost:4000/form/get-data");

        setInfo(res.data)
     
    }
    fetch();
},[])

    return (
        <>
            <center>
                <Box
                    sx={{ width: 200, height: 150, border: "1px solid black", padding: 6, borderRadius: 2, marginTop: 10 }}>
                    <TextField label="Name" variant="outlined" size="small" name="name" onChange={change} value={data.name} /> <br /><br />
                    <TextField label="PhoneNo" variant="outlined" size="small" name="phone" onChange={change} value={data.phone} /><br /><br />
                    <Button variant="contained" color="success" size="small" onClick={submit}>Submit</Button>

                </Box>


            </center>


            {
                info.map((resp) => {
                    return (
                        <>
                            <Box sx={{ width: 200, height: 200 }}>
                                <Card variant="outlined">
                                    <CardContent>

                                        <Typography variant="h5" component="div">
                                            {resp.name}
                                        </Typography>

                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            {resp.phone}
                                        </Typography>

                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" variant="contained" color="error">Delete</Button>
                                        <Button size="small" variant="contained" color="primary">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Box>
                        </>

                    )
                })

            }





        </>
    )

}
export default Form;
