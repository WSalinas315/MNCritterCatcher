
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (255) UNIQUE NOT NULL,
    "password" VARCHAR (255) NOT NULL,
    "profile_image" VARCHAR (255)
);

-- Animal Database Table
CREATE TABLE "animal" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (255) UNIQUE NOT NULL,
    "type" VARCHAR (255) NOT NULL,
    "subtype" VARCHAR (255) NOT NULL,
    "family" VARCHAR (255) NOT NULL,
    "scientific_name" VARCHAR (255) UNIQUE NOT NULL,
    "length" VARCHAR (255) NOT NULL,
    "length_uom" VARCHAR (255) NOT NULL,
    "wingspan" VARCHAR (255),
    "weight" VARCHAR (255) NOT NULL,
    "weight_uom" VARCHAR (255) NOT NULL,
    "conservation_status" VARCHAR (255) NOT NULL,
    "description" VARCHAR (1024) NOT NULL,
    "stock_image" VARCHAR (255) NOT NULL
);

-- Challenge Table
CREATE TABLE "challenge" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (255) UNIQUE NOT NULL,
    "description" VARCHAR (255) NOT NULL,
    "image" VARCHAR (255) NOT NULL,
    "req_animals" INT NOT NULL
);

-- Challenge_Animal Junction Table
CREATE TABLE "challenge_animal" (
    "id" SERIAL PRIMARY KEY,
    "animal_id" INT NOT NULL REFERENCES "animal",
    "challenge_id" INT NOT NULL REFERENCES "challenge"
);

-- Sighting Junction Table
CREATE TABLE "sighting" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT NOT NULL REFERENCES "user",
    "animal_id" INT NOT NULL REFERENCES "animal",
    "date" DATE NOT NULL,
    "location" VARCHAR (512),
    "caption" VARCHAR (255),
    "image" VARCHAR (255),
    "public" BOOLEAN NOT NULL
);

-- Challenge_User Junction Table
CREATE TABLE "challenge_user" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT NOT NULL REFERENCES "user",
    "challenge_id" INT NOT NULL REFERENCES "challenge",
    "is_complete" BOOLEAN NOT NULL,
    "sighting_num" INT NOT NULL
);