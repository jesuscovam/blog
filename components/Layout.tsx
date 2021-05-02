export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="p-10 bg-blue-200  flex justify-center mx-auto">
      {children}
    </div>
  );
};

interface LayoutProps {
  children: React.ReactChild;
}
