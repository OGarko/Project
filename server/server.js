const express = require("express");
const cors = require("cors");
const clinicRoutes = require("./routes/clinicRoutes");
const patientsRoutes = require("./routes/patientsRoutes");
const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");
const PORT = 3070;
const app = express();

app.use(express.json());

app.use(cors({origin: 'http://localhost:8080'}));

app.use("/api/auth", authRoutes);
app.use("/api/clinic", clinicRoutes);
app.use("/api/patients", patientsRoutes);
app.use("/api/orders", orderRoutes);

const startServer = async () => {
  try {
    app.listen(PORT, () => console.log("App port", PORT));
  } catch (e) {
    console.log(e);
  }
};

startServer();
