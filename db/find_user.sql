SELECT u.user_id, name, email, is_admin, hash FROM users u
JOIN users_login ul ON u.user_id = ul.user_id
WHERE email = $1;