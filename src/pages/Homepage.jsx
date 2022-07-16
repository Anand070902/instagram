import { Container,Grid,Card,CardContent,Paper, TextField,Button,Divider, Typography} from '@mui/material';
import React, { useEffect,useState } from 'react'
import {Link} from 'react-router-dom';



const styles = {
  container:{display:"flex",backgroundColor:"#fafafa",padding:0},
  gridContainer:{padding:"0px 120px"},
  card:{padding:"14px 100px"},
  mobile:{backgroundSize:"cover",backgroundColor:"transparent",backgroundImage:"url('assets/homepage/mobile.png')",width:"88%",height:"550px"},
  slider:{margin:"27px 0 0 113px",position:"relative"},
  ss:{height:"504px",left:24,position:"absolute",top:20,width:"242px"}


}
const Homepage = () => {
    const images = ["ss1.png","ss2.png","ss5.png","ss4.png"]
    const [counter,setCounter] = useState(0)
    useEffect(() => {
        const internalData = setInterval(() => {
            counter = (counter ==2)? setCounter(0) : setCounter(counter +1)
        },2000)

        return () =>clearInterval(internalData)
    },[counter])


    return(
        <Container sx={styles.container} maxWidth="xl">
            <Grid container  sx={styles.gridContainer}>
                <Grid item lg={6}>
                    <Paper elevation={0} sx={styles.mobile}>
                       <div style={styles.slider}>
                        <img src={`assets/homePage/${images[counter]}`} width="100%" style={styles.ss}/>
                       </div>
                    </Paper>
                </Grid>
                <Grid item lg={5}>
                <Card sx={{width:"100%", mt:5}}>
                <CardContent sx={styles.card}>
                <img src="assets/homepage/logo.png"  width="100%"/>
                </CardContent>
                <CardContent sx={{px:6}}>
                    <TextField fullWidth="xl" InputProps={{disableUnderline:true}} size="small" id ="filled-basic" label="Email, Phone Number, Username" variant="filled"/>
                    <TextField sx={{marginTop:1}} fullWidth="xl"  InputProps={{disableUnderline:true}} size="small" id ="filled-basic" label="Password" variant="filled"/> 
                    <Button fullWidth sx={{mt:1}} color="primary" variant="contained">Login</Button>

                    <Divider sx={{color:"#202020",mt:2}}>OR</Divider>
                    <div style={{width:"100%" ,textAlign:"center",display:"flex", flexDirection:"column"}}>
                        <Button variant="text">Login With Facebook</Button>
                        <Button variant="text" sx={{fontSize:10,color:"gray"}}>Forgot Password</Button>

                    </div>
                </CardContent>
            </Card>

            <Card sx={{mt:2,pb:0 ,height:"56px"}}>
                <CardContent sx={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                    <Typography>Don"t have an account</Typography>
                    <Button variant="text" sx={{fontSize:10,color:"blue"}} LinkComponent={Link} to="/signup">Signup</Button>
                </CardContent>
            </Card>

            <div style={{width:"100%",textAlign:"center", marginTop:20,marginBottom:10}}>
                <Typography sx={{mt:2}}>Get the app</Typography>

                <Grid container spacing={5}>
                    <Grid item lg={5} sx={{mt:2,marginLeft:"40px"}}>
                        <img src="assets/homepage/apple.png" width="100%"/>

                    </Grid>
                    <Grid item lg={5} sx={{mt:2}}>
                        <img src="assets/homepage/google.png" width="100%"/>
                        
                    </Grid>
                </Grid>
            </div>
                
                </Grid>
            </Grid>
        </Container>
    )
}

export default Homepage;