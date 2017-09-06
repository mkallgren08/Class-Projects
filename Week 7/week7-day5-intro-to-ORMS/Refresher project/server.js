connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  
  });
  
  // Displays the movie
  app.get("/", function(req, res) {
    connection.query("SELECT * FROM movies;", function(err, data) {
      if (err) {
        throw err;
      }
  
      res.render("index", { movies: data });
  
    });
  });
  
  // Adds a movie
  app.post("/", function(req, res) {
    connection.query("INSERT INTO movies (movie) VALUES (?)", [req.body.movie], function(err, result) {
      if (err) {
        throw err;
      }
      res.redirect("/");
    });
  });
  
  app.delete("/:id", function(req, res) {
    connection.query("DELETE FROM movies WHERE id = ?", [req.params.id], function(err, result) {
      if (err) {
        throw err;
      }
      res.redirect("/");
    });
  });
  
  app.put("/", function(req, res) {
  
    connection.query("UPDATE movies SET movie = ? WHERE id = ?", [
      req.body.movie, req.body.id
    ], function(err, result) {
      if (err) {
        throw err;
      }
      res.redirect("/");
    });
  });
  
  app.listen(port);
  