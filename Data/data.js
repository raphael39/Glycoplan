import shoppingLIst from './../models/shoppinList';
import RecipeOverview from './../models/RecipeOverview';
import RecipeDetails from './../models/RecipeDetails';

export const SHOPPINGITEMS = [];

export const GlycoListeData = [
  { title: 'Agar Agar', color: 'green', id: 'A1', nutrients: {
    Kalorien: 26, 
    Fettgehalt: '0 g', 	
    GesättigteFettsäuren: '0 g', 	
    MehrfachUngesättigteFettsäuren: '0 g', 	
    EinfachUngesättigteFettsäuren: '0 g', 	
    Cholesterin: '0 mg', 	
    Natrium: '9 mg', 	
    Kalium: '226 mg',
    Kohlenhydrate: '7 g', 	
    Ballaststoff: '0,5 g', 	
    Zucker: '0,3 g', 
    Protein: '0,5 g', 	
    VitaminA:	'0 IU', 
    VitaminC:	'0 mg', 
    Kalzium:	'54 mg', 
    Eisen:	'1,9 mg', 
    VitaminD: '0 IU', 
    VitaminB6:	'0 mg', 
    VitaminB12:	'0µg', 
    Magnesium:	'67 mg', 
  } },
  { title: 'Algen', color: 'green', id: 'A2' },
  { title: 'Alpkäse', color: 'green', id: 'A3' },
  { title: 'Auberginen', color: 'green', id: 'A4' },
  { title: 'Austernpilz', color: 'green', id: 'A5' },
  { title: 'Avocado', color: 'green', id: 'A6' },
  { title: 'Avocado-Öl', color: 'green', id: 'A7' },
  { title: 'Bachforelle', color: 'green', id: 'A8' },
  { title: 'Bambussprossen', color: 'green', id: 'A9' },
  { title: 'Bataviasalat', color: 'green', id: 'A10' },
  { title: 'Bio-Eier', color: 'green', id: 'A11' },
  { title: 'Blumenkohl', color: 'green', id: 'A12' },
  { title: 'Braunhirse (wild)', color: 'green', id: 'A13' },
  { title: 'Brokkoli', color: 'green', id: 'A14' },
  { title: 'Brombeeren', color: 'green', id: 'A15' },
  { title: 'Brunnenkresse', color: 'green', id: 'A16' },
  { title: 'Buchweizenmehl', color: 'green', id: 'A17' },
  { title: 'Champignos', color: 'green', id: 'A18' },
  { title: 'Chicoree', color: 'green', id: 'A19' },
  { title: 'Chinakohl', color: 'green', id: 'A20' },
  { title: 'Couscous (Buchweizen)', color: 'green', id: 'A21' },
  { title: 'Couscous (Hirse)', color: 'green', id: 'A22' },
  { title: 'Dinkelgras', color: 'green', id: 'A23' },
  { title: 'Eichblattsalat', color: 'green', id: 'A24' },
  { title: 'Eisbergsalat', color: 'green', id: 'A25' },
  { title: 'Endivien', color: 'green', id: 'A26' },
  { title: 'Erdmandelflocken', color: 'green', id: 'A27' },
  { title: 'Feldsalat', color: 'green', id: 'A28' },
  { title: 'Fenchel', color: 'green', id: 'A29' },
  { title: 'Galactose', color: 'green', id: 'A30' },
  { title: 'Galgant', color: 'green', id: 'A31' },
  { title: 'Ghee-Butter', color: 'green', id: 'A32' },
  { title: 'Grapefruit', color: 'green', id: 'A33' },
  { title: 'Grüne Bohnen', color: 'green', id: 'A34' },
  { title: 'Gurken', color: 'green', id: 'A35' },
  { title: 'Hafergras', color: 'green', id: 'A36' },
  { title: 'Hafermilch', color: 'green', id: 'A37' },
  { title: 'Hanföl', color: 'green', id: 'A38' },
  { title: 'Hanfsamen', color: 'green', id: 'A39' },
  { title: 'Heidelbeeren', color: 'green', id: 'A40' },
  { title: 'Heilbutt', color: 'green', id: 'A41' },
  { title: 'Hering', color: 'green', id: 'A42' },
  { title: 'Himbeeren (rot/gelb)', color: 'green', id: 'A43' },
  { title: 'Ingwer', color: 'green', id: 'A44' },
  { title: 'Joghurt (Ziege/Schaf)', color: 'green', id: 'A45' },
  { title: 'Johannisbeeren (rot/weiß/schwarz)', color: 'green', id: 'A46' },
  { title: 'Kabeljau', color: 'green', id: 'A47' },
  { title: 'Kaffee, Espresso', color: 'green', id: 'A48' },
  { title: 'Kakaopulver', color: 'green', id: 'A49' },
  { title: 'Kapstachelbeeren', color: 'green', id: 'A50' },
  { title: 'Knoblauch', color: 'green', id: 'A51' },
  { title: 'Kohlarten (alle)', color: 'green', id: 'A52' },
  { title: 'Kohlrabi', color: 'green', id: 'A53' },
  { title: 'Kokosmehl', color: 'green', id: 'A54' },
  { title: 'Kokosmilch (ohne Zucker)', color: 'green', id: 'A55' },
  { title: 'Kokosnuss', color: 'green', id: 'A56' },
  { title: 'Kokosnusswasser (Dr. Martins)', color: 'green', id: 'A57' },
  { title: 'Kokosöl/Kokosfett', color: 'green', id: 'A58' },
  { title: 'Kopfsalat', color: 'green', id: 'A59' },
  { title: 'Kräutertee', color: 'green', id: 'A60' },
  { title: 'Lamm (Bioqualität)', color: 'green', id: 'A61' },
  { title: 'Lauch', color: 'green', id: 'A62' },
  { title: 'Leinöl', color: 'green', id: 'A63' },
  { title: 'Leinsamen', color: 'green', id: 'A64' },
  { title: 'Leinsamenöl', color: 'green', id: 'A65' },
  { title: 'Linsen', color: 'green', id: 'A66' },
  { title: 'Lollo Rosso', color: 'green', id: 'A67' },
  { title: 'Löwenzahn', color: 'green', id: 'A68' },
  { title: 'Macadamia-Nussöl', color: 'green', id: 'A69' },
  { title: 'Macadamianüsse', color: 'green', id: 'A70' },
  { title: 'Makrele', color: 'green', id: 'A71' },
  { title: 'Mandelmilch', color: 'green', id: 'A72' },
  { title: 'Mandeln Bioqualität', color: 'green', id: 'A73' },
  { title: 'Mandelöl', color: 'green', id: 'A74' },
  { title: 'Mangold', color: 'green', id: 'A75' },
  { title: 'Mannose', color: 'green', id: 'A76' },
  {
    title: 'Marmelade (selbstgemacht mit Agar Agar, Galactose)',
    color: 'green',
    id: 'A77',
  },
  { title: 'Maulbeeren (getrocknet)', color: 'green', id: 'A78' },
  { title: 'Meerettich (frisch)', color: 'green', id: 'A79' },
  { title: 'Milch (Schaf, Ziege)', color: 'green', id: 'A80' },
  { title: 'Mohn', color: 'green', id: 'A81' },
  { title: 'Morcheln', color: 'green', id: 'A82' },
  { title: 'Oliven', color: 'green', id: 'A83' },
  { title: 'Olivenöl', color: 'green', id: 'A84' },
  { title: 'Papaya', color: 'green', id: 'A85' },
  { title: 'Papaya (getrocknet)', color: 'green', id: 'A86' },
  { title: 'Paprika', color: 'green', id: 'A87' },
  { title: 'Paranüsse', color: 'green', id: 'A88' },
  { title: 'Pfifferlinge', color: 'green', id: 'A89' },
  { title: 'Pistazien (bio)', color: 'green', id: 'A90' },
  { title: 'Portulak', color: 'green', id: 'A91' },
  { title: 'Postelein', color: 'green', id: 'A92' },
  { title: 'Preiselbeeren (frisch)', color: 'green', id: 'A93' },
  { title: 'Quark (Ziege, Schaf)', color: 'green', id: 'A94' },
  { title: 'Radicchio', color: 'green', id: 'A95' },
  { title: 'Radieschen', color: 'green', id: 'A96' },
  { title: 'Rapsöl', color: 'green', id: 'A97' },
  { title: 'Reishi (Ganodernum lucidum)', color: 'green', id: 'A98' },
  { title: 'Rettich', color: 'green', id: 'A99' },
  { title: 'Rhabarber', color: 'green', id: 'A100' },
  { title: 'Ribose', color: 'green', id: 'A101' },
  { title: 'Röhrling', color: 'green', id: 'A102' },
  { title: 'Römischer Salat', color: 'green', id: 'A103' },
  { title: 'Rotbarsch', color: 'green', id: 'A104' },
  { title: 'Rucola', color: 'green', id: 'A105' },
  { title: 'Rucola-Sprossen', color: 'green', id: 'A106' },
  { title: 'Saibling', color: 'green', id: 'A107' },
  { title: 'Sanddorn', color: 'green', id: 'A108' },
  { title: 'Sardine', color: 'green', id: 'A109' },
  { title: 'Sauerampfer', color: 'green', id: 'A110' },
  { title: 'Sauerkraut', color: 'green', id: 'A111' },
  { title: 'Schafkäse', color: 'green', id: 'A112' },
  { title: 'Schellfisch', color: 'green', id: 'A113' },
  { title: 'Scholle', color: 'green', id: 'A115' },
  { title: 'Schwarzer Reis', color: 'green', id: 'A116' },
  { title: 'Schwertfisch', color: 'green', id: 'A117' },
  { title: 'Seezunge', color: 'green', id: 'A118' },
  { title: 'Sellerie', color: 'green', id: 'A119' },
  { title: 'Senfpulver', color: 'green', id: 'A120' },
  { title: 'Sesamöl', color: 'green', id: 'A121' },
  { title: 'Sesamsamen', color: 'green', id: 'A122' },
  { title: 'Sojasprossen', color: 'green', id: 'A123' },
  { title: 'Spargel', color: 'green', id: 'A124' },
  { title: 'Spinat', color: 'green', id: 'A125' },
  { title: 'Stachelbeeren', color: 'green', id: 'A126' },
  { title: 'Steinpilze', color: 'green', id: 'A127' },
  { title: 'Stockschwäcmmchen', color: 'green', id: 'A128' },
  { title: 'Tagatose', color: 'green', id: 'A129' },
  { title: 'Tee (schwarz, grün, weiß)', color: 'green', id: 'A130' },
  { title: 'Thunfisch', color: 'green', id: 'A131' },
  { title: 'Tomaten', color: 'green', id: 'A132' },
  { title: 'Tomatenmark', color: 'green', id: 'A133' },
  { title: 'Walnüsse', color: 'green', id: 'A134' },
  { title: 'Walnussöl', color: 'green', id: 'A135' },
  { title: 'Wasser', color: 'green', id: 'A136' },
  { title: 'Weizengrass', color: 'green', id: 'A137' },
  { title: 'Wild (Rücken und Filet, Bioqualität', color: 'green', id: 'A138' },
  { title: 'Wildkräuter', color: 'green', id: 'A139' },
  { title: 'Wildlachs', color: 'green', id: 'A140' },
  { title: 'Wirsing', color: 'green', id: 'A141' },
  { title: 'Xylose', color: 'green', id: 'A142' },
  { title: 'Zander', color: 'green', id: 'A143' },
  { title: 'Ziegenkäse', color: 'green', id: 'A144' },
  { title: 'Zimt', color: 'green', id: 'A145' },
  { title: 'Zitrone', color: 'green', id: 'A146' },
  { title: 'Zucchini', color: 'green', id: 'A147' },
  { title: 'Zuckerhut/Fleischkraut', color: 'green', id: 'A148' },
  { title: 'Zwiebeln', color: 'green', id: 'A149' },
  { title: 'Amaranth', color: 'yellow', id: 'B1' },
  { title: 'Ananas', color: 'yellow', id: 'B2' },
  { title: 'Apfel', color: 'yellow', id: 'B3' },
  { title: 'Aprikosen', color: 'yellow', id: 'B4' },
  { title: 'Arganöl', color: 'yellow', id: 'B5' },
  { title: 'Aroniabeeren', color: 'yellow', id: 'B6' },
  { title: 'Balsamico-Essig', color: 'yellow', id: 'B7' },
  { title: 'Basmati (Vollkorn)', color: 'yellow', id: 'B8' },
  { title: 'Biofleisch', color: 'yellow', id: 'B9' },
  { title: 'Birne', color: 'yellow', id: 'B10' },
  { title: 'Brottrunk', color: 'yellow', id: 'B11' },
  { title: 'Buchweizen', color: 'yellow', id: 'B12' },
  { title: 'Büffelfleisch', color: 'yellow', id: 'B13' },
  { title: 'Butter', color: 'yellow', id: 'B14' },
  { title: 'Cranberry (getrocknet ohne Zucker)', color: 'yellow', id: 'B15' },
  { title: 'Cranberry-Saft/Muttersaft', color: 'yellow', id: 'B16' },
  { title: 'Datteln', color: 'yellow', id: 'B18' },
  { title: 'Dinkel (Bio-Qualität)', color: 'yellow', id: 'B19' },
  { title: 'Dinkelbrot', color: 'yellow', id: 'B20' },
  { title: 'Einkorn (Ur-Dinkel)', color: 'yellow', id: 'B21' },
  { title: 'Emmermehl (Ur-Weizen)', color: 'yellow', id: 'B22' },
  { title: 'Erdbeeren', color: 'yellow', id: 'B23' },
  { title: 'Erytrithol', color: 'yellow', id: 'B24' },
  { title: 'Essig', color: 'yellow', id: 'B25' },
  { title: 'Esskastanien/Maronen', color: 'yellow', id: 'B26' },
  { title: 'Früchtetee', color: 'yellow', id: 'B27' },
  { title: 'Fruchtsaft, ftisch gepresst (Beere, Grapefruit)', color: 'yellow', id: 'B28' },
  { title: 'Gojibeeren (getrocknet)', color: 'yellow', id: 'B29' },
  { title: 'Granatapfel', color: 'yellow', id: 'B30' },
  { title: 'Guarkenmehl', color: 'yellow', id: 'B31' },
  { title: 'Haferflocken (kernige)', color: 'yellow', id: 'B32' },
  { title: 'Hefe', color: 'yellow', id: 'B33' },
  { title: 'Hefeflocken', color: 'yellow', id: 'B34' },
  { title: 'Hirse', color: 'yellow', id: 'B35' },
  { title: 'Holunderbeere', color: 'yellow', id: 'B36' },
  { title: 'Honigmelone', color: 'yellow', id: 'B37' },
  { title: 'Inulin', color: 'yellow', id: 'B38' },
  { title: 'Isomaltulose/Isomaltose', color: 'yellow', id: 'B39' },
  { title: 'Johannisbrotmehl', color: 'yellow', id: 'B40' },
  { title: 'Jostabeere', color: 'yellow', id: 'B41' },
  { title: 'Kamut', color: 'yellow', id: 'B42' },
  { title: 'Karotten', color: 'yellow', id: 'B43' },
  { title: 'Kartoffeln, rot', color: 'yellow', id: 'B44' },
  { title: 'Kastanienmehl', color: 'yellow', id: 'B45' },
  { title: 'Kichererbsen', color: 'yellow', id: 'B46' },
  { title: 'Kiwi', color: 'yellow', id: 'B47' },
  { title: 'Kokosblütenzucker', color: 'yellow', id: 'B48' },
  { title: 'Kürbis', color: 'yellow', id: 'B49' },
  { title: 'Kürbiskernöl', color: 'yellow', id: 'B50' },
  { title: 'lactosefreie Milchprodukte', color: 'yellow', id: 'B51' },
  { title: 'Limetten', color: 'yellow', id: 'B52' },
  { title: 'Mais', color: 'yellow', id: 'B53' },
  { title: 'Maisnudeln', color: 'yellow', id: 'B54' },
  { title: 'Mandarinen', color: 'yellow', id: 'B55' },
  { title: 'Mandelmus', color: 'yellow', id: 'B56' },
  { title: 'Mango', color: 'yellow', id: 'B57' },
  { title: 'Mango (getrocknet)', color: 'yellow', id: 'B58' },
  { title: 'Mate-Tee', color: 'yellow', id: 'B59' },
  { title: 'Mu-Err', color: 'yellow', id: 'B60' },
  { title: 'Orange', color: 'yellow', id: 'B61' },
  { title: 'Passionsfrucht/Maracuja', color: 'yellow', id: 'B62' },
  { title: 'Pastinaken', color: 'yellow', id: 'B63' },
  { title: 'Pfirsich', color: 'yellow', id: 'B64' },
  { title: 'Pilzmischung (tiefgekühlt)', color: 'yellow', id: 'B65' },
  { title: 'Quinoa', color: 'yellow', id: 'B66' },
  { title: 'Quitte (verarbeitet) Mus, Gelee', color: 'yellow', id: 'B67' },
  { title: 'Reginbrot reiner Roggen', color: 'yellow', id: 'B68' },
  { title: 'Reismilch', color: 'yellow', id: 'B69' },
  { title: 'Rind (Rücken und Filet, Bioqualität', color: 'yellow', id: 'B70' },
  { title: 'roter Reis', color: 'yellow', id: 'B71' },
  { title: 'Rotwein', color: 'yellow', id: 'B72' },
  { title: 'Sahne', color: 'yellow', id: 'B73' },
  { title: 'Salami (Bio-Qualität)', color: 'yellow', id: 'B74' },
  { title: 'Sanddornsaft', color: 'yellow', id: 'B75' },
  { title: 'Schokolade (ab 90% Kakao-Anteil)', color: 'yellow', id: 'B76' },
  { title: 'Senf (Dijon ohne Zucker)', color: 'yellow', id: 'B77' },
  { title: 'Shitake', color: 'yellow', id: 'B78' },
  { title: 'Sojaprodukte (fermentiert, Sprossen)', color: 'yellow', id: 'B79' },
  { title: 'Truthahn- und Hähnchenbrust (ohne Haut, Bioqualität)', color: 'yellow', id: 'B80' },
  { title: 'Waldstaudenkorn (Ur-Roggen)', color: 'yellow', id: 'B81' },
  { title: 'Wasabi-Meerettich', color: 'yellow', id: 'B82' },
  { title: 'Weiße Bohnen', color: 'yellow', id: 'B83' },
  { title: 'Rotwein', color: 'yellow', id: 'B85' },
  { title: 'Weißwein', color: 'yellow', id: 'B84' },
  { title: 'Wild (freilaufend)', color: 'yellow', id: 'B86' },
  { title: 'Wildreis', color: 'yellow', id: 'B87' },
  { title: 'Xylit/Xylitol (Birkenzucker)', color: 'yellow', id: 'B88' },
  { title: 'Apfelsaft', color: 'red', id: 'C1' },
  { title: 'Bananen', color: 'red', id: 'C2' },
  { title: 'Bier', color: 'red', id: 'C3' },
  { title: 'Cashewnüsse', color: 'red', id: 'C4' },
  { title: 'Chips', color: 'red', id: 'C5' },
  { title: 'Couscous (Weizen)', color: 'red', id: 'C6' },
  { title: 'Erdnüsse', color: 'red', id: 'C7' },
  { title: 'Erdnusöl', color: 'red', id: 'C8' },
  { title: 'Fastfood (Hamburger, Pizza)', color: 'red', id: 'C9' },
  { title: 'Feigen', color: 'red', id: 'C10' },
  { title: 'firsch gepresster Fruchsaft', color: 'red', id: 'C11' },
  { title: 'frittierte Speisen', color: 'red', id: 'C12' },
  { title: 'Fruchtnektar', color: 'red', id: 'C13' },
  { title: 'Fruchtsaftkonzentration', color: 'red', id: 'C14' },
  { title: 'Gerste', color: 'red', id: 'C15' },
  { title: 'Gnochhi (Fertigprodukt)', color: 'red', id: 'C16' },
  { title: 'Hafer', color: 'red', id: 'C17' },
  { title: 'Hagebutte', color: 'red', id: 'C18' },
  { title: 'Hähnchenbrust mit Haut', color: 'red', id: 'C19' },
  { title: 'Hähnchenschlegel', color: 'red', id: 'C20' },
  { title: 'Haselnüsse', color: 'red', id: 'C21' },
  { title: 'Honig', color: 'red', id: 'C22' },
  { title: 'Joghurt (Kuh)', color: 'red', id: 'C23' },
  { title: 'Kaki', color: 'red', id: 'C24' },
  { title: 'Käse (Kuh)', color: 'red', id: 'C25' },
  { title: 'Kaugummi', color: 'red', id: 'C26' },
  { title: 'Kirschen', color: 'red', id: 'C27' },
  { title: 'lactosefreie Kuhmilchprodukte', color: 'red', id: 'C28' },
  { title: 'Leberwurst', color: 'red', id: 'C29' },
  { title: 'Limonaden', color: 'red', id: 'C30' },
  { title: 'Litschi', color: 'red', id: 'C31' },
  { title: 'Lupinenmehl', color: 'red', id: 'C32' },
  { title: 'Malz', color: 'red', id: 'C33' },
  { title: 'Margarine', color: 'red', id: 'C34' },
  { title: 'Marmelade (fertig gekauft)', color: 'red', id: 'C35' },
  { title: 'Milch (Kuh, laktosefrei)', color: 'red', id: 'C36' },
  { title: 'Milch (Kuh)', color: 'red', id: 'C37' },
  { title: 'Mirabellen', color: 'red', id: 'C38' },
  { title: 'Müsli', color: 'red', id: 'C39' },
  { title: 'Nudeln (Weizen)', color: 'red', id: 'C40' },
  { title: 'Orangensaft', color: 'red', id: 'C41' },
  { title: 'Pizza', color: 'red', id: 'C42' },
  { title: 'Quark (Kuh)', color: 'red', id: 'C43' },
  { title: 'Reis', color: 'red', id: 'C44' },
  { title: 'Roggen', color: 'red', id: 'C45' },
  { title: 'Salami (keine-Bio-Qualität)', color: 'red', id: 'C46' },
  { title: 'Schinken', color: 'red', id: 'C47' },
  { title: 'Schokocreme', color: 'red', id: 'C48' },
  { title: 'Schokolade (weniger als 90% Kakao, Vollmich etc.', color: 'red', id: 'C49' },
  { title: 'Schweinefleisch', color: 'red', id: 'C50' },
  { title: 'Softdrinks (Cola, Limonade, Energiegetränke, Sportgetränke)', color: 'red', id: 'C51' },
  { title: 'Sojaprodukte (nicht fermentiert)', color: 'red', id: 'C52' },
  { title: 'Spirituosen', color: 'red', id: 'C53' },
  { title: 'Stevia-Produkte', color: 'red', id: 'C54' },
  { title: 'Sushi-Reis', color: 'red', id: 'C55' },
  { title: 'Süßigkeiten', color: 'red', id: 'C56' },
  { title: 'Süßkartoffeln', color: 'red', id: 'C57' },
  { title: 'Süßstoff', color: 'red', id: 'C58' },
  { title: 'Trauben', color: 'red', id: 'C59' },
  { title: 'Wassermelone', color: 'red', id: 'C60' },
  { title: 'Weintrauben', color: 'red', id: 'C61' },
  { title: 'Weißer Zucker', color: 'red', id: 'C62' },
  { title: 'Weizen, Weizen-Produkte, Weißbrot', color: 'red', id: 'C63' },
  { title: 'Zucker, alternative Süßungsmittel', color: 'red', id: 'C64' },
];

