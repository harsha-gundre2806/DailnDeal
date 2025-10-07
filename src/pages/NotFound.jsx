import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <MainLayout>
      <section className="flex pt-20 flex-col items-center justify-center py-16">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-lg mb-6">Oops! The page you’re looking for doesn’t exist.</p>
        <Link
          to="/"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Go Home
        </Link>
      </section>
    </MainLayout>
  );
}

export default NotFound;
