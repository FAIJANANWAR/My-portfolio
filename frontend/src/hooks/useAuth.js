import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../api/axios';
import { generateE2EKey, exportKey, importKey, hasE2EKey } from '../utils/webcrypto';

export const useAuth = () => {
    const queryClient = useQueryClient();

    // Fetch current user using HTTP-Only cookie automatically sent by Axios
    const { data: user, isLoading, isError } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const { data } = await api.get('/auth/me');
            return data;
        },
        retry: false, // Don't retry on 401
    });

    const loginMutation = useMutation({
        mutationFn: async ({ email, password }) => {
            const { data } = await api.post('/auth/login', { email, password });
            return data;
        },
        onSuccess: async () => {
            // After successful login, invalidate the user query to re-fetch
            queryClient.invalidateQueries(['user']);
        }
    });

    const registerMutation = useMutation({
        mutationFn: async ({ email, password }) => {
            const { data } = await api.post('/auth/register', { email, password });
            return data;
        },
        onSuccess: async () => {
            queryClient.invalidateQueries(['user']);
        }
    });

    const logoutMutation = useMutation({
        mutationFn: async () => {
            await api.post('/auth/logout');
        },
        onSuccess: () => {
            // Clear user data and E2E keys from memory
            queryClient.setQueryData(['user'], null);
            sessionStorage.removeItem('e2e_key');
        }
    });

    return {
        user,
        isLoading,
        isError,
        login: loginMutation.mutateAsync,
        register: registerMutation.mutateAsync,
        logout: logoutMutation.mutateAsync,
        isLoggingIn: loginMutation.isPending,
        isRegistering: registerMutation.isPending,
    };
};