export const green = [
  { title: 'Agar Agar', color: 'green', id: 'A1', nutrients: {
    Kalorien: 26, 
    Fettgehalt: '0 g', 	
    GesättigteFettsäuren: '0 g', 	
    MehrfachUngesättigteFettsäuren: '0 g', 	
    EinfachUngesättigteFettsäuren: '0 g', 	
    Cholesterin: '0 mg', 	
    Natrium: '9 mg', 	
    Kalium: '226 mg',
    Kohlenhydrate: '7 g', 	
    Ballaststoff: '0,5 g', 	
    Zucker: '0,3 g', 
    Protein: '0,5 g', 	
    VitaminA:	'0 IU', 
    VitaminC:	'0 mg', 
    Kalzium:	'54 mg', 
    Eisen:	'1,9 mg', 
    VitaminD: '0 IU', 
    VitaminB6:	'0 mg', 
    VitaminB12:	'0µg', 
    Magnesium:	'67 mg', 
  } },
  { title: 'Algen', color: 'green', id: 'A2' },
  { title: 'Alpkäse', color: 'green', id: 'A3' },
  { title: 'Auberginen', color: 'green', id: 'A4' },
  { title: 'Austernpilz', color: 'green', id: 'A5' },
  { title: 'Avocado', color: 'green', id: 'A6' },
  { title: 'Avocado-Öl', color: 'green', id: 'A7' },
  { title: 'Bachforelle', color: 'green', id: 'A8' },
  { title: 'Bambussprossen', color: 'green', id: 'A9' },
  { title: 'Bataviasalat', color: 'green', id: 'A10' },
  { title: 'Bio-Eier', color: 'green', id: 'A11' },
  { title: 'Blumenkohl', color: 'green', id: 'A12' },
  { title: 'Braunhirse (wild)', color: 'green', id: 'A13' },
  { title: 'Brokkoli', color: 'green', id: 'A14' },
  { title: 'Brombeeren', color: 'green', id: 'A15' },
  { title: 'Brunnenkresse', color: 'green', id: 'A16' },
  { title: 'Buchweizenmehl', color: 'green', id: 'A17' },
  { title: 'Champignos', color: 'green', id: 'A18' },
  { title: 'Chicoree', color: 'green', id: 'A19' },
  { title: 'Chinakohl', color: 'green', id: 'A20' },
  { title: 'Couscous (Buchweizen)', color: 'green', id: 'A21' },
  { title: 'Couscous (Hirse)', color: 'green', id: 'A22' },
  { title: 'Dinkelgras', color: 'green', id: 'A23' },
  { title: 'Eichblattsalat', color: 'green', id: 'A24' },
  { title: 'Eisbergsalat', color: 'green', id: 'A25' },
  { title: 'Endivien', color: 'green', id: 'A26' },
  { title: 'Erdmandelflocken', color: 'green', id: 'A27' },
  { title: 'Feldsalat', color: 'green', id: 'A28' },
  { title: 'Fenchel', color: 'green', id: 'A29' },
  { title: 'Galactose', color: 'green', id: 'A30' },
  { title: 'Galgant', color: 'green', id: 'A31' },
  { title: 'Ghee-Butter', color: 'green', id: 'A32' },
  { title: 'Grapefruit', color: 'green', id: 'A33' },
  { title: 'Grüne Bohnen', color: 'green', id: 'A34' },
  { title: 'Gurken', color: 'green', id: 'A35' },
  { title: 'Hafergras', color: 'green', id: 'A36' },
  { title: 'Hafermilch', color: 'green', id: 'A37' },
  { title: 'Hanföl', color: 'green', id: 'A38' },
  { title: 'Hanfsamen', color: 'green', id: 'A39' },
  { title: 'Heidelbeeren', color: 'green', id: 'A40' },
  { title: 'Heilbutt', color: 'green', id: 'A41' },
  { title: 'Hering', color: 'green', id: 'A42' },
  { title: 'Himbeeren (rot/gelb)', color: 'green', id: 'A43' },
  { title: 'Ingwer', color: 'green', id: 'A44' },
  { title: 'Joghurt (Ziege/Schaf)', color: 'green', id: 'A45' },
  { title: 'Johannisbeeren (rot/weiß/schwarz)', color: 'green', id: 'A46' },
  { title: 'Kabeljau', color: 'green', id: 'A47' },
  { title: 'Kaffee, Espresso', color: 'green', id: 'A48' },
  { title: 'Kakaopulver', color: 'green', id: 'A49' },
  { title: 'Kapstachelbeeren', color: 'green', id: 'A50' },
  { title: 'Knoblauch', color: 'green', id: 'A51' },
  { title: 'Kohlarten (alle)', color: 'green', id: 'A52' },
  { title: 'Kohlrabi', color: 'green', id: 'A53' },
  { title: 'Kokosmehl', color: 'green', id: 'A54' },
  { title: 'Kokosmilch (ohne Zucker)', color: 'green', id: 'A55' },
  { title: 'Kokosnuss', color: 'green', id: 'A56' },
  { title: 'Kokosnusswasser (Dr. Martins)', color: 'green', id: 'A57' },
  { title: 'Kokosöl/Kokosfett', color: 'green', id: 'A58' },
  { title: 'Kopfsalat', color: 'green', id: 'A59' },
  { title: 'Kräutertee', color: 'green', id: 'A60' },
  { title: 'Lamm (Bioqualität)', color: 'green', id: 'A61' },
  { title: 'Lauch', color: 'green', id: 'A62' },
  { title: 'Leinöl', color: 'green', id: 'A63' },
  { title: 'Leinsamen', color: 'green', id: 'A64' },
  { title: 'Leinsamenöl', color: 'green', id: 'A65' },
  { title: 'Linsen', color: 'green', id: 'A66' },
  { title: 'Lollo Rosso', color: 'green', id: 'A67' },
  { title: 'Löwenzahn', color: 'green', id: 'A68' },
  { title: 'Macadamia-Nussöl', color: 'green', id: 'A69' },
  { title: 'Macadamianüsse', color: 'green', id: 'A70' },
  { title: 'Makrele', color: 'green', id: 'A71' },
  { title: 'Mandelmilch', color: 'green', id: 'A72' },
  { title: 'Mandeln Bioqualität', color: 'green', id: 'A73' },
  { title: 'Mandelöl', color: 'green', id: 'A74' },
  { title: 'Mangold', color: 'green', id: 'A75' },
  { title: 'Mannose', color: 'green', id: 'A76' },
  {
    title: 'Marmelade (selbstgemacht mit Agar Agar, Galactose)',
    color: 'green',
    id: 'A77',
  },
  { title: 'Maulbeeren (getrocknet)', color: 'green', id: 'A78' },
  { title: 'Meerettich (frisch)', color: 'green', id: 'A79' },
  { title: 'Milch (Schaf, Ziege)', color: 'green', id: 'A80' },
  { title: 'Mohn', color: 'green', id: 'A81' },
  { title: 'Morcheln', color: 'green', id: 'A82' },
  { title: 'Oliven', color: 'green', id: 'A83' },
  { title: 'Olivenöl', color: 'green', id: 'A84' },
  { title: 'Papaya', color: 'green', id: 'A85' },
  { title: 'Papaya (getrocknet)', color: 'green', id: 'A86' },
  { title: 'Paprika', color: 'green', id: 'A87' },
  { title: 'Paranüsse', color: 'green', id: 'A88' },
  { title: 'Pfifferlinge', color: 'green', id: 'A89' },
  { title: 'Pistazien (bio)', color: 'green', id: 'A90' },
  { title: 'Portulak', color: 'green', id: 'A91' },
  { title: 'Postelein', color: 'green', id: 'A92' },
  { title: 'Preiselbeeren (frisch)', color: 'green', id: 'A93' },
  { title: 'Quark (Ziege, Schaf)', color: 'green', id: 'A94' },
  { title: 'Radicchio', color: 'green', id: 'A95' },
  { title: 'Radieschen', color: 'green', id: 'A96' },
  { title: 'Rapsöl', color: 'green', id: 'A97' },
  { title: 'Reishi (Ganodernum lucidum)', color: 'green', id: 'A98' },
  { title: 'Rettich', color: 'green', id: 'A99' },
  { title: 'Rhabarber', color: 'green', id: 'A100' },
  { title: 'Ribose', color: 'green', id: 'A101' },
  { title: 'Röhrling', color: 'green', id: 'A102' },
  { title: 'Römischer Salat', color: 'green', id: 'A103' },
  { title: 'Rotbarsch', color: 'green', id: 'A104' },
  { title: 'Rucola', color: 'green', id: 'A105' },
  { title: 'Rucola-Sprossen', color: 'green', id: 'A106' },
  { title: 'Saibling', color: 'green', id: 'A107' },
  { title: 'Sanddorn', color: 'green', id: 'A108' },
  { title: 'Sardine', color: 'green', id: 'A109' },
  { title: 'Sauerampfer', color: 'green', id: 'A110' },
  { title: 'Sauerkraut', color: 'green', id: 'A111' },
  { title: 'Schafkäse', color: 'green', id: 'A112' },
  { title: 'Schellfisch', color: 'green', id: 'A113' },
  { title: 'Scholle', color: 'green', id: 'A115' },
  { title: 'Schwarzer Reis', color: 'green', id: 'A116' },
  { title: 'Schwertfisch', color: 'green', id: 'A117' },
  { title: 'Seezunge', color: 'green', id: 'A118' },
  { title: 'Sellerie', color: 'green', id: 'A119' },
  { title: 'Senfpulver', color: 'green', id: 'A120' },
  { title: 'Sesamöl', color: 'green', id: 'A121' },
  { title: 'Sesamsamen', color: 'green', id: 'A122' },
  { title: 'Sojasprossen', color: 'green', id: 'A123' },
  { title: 'Spargel', color: 'green', id: 'A124' },
  { title: 'Spinat', color: 'green', id: 'A125' },
  { title: 'Stachelbeeren', color: 'green', id: 'A126' },
  { title: 'Steinpilze', color: 'green', id: 'A127' },
  { title: 'Stockschwäcmmchen', color: 'green', id: 'A128' },
  { title: 'Tagatose', color: 'green', id: 'A129' },
  { title: 'Tee (schwarz, grün, weiß)', color: 'green', id: 'A130' },
  { title: 'Thunfisch', color: 'green', id: 'A131' },
  { title: 'Tomaten', color: 'green', id: 'A132' },
  { title: 'Tomatenmark', color: 'green', id: 'A133' },
  { title: 'Walnüsse', color: 'green', id: 'A134' },
  { title: 'Walnussöl', color: 'green', id: 'A135' },
  { title: 'Wasser', color: 'green', id: 'A136' },
  { title: 'Weizengrass', color: 'green', id: 'A137' },
  { title: 'Wild (Rücken und Filet, Bioqualität', color: 'green', id: 'A138' },
  { title: 'Wildkräuter', color: 'green', id: 'A139' },
  { title: 'Wildlachs', color: 'green', id: 'A140' },
  { title: 'Wirsing', color: 'green', id: 'A141' },
  { title: 'Xylose', color: 'green', id: 'A142' },
  { title: 'Zander', color: 'green', id: 'A143' },
  { title: 'Ziegenkäse', color: 'green', id: 'A144' },
  { title: 'Zimt', color: 'green', id: 'A145' },
  { title: 'Zitrone', color: 'green', id: 'A146' },
  { title: 'Zucchini', color: 'green', id: 'A147' },
  { title: 'Zuckerhut/Fleischkraut', color: 'green', id: 'A148' },
  { title: 'Zwiebeln', color: 'green', id: 'A149' },
];

