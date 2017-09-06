var orm = require("./config/orm.js");

// Find all parties ordered by cost.
orm.selectAndOrder("animal_name", "pets", "price");

// Find all parties ordered by cost.
orm.selectWhere("pets", "animal_name", "Rachel");

// Find the buyer with the most pets.
orm.findWhoHasMost("buyer_name", "buyer_id", "buyers", "pets");