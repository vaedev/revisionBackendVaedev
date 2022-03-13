CREATE TABLE IF NOT EXISTS Livres (
  Livre_ID SERIAL PRIMARY KEY,
  Titre TEXT NOT NULL,
  Auteur TEXT NOT NULL,
  nb_page INTEGER NOT NULL
);

INSERT INTO Livres (livre_ID, titre, auteur, nb_page) VALUES
  (1, 'L''art de la guerre', 'Sun Zu', 250),
  (2, 'Hagakure', 'Yamamoto Tsunetomo', 300),
  (3, 'L''esprit indomptable', 'Takuan Soho', 150),
  (3, 'Mystère de la sagesse immobile', 'Takuan Soho', 400)

ON CONFLICT DO NOTHING;

