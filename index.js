const express = require("express");
//require : module을 불러오는 nodeJS 메서드
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //url 쿼리 스트링 parsing
app.use(express.static(path.join(__dirname, "src")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src/index.html"));
});

app.get("/question", (req, res) => {
  res.sendFile(path.join(__dirname, "src/components/question.html"));
});

app.get("/result/[1-5]", (req, res) => {
  res.sendFile(path.join(__dirname, "src/components/result.html"));
});

app.listen(3000, () => {
  console.log("Server running on 3000");
});
