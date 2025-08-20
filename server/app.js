import express from "express";

const app = express();
const PORT = 5000;

;

/**
 * 1. Simple root route
 */
app.get("/", (req, res) => {
  res.send("hello world");
});

/**
 * 2. Example GET route with plain response
 */
app.get("/register", (req, res) => {
  res.send("this is a register page" );
});
app.get("/global", (req, res) => {
  res.send( "this is a global page" );
});


// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on :${PORT}`);
});