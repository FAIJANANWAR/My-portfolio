import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { hasE2EKey } from '../utils/webcrypto';

const ProtectedRoute = () => {
    const { user, isLoading, isError } = useAuth();

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-slate-900">
                <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    // If the API returns an error (401), or user is not found, redirect to login
    if (isError || !user) {
        return <Navigate to="/login" replace />;
    }

    // Also require an E2E key in memory to view the dashboard
    // In a real app, if they don't have it in memory, we would redirect them to an "Unlock Vault" page
    // where they enter their vault password to derive the key. For this demo, if it's not set, they 
    // must re-login to generate/recover it.
    if (!hasE2EKey() && !sessionStorage.getItem('e2e_key')) {
         return <Navigate to="/login" replace state={{ message: 'Vault is locked. Please log in again.' }} />;
    }

    return <Outlet />; // Renders the child routes (e.g., Dashboard)
};

export default ProtectedRoute;