export const yellow = [
  { title: 'Amaranth', color: 'yellow', id: 'B1' },
  { title: 'Ananas', color: 'yellow', id: 'B2' },
  { title: 'Apfel', color: 'yellow', id: 'B3' },
  { title: 'Aprikosen', color: 'yellow', id: 'B4' },
  { title: 'Arganöl', color: 'yellow', id: 'B5' },
  { title: 'Aroniabeeren', color: 'yellow', id: 'B6' },
  { title: 'Balsamico-Essig', color: 'yellow', id: 'B7' },
  { title: 'Basmati (Vollkorn)', color: 'yellow', id: 'B8' },
  { title: 'Biofleisch', color: 'yellow', id: 'B9' },
  { title: 'Birne', color: 'yellow', id: 'B10' },
  { title: 'Brottrunk', color: 'yellow', id: 'B11' },
  { title: 'Buchweizen', color: 'yellow', id: 'B12' },
  { title: 'Büffelfleisch', color: 'yellow', id: 'B13' },
  { title: 'Butter', color: 'yellow', id: 'B14' },
  { title: 'Cranberry (getrocknet ohne Zucker)', color: 'yellow', id: 'B15' },
  { title: 'Cranberry-Saft/Muttersaft', color: 'yellow', id: 'B16' },
  { title: 'Datteln', color: 'yellow', id: 'B18' },
  { title: 'Dinkel (Bio-Qualität)', color: 'yellow', id: 'B19' },
  { title: 'Dinkelbrot', color: 'yellow', id: 'B20' },
  { title: 'Einkorn (Ur-Dinkel)', color: 'yellow', id: 'B21' },
  { title: 'Emmermehl (Ur-Weizen)', color: 'yellow', id: 'B22' },
  { title: 'Erdbeeren', color: 'yellow', id: 'B23' },
  { title: 'Erytrithol', color: 'yellow', id: 'B24' },
  { title: 'Essig', color: 'yellow', id: 'B25' },
  { title: 'Esskastanien/Maronen', color: 'yellow', id: 'B26' },
  { title: 'Früchtetee', color: 'yellow', id: 'B27' },
  { title: 'Fruchtsaft, ftisch gepresst (Beere, Grapefruit)', color: 'yellow', id: 'B28' },
  { title: 'Gojibeeren (getrocknet)', color: 'yellow', id: 'B29' },
  { title: 'Granatapfel', color: 'yellow', id: 'B30' },
  { title: 'Guarkenmehl', color: 'yellow', id: 'B31' },
  { title: 'Haferflocken (kernige)', color: 'yellow', id: 'B32' },
  { title: 'Hefe', color: 'yellow', id: 'B33' },
  { title: 'Hefeflocken', color: 'yellow', id: 'B34' },
  { title: 'Hirse', color: 'yellow', id: 'B35' },
  { title: 'Holunderbeere', color: 'yellow', id: 'B36' },
  { title: 'Honigmelone', color: 'yellow', id: 'B37' },
  { title: 'Inulin', color: 'yellow', id: 'B38' },
  { title: 'Isomaltulose/Isomaltose', color: 'yellow', id: 'B39' },
  { title: 'Johannisbrotmehl', color: 'yellow', id: 'B40' },
  { title: 'Jostabeere', color: 'yellow', id: 'B41' },
  { title: 'Kamut', color: 'yellow', id: 'B42' },
  { title: 'Karotten', color: 'yellow', id: 'B43' },
  { title: 'Kartoffeln, rot', color: 'yellow', id: 'B44' },
  { title: 'Kastanienmehl', color: 'yellow', id: 'B45' },
  { title: 'Kichererbsen', color: 'yellow', id: 'B46' },
  { title: 'Kiwi', color: 'yellow', id: 'B47' },
  { title: 'Kokosblütenzucker', color: 'yellow', id: 'B48' },
  { title: 'Kürbis', color: 'yellow', id: 'B49' },
  { title: 'Kürbiskernöl', color: 'yellow', id: 'B50' },
  { title: 'lactosefreie Milchprodukte', color: 'yellow', id: 'B51' },
  { title: 'Limetten', color: 'yellow', id: 'B52' },
  { title: 'Mais', color: 'yellow', id: 'B53' },
  { title: 'Maisnudeln', color: 'yellow', id: 'B54' },
  { title: 'Mandarinen', color: 'yellow', id: 'B55' },
  { title: 'Mandelmus', color: 'yellow', id: 'B56' },
  { title: 'Mango', color: 'yellow', id: 'B57' },
  { title: 'Mango (getrocknet)', color: 'yellow', id: 'B58' },
  { title: 'Mate-Tee', color: 'yellow', id: 'B59' },
  { title: 'Mu-Err', color: 'yellow', id: 'B60' },
  { title: 'Orange', color: 'yellow', id: 'B61' },
  { title: 'Passionsfrucht/Maracuja', color: 'yellow', id: 'B62' },
  { title: 'Pastinaken', color: 'yellow', id: 'B63' },
  { title: 'Pfirsich', color: 'yellow', id: 'B64' },
  { title: 'Pilzmischung (tiefgekühlt)', color: 'yellow', id: 'B65' },
  { title: 'Quinoa', color: 'yellow', id: 'B66' },
  { title: 'Quitte (verarbeitet) Mus, Gelee', color: 'yellow', id: 'B67' },
  { title: 'Reginbrot reiner Roggen', color: 'yellow', id: 'B68' },
  { title: 'Reismilch', color: 'yellow', id: 'B69' },
  { title: 'Rind (Rücken und Filet, Bioqualität', color: 'yellow', id: 'B70' },
  { title: 'roter Reis', color: 'yellow', id: 'B71' },
  { title: 'Rotwein', color: 'yellow', id: 'B72' },
  { title: 'Sahne', color: 'yellow', id: 'B73' },
  { title: 'Salami (Bio-Qualität)', color: 'yellow', id: 'B74' },
  { title: 'Sanddornsaft', color: 'yellow', id: 'B75' },
  { title: 'Schokolade (ab 90% Kakao-Anteil)', color: 'yellow', id: 'B76' },
  { title: 'Senf (Dijon ohne Zucker)', color: 'yellow', id: 'B77' },
  { title: 'Shitake', color: 'yellow', id: 'B78' },
  { title: 'Sojaprodukte (fermentiert, Sprossen)', color: 'yellow', id: 'B79' },
  { title: 'Truthahn- und Hähnchenbrust (ohne Haut, Bioqualität)', color: 'yellow', id: 'B80' },
  { title: 'Waldstaudenkorn (Ur-Roggen)', color: 'yellow', id: 'B81' },
  { title: 'Wasabi-Meerettich', color: 'yellow', id: 'B82' },
  { title: 'Weiße Bohnen', color: 'yellow', id: 'B83' },
  { title: 'Rotwein', color: 'yellow', id: 'B85' },
  { title: 'Weißwein', color: 'yellow', id: 'B84' },
  { title: 'Wild (freilaufend)', color: 'yellow', id: 'B86' },
  { title: 'Wildreis', color: 'yellow', id: 'B87' },
  { title: 'Xylit/Xylitol (Birkenzucker)', color: 'yellow', id: 'B88' },

];
export const red = [
  { title: 'Apfelsaft', color: 'red', id: 'C1' },
  { title: 'Bananen', color: 'red', id: 'C2' },
  { title: 'Bier', color: 'red', id: 'C3' },
  { title: 'Cashewnüsse', color: 'red', id: 'C4' },
  { title: 'Chips', color: 'red', id: 'C5' },
  { title: 'Couscous (Weizen)', color: 'red', id: 'C6' },
  { title: 'Erdnüsse', color: 'red', id: 'C7' },
  { title: 'Erdnusöl', color: 'red', id: 'C8' },
  { title: 'Fastfood (Hamburger, Pizza)', color: 'red', id: 'C9' },
  { title: 'Feigen', color: 'red', id: 'C10' },
  { title: 'firsch gepresster Fruchsaft', color: 'red', id: 'C11' },
  { title: 'frittierte Speisen', color: 'red', id: 'C12' },
  { title: 'Fruchtnektar', color: 'red', id: 'C13' },
  { title: 'Fruchtsaftkonzentration', color: 'red', id: 'C14' },
  { title: 'Gerste', color: 'red', id: 'C15' },
  { title: 'Gnochhi (Fertigprodukt)', color: 'red', id: 'C16' },
  { title: 'Hafer', color: 'red', id: 'C17' },
  { title: 'Hagebutte', color: 'red', id: 'C18' },
  { title: 'Hähnchenbrust mit Haut', color: 'red', id: 'C19' },
  { title: 'Hähnchenschlegel', color: 'red', id: 'C20' },
  { title: 'Haselnüsse', color: 'red', id: 'C21' },
  { title: 'Honig', color: 'red', id: 'C22' },
  { title: 'Joghurt (Kuh)', color: 'red', id: 'C23' },
  { title: 'Kaki', color: 'red', id: 'C24' },
  { title: 'Käse (Kuh)', color: 'red', id: 'C25' },
  { title: 'Kaugummi', color: 'red', id: 'C26' },
  { title: 'Kirschen', color: 'red', id: 'C27' },
  { title: 'lactosefreie Kuhmilchprodukte', color: 'red', id: 'C28' },
  { title: 'Leberwurst', color: 'red', id: 'C29' },
  { title: 'Limonaden', color: 'red', id: 'C30' },
  { title: 'Litschi', color: 'red', id: 'C31' },
  { title: 'Lupinenmehl', color: 'red', id: 'C32' },
  { title: 'Malz', color: 'red', id: 'C33' },
  { title: 'Margarine', color: 'red', id: 'C34' },
  { title: 'Marmelade (fertig gekauft)', color: 'red', id: 'C35' },
  { title: 'Milch (Kuh, laktosefrei)', color: 'red', id: 'C36' },
  { title: 'Milch (Kuh)', color: 'red', id: 'C37' },
  { title: 'Mirabellen', color: 'red', id: 'C38' },
  { title: 'Müsli', color: 'red', id: 'C39' },
  { title: 'Nudeln (Weizen)', color: 'red', id: 'C40' },
  { title: 'Orangensaft', color: 'red', id: 'C41' },
  { title: 'Pizza', color: 'red', id: 'C42' },
  { title: 'Quark (Kuh)', color: 'red', id: 'C43' },
  { title: 'Reis', color: 'red', id: 'C44' },
  { title: 'Roggen', color: 'red', id: 'C45' },
  { title: 'Salami (keine-Bio-Qualität)', color: 'red', id: 'C46' },
  { title: 'Schinken', color: 'red', id: 'C47' },
  { title: 'Schokocreme', color: 'red', id: 'C48' },
  { title: 'Schokolade (weniger als 90% Kakao, Vollmich etc.', color: 'red', id: 'C49' },
  { title: 'Schweinefleisch', color: 'red', id: 'C50' },
  { title: 'Softdrinks (Cola, Limonade, Energiegetränke, Sportgetränke)', color: 'red', id: 'C51' },
  { title: 'Sojaprodukte (nicht fermentiert)', color: 'red', id: 'C52' },
  { title: 'Spirituosen', color: 'red', id: 'C53' },
  { title: 'Stevia-Produkte', color: 'red', id: 'C54' },
  { title: 'Sushi-Reis', color: 'red', id: 'C55' },
  { title: 'Süßigkeiten', color: 'red', id: 'C56' },
  { title: 'Süßkartoffeln', color: 'red', id: 'C57' },
  { title: 'Süßstoff', color: 'red', id: 'C58' },
  { title: 'Trauben', color: 'red', id: 'C59' },
  { title: 'Wassermelone', color: 'red', id: 'C60' },
  { title: 'Weintrauben', color: 'red', id: 'C61' },
  { title: 'Weißer Zucker', color: 'red', id: 'C62' },
  { title: 'Weizen, Weizen-Produkte, Weißbrot', color: 'red', id: 'C63' },
  { title: 'Zucker, alternative Süßungsmittel', color: 'red', id: 'C64' },
];

