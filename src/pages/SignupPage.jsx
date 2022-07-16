
import{Card,CardContent,Typography,Button} from '@mui/material';
import React from 'react'
import {Link} from 'react-router-dom';

const css = {
    container: {
        flex: 1,
        backgroundColor: "#ddd",
        height: "120vh",
        display: "flex",
        justifyContent: "center",


    },
    box: {
        width: "30%",
        backgroundColor: "white",
        height: "620px",
        border: "1px solid lightgray",
        marginTop:"10px"
    },
    body: {
        padding: 10,
    },
    logo: {
        width: "50%", marginLeft: "25%", marginTop: "10px",
    },
    loginHeading: {
        color: "grey", textAlign: "center", fontSize: 18, fontWeight: 600
    },
    text: {
        paddingLeft: "30px",
        paddingRight: "30px",
        textAlign: "center",
        color:"grey"
    },
    button: {
        width: "260px",
        backgroundColor: "#0095f6",
        color: "white",
        textAlign: "center",
        height: "30px",
        fontSize: "15px",
        marginLeft: "60px",
        marginTop: "20px",
    },
    name: {
        width: "260px", height: "30px", marginLeft: "60px", marginTop: "10px", border: "1px solid dark"
    },
    form: {
        marginTop: "30px",
    },
    font: {
        fontSize: "12px",
        margin: "20px 20px",
        textAlign: "center",
    }



}

function SignupPage() {
    return (
        <div style={css.container}>
            <div style={css.box}>
                <div style={css.body}>
                    <div style={css.logo}>
                        <img src="assets/homepage/logo.png" width="100%" alt="" />
                    </div>
                </div>
                <h4 style={css.text}>Sign up to see photos and videos from your friends.</h4>
                <button style={css.button}>Login with Facebook</button>
                <form style={css.form} action="">
                    <input style={css.name} type="text" placeholder='Mobile number or Email' />
                    <input style={css.name} type="text" placeholder='Full Name' />
                    <input style={css.name} type="text" placeholder='Username' />
                    <input style={css.name} type="password" placeholder='Password' />


                </form>
                <h3 style={css.font}>People who use our service may have uploaded your contact information to instagram. Learn More</h3>
                <h3 style={css.font}>By signing up, you agree to our Terms, Data Policy and Cookies Policy .</h3>
                <button style={css.button}>Signup</button>



                <Card sx={{mt:4,pb:0,width:"100%"}}>
            <CardContent sx={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                <Typography>already have an account?</Typography>
                <Button variant='text' sx={{fontSize:10,color:"blue"}} LinkComponent={Link} to="/">Login</Button>
            </CardContent>
        </Card>
            </div>

        </div>
       
    )
}

export default SignupPage