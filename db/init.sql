CREATE TABLE houser_houses (
    id Serial PRIMARY KEY,
    name VARCHAR(50),
    address VARCHAR(100),
    city VARCHAR(50),
    state VARCHAR(50),
    zip VARCHAR(20),
    image_url VARCHAR(200),
    mortgage_amount VARCHAR(30),
    monthly_rent VARCHAR(20)
);




ALTER TABLE houser_houses
ADD COLUMN color;