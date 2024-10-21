import "./globals.css";
export const metadata = {
  title: "Jenii - A JP Sterling Silver Brand | Premium Sterling Silver Jewellery",
  description: "Jenii Jewelry Shop offers a curated selection of exquisite silver jewelry, blending timeless elegance with modern designs. Our collection features meticulously crafted pieces, including rings, necklaces, bracelets, and earrings, all made from high-quality silver to ensure both style and durability. ",
  keywords: ["silver jewellery", "Jenii JP", "JP jewellers"," Silver Rings", "Silver Bracelets", "couple Rings", "jwellers for men"," jwellers for women" ,"silver branded jewelleries"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
