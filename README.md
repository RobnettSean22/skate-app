```sql
CREATE TABLE users(
user_id SERIAL PRIMARY KEY NOT NULL,
email VARCHAR(30) NOT NULL UNIQUE,
password TEXT NOT NULL,
english Boolean,
japanese Boolean,
near_min_distance INT,
near_max_distance INT,
max_rating INT
);
INSERT INTO users(email, password, english, japanese, near_min_distance, near_max_distance,max_rating )
VALUES
('robnettsean22@gmail.com', 'blind22', True, false, 0, 10, 5 )

```
