Create Database favorite_music_library;

use favorite_music_library;

CREATE TABLE favorite_music (
  -- Make a string column called "food" which cannot contain null --
  -- Make an numeric column called "score" --
  song varchar(50) not null,
  artist varchar(50),
  genre varchar(50)
  );
  
Insert into favorite_music (song, artist, genre)
values ("Falling in Love", "Haley Reinhart", "pop");

SELECT * FROM favorite_music;

