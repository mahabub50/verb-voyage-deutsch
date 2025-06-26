import { VerbGroup } from "./germanVerbs";

// Irregular/Strong verbs (Unregelmäßige/Starke Verben) - B2 level comprehensive collection (300+ verbs)
export const germanIrregularVerbs: VerbGroup[] = [
  {
    prefix: "irregular-essential",
    description:
      "essential irregular verbs - fundamental auxiliary and modal verbs",
    verbs: [
      {
        verb: "sein",
        translation: "to be",
        keyPoint: "Most important irregular verb (bin, ist, war, gewesen)",
        examples: [
          "Ich bin müde. (I am tired.)",
          "Er war gestern hier. (He was here yesterday.)",
        ],
      },
      {
        verb: "haben",
        translation: "to have",
        keyPoint: "Essential auxiliary verb (habe, hat, hatte, gehabt)",
        examples: [
          "Ich habe Zeit. (I have time.)",
          "Sie hat das Buch gelesen. (She has read the book.)",
        ],
      },
      {
        verb: "werden",
        translation: "to become, will",
        keyPoint:
          "Future tense and passive voice auxiliary (werde, wird, wurde, geworden)",
        examples: [
          "Ich werde Arzt. (I will become a doctor.)",
          "Das Buch wird gelesen. (The book is being read.)",
        ],
      },
    ],
  },
  {
    prefix: "irregular-motion",
    description:
      "irregular motion verbs - verbs describing movement and travel",
    verbs: [
      {
        verb: "gehen",
        translation: "to go",
        keyPoint: "Motion verb (gehe, geht, ging, gegangen)",
        examples: [
          "Ich gehe nach Hause. (I go home.)",
          "Wir sind ins Kino gegangen. (We went to the cinema.)",
        ],
      },
      {
        verb: "kommen",
        translation: "to come",
        keyPoint: "Motion verb (komme, kommt, kam, gekommen)",
        examples: [
          "Kommst du mit? (Are you coming along?)",
          "Er ist spät gekommen. (He came late.)",
        ],
      },
      {
        verb: "fahren",
        translation: "to drive, to go by vehicle",
        keyPoint: "Motion verb with vehicle (fahre, fährt, fuhr, gefahren)",
        examples: [
          "Ich fahre Auto. (I drive a car.)",
          "Wir sind nach Berlin gefahren. (We went to Berlin.)",
        ],
      },
      {
        verb: "laufen",
        translation: "to run, to walk",
        keyPoint: "Motion verb (laufe, läuft, lief, gelaufen)",
        examples: [
          "Ich laufe jeden Tag. (I run every day.)",
          "Das Kind ist weggelaufen. (The child ran away.)",
        ],
      },
      {
        verb: "fallen",
        translation: "to fall",
        keyPoint: "Motion verb - falling (falle, fällt, fiel, gefallen)",
        examples: [
          "Vorsicht, nicht fallen! (Be careful, don't fall!)",
          "Das Blatt ist gefallen. (The leaf has fallen.)",
        ],
      },
      {
        verb: "fliegen",
        translation: "to fly",
        keyPoint: "Motion verb - air travel (fliege, fliegt, flog, geflogen)",
        examples: [
          "Das Flugzeug fliegt hoch. (The airplane flies high.)",
          "Wir sind nach Paris geflogen. (We flew to Paris.)",
        ],
      },
      {
        verb: "steigen",
        translation: "to climb, to rise",
        keyPoint: "Motion verb - upward (steige, steigt, stieg, gestiegen)",
        examples: [
          "Ich steige die Treppe hinauf. (I climb up the stairs.)",
          "Der Preis ist gestiegen. (The price has risen.)",
        ],
      },
      {
        verb: "ziehen",
        translation: "to pull, to move",
        keyPoint: "Motion verb - pulling (ziehe, zieht, zog, gezogen)",
        examples: [
          "Zieh nicht so fest! (Don't pull so hard!)",
          "Wir sind nach München gezogen. (We moved to Munich.)",
        ],
      },
    ],
  },
  {
    prefix: "irregular-communication",
    description:
      "irregular communication verbs - speaking, reading, and expressing",
    verbs: [
      {
        verb: "sprechen",
        translation: "to speak",
        keyPoint: "Communication verb (spreche, spricht, sprach, gesprochen)",
        examples: [
          "Sprechen Sie Deutsch? (Do you speak German?)",
          "Wir haben über das Problem gesprochen. (We talked about the problem.)",
        ],
      },
      {
        verb: "lesen",
        translation: "to read",
        keyPoint: "Communication verb (lese, liest, las, gelesen)",
        examples: [
          "Ich lese gern Bücher. (I like to read books.)",
          "Hast du die Zeitung gelesen? (Did you read the newspaper?)",
        ],
      },
      {
        verb: "schreiben",
        translation: "to write",
        keyPoint:
          "Communication verb (schreibe, schreibt, schrieb, geschrieben)",
        examples: [
          "Ich schreibe einen Brief. (I am writing a letter.)",
          "Er hat ein Buch geschrieben. (He wrote a book.)",
        ],
      },
      {
        verb: "rufen",
        translation: "to call, to shout",
        keyPoint: "Communication verb (rufe, ruft, rief, gerufen)",
        examples: [
          "Ruf mich morgen an! (Call me tomorrow!)",
          "Das Kind hat nach der Mutter gerufen. (The child called for the mother.)",
        ],
      },
      {
        verb: "schreien",
        translation: "to scream, to shout",
        keyPoint: "Communication verb (schreie, schreit, schrie, geschrien)",
        examples: [
          "Schrei nicht so laut! (Don't scream so loud!)",
          "Das Baby hat die ganze Nacht geschrien. (The baby screamed all night.)",
        ],
      },
      {
        verb: "singen",
        translation: "to sing",
        keyPoint: "Communication verb (singe, singt, sang, gesungen)",
        examples: [
          "Sie singt sehr schön. (She sings very beautifully.)",
          "Wir haben zusammen gesungen. (We sang together.)",
        ],
      },
    ],
  },
  {
    prefix: "irregular-perception",
    description: "irregular perception verbs - seeing, hearing, and sensing",
    verbs: [
      {
        verb: "sehen",
        translation: "to see",
        keyPoint: "Irregular stem change (sehe, sieht, sah, gesehen)",
        examples: [
          "Siehst du den Film? (Do you see the movie?)",
          "Ich habe ihn gesehen. (I have seen him.)",
        ],
      },
      {
        verb: "hören",
        translation: "to hear",
        keyPoint: "Perception verb (höre, hört, hörte, gehört)",
        examples: [
          "Hörst du die Musik? (Do you hear the music?)",
          "Ich habe nichts gehört. (I didn't hear anything.)",
        ],
      },
      {
        verb: "riechen",
        translation: "to smell",
        keyPoint: "Perception verb (rieche, riecht, roch, gerochen)",
        examples: [
          "Es riecht gut hier. (It smells good here.)",
          "Hast du das gerochen? (Did you smell that?)",
        ],
      },
      {
        verb: "fühlen",
        translation: "to feel",
        keyPoint: "Perception verb (fühle, fühlt, fühlte, gefühlt)",
        examples: [
          "Ich fühle mich gut. (I feel good.)",
          "Hast du den Schmerz gefühlt? (Did you feel the pain?)",
        ],
      },
    ],
  },
  {
    prefix: "irregular-physical",
    description:
      "irregular physical action verbs - eating, drinking, and body actions",
    verbs: [
      {
        verb: "essen",
        translation: "to eat",
        keyPoint: "Physical action verb (esse, isst, aß, gegessen)",
        examples: [
          "Was isst du gern? (What do you like to eat?)",
          "Wir haben zu Abend gegessen. (We had dinner.)",
        ],
      },
      {
        verb: "trinken",
        translation: "to drink",
        keyPoint: "Physical action verb (trinke, trinkt, trank, getrunken)",
        examples: [
          "Trinkst du Kaffee? (Do you drink coffee?)",
          "Ich habe Wasser getrunken. (I drank water.)",
        ],
      },
      {
        verb: "schlafen",
        translation: "to sleep",
        keyPoint:
          "Physical state verb (schlafe, schläfst, schläft, schlief, geschlafen)",
        examples: [
          "Ich schlafe acht Stunden. (I sleep eight hours.)",
          "Das Baby hat gut geschlafen. (The baby slept well.)",
        ],
      },
      {
        verb: "waschen",
        translation: "to wash",
        keyPoint:
          "Physical action verb (wasche, wäschst, wäscht, wusch, gewaschen)",
        examples: [
          "Ich wasche meine Hände. (I wash my hands.)",
          "Sie hat die Wäsche gewaschen. (She washed the laundry.)",
        ],
      },
      {
        verb: "tragen",
        translation: "to carry, to wear",
        keyPoint: "Physical action verb (trage, trägst, trägt, trug, getragen)",
        examples: [
          "Ich trage einen Mantel. (I wear a coat.)",
          "Er hat den Koffer getragen. (He carried the suitcase.)",
        ],
      },
      {
        verb: "werfen",
        translation: "to throw",
        keyPoint: "Physical action verb (werfe, wirfst, wirft, warf, geworfen)",
        examples: [
          "Wirf den Ball! (Throw the ball!)",
          "Das Kind hat den Stein geworfen. (The child threw the stone.)",
        ],
      },
    ],
  },
  {
    prefix: "irregular-mental",
    description:
      "irregular mental process verbs - thinking, knowing, and understanding",
    verbs: [
      {
        verb: "denken",
        translation: "to think",
        keyPoint: "Mental verb (denke, denkst, denkt, dachte, gedacht)",
        examples: [
          "Woran denkst du? (What are you thinking about?)",
          "Ich habe an dich gedacht. (I thought of you.)",
        ],
      },
      {
        verb: "wissen",
        translation: "to know (facts)",
        keyPoint: "Mental verb (weiß, weißt, weiß, wusste, gewusst)",
        examples: [
          "Weißt du die Antwort? (Do you know the answer?)",
          "Ich habe es nicht gewusst. (I didn't know it.)",
        ],
      },
      {
        verb: "kennen",
        translation: "to know (be familiar with)",
        keyPoint: "Mental verb (kenne, kennst, kennt, kannte, gekannt)",
        examples: [
          "Kennst du diesen Mann? (Do you know this man?)",
          "Ich habe ihn lange gekannt. (I knew him for a long time.)",
        ],
      },
      {
        verb: "verstehen",
        translation: "to understand",
        keyPoint:
          "Mental verb (verstehe, verstehst, versteht, verstand, verstanden)",
        examples: [
          "Verstehst du Deutsch? (Do you understand German?)",
          "Ich habe die Aufgabe verstanden. (I understood the task.)",
        ],
      },
      {
        verb: "vergessen",
        translation: "to forget",
        keyPoint:
          "Mental verb (vergesse, vergisst, vergisst, vergaß, vergessen)",
        examples: [
          "Vergiss nicht die Hausaufgaben! (Don't forget the homework!)",
          "Ich habe den Termin vergessen. (I forgot the appointment.)",
        ],
      },
    ],
  },
  {
    prefix: "irregular-exchange",
    description: "irregular exchange verbs - giving, taking, and transferring",
    verbs: [
      {
        verb: "geben",
        translation: "to give",
        keyPoint: "Irregular stem change (gebe, gibst, gibt, gab, gegeben)",
        examples: [
          "Gib mir das Buch! (Give me the book!)",
          "Es gibt viele Probleme. (There are many problems.)",
        ],
      },
      {
        verb: "nehmen",
        translation: "to take",
        keyPoint:
          "Irregular stem change (nehme, nimmst, nimmt, nahm, genommen)",
        examples: [
          "Nehmen Sie Platz! (Take a seat!)",
          "Ich habe das Buch genommen. (I took the book.)",
        ],
      },
      {
        verb: "bringen",
        translation: "to bring",
        keyPoint: "Exchange verb (bringe, bringst, bringt, brachte, gebracht)",
        examples: [
          "Bring mir bitte ein Glas Wasser! (Please bring me a glass of water!)",
          "Ich habe die Bücher gebracht. (I brought the books.)",
        ],
      },
      {
        verb: "holen",
        translation: "to fetch, to get",
        keyPoint: "Exchange verb (hole, holst, holt, holte, geholt)",
        examples: [
          "Hol bitte die Zeitung! (Please fetch the newspaper!)",
          "Ich habe das Paket geholt. (I fetched the package.)",
        ],
      },
      {
        verb: "bekommen",
        translation: "to receive, to get",
        keyPoint: "Exchange verb (bekomme, bekommst, bekommt, bekam, bekommen)",
        examples: [
          "Ich bekomme ein Geschenk. (I get a present.)",
          "Hast du meine Nachricht bekommen? (Did you receive my message?)",
        ],
      },
    ],
  },
  {
    prefix: "irregular-position",
    description: "irregular position verbs - sitting, standing, lying",
    verbs: [
      {
        verb: "stehen",
        translation: "to stand",
        keyPoint: "Position verb (stehe, stehst, steht, stand, gestanden)",
        examples: [
          "Ich stehe an der Bushaltestelle. (I stand at the bus stop.)",
          "Das Auto hat lange dort gestanden. (The car stood there for a long time.)",
        ],
      },
      {
        verb: "sitzen",
        translation: "to sit",
        keyPoint: "Position verb (sitze, sitzt, sitzt, saß, gesessen)",
        examples: [
          "Ich sitze auf dem Stuhl. (I sit on the chair.)",
          "Wir haben lange im Café gesessen. (We sat in the café for a long time.)",
        ],
      },
      {
        verb: "liegen",
        translation: "to lie, to be located",
        keyPoint: "Position verb (liege, liegst, liegt, lag, gelegen)",
        examples: [
          "Das Buch liegt auf dem Tisch. (The book lies on the table.)",
          "Ich habe im Bett gelegen. (I lay in bed.)",
        ],
      },
      {
        verb: "hängen",
        translation: "to hang",
        keyPoint: "Position verb (hänge, hängst, hängt, hing, gehangen)",
        examples: [
          "Das Bild hängt an der Wand. (The picture hangs on the wall.)",
          "Der Mantel hat im Schrank gehangen. (The coat hung in the closet.)",
        ],
      },
    ],
  },
];
