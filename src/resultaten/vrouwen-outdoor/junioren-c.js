import {
  ACHTHONDERD_METER,
  DISCUSWERPEN,
  DRIEHONDERD_METER,
  DRIEHONDERD_METER_HORDEN,
  DUIZEND_METER,
  DUIZENDVIJFHONDERD_METER,
  HONDERDVIJFTIG_METER,
  HOOGSPRINGEN,
  KOGELSTOTEN,
  POLSSTOKHOOGSPRINGEN,
  SPEERWERPEN, TACHTIG_METER, TACHTIG_METER_HORDEN,
  TWEEHONDERD_METER,
  VERSPRINGEN, VIER_KEER_TACHTIG_METER,
  VIERHONDERD_METER,
  ZESHONDERD_METER, ZEVENKAMP
} from "../../constants/onderdelen";

export default [
  {
    "onderdeel": TACHTIG_METER,
    "naam": "Aneska de Windt",
    "prestatie": "10,64 (10,4)",
    "plaats": "",
    "datum": "1988"
  },
  {
    "onderdeel": TACHTIG_METER,
    "naam": "Marjanne van Sambeek",
    "prestatie": "10,64 (10,4)",
    "plaats": "Amsterdam",
    "datum": "21-08-1993"
  },
  {
    "onderdeel": HONDERDVIJFTIG_METER,
    "naam": "Tara van Schie",
    "prestatie": "19,54",
    "plaats": "Beverwijk",
    "datum": "03-07-2004"
  },
  {
    "onderdeel": TWEEHONDERD_METER,
    "naam": "Babs Koeman",
    "prestatie": "28,46",
    "plaats": "Edam",
    "datum": "13-05-2018"
  },
  {
    "onderdeel": DRIEHONDERD_METER,
    "naam": "Babs Koeman",
    "prestatie": "47,84",
    "plaats": "Haarlem",
    "datum": "25-03-2018"
  },
  {
    "onderdeel": VIERHONDERD_METER,
    "naam": "Babs Koeman",
    "prestatie": "1.03,43",
    "plaats": "Heerhugowaard",
    "datum": "10-06-2018"
  },
  {
    "onderdeel": ZESHONDERD_METER,
    "naam": "Babs Koeman",
    "prestatie": "1.41,62",
    "plaats": "Amstelveen",
    "datum": "21-05-2018"
  },
  {
    "onderdeel": ACHTHONDERD_METER,
    "naam": "Babs Koeman",
    "prestatie": "2.31,56",
    "plaats": "Haarlem",
    "datum": "08-06-2018"
  },
  {
    "onderdeel": DUIZEND_METER,
    "naam": "Larissa Scholten",
    "prestatie": "3.10,64",
    "plaats": "Utrecht",
    "datum": "22-06-2002"
  },
  {
    "onderdeel": DUIZENDVIJFHONDERD_METER,
    "naam": "Babs Koeman",
    "prestatie": "5.15,44",
    "plaats": "Assendelft",
    "datum": "25-05-2018"
  },
  {
    "onderdeel": TACHTIG_METER_HORDEN,
    "naam": "Marije Zandstra",
    "prestatie": "12,84",
    "plaats": "Zaandam",
    "datum": "14-06-1997"
  },
  {
    "onderdeel": DRIEHONDERD_METER_HORDEN,
    "naam": "Babs Koeman",
    "prestatie": "48,66",
    "plaats": "Heiloo",
    "datum": "22-06-2018"
  },
  {
    "onderdeel": HOOGSPRINGEN,
    "naam": "Sanne Immer",
    "prestatie": "1.60",
    "plaats": "Krommenie",
    "datum": "19-08-2000"
  },
  {
    "onderdeel": POLSSTOKHOOGSPRINGEN,
    "naam": "Mette Elgersma",
    "prestatie": "2.40",
    "plaats": "Heerhugowaard",
    "datum": "02-06-2017"
  },
  {
    "onderdeel": VERSPRINGEN,
    "naam": "Marjanne van Sambeek",
    "prestatie": "5.31",
    "plaats": "Beverwijk",
    "datum": "05-06-1993"
  },
  {
    "onderdeel": KOGELSTOTEN,
    "naam": "Wendy IJzerman",
    "prestatie": "12.07",
    "plaats": "Amersfoort",
    "datum": "24-04-1993"
  },
  {
    "onderdeel": DISCUSWERPEN,
    "naam": "Wendy IJzerman",
    "prestatie": "24.92",
    "plaats": "Beverwijk",
    "datum": "05-06-1993"
  },
  {
    "onderdeel": SPEERWERPEN,
    "naam": "Iris Komen",
    "prestatie": "31.63",
    "plaats": "Santpoort",
    "datum": "24-05-2014"
  },
  {
    "onderdeel": VIER_KEER_TACHTIG_METER,
    "naam": ["Sanna Piscaer", "Janna de Waard", "Marije Zandstra", "Baltine de Wit"],
    "prestatie": "41,94",
    "plaats": "Heerhugowaard",
    "datum": "17-06-1996"
  },
  {
    "onderdeel": ZEVENKAMP,
    "naam": "Babs Koeman",
    "prestatie": [
      {
        "onderdeel": TACHTIG_METER_HORDEN,
        "prestatie": "13,17",
        "punten": "(569)"
      },
      {
        "onderdeel": HOOGSPRINGEN,
        "prestatie": "1.47",
        "punten": "(599)"
      },
      {
        "onderdeel": KOGELSTOTEN,
        "prestatie": "8.75",
        "punten": "(460)"
      },
      {
        "onderdeel": HONDERDVIJFTIG_METER,
        "prestatie": "20,02",
        "punten": "(617)"
      },
      {
        "onderdeel": VERSPRINGEN,
        "prestatie": "5.06",
        "punten": "(632)"
      },
      {
        "onderdeel": SPEERWERPEN,
        "prestatie": "27.86",
        "punten": "(461)"
      },
      {
        "onderdeel": ZESHONDERD_METER,
        "prestatie": "1.42,02",
        "punten": "(661)"
      },
      {
        "onderdeel": "Totaal",
        "prestatie": "",
        "punten": "3999 pnt"
      }
    ],
    "plaats": "Lisse",
    "datum": "07/08-07-2018"
  }
].map(resultaat => {
  resultaat.categorie = 'Junioren C';
  return resultaat;
})
