// Import React (optional in modern React) and the components


export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
     
      <main className="flex-1">{children}</main>
   
    </div>
  );
}
