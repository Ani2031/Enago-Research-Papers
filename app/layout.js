import "./globals.scss";

export const metadata = {
  title: "Enago Research Papers",
  description: "Frontend task - research papers list",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "1rem", background: "#000000", color: "white" }}>
          <h2>Enago Research Papers</h2>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
