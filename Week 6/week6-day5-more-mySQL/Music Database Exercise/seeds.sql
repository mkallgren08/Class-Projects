        SELECT * FROM top_songsDB.top5000 as top
        WHERE top.artist in (
            select sub.artist
            FROM top_songsDB.top5000 AS sub
            GROUP BY artist
            having count(*) > 1
        );