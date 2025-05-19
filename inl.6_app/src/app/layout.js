export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-ENjdO4Dr2bkBIFxQpeo4A6VKHrj10uAeR4l2FZCpiF2iqJkV0p5V5tKQ1a6XqAOp"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
