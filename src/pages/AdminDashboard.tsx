import UserControl from "../admin/UserControl";
import ProductControl from "../admin/ProductsControl";
import SwitchPanel from "../admin/components/SwitchPanel";

import { Toaster } from "react-hot-toast";

import { Box } from "@mui/material";

import { useState } from "react";

const AdminDashboard = () => {
    const [isOpenProduct, setIsOpenProduct] = useState(true);
    const [isOpenUser, setIsOpenUser] = useState(false);

    const handleOpenProduct = () => {
        setIsOpenProduct(!isOpenProduct);
        setIsOpenUser(!isOpenUser);
    };
    const handleOpenUser = () => {
        setIsOpenUser(!isOpenUser);
        setIsOpenProduct(!isOpenProduct);
    };

    return (
        <>
            <Toaster />
            <Box sx={{ width: "90%", display: "flex", margin: "50px auto" }}>
                <Box>
                    <SwitchPanel
                        handleOpenProduct={handleOpenProduct}
                        handleOpenUser={handleOpenUser}
                    />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                    }}
                >
                    {isOpenProduct && <ProductControl />}
                    {isOpenUser && <UserControl />}
                </Box>
            </Box>
        </>
    );
};

export default AdminDashboard;
