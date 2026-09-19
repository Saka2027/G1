# Mit Studieoverblik
Mit Studieoverblik er en React Native-app, der hjælper studerende med at holde overblik over opgaver og deadlines. Appen er tænkt som et simpelt supplement til Canvas.

# Appen
Appen består af tre skærme:
- Forside:         navigation til appens øvrige skærme.
- Opgaveoversigt:  viser opgaver og deadlines i en FlatList. Opgaver kan markeres som færdige.
- Information:     kort information om appens formål.

Stylingen er samlet i en separat fil "styles.js".

# Opsætning
Projektet er udviklet med React Native og Expo i VS.

Jeg har brugt:
- Node.js og npm 
- Expo Go til test på mobil
- Expo Go til test på web
- React Navigation til navigation mellem skærmene

Navigationens nødvendige pakker blev installeret med:
`npx expo install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context `

# Start appen
Start Expo: `npx expo start`

Herefter kan appen åbnes på:
- **Mobil:** Scan QR-koden og åbn appen i Expo Go.
- **Web:** skriv `--web` i terminalen

# Demovideo (Webversionen):https://www.loom.com/share/0f232c6964724f089592f331502bfdd5
# Demovideo (Mobilapp):ligger i mappen


# Github
Der er oprettet et nyt GitHub-repository til den færdige version af projektet, da det tidligere repository ikke kunne opdateres korrekt. Det gamle repository er derfor slettet.


# overblik over mappen
Innovation-26
│
├── .expo/
│
├── assets/
│
├── Komponenter/
│   ├── Forside.js
│   ├── Information.js
│   └── Opgaveoversigt.js
│
├── node_modules/
│
├── Style/
│   └── styles.js
│
├── .gitignore
├── App.js
├── app.json
├── index.js
├── LICENSE
├── package-lock.json
├── package.json
└── README.md