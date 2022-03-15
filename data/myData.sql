CREATE TABLE Livres (
  Livre_ID SERIAL PRIMARY KEY,
  Titre TEXT NOT NULL,
  Auteur TEXT NOT NULL,
  nb_page INTEGER NOT NULL
);

INSERT INTO Livres (livre_ID, titre, auteur, nb_page) VALUES
  (1, 'L''art de la guerre', 'Sun Zu', 250),
  (2, 'Hagakure', 'Yamamoto Tsunetomo', 300),
  (3, 'L''esprit indomptable', 'Takuan Soho', 150),
  (4, 'Mystère de la sagesse immobile', 'Takuan Soho', 400)

ON CONFLICT DO NOTHING;

CREATE TABLE rhetoric (
  rhetoric_id SERIAL PRIMARY KEY,
  Titre_text TEXT NOT NULL,
  exorde TEXT NOT NULL,
  narration TEXT NOT NULL,
  digression TEXT NOT NULL,
  peroraison TEXT NOT NULL
);

INSERT INTO rhetoric (rhetoric_id, Titre_text, exorde, narration,digression,peroraison) VALUES
  (1,
   'les conséquences sur l''histoire de la guerre en Chine',

   'la guerre en Chine ça ne rigole pas',

    
   'chez sun zu  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quae id eum repellendus fuga doloremque nisi, nemo ipsam laboriosam, perspiciatis natus exercitationem doloribus distinctio cupiditate tempore laudantium. Quidem quisquam reiciendis optio dolore expedita? Est libero fugiat animi quibusdam. Nulla dolor exercitationem natus quo voluptate. Qui voluptates commodi deleniti optio officiis!',

   'c''est comme au japon...tur adipisicing elit. Debitis quae id eum repellendus fuga doloremque nisi, nemo ipsam laboriosam, perspiciatis natus exercitationem doloribus distinctio cupiditate tempore laudantium. Quidem quisquam reiciendis optio dolore expedita? Est libero fugiat animi quibusdam ',

   'alors souvenez vous... bla bla bla les Chinois savent faire la guerre.'
   ),
   (2,
   'le mindset samurai',

   'Tsunemoto redéfinie le standard du guerrier',

    
   'Les périodes de guerres prennent fin, et Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quae id eum repellendus fuga doloremque nisi, nemo ipsam laboriosam, perspiciatis natus exercitationem doloribus distinctio cupiditate tempore laudantium. Quidem quisquam reiciendis optio dolore expedita? Est libero fugiat animi quibusdam. Nulla dolor exercitationem natus quo voluptate. Qui voluptates commodi deleniti optio officiis!',

   'Mais bien sûr il y a des résistant tur adipisicing elit. Debitis quae id eum repellendus fuga doloremque nisi, nemo ipsam laboriosam, perspiciatis natus exercitationem doloribus distinctio cupiditate tempore laudantium. Quidem quisquam reiciendis optio dolore expedita? Est libero fugiat animi quibusdam ',

   'C''est comme ça qu''on fait des bon films avec Thom Cruise par la suite'
   ),
   (3,
   'L''esprit comme l''eau',

   'Quand un moine devient le mentor de l''empereur du japon',

    
   'Il n''a pas fait que les empereurs d''ailleurs, et Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quae id eum repellendus fuga doloremque nisi, nemo ipsam laboriosam, perspiciatis natus exercitationem doloribus distinctio cupiditate tempore laudantium. Quidem quisquam reiciendis optio dolore expedita? Est libero fugiat animi quibusdam. Nulla dolor exercitationem natus quo voluptate. Qui voluptates commodi deleniti optio officiis!',

   'C''est pour ça qu''on l''aime bien, tur adipisicing elit. Debitis quae id eum repellendus fuga doloremque nisi, nemo ipsam laboriosam, perspiciatis natus exercitationem doloribus distinctio cupiditate tempore laudantium. Quidem quisquam reiciendis optio dolore expedita? Est libero fugiat animi quibusdam ',

   'n''hésitez pas à regarder son livre, il a donné son nom à un radis sinon...'
   ),
     (
       4,
   'la suite du radis',

   'méditer c''est bien, mais c''est pas toujours suffisant',

    
   'La cuisine est une affaire sérieuse, et Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quae id eum repellendus fuga doloremque nisi, nemo ipsam laboriosam, perspiciatis natus exercitationem doloribus distinctio cupiditate tempore laudantium. Quidem quisquam reiciendis optio dolore expedita? Est libero fugiat animi quibusdam. Nulla dolor exercitationem natus quo voluptate. Qui voluptates commodi deleniti optio officiis!',

   'Imaginez un katana pour couper des carrottes, tur adipisicing elit. Debitis quae id eum repellendus fuga doloremque nisi, nemo ipsam laboriosam, perspiciatis natus exercitationem doloribus distinctio cupiditate tempore laudantium. Quidem quisquam reiciendis optio dolore expedita? Est libero fugiat animi quibusdam ',

   'Et ça a duré presque milles ans, vous comprenez mieux le succès de la japan expo maintenant.'
   )

ON CONFLICT DO NOTHING;


