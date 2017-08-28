Use animals_db;

INSERT into people (name, has_pet, pet_name, pet_age)
values("Michael", false, "N/A", 0);

INSERT into people (name, has_pet, pet_name, pet_age)
values("Misty", true, "Star", 10);

INSERT into people (name, has_pet)
values("Peter", false);

update people
set has_pet = false
Where name  = "Peter";

Select*FROM people;