import axios from "axios";
import { supabase } from "../../../config/supabase";

const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
});

const isSupabaseConfigured = () => {
    return import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY &&
           !import.meta.env.VITE_SUPABASE_URL.includes('placeholder');
};

export async function register({ username, email, password }) {
    if (isSupabaseConfigured()) {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: { full_name: username }
            }
        });

        if (error) throw error;

        if (data.user) {
            await supabase.from('profiles').upsert({
                id: data.user.id,
                full_name: username
            });
        }

        return {
            user: {
                id: data.user?.id,
                username: username,
                email: data.user?.email
            }
        };
    }

    try {
        const response = await api.post('/api/auth/register', {
            username, email, password
        });
        return response.data;
    } catch (err) {
        console.error("Register Error:", err);
        throw err;
    }
}

export async function login({ email, password }) {
    if (isSupabaseConfigured()) {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) throw error;

        let username = data.user?.user_metadata?.full_name || data.user?.email;
        const { data: profile } = await supabase
            .from('profiles')
            .select('full_name')
            .eq('id', data.user.id)
            .single();

        if (profile?.full_name) {
            username = profile.full_name;
        }

        return {
            user: {
                id: data.user?.id,
                username: username,
                email: data.user?.email
            }
        };
    }

    try {
        const response = await api.post('/api/auth/login', {
            email, password
        });
        return response.data;
    } catch (err) {
        console.error("Login Error:", err);
        throw err;
    }
}

export async function logout() {
    if (isSupabaseConfigured()) {
        const { error } = await supabase.auth.signOut();
        if (error) console.error("Supabase signOut error:", error);
        return { message: "User logged out successfully" };
    }

    try {
        const response = await api.get('/api/auth/logout');
        return response.data;
    } catch (err) {
        console.error("Logout Error:", err);
    }
}

export async function getMe() {
    if (isSupabaseConfigured()) {
        const { data: { user }, error } = await supabase.auth.getUser();

        if (error || !user) return { user: null };

        let username = user.user_metadata?.full_name || user.email;
        const { data: profile } = await supabase
            .from('profiles')
            .select('full_name')
            .eq('id', user.id)
            .single();

        if (profile?.full_name) {
            username = profile.full_name;
        }

        return {
            user: {
                id: user.id,
                username: username,
                email: user.email
            }
        };
    }

    try {
        const response = await api.get('/api/auth/get-me');
        return response.data;
    } catch (err) {
        console.error("GetMe Error:", err);
        return { user: null };
    }
}