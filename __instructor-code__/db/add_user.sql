INSERT INTO users (name, email, is_admin)
VALUES (${name}, ${email}, false)
RETURNING user_id;