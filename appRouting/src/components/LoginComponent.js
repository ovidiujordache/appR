import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { RealmAppProvider, useRealmApp, fetchUser } from '../provider/RealmApp'
import * as Realm from 'realm-web'
import { useState, useEffect } from 'react'

import { useLocation, useNavigate } from "react-router";

export default function LoginComponent() {
    //const navigate = useNavigate();
    //const location = useLocation();
    const app = useRealmApp();
    const handleLogin = async (app) => {
        await app.logIn(Realm.Credentials.anonymous());
        console.log("logging in")

    }
    const [form, setForm] = useState({
        email: "",
        password: ""
    });



    const onFormInputChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };
    const handleSubmit = async (e) => {
        console.log("onSubmit is called")
        try {

            const credentials = Realm.Credentials.emailPassword(form.email, form.password);

            await app.logIn(credentials);
            console.log(app.currentUser);


        } catch (e) {
            console.log(e);
        }


    }
    const handleLogout = async () => {
        console.log("handle logout")
        const credentials = Realm.Credentials.emailPassword(form.email, form.password);

        await app.logOut(credentials);
        console.log(app.currentUser)

    }
    const loadUser = async () => {
        if (!app.currentUser) {
            const fetchedUser = await fetchUser();
            if (fetchedUser) {
                console.log("fetched user:" + fetchedUser)
                return false;
            }
        }
    }

    useEffect(() => {
        loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // This useEffect will run only once when the component is mounted.
    // Hence this is helping us in verifying whether the user is already logged in
    // or not.

    return (
        <div className='gradient_Bg'>
        <div id="loginForm">



    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <div>
      <h1>Login</h1>
      <div>
    <TextField
      label="Email"
      type="email"
      variant="outlined"
      name="email"
      value={form.email}
      onChange={onFormInputChange}
      style={{ marginBottom: "1rem" }}
    />
        </div>
            <div>
    <TextField
      label="Password"
      type="password"
      variant="outlined"
      name="password"
      value={form.password}
      onChange={onFormInputChange}
      style={{ marginBottom: "1rem" }}
    />
        </div>
      </div>
      <div>
        <Stack spacing={2} direction="row">
    
      <Button variant="contained" onClick={handleSubmit}>Login</Button>
      <Button variant="outlined" onClick={handleLogout}>Logout</Button>
    </Stack>
    </div>
    </Box>
 



      
 </div>
 </div>

    );

}