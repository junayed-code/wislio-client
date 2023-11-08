export default function Container({ className = "", children }) {
  return (
    <div className={"max-w-7xl mx-auto ".concat(className).trim()}>
      {children}
    </div>
  );
}

Container.Main = ({ className, children }) => (
  <main className={className}>{children}</main>
);
