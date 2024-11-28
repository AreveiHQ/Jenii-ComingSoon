import "./globals.css";
export const metadata = {
  title: "Jenii - A JP Sterling Silver Brand | Premium Sterling Silver Jewellery",
  description: "Jenii offers a premium selection of sterling silver jewellery for gift and wedding purpose, blending timeless elegance with modern designs. ",
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
