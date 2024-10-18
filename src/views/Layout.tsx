import Box from "@mui/material/Box";
import Footer from "../components/Footer.tsx";
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar.tsx"
const Layout = () => {
    return (
        <div>
            <header style={{ position: 'sticky', top: 0, zIndex: 1000 }}><Navbar/></header>

            <Box sx={{ marginTop: '80px', marginLeft: '40px', marginRight: '40px' }}>
                <Outlet/>
            </Box>


            <footer style={{marginTop:'80px'}}>
                <Footer/>
            </footer>

        </div>
    );
};

export default Layout;