import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Avatar,
  CssBaseline,
  Box,
  CircularProgress,
} from "@mui/material";
import {
  People as PeopleIcon,
  MedicalServices as DoctorIcon,
  Event as AppointmentIcon,
  Description as ApplicationsIcon,
  AccountCircle as ProfileIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import axiosInstance from "../utils/axiosInstance";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // ✅ Fetch All Users from API
  const fetchUsers = async () => {
  try {
    const response = await axiosInstance.get("/admin/users");
    setUsers(response.data);
  } catch (error) {
    console.error("❌ Failed to fetch users:", error);
    
    if (error.response?.status === 401) {
      toast.error("Session expired. Please log in again.");
      localStorage.removeItem("token"); // Clear invalid token
      navigate("/login"); // Redirect to login
    } else {
      toast.error("Failed to load users.");
    }
  } finally {
    setLoading(false);
  }
};


  // ✅ Fetch data on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  // ✅ Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box", background: "#1976D2", color: "white" },
        }}
      >
        <Toolbar />
        <List>
          {[
            { text: "Users", icon: <PeopleIcon /> },
            { text: "Doctors", icon: <DoctorIcon /> },
            { text: "Appointments", icon: <AppointmentIcon /> },
            { text: "Applications", icon: <ApplicationsIcon /> },
            { text: "Profile", icon: <ProfileIcon /> },
          ].map(({ text, icon }) => (
            <ListItem button key={text}>
              <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <ListItem button onClick={handleLogout} sx={{ position: "absolute", bottom: 20 }}>
          <ListItemIcon sx={{ color: "white" }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, background: "#f5f5f5", minHeight: "100vh" }}>
        {/* Fixed Navbar */}
        <AppBar position="fixed" sx={{ background: "#1976D2", zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Admin Dashboard
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Content */}
        <Box sx={{ p: 3, mt: 8 }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
              All Users
            </Typography>

            {loading ? (
              <CircularProgress />
            ) : (
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow sx={{ background: "#bbdefb" }}>
                      <TableCell>#</TableCell>
                      <TableCell>Pic</TableCell>
                      <TableCell>First Name</TableCell>
                      <TableCell>Last Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Mobile No.</TableCell>
                      <TableCell>Age</TableCell>
                      <TableCell>Gender</TableCell>
                      <TableCell>Role</TableCell>
                      <TableCell>Remove</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.map((user, index) => (
                      <TableRow key={user.id}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>
                          <Avatar src={user.pic} alt={user.firstName} />
                        </TableCell>
                        <TableCell>{user.firstName}</TableCell>
                        <TableCell>{user.lastName}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.mobile}</TableCell>
                        <TableCell>{user.age}</TableCell>
                        <TableCell>{user.gender}</TableCell>
                        <TableCell>{user.isDoctor ? "Doctor" : "User"}</TableCell>
                        <TableCell>
                          <Button variant="contained" color="error" size="small">
                            Remove
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
