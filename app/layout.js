import localFont from "next/font/local";
import "./globals.css";

// Font Luciole | https://www.luciole-vision.com/
const luciole = localFont({
  src: "./fonts/Luciole-Regular.ttf",
  variable: "--font-luciole",
  weight: "100 900",
});
const lucioleItalic = localFont({
  src: "./fonts/Luciole-Regular-Italic.ttf",
  variable: "--font-luciole-italic",
  weight: "100 900",
});
const lucioleBold = localFont({
  src: "./fonts/Luciole-Bold.ttf",
  variable: "--font-luciole-bold",
  weight: "100 900",
})
const lucioleBoldItalic = localFont({
  src: "./fonts/Luciole-Bold-Italic.ttf",
  variable: "--font-luciole-bold-italic",
  weight: "100 900",
})
// Font FiraCode | https://github.com/tonsky/FiraCode
const firacode = localFont({
  src: "./fonts/FiraCode-Regular.ttf",
  variable: "--font-firacode",
  weight: "100 900",
})
const firacodeBold = localFont({
  src: "./fonts/FiraCode-Bold.ttf",
  variable: "--font-firacode-bold",
  weight: "100 900",
})
const firacodeLight = localFont({
  src: "./fonts/FiraCode-Light.ttf",
  variable: "--font-firacode-light",
  weight: "100 900",
})
const firacodeMedium = localFont({
  src: "./fonts/FiraCode-Medium.ttf",
  variable: "--font-firacode-medium",
  weight: "100 900",
})
const firacodeSemiBold = localFont({
  src: "./fonts/FiraCode-SemiBold.ttf",
  variable: "--font-firacode-semi-bold",
  weight: "100 900",
})

export const metadata = {
  title: "Nicolas Wieckiewicz",
  description: "Je suis là où tu t'y attends pas", //TODO: Mettre une description correct et un favicon
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${luciole.variable} ${lucioleBold.variable} ${firacode.variable} ${firacodeBold.variable} ${firacodeMedium.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
