function Signup(){
    return(
        <center>
        <div style={
            {
                marginTop:"10px",
                border:"2px solid black",
                display:"flex",
                width:"50vw",
                height:"170px",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column"

            }
        }>
            <p>Enter email <input type="text" name="email" id="email" /></p>
            <p>Ente Passsword <input type="password" name="password" id="password" /></p>
            <button type="submit">Submit</button>

        </div>
        </center>
    );
}

export default Signup;