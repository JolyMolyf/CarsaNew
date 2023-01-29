const cars = [
  {
    id: 'a1f50549-6455-440f-9238-a910a7a46393', // Car 1
    type: 'Sedan',
    color: 'Biały',
    vin: 'JTHBK1GG0D2035237',
    registrationNumber: null,
    description: `Do sprzedania Lexus ES350 w stanie technicznym jak i wizualnym B.DB.
    Zawieszenie bez najmniejszych luzów czy stuków.
    Wnętrze auta utrzymane w nienagannym stanie-czyste i zadbane.
    Silnik oraz automatyczna skrzynia biegów działają wzorowo.
    Bogate wyposażenie dodatkowe-wszystko sprawne.
    Pierwszy właściciel w kraju.
    Lakier zachowany bardzo ładnie-zero rys czy rdzy.
    Lexus podczas jazdy prowadzi się bardzo ładnie-duży komfort jazdy.
    Zapraszam do oględzin i zakupu.
    Możliwa zamiana!!
    POLECAM!!!!`,
    mileage: 103500,
    year: 2013,
    drive: 'Na przednie koła',
    transmission: 'Automatyczna',
    market_name: 'OTOMOTO',
    marketplace_link: 'https://www.otomoto.pl/oferta/lexus-es-pierwszy-wlasciciel-super-stan-ID6FedZV.html',
    price: '79900',
    brand_id: '9a1c991c-72dc-4812-85be-dabd04571a7c', // Lexus
    model_id: '9233be9e-5c35-4e93-8a97-2618ef45ab46', // ES
    generation_id: null,
    engine_id: '510afbb0-dd12-40b1-b9df-9f2a878eb0a9', // Engine 1
    location_id: '964a74b3-6054-45fa-aded-9f02ab94cc98', // Location 4
    mainImage:
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Ijd4YWpmN2ZjaWtlNzItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.Eut2j0qH6S1QI4Kb8gwfZ29c1A6N8i2ZVCFv0nu4EKk/image;s=1080x720',
    images: [
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InFoZnR1YWM4NHg1NjMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19._K0zOj3JguHL8lSGoZpnEYQP4P7l9tbl7Vx_tuKWzcE/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImdpYTl0cjRwcDJoejEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.vWq7DFTBZ3cz1Fzq047uvDB96ATIJ1a_Fi-bGOn0ZF4/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjF1dnRpYzQ1czhuczEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.nm3LMXxEV1coZj8MfToqqTzrCyPcav-yu7KlqW0jOP0/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Imk5NTMwNXY3Njh0ZTMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.I7izKA3hYb1dvSAGSwSwa_Lq2O6_tFhLREzGqjWXASY/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InphamQxM2h3dGJpay1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.ULWESUMArRM2ty8xkHO37Bo9k0BKBaMHEqy5l_0gZpc/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjB0YXBuMDY4bDJrbDItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.M6WDv43eVtTMzI-XJqhZHwQUyeGOZhr0sEDNDuyklSs/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Ijd0bThuMTZxbjFtcDEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.PGKHdlEyN68Q4wIznxTU-eP4x6W65x4gHP123hIF1SQ/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IndkMnJ0dW44cjgyNjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.gl3hRihweVQ5j1CQ3h1h7iHQy1iY19mg_V3iGQ7CO5A/image;s=1080x720'
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '4cce2970-1c55-46b3-a01b-722eb5994257', // Car 2
    type: 'Kombi',
    color: 'Granatowy',
    vin: 'WVWZZZ3CZFE063260',
    registrationNumber: null,
    description: `Volkswagen Passat B7 2.0TDI 177km(130kW) z 2014r. przebieg 116000km
    MOŻLIWOŚĆ SKORZYSTANIA Z BEZPŁATNEGO PRZEGLĄDU W RAMACH WYKUPIONEGO PAKIETU SERWISOWEGO DO POŁOWY MARCA W AUTORYZOWANYM SERWISIE SKODA/VOLKSWAGEN!!!!
    (m.in wymiana płynu chłodniczego,oleju, świec zapłonowych i filtra pyłków stałych i inne)
    Samochód zadbany lakier i tapicerka nienaganna kierowca niepalący
    samochód jest w bardzo dobrym stanie technicznym.
    Kupiony w polskim salonie! 1 właściciel
    Bogata wersja wyposażenia.
    Aktualne ubezpieczenie i badanie techniczne.
    Serwisowany tylko w autoryzowanym serwisie VW/Skoda
    komplet opon letnich i zimowych
    bagażnik dachowy Atera Signo RT
    łańcuchy na koła`,
    mileage: 116000,
    year: 2014,
    drive: 'Na przednie koła',
    transmission: 'Manualna',
    market_name: 'OTOMOTO',
    marketplace_link:
      'https://www.otomoto.pl/oferta/volkswagen-passat-volkswagen-passat-2-0-tdi-highline-dodatki-ID6FfIro.html',
    price: '62500',
    brand_id: '0ee041e0-b682-4161-900b-f23dd69c4faf', // Valkswagen
    model_id: 'a96fb813-d729-4a22-bd93-5583f452b2a1', // Passat
    generation_id: '46eb77c3-3f5c-41e3-a354-7be9a3c18404', // B7
    engine_id: '6e8acff5-132c-4115-bc71-f365d26bec60', // Engine 2
    location_id: '26096f88-10e3-4196-a9e7-10c50ddf129b', // Location 1
    mainImage:
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjNiYnJ3YjR0NmE0MTEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.Xia7HjpZXCItEtG2dUnWRZFO5A_JHcVi0Jq3w8bXiVU/image;s=1080x720',
    images: [
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjV3dmVqMjduZTdtYi1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.8UyznmoJ89976J8qmNKdsvgtu3KOhR-3jcnemkeGyAo/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjA2NXI5bXY0OHNiMDItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.T8DfvUu28akWbeseqSPi5fOPtKR2hj7hvmfZfSehJD0/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjZ5bjVkNWtjczVrcy1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.xWF1UD8E8gjwj4VwFog7k1NfPlql-mP9nIrgQ_yVFSM/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImtyZTB5aTNyN25xbjMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.tIU8GoVFT__hsILtZGXyFTLB0MGdOWeF_jCPRJGveeo/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImpwY3FnbTl6eHA0MjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.e7QdkIOppVE177RfpOS_W8VJUbYvn9DJuQm5QUAwhOk/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImJlaWc5ejAybWttbDMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.3wIKaDuHFf5cTN5mWA_7L3b-RNWkbk8i5s3pThDRUC4/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InJxeHJjNTNkNnJpYTMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.MBMVWkPkBjtrCGP8cALjAVeISUCHrFHa725ePhgkqhg/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImpkYnZrOHpyYzdzOTMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.yHKuYhIxyZYVT640DpEBtdjUeDLxmJVuJUsqsJlNuuQ/image;s=1080x720'
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'b3ff578d-180f-472a-b006-1ba646049a67', // Car 3
    type: 'Auta miejskie',
    color: 'Biały',
    vin: 'VF1AG000967463639',
    registrationNumber: 'WWL 9027L',
    description: `Zasięg 400 km trasa. miasto 300 km
    Mam 2 kabla (220/380).
    I speak English
    Szybki port ładowania DC CCS (na zdjęciu)
    Bateria ma gwarancje do 2029 roku.
    Auto sprawdzone u dealera w Warszawie. Mam raport od dealera.
    Koszt 100 km - 30 zł (ładowarka 22 kw).
    Jeśli lądować od gniazdka to 10 zł`,
    mileage: 12500,
    year: 2021,
    drive: 'Na przednie koła',
    transmission: 'Automatyczna',
    market_name: 'OTOMOTO',
    marketplace_link:
      'https://www.otomoto.pl/oferta/renault-zoe-2021r-trasa-400-km-z-bateria-na-wlasnosc-52-kw-na-gw-do-2029-ID6FcJmx.html',
    price: '109500',
    brand_id: '792baa78-089e-435e-9bc1-440e4e21cff8', // Renault
    model_id: '82126a98-0fa3-4b61-977b-c1d62cf2a128', // Zoe
    generation_id: null,
    engine_id: '411ed280-0d10-47dd-83d4-166944893690', // Engine 3
    location_id: '89d86597-1193-4f13-acfe-eedd7f7aaf0c', // Location 2
    mainImage:
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InNjcjBxOXkyYWh1ZTItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.C08RWVG_TdnZqs5pJWAfaeWaOmk1B0ObWuvH8txQopo/image;s=1080x720',
    images: [
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjVsN2F3Y2VpcTgyZDEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.5coAbjBxWiwQ-lGXidNwoncgwt8XdIqzqajF2HcRhuw/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImwzNTJvMGQ3ZWYwdDMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.q1lZKZA93CuT3A2N3RF7BqeS6i05TLHHMcxd2pRG5Ss/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImFzdjFqZGR5dXJkNDEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.tRDt6xhqr_NHKEyImhnlfI3kTKi3loifutFv8240R5s/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InQwYzh6dHNwdmFxMzMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.bOwnwd8NGllrkYbkGmZe6Dq__PJjbKBkUvmxyayK3cE/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Im11bWw0a3EzOXQ2LU9UT01PVE9QTCIsInciOlt7ImZuIjoid2c0Z25xcDZ5MWYtT1RPTU9UT1BMIiwicyI6IjE2IiwicCI6IjEwLC0xMCIsImEiOiIwIn1dfQ.GDw82ZkHNzaqNkbEJ_JXRvNpUXOYf4mfrgazlEWr8nw/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Ijg3MjU2ZGJjODdtMTEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.9FUv62iR7ibNdarSW-4LmJ8ys5mDa3S9fqqLJ0SYQOQ/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InZyeXpwdHI5dXNibzEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.2FTFCwy25JgPbx5S1TNuNFpytakNETk5U_oigh2pYRk/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Ijd5NnhvMzI2dWgwczItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.ZfS-bZ-jkxDJ5OhAWN3Wtwpfjm84-xxg0hzFAQ7jVeM/image;s=1080x720'
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'd1737953-f0ea-427f-ad50-133b0dd02fa7', // Car 4
    type: 'Sedan',
    color: 'Szary',
    vin: 'JTMDXXXXXXXXXXXXX',
    registrationNumber: 'WWL 8547L',
    description: `Witam,
    Samochód jest w idealnym stanie. Prosze pisac do mnie tylko na adres email po wiecej
    szczególów i zdjec: Rezerw@vp.pl
    Dziekuje Ci`,
    mileage: 177000,
    year: 2016,
    drive: 'Na przednie koła',
    transmission: 'Automatyczna',
    market_name: 'OTOMOTO',
    marketplace_link: 'https://www.otomoto.pl/oferta/audi-a4-ID6FgAAf.html',
    price: '40000',
    brand_id: '165b6aa3-889e-4f7e-a343-166b1d0fecf1', // Audi
    model_id: 'ec76df74-8e48-46d2-9349-c54a123666a2', // A4
    generation_id: '40ede900-f1be-4a12-85ce-b4773b6a8747', // B9
    engine_id: 'bd82a965-d949-4d49-86af-f41c888960f6', // Engine 4
    location_id: 'df59d88d-8b77-4848-838e-354dd6bc4a2d', // Location 3
    mainImage:
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjBmNDcwZWlxc2dxYzMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.TzNxmRgpNh3w0kOnJW3u3Xyffiw8EuuXJGI57yWwFKo/image;s=1080x720',
    images: [
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjlydWo4dDAyeTJpaTItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.Vz4gxiymsXHI_jznzGgbHNVYEGq71GIDBJ9vpAqAl3s/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Ino5YWVhbmVmcnF0NTItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19._ZkwhY2L5LBWXhfGGzfQybgA-9EN69MszhOi2qwlP-w/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjZteDB0N21ucjF3bzEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.tokY1P_9b_gfLhMBTcMX1PA6lm19kpgiA9jdI3YDvqA/image;s=1080x720'
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'aade10bd-8296-43af-bdb6-5877587a2ed0', // Car 5
    type: 'Kompakt',
    color: 'Perłowy',
    vin: 'JTDKARFP2H3064548',
    registrationNumber: null,
    description: `Toyota Prius Plug-in Premium Hybrid Radar Led
    Samochód sprowadzony z USA zarejestrowana w Polsce, licznik w kilometrach, mocny i bardzo ekonomiczny silnik hybrydowy z trzema trybami jazdy,
    Spalanie od 0,8-4,5 litra w zależności od trybu jazdy. Skrzynia automat bezstopniowa, niski przebieg, podgrzewane siedzenia, dotykowy kolorowy monitor,
    wielofunkcyjna kierownica, kamera cofania, radar tempomat aktywny ,podgrzewane lusterka, lakier biała perła, wnętrze pojazdu czyste i zadbane,
    biało-czarne skóry jak nowe, stan techniczny bardzo dobry.`,
    mileage: 83200,
    year: 2017,
    drive: 'Na przednie koła',
    transmission: 'Automatyczna',
    market_name: 'OTOMOTO',
    marketplace_link: 'https://www.otomoto.pl/oferta/toyota-prius-toyota-prius-plug-in-biala-perla-ID6F3G4R.html',
    price: '105000',
    brand_id: 'ffd53284-36b3-47ac-a825-bc4ee754ee85', // Toyota
    model_id: '11a0efdf-f329-450c-b22c-ab45e88d4147', // Prius
    generation_id: '60b3488e-dfab-4c92-a39b-3a975a9bda3e', // IV
    engine_id: 'd974b49d-4102-4072-827a-ebe6a8dde3a4', // Engine 5
    location_id: 'fe2717a0-045e-49ef-a7cf-c151a7275527', // Location 9
    mainImage:
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImV4bDRndWd1dGZjOTItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.o6SJFDTNIoFpmg4hBf3jCzJN9Q8XSaVN0bHDDn8vyXk/image;s=1080x720',
    images: [
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Im14eXF0OGx2ZXByZDEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.r4qo04_QSN0Alw4DbjpTFPqWi6EZrSul8nnyJ61gWKY/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IndweTM0dXpzNjZuMDItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.uKtM1O-SV66kSYI1G-RoL5QkCDu5_RFSKdkyl1wpkv0/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjB3N2lqeDVrbHJvODEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.CuMhmY6D1qOTVzbpdYvexwQm36IKcfMGZtPv8JhC6b0/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjJ2a2ppaXllanBwNy1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.cs79vom5fI1kHG5GQP1dBR7hH4_ykwPR-7O7edV1vTo/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Im5odm55OWNuZnh3ZS1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.-xlNQnfmtyeuSy0fAgy-BVpfrroa3c66UREtOz5rohY/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Imw0M3cwaGRrMmZ5MzItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.e3CHHCXzviIF4WAdjH7wR-8z8b0rjtUh7GSa3s251UA/image;s=1080x720'
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '8401177f-9b1c-4acc-8be6-3ba6654a6e9a', // Car 6
    type: 'Sedan',
    color: 'Czarny',
    vin: 'JHMCL96803C204190',
    registrationNumber: 'WPI 5379E',
    description: `Sprzedam Hondę Accord 2003 wersja executive xenon, szyberdach, elektryczne fotele, opony letnie, pakiet dokładek , ważne opłaty.
    Auto obecnie jest obniżone na sprężynach firmy eibach.
    Dorzucam felgi 16 na zimowych oponach
    - przegląd zrobiony na dniach ważny do października 2023
    - Ubezpieczenie OC ważne do września 2023
    - Opony letnie z 2020 roku na alufelgach 18
    W ostatnim czasie w aucie zrobiona została -głowica (jest jak nowa)
    -uszczelka pod głowica OEM
    -wymieniony łańcuch rozrządu na OEM
    -wymieniony termostat
    -wymieniona chłodnica
    -alternator w pełni zregenerowany
    -zawory regulowane co 12/15tys
    -olej wymieniany co 15 tys
    -filtr kabinowy i oleju również
    -filtr powietrza stożkowy czyszczony co 20 tys
    -olej w skrzyni wymieniany co 35/40 tys`,
    mileage: 328000,
    year: 2003,
    drive: 'Na przednie koła',
    transmission: 'Automatyczna',
    market_name: 'OTOMOTO',
    marketplace_link: 'https://www.otomoto.pl/oferta/honda-accord-honda-accord-vii-2-4-automat-executive-ID6F3GVP.html',
    price: '18500',
    brand_id: 'e798fa92-59a5-49b3-bd4e-5876a8d77f37', // Honda
    model_id: '6501a5a6-1d6b-4290-9bb1-c541764c9f76', // Accord
    generation_id: '917e65ed-ea61-4443-ae50-5e1ba135198f', // VII
    engine_id: 'ebcc8287-1eef-48ae-8e3f-0e53ff103c6a', // Engine 6
    location_id: '89d86597-1193-4f13-acfe-eedd7f7aaf0c', // Location 2
    mainImage:
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImczeGp1eXFkNHZjYzItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.r9XiLgwML-qbhM7Kpwgey3_9CTUKGgm7WOF4Dz26a5Y/image;s=1080x720',
    images: [
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InJyNGI4NHIxZTNuZzItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.Cr_2IU2-rdVsvjRsK1TsCWpdVXXytQ2R7wlYIuJnji8/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImF3Mmg5Z3Brdnk2aDMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.coYdVvgi6JUlNbKVhLxpZqoHs61gaWNP1-dhP2fqaFU/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImNvdzJiZjFmbmlnODMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.aV_PqbwBu-97-Y1RvY__5dM2TCWECSVF1nVRcwnnrto/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Im8wMXRtZGVpdTBnbC1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.zRj08yh8N6OLfA2rgkIScM0B8M9_1u7qI8Lvs-_6Wss/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImltYzYyZWRjazBqMDMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.14kMxU4-SLZxvoDsUuxxPVE3kCMYpBQmBwBUGug8bNc/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InF6dDV2Z3AwajI2bDEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.g4RXTE6oYCQdPfkN-SqzTmukfEVTCly8xDRO2cSIxD8/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjBwMHQ1dG1ibW45OC1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.Pq5g05lx3sa0cMu1fG4GThzyD9ii-aFWfoyRM5f8jqs/image;s=1080x720'
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '37f798d7-0acf-4d47-be39-3334ee3d67e4', // Car 7
    type: 'Coupe',
    color: 'Czarny',
    vin: 'JN1GFNV37U0120046',
    registrationNumber: 'WW 977YS',
    description: `Inifiniti Q60S 4x4 405KM, bardzo dobre spalanie w granicach 10l/100km. Model 2017, I rej. marzec 2017, produkcja 16r.
    Auto z Polskiego salonu, 1wł, serwis ASO, stan idealny, bezwypadkowy, przebieg autostradowy, długie trasy, bogata wersja, auto wbrew pozorom proste w obsłudze i tanie w utrzymaniu.
    Sprzedaż na zasadach cesji Leasingu w Santander.
    Odstępne 55000 netto
    (Do uzgodnienia)
    Raty 12 x 3150 netto
    Wykup 20000 netto
    Całość = 112800 netto
    Pełna specyfikacja oraz historia serwisowa dostępna w ASO po nr.VIN.
    Jako odstępne mogę przyjąć auto w rozliczeniu. Więcej informacji udzielę telefonicznie.`,
    mileage: 174000,
    year: 2017,
    drive: '4X4',
    transmission: 'Automatyczna',
    market_name: 'OTOMOTO',
    marketplace_link:
      'https://www.otomoto.pl/oferta/infiniti-q60-s-405km-4x4-pl-salon-aso-1wl-leasing-cesja-ID6FdG3Z.html',
    price: '138744',
    brand_id: '58f49a5b-fdaf-4f6b-999e-453a21799e0b', // Infiniti
    model_id: '3e34f931-f128-4d6e-84ed-33b2ac3fb190', // Q60
    generation_id: null,
    engine_id: 'f36ce6db-8bd1-4f53-85f6-5d94dcfe2770', // Engine 7
    location_id: '89d86597-1193-4f13-acfe-eedd7f7aaf0c', // Location 2
    mainImage: 'https://www.otomoto.pl/oferta/infiniti-q60-s-405km-4x4-pl-salon-aso-1wl-leasing-cesja-ID6FdG3Z.html',
    images: [
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Inc1Mmpqendka3Z1YTItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.OXzBoY5Ers1rJ9AqBDNKBxxSCUJlmEuXWsqOwQ_K0_w/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Ing1bDk4bDNnN21xaC1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.r8PkSrNOEAx7tFPV9K2TcEg5rAy2NhrJetvUZ6Z1pTM/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InNibGJha3pqZ2hsNjMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.9fECR2t4GgxTETYQwM-wH90axZunnmjdLa-ChXEtTpw/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjR6bHI0M21sNG9hei1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.nAOlDITL2zjDHRtOASI9tPlVaRCrYeO-flGD93_prhY/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Ijc0N3NyYmZ2N2tqcTMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.HVNaMoXP-QzMhTd99npgniJQ_OxwcB7I4KEIncd5ixc/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjAxYjkwYXdlZ3dpcS1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.OsNNi-sEhQI5HDub3dMtrEFcnGUe075bagUPCS8tNqQ/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjB0cDZ6NjYweHMyazEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.iiygTHoltXds0jSX-1OxT1IVES5HyK9hU4M4sVoEBUM/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImplOTUyM2J5d3ZidDEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.d7fKj7d-IfDzLtqVD6a1gg8lAyPv8qUzu2mpEpjJxZM/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjE5a3hhNmV1am9jMjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.QxqVeJC7Jh3NDz8pFhBLTQzBpXeSTWScHo_KbWbAKCs/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImJrZTQ1bnkzanlkczMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.vHQq4tzRNf5G36dpgW_iyZotRNF7MMPVazMh1xWQrNU/image;s=1080x720'
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '106ed24c-b965-4c0e-b8c4-9ed139f89704', // Car 8
    type: 'SUV',
    color: 'Czarny',
    vin: 'WF02K8HY1MNA03638',
    registrationNumber: 'DW 3RK47',
    description: `W cenie raty już wliczony pakiet serwisowy od leasingu (319,67 zl brutto)
    Samochód oklejony przezroczysta folia z zabezpieczonym lakierem - ceramika (cena oryginalnej uslugi 10400)!
    Dodatkowe wyposażenie z oryginalnymi cenami:
    * Dywaniki gumowe 0,00
    * Alarm Pastylkowy 2 500,00
    * Kontrakt Serwisowy 4 620,00
    * Wykładzina przedział bagażowy 190,00
    * Siatka przytrzymująca bagaż 270,00
    * Zwijalny pojemnik transportowy materiał w kolorze czarnym, z owalnym białym logo Ford po obu stronach 0,00
    * 4x Opony Zimowe Nokian WR SUV 4 - 4 250,00 (dodatkowo do letnich)
    Za dodatkowa oplata moge sprzedac dokupiony kabel type2 do ladowania na szybkich ladowarkach.
    Kwota do wpłaty to 10.000 zł do mnie za cesję leasingu, później 23 raty po 7 829,29 brutto i ew. wykup 162 943,88.`,
    mileage: 10247,
    year: 2020,
    drive: '4X4',
    transmission: 'Automatyczna',
    market_name: 'OTOMOTO',
    marketplace_link:
      'https://www.otomoto.pl/oferta/ford-explorer-pierwszy-wlasciciel-stan-idealny-cesja-leasingu-ID6FfsRW.html',
    price: '138744',
    brand_id: '6b3030e2-1ddc-44e7-aa4c-bc37266c17be', // Ford
    model_id: 'a4444855-0f3e-4e78-ab33-1ecf73bc5c2c', // Exolorer
    generation_id: null,
    engine_id: '44630e2c-7cdb-4338-b87b-c9c667390df5', // Engine 8
    location_id: 'caf5c55c-e15a-426d-992b-8347db3ce272', // Location 5
    mainImage:
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Ijl0NmNvM2s4OG5kdy1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.zVxSKL85XMwXmb1KqcyRXUh-ReEL8BItmxXzV0xTqWo/image;s=1080x720',
    images: [
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Ijh6aTZhdm0xa2oxMTMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.aHJxPE8qNNvR6s3qDs8Ua9D9VgPrtzo426MFCsk1Qf4/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjBxMjNsMGZjcjU3bC1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.MWuIVqvL9AxnJm_Sr0qA5FkbparPsVYKga49f_lNySo/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Imh5cW5jeTNjeDA2MjMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.AFOBzKp2qa8Z8FG9429oetsrWSZJoM8hZDisDhyLhF0/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InZpbjlsY2xtN29rNjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.A3RxOPKsyrgo7nnt5hUFoK8pEKeXSGSYkUyjPmn66DI/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InJtbXZnMXZwZWpnei1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.uIWEZZwZthVEdXFxvPyJ8SUhjNdjRNVPCpszDJcAJKA/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Iml5OTBwc3lucnlkcDEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.XOooTBdciVb6e8rQkDQJJGXJnVn-FuISAZPMOiFTRcU/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImhxZWcwNGZ2ODJnbDEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.TRRHSKA5FsQN3LtjGRPOIGIAvoQCTu-gVw4Ec3dWmEw/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InAwYTdnODR4cmM4YTMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.W5znWXN2oFfE-mfWLeqFwqYxPS9CfYoI1WDAp2tmj5M/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImQ0ZnRhdWI5eGhoczEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.lVniRIN0eTDh1hAWLV5P0-tnrJIJSOU25J2eiYMBX4A/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InFkNGR1eXF1bjF2ZzMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.It4WMqBf2I0w3KPqEDXz2NGPxgPyv54sZDK-netSlvI/image;s=1080x720',
      'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Inp5dm1na2M4dmZzdi1PVE9NT1RPUEwiLCJ3IjpbeyJmbiI6IndnNGducXA2eTFmLU9UT01PVE9QTCIsInMiOiIxNiIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.CDnfXn7uuVXiE2sw0iCXawe_c6mjeim6wsG9xUqeTFY/image;s=1080x720'
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

module.exports = {
  cars: cars,

  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Car', cars, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Car', null, {});
  }
};
