export default function rootLayout({
  children,
}:{
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* layout UI */}
        
        <main>{children}</main>
      </body>
    </html>
  )
}