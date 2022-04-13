CREATE DATABASE IF NOT EXISTS users_auth;

CREATE TABLE IF NOT EXISTS users (
  id INTEGER NOT NULL,
  name VARCHAR(50) NOT NULL,
  email TEXT NOT NULL,
  password TEXT NOT NULL ,
  phone INTEGER,
  rool TEXT DEFAULT 'cliente',
  photo_id TEXT DEFAULT '',
  photo TEXT DEFAULT '',
  verified BOOLEAN DEFAULT false,
  key_email VARCHAR(12),
  admin BOOLEAN DEFAULT false
);

ALTER TABLE users ALTER id TEXT NOT NULL; 
--  to remove a column
ALTER TABLE users DROP photo;
ALTER TABLE users DROP photo_id;
