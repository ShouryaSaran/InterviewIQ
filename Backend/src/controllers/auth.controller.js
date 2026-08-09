const supabase = require('../config/supabase');

/**
 * @name registerUserController
 * @description Register a new user using Supabase Auth and save profile
 * @access Public
 */
async function registerUserController(req, res) {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({
            message: "Please provide username, email and password"
        });
    }

    try {
        // Sign up user with Supabase Auth
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: username
                }
            }
        });

        if (error) {
            return res.status(400).json({
                message: error.message
            });
        }

        if (!data.user) {
            return res.status(400).json({
                message: "User registration failed"
            });
        }

        // Upsert user profile into profiles table
        await supabase.from('profiles').upsert({
            id: data.user.id,
            full_name: username
        });

        const token = data.session?.access_token;
        if (token) {
            res.cookie("token", token, {
                httpOnly: true,
                sameSite: 'lax'
            });
        }

        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: data.user.id,
                username: username,
                email: data.user.email
            }
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || "An unexpected error occurred during registration"
        });
    }
}

/**
 * @name loginUserController
 * @description Log in an existing user using Supabase Auth
 * @access Public
 */
async function loginUserController(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Please provide email and password"
        });
    }

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error || !data.user) {
            return res.status(400).json({
                message: error?.message || "Invalid email or password"
            });
        }

        const token = data.session?.access_token;
        if (token) {
            res.cookie("token", token, {
                httpOnly: true,
                sameSite: 'lax'
            });
        }

        // Fetch profile full_name if available
        let username = data.user.user_metadata?.full_name || data.user.email;
        const { data: profile } = await supabase
            .from('profiles')
            .select('full_name')
            .eq('id', data.user.id)
            .single();

        if (profile?.full_name) {
            username = profile.full_name;
        }

        res.status(200).json({
            message: "User loggedIn successfully.",
            user: {
                id: data.user.id,
                username: username,
                email: data.user.email
            }
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || "An unexpected error occurred during login"
        });
    }
}

/**
 * @name logoutUserController
 * @description Clear token from user cookie and sign out of Supabase
 * @access Public
 */
async function logoutUserController(req, res) {
    try {
        const token = req.cookies?.token;
        if (token) {
            await supabase.auth.signOut();
        }
    } catch (err) {
        // Continue clearing cookie regardless
    }

    res.clearCookie('token');
    res.status(200).json({
        message: "User logged out successfully"
    });
}

/**
 * @name getMeController
 * @description Get current logged in user details from Supabase Auth & profiles table
 * @access Private
 */
async function getMeController(req, res) {
    try {
        const userId = req.user.id;
        const email = req.user.email;

        let username = req.user.user_metadata?.full_name || email;

        const { data: profile } = await supabase
            .from('profiles')
            .select('full_name')
            .eq('id', userId)
            .single();

        if (profile?.full_name) {
            username = profile.full_name;
        }

        res.status(200).json({
            message: "User details fetched successfully.",
            user: {
                id: userId,
                username: username,
                email: email
            }
        });
    } catch (err) {
        res.status(500).json({
            message: "Failed to fetch user details"
        });
    }
}

module.exports = {
    registerUserController,
    loginUserController,
    logoutUserController,
    getMeController
};