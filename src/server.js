"use strict";

const express = require("express");
const interns = require("./interns");

const app = express();
const PORT = process.env.PORT || 3000;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderPage() {
  const rows = interns
    .map((intern) => {
      return [
        "<li>",
        `<strong>${escapeHtml(intern.name)}</strong> — ${escapeHtml(intern.role)}<br>`,
        `<em>${escapeHtml(intern.funFact)}</em>`,
        "</li>",
      ].join("");
    })
    .join("\n");

  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Wall of Interns — Interlace Studies</title>
  <style>
    body { font-family: sans-serif; max-width: 640px; margin: 40px auto; padding: 0 16px; color: #1B2140; }
    h1 { color: #2F3C7E; }
    li { margin-bottom: 12px; }
  </style>
</head>
<body>
  <h1>Wall of Interns — Interlace Studies</h1>
  <p>Halaman ini dibangun bersama lewat Pull Request oleh peserta onboarding.</p>
  <ul>
    ${rows}
  </ul>
</body>
</html>`;
}

app.get("/", (req, res) => {
  res.send(renderPage());
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

module.exports = app;
