import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Entreprise",
  description: "Site professionnel moderne",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* POLICE PREMIUM */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
