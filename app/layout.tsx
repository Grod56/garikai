import "bootstrap/dist/css/bootstrap.min.css";
import '@/app/ui/global.css';
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Garikai Rodney Gumbo</title>
      </head>
      <body><div className="page-container">{children}</div></body>
    </html>
  );
}