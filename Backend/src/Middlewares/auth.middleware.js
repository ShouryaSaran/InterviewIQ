const supabase = require('../config/supabase');

async function authUser(req, res, next) {
    const authHeader = req.headers.authorization;
    let token = req.cookies?.token;

    if (!token && authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.split(' ')[1];
    }

    if (!token) {
        return res.status(401).json({
            message: "token not provided"
        });
    }

    try {
        const { data, error } = await supabase.auth.getUser(token);

        if (error || !data?.user) {
            return res.status(401).json({
                message: "Invalid or expired token. Please Login Again."
            });
        }

        req.user = data.user;
        req.token = token;
        next();
    } catch (err) {
        return res.status(401).json({
            message: "Invalid Token."
        });
    }
}

module.exports = { authUser };