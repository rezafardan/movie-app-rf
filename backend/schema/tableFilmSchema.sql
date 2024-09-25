CREATE DATABASE movie_app;
USE movie_app;

CREATE TABLE film (
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    years integer,
    extract TEXT,
    thumbnail TEXT, 
    created TIMESTAMP DEFAULT NOW()
);

INSERT INTO film (title, years, extract, thumbnail) 
VALUES (
"The Grudge",
2020,
"The Grudge is a 2020 American psychological supernatural horror film written and directed by Nicolas Pesce. Originally announced as a reboot of the 2004 American remake and the original 2002 Japanese horror film Ju-On: The Grudge, the film ended up taking place before and during the events of the 2004 film and its two direct sequels, and is the fourth installment in the American The Grudge film series. The film stars Andrea Riseborough, DemiÃ¡n Bichir, John Cho, Betty Gilpin, Lin Shaye, and Jacki Weaver, and follows a police officer who investigates several murders that are seemingly connected to a single house.",
"https://upload.wikimedia.org/wikipedia/en/3/34/The_Grudge_2020_Poster.jpeg"
),
(
"Underwater",
2020,
"Underwater is a 2020 American science fiction action horror film directed by William Eubank. The film stars Kristen Stewart, Vincent Cassel, Jessica Henwick, John Gallagher Jr., Mamoudou Athie, and T.J. Miller.",
"https://upload.wikimedia.org/wikipedia/en/4/4a/Underwater_poster.jpeg"
),
(
"Inherit the Viper",
2020,
"Inherit the Viper is a 2019 American crime drama film directed by Anthony Jerjen, in his feature directorial debut, from a screenplay by Andrew Crabtree. It stars Josh Hartnett, Margarita Levieva, Chandler Riggs, Bruce Dern, Valorie Curry, Owen Teague, and Dash Mihok.",
"https://upload.wikimedia.org/wikipedia/en/1/1c/Inherit_the_Viper_%282019%29_Film_Poster.jpg"
),
(
"The Sonata",
2020,
"The Sonata is a 2018 mystery thriller film, directed by Andrew Desmond, from a screenplay by Desmond and Arthur Morin. It stars Freya Tingley, Simon Abkarian, James Faulkner, Rutger Hauer, Matt Barber and James Kermack. It was released in the United States on January 10, 2020, by Screen Media Films. It grossed $146,595 at the box office and received mixed reviews from critics.",
 "https://upload.wikimedia.org/wikipedia/en/1/13/The_Sonata_%282018%29_Film_Poster.jpg"
),
(
 "The Murder of Nicole Brown Simpson",
 2020,
"The Murder of Nicole Brown Simpson is a 2019 American crime horror film directed by Daniel Farrands. The film is loosely based on the murder of Nicole Brown Simpson, presenting a version of events in which Brown Simpson is murdered by serial killer Glen Edward Rogers, and not by O. J. Simpson, her ex-husband and the primary suspect in the case. Though Mena Suvari's performance as Nicole Brown was praised, the film was panned by critics.",
"https://upload.wikimedia.org/wikipedia/en/e/ed/The_Murder_of_Nicole_Brown_Simpson_poster.jpg"
),
(
"Bad Boys for Life",
2020,
"Bad Boys for Life is a 2020 American buddy cop action comedy film directed by Adil & Bilall. It is the sequel to Bad Boys II (2003) and the third installment in the Bad Boys franchise. Will Smith, Martin Lawrence, Joe Pantoliano and Theresa Randle reprise their roles in the film and are joined by Paola NÃºÃ±ez, Vanessa Hudgens, Jacob Scipio, Alexander Ludwig, Charles Melton, Kate del Castillo and Nicky Jam. The film was produced by Smith, Jerry Bruckheimer, and Doug Belgrad, with a screenplay written by Chris Bremner, Peter Craig and Joe Carnahan. In Bad Boys for Life, Miami detectives Mike Lowrey and Marcus Burnett investigate a string of murders tied to Lowrey's troubled past.",
"https://upload.wikimedia.org/wikipedia/en/9/90/Bad_Boys_for_Life_poster.jpg"
),
(
"Dolittle",
2020,
"Dolittle is a 2020 American fantasy adventure film directed by Stephen Gaghan from a screenplay by Gaghan, Dan Gregor, and Doug Mand, based on a story by Thomas Shepherd. Dolittle is based on the title character created by Hugh Lofting and is primarily inspired by the author's second Doctor Dolittle book, The Voyages of Doctor Dolittle (1922). Robert Downey Jr. stars as the title character, alongside Antonio Banderas and Michael Sheen in live-action roles, with Emma Thompson, Rami Malek, John Cena, Kumail Nanjiani, Octavia Spencer, Tom Holland, Craig Robinson, Ralph Fiennes, Selena Gomez, and Marion Cotillard voicing an array of creatures.",
"https://upload.wikimedia.org/wikipedia/en/1/1f/Dolittle_%282020_film_poster%29.png"
),
(
"A Fall from Grace",
2020,
"A Fall from Grace is a 2020 American thriller film produced, written, and directed by Tyler Perry and his first to be released by Netflix. The film follows a woman who finds a dangerous new love and the novice attorney who defends her in a sensational court case. This was the final film of actor Cicely Tyson before her death in January 2021.",
"https://upload.wikimedia.org/wikipedia/en/4/4e/AFallFromGrace.png"
),
(
"The Gentlemen",
2020,
"The Gentlemen is a 2019 action comedy film written, directed and produced by Guy Ritchie, who developed the story along with Ivan Atkinson and Marn Davies. The film stars Matthew McConaughey, Charlie Hunnam, Henry Golding, Michelle Dockery, Jeremy Strong, Eddie Marsan, Colin Farrell, and Hugh Grant. It follows an American cannabis wholesaler in England who is looking to sell his business, setting off a chain of blackmail and schemes to undermine him.",
"https://upload.wikimedia.org/wikipedia/en/0/06/The_Gentlemen_poster.jpg"
),
(
"The Turning",
2020,
"The Turning is a 2020 American gothic supernatural horror film directed by Floria Sigismondi and written by Carey W. Hayes and Chad Hayes. It is a modern adaptation of the 1898 ghost story The Turn of the Screw by Henry James. It stars Mackenzie Davis, Finn Wolfhard, Brooklynn Prince, and Joely Richardson, and follows a young governess in 1994 who is hired to watch over two children after their parents are killed.",
"https://upload.wikimedia.org/wikipedia/en/a/a2/The_Turning_poster_2020.jpg"
),
(
"The Last Full Measure",
2020,
"The Last Full Measure is a 2019 American war drama film written and directed by Todd Robinson. It follows the efforts of fictional Pentagon staffer Scott Huffman and many veterans to see the Medal of Honor awarded to William H. Pitsenbarger, a United States Air Force Pararescueman who flew in helicopter rescue missions during the Vietnam War to aid downed soldiers and pilots. Based on true events, the film stars Sebastian Stan, Christopher Plummer, William Hurt, Ed Harris, Samuel L. Jackson, Jeremy Irvine, and Peter Fonda. It was the final film appearance of Fonda, who died before the filmâ€™s release; and Plummer's final on screen appearance before his death in 2021, though it had filmed prior to Knives Out which was released before it.",
"https://upload.wikimedia.org/wikipedia/en/9/9d/The_Last_Full_Measure_2019_poster.jpg"
),
(
"John Henry",
2020,
"John Henry is a 2020 American thriller drama film starring Terry Crews and Ludacris, and directed by Will Forbes. Inspired by the folk lore of John Henry, the plot follows an ex-gang member from Los Angeles who must help two immigrant children who are on the run from his former crime boss. The film had a limited release on January 24, 2020, and received negative reviews from critics.",
 "https://upload.wikimedia.org/wikipedia/en/b/b8/JohnHenryPoster.jpeg"
),
(
"The Rhythm Section",
2020,
"The Rhythm Section is a 2020 action thriller film directed by Reed Morano and with a screenplay by Mark Burnell based on his novel of the same name. Starring Blake Lively, Jude Law and Sterling K. Brown, and follows a grieving woman who seeks revenge after discovering that the plane crash that killed her family was a terrorist attack.",
"https://upload.wikimedia.org/wikipedia/en/9/98/The_Rhythm_Section_poster.jpg"
),
(
"Gretel & Hansel",
2020,
"Gretel & Hansel is a 2020 dark fantasy horror film based on the German folklore tale 'Hansel and Gretel' by the Brothers Grimm. The film is directed by Oz Perkins, and produced by Fred Berger, Brian Kavanaugh-Jones, and Dan Kagan, with a screenplay by Rob Hayes. Sophia Lillis and Sam Leakey portray the titular characters, alongside Alice Krige and Jessica De Gouw. The story follows Gretel and Hansel as they enter the dark woods in order to find work and food, and then stumble upon the home of a witch.",
"https://upload.wikimedia.org/wikipedia/en/d/de/Gretel_%26_Hansel_-_A_Grim_Fairy_Tale_theatrical_poster.jpeg"
),
(
"The Assistant",
2020,
"The Assistant is a 2019 American drama film written, directed, produced, and edited by Kitty Green. The film stars Julia Garner as a junior assistant at a film production company. Matthew Macfadyen, Makenzie Leigh, Kristine Froseth, Jon Orsini, and Noah Robbins also star.",
"https://upload.wikimedia.org/wikipedia/en/9/9b/The_Assistant_poster.jpeg"
),
(
"Birds of Prey",
2020,
"Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn), also known as Harley Quinn: Birds of Prey or simply Birds of Prey, is a 2020 American superhero film directed by Cathy Yan and written by Christina Hodson, based on the DC Comics team, the Birds of Prey. Produced by Warner Bros., DC Films, LuckyChap Entertainment, Clubhouse Pictures, and Kroll & Co. Entertainment, it is the eighth installment in the DC Extended Universe (DCEU), and serves as a spin-off and sequel to Suicide Squad (2016). It stars Margot Robbie as Harley Quinn alongside Mary Elizabeth Winstead, Jurnee Smollett-Bell, Rosie Perez, Chris Messina, Ella Jay Basco, Ali Wong, and Ewan McGregor. The film follows Harley Quinn, who, after breaking up with the Joker, is threatened by Gotham City crime lord Roman Sionis, and joins forces with Helena Bertinelli, Dinah Lance and Renee Montoya (who go on to form the Birds of Prey) to save Cassandra Cain.",
"https://upload.wikimedia.org/wikipedia/en/1/1c/Birds_of_Prey_%282020_film%29_poster.jpg"
),
(
"The Lodge",
2020,
"The Lodge is a 2019 psychological horror film directed by Veronika Franz and Severin Fiala, written by Franz, Fiala, and Sergio Casci, and starring Riley Keough, Jaeden Martell, Lia McHugh, Alicia Silverstone, and Richard Armitage. Its plot follows a soon-to-be stepmother who, alone with her fiancÃ©'s two children, becomes stranded at their rural lodge during Christmas. There, she and the children experience a number of unexplained events that seem to be connected to her past.",
"https://upload.wikimedia.org/wikipedia/en/c/cf/The_Lodge_poster.jpg"
),
(
"Timmy Failure: Mistakes Were Made",
2020,
"Timmy Failure: Mistakes Were Made is a 2020 American adventure fantasy comedy-drama family film based on the book series of the same name by Stephan Pastis that debuted on Disney+ on February 7, 2020. The film is directed by Tom McCarthy, produced by Alexander Dostal, McCarthy and Jim Whitaker from a screenplay written by McCarthy and Pastis and stars Winslow Fegley, Ophelia Lovibond, Craig Robinson and Wallace Shawn.",
"https://upload.wikimedia.org/wikipedia/en/c/c8/Timmy_Failure_Mistakes_Were_Made_Poster.jpeg"
);


