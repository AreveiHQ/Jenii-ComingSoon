import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Jenii Jwelleries",
  description: "Jenii Jewelry Shop offers a curated selection of exquisite silver jewelry, blending timeless elegance with modern designs. Our collection features meticulously crafted pieces, including rings, necklaces, bracelets, and earrings, all made from high-quality silver to ensure both style and durability. We take pride in offering unique designs that cater to a variety of tastes, from classic and sophisticated to contemporary and bold. At Jenii Jewelry, we are dedicated to providing exceptional craftsmanship, personalized service, and a seamless shopping experience for every customer. Discover the perfect piece to elevate your style at Jenii Jewelry Shop.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