export const Recipes = [
  new RecipeOverview('R1', 'Auberginenschnitzel & Tomatensoße', 'green'),
  new RecipeOverview('R2', 'Brokkoli-Auflauf', 'green'),
  new RecipeOverview('R3', 'Curry mit grünen Linsen', 'green'),
  new RecipeOverview('R4', 'Gefüllte Zucchini mit Quinoa', 'green'),
  new RecipeOverview('R5', 'Italienische Kürbissuppe', 'green'),
  new RecipeOverview('R6', 'Karotten-Kokos-Suppe', 'green'),
];

export const RecipesDetailsArr = [
  new RecipeDetails(
    'R1',
    'Auberginenschnitzel & Tomatensoße',
    'green',
    [
      '2 große Auberginen',
      '1 EL Sahne',
      'Kichererbsenmehl',
      '100g alter Pecorino',
      '1 EL firische italienische Kräuter',
      'Meersalz',
      'frisch gemahlener Pfeffer',
      '2 Eier',
      'Olivenöl',
      '500g Tomaten, enthäuten, würfeln',
      '1 Knoblauchzehe',
      '1 EL Balsamicoessig',
      'Chili',
      'Salz',
    ],
    [
      '1. Die Auberginenscheiben in kochendem Salzwasser mit Sahne ca. 1 Minute kochen, gut abtropfen und trocken tupfen mit Küchenpapier',
      '2. In Kichererbsenmehl wenden, dann in verschlagenem Ei und zuletzt in Käseraspeln wenden, in heißem Olivenöl von beiden Seiten knusprig braten',
      '3. Für das Tomatenragout die fein gewürfelte Zwiebeln und die Knoblauchzehe glasig dünsten, frische Tomaten und Balsamico zugeben, abschmecken und mit Basilikum würzen',
    ]
  ),
  new RecipeDetails(
    'R2',
    'Brokkoli-Auflauf',
    'green',
    [
      '500g Brokkoli',
      'Salz',
      '1 Zwiebel',
      '1 Knoblauch',
      '200g frische Champrgnos',
      'Pfeffer',
      'wenig Muskatnuss',
      '300g Tomatenpüree',
      '200g Ziegengouda',
    ],
    [
      '1. Brokkoli putzen und in Röschen teilen, Stiele schälen und in Stücke schneiden. In kochendem Salzwasser 4-6 Minuten blanchieren. In ein Sieb geben, abtropfen lassen.',
      '2. Backofen auf 200-220°C vorheizen. Die Zwiebel fein würfeln und mit den geschnittenen Champignons und dem Knoblauch in etwas Olivenöl andünsten',
      '3. Eine Auflaufform leicht einfetten, den Brokkoli hinein geben und leicht mit Pfeffer und Muskatnuss würzen'
    ]
  ),
  new RecipeDetails(
    'R3',
    'Curry mit grünen Linsen',
    'green',
    ['Lauch'],
    ['1. Ja, fehlt noch!']
  ),
  new RecipeDetails(
    'R4',
    'Gefüllte Zucchini mit Quinoa',
    'green',
    ['Lauch'],
    ['1. Ja, fehlt noch!']
  ),
  new RecipeDetails(
    'R5',
    'Italienische Kürbissuppe',
    'green',
    ['Lauch'],
    ['1. Ja, fehlt noch!']
  ),
  new RecipeDetails(
    'R6',
    'Karotten-Kokos-Suppe',
    'green',
    ['Lauch'],
    ['1. Ja, fehlt noch!']
  ),
];
