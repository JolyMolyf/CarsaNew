const uuid = require('uuid');

const equipmentNames = [
  'Apple CarPlay',
  'Android Auto',
  'Interfejs Bluetooth',
  'Gniazdo USB',
  'Ładowanie bezprzewodowe urządzeń',
  'System nawigacji satelitarnej',
  'Wyświetlacz typu Head-Up',
  'Dostęp do internetu',
  'Klimatyzacja automatyczna',
  'Klimatyzacja automatyczna, dwustrefowa',
  'Klimatyzacja automatyczna: 3 strefowa',
  'Klimatyzacja automatyczna: 4 lub wiêcej strefowa',
  'Klimatyzacja manualna',
  'Dach panoramiczny',
  'Drugi szyberdach szklany - przesuwny i uchylny el.',
  'Szyberdach szklany - przesuwny i uchylny elektrycz',
  'Szyberdach szklany - przesuwny i uchylny ręcznie',
  'Tapicerka Alcantara',
  'Tapicerka częściowo skórzana',
  'Tapicerka materiałowa',
  'Tapicerka skórzana',
  'Elektrycznie ustawiany fotel kierowcy',
  'Podgrzewany fotel kierowcy',
  'Podgrzewany fotel pasażera',
  'Fotele przednie wentylowane',
  'Siedzenie z pamięcią ustawienia',
  'Fotele tylne wentylowane',
  'Podłokietniki - przód',
  'Kierownica sportowa',
  'Zmiana biegów w kierownicy',
  'Keyless entry',
  'Keyless Go',
  'Podgrzewana przednia szyba',
  'Funkcja szybkiego ładowania',
  'Kabel do ładowania',
  'Tempomat',
  'Tempomat adaptacyjny ACC',
  'Tempomat przewidujący PCC',
  'Lampy bi-ksenonowe',
  'Lampy ksenonowe',
  'Lampy przednie w technologii LED',
  'Reflektory laserowe',
  'Kontrola odległości z przodu (przy parkowaniu)',
  'Kontrola odległości z tyłu (przy parkowaniu)',
  'Park Assistant - asystent parkowania',
  'Niezależny system parkowania',
  'Kamera panoramiczna 360',
  'Kamera parkowania tył',
  'Lusterka boczne składane elektrycznie',
  'Asystent (czujnik) martwego pola',
  'Asysten pasa ruchu',
  'Kontrola odległości od poprzedzającego pojazdu',
  'Autonomiczny system kierowania',
  'Dynamiczne światła doświetlające zakręty',
  'Oświetlenie drogi do domu',
  'Zawieszenie sportowe',
  'Zawieszenie powietrzne',
  'Isofix (punkty mocowania fotelika dziecięcego)'
];

const equipments = [];

for (let i = 0; i < equipmentNames.length; i++) {
  equipments.push({
    id: uuid.v4(),
    name: equipmentNames[i]
  });
}

module.exports = {
  equipments: equipments,

  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Equipment', equipments, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Equipment', null, {});
  }
};
