import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-background">
    <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
    <p className="text-muted-foreground mb-8">Page not found</p>
    <Link to="/" className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
      Back to Home
    </Link>
  </div>
);

export default NotFound;
