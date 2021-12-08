SELECT * from sakila.film_category;


USE sakila;
CREATE VIEW film_with_categories AS
  SELECT
    f.title,
    fc.category_id,
    c.name
  FROM film f
  INNER JOIN film_category fc ON fc.film_id = f.film_id
  INNER JOIN category c ON c.category_id = fc.category_id
  ORDER BY f.title;

  SELECT * FROM film_with_categories;