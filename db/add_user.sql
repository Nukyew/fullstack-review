--A default insert will just give us a success message.
--If we do "RETURNING *", then we'll bring back the row that we added.
--If we specify user_id, then it will bring back the user_id that was created.
--It does not work in SQL Tabs, but will work in Massive.
INSERT INTO users (name, email, is_admin)
VALUES(${name}, ${email}, false)
RETURNING user_id;