import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "public", "index.html"));
});

app.get("/activites", (req, res) => {
  res.sendFile(join(__dirname, "public", "activites.html"));
});

app.get("/general", (req, res) => {
    res.sendFile(join(__dirname, "public", "general.html"));
  });


// app.get("/general#computer-sciences", (req, res) => {
//     res.sendFile(join(__dirname, "public", "general.html"));
//   });

// app.get("/general#information-system", (req, res) => {
//     res.sendFile(join(__dirname, "public", "general.html"));
// });

// app.get("/special#software-engineering", (req, res) => {
//     res.sendFile(join(__dirname, "public", "special.html"));
// });

// app.get("/special#bioinformatics", (req, res) => {
//     res.sendFile(join(__dirname, "public", "special.html"));
// });

// app.get("/special#artificial-intelligence", (req, res) => {
//     res.sendFile(join(__dirname, "public", "special.html"));
// });

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
