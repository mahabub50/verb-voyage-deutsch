
export interface GermanVerb {
  verb: string;
  translation: string;
  keyPoint: string;
  examples: string[];
}

export interface VerbGroup {
  prefix: string;
  description: string;
  verbs: GermanVerb[];
}

export const germanSeparableVerbs: VerbGroup[] = [
  {
    prefix: "ab",
    description: "away, off, down",
    verbs: [
      {
        verb: "abfahren",
        translation: "to depart, to leave",
        keyPoint: "Movement away from a place",
        examples: [
          "Der Zug fährt um 8 Uhr ab. (The train departs at 8 o'clock.)",
          "Wir fahren morgen ab. (We're leaving tomorrow.)"
        ]
      },
      {
        verb: "abfliegen",
        translation: "to take off, to fly away",
        keyPoint: "Aircraft departure",
        examples: [
          "Das Flugzeug fliegt um 10 Uhr ab. (The plane takes off at 10 o'clock.)",
          "Wann fliegst du ab? (When are you flying out?)"
        ]
      },
      {
        verb: "abholen",
        translation: "to pick up, to collect",
        keyPoint: "Getting someone/something from a place",
        examples: [
          "Ich hole dich vom Bahnhof ab. (I'll pick you up from the station.)",
          "Kannst du mein Paket abholen? (Can you pick up my package?)"
        ]
      },
      {
        verb: "abnehmen",
        translation: "to lose weight, to take off",
        keyPoint: "Reduction or removal",
        examples: [
          "Ich muss abnehmen. (I need to lose weight.)",
          "Nimm bitte den Hut ab! (Please take off your hat!)"
        ]
      },
      {
        verb: "absagen",
        translation: "to cancel",
        keyPoint: "Cancelling plans or events",
        examples: [
          "Wir müssen das Meeting absagen. (We have to cancel the meeting.)",
          "Er hat den Termin abgesagt. (He cancelled the appointment.)"
        ]
      }
    ]
  },
  {
    prefix: "an",
    description: "on, at, to",
    verbs: [
      {
        verb: "anfangen",
        translation: "to begin, to start",
        keyPoint: "Beginning of an action",
        examples: [
          "Wann fangen wir an? (When do we start?)",
          "Der Film fängt um 20 Uhr an. (The movie starts at 8 PM.)"
        ]
      },
      {
        verb: "ankommen",
        translation: "to arrive",
        keyPoint: "Reaching a destination",
        examples: [
          "Wann kommst du an? (When do you arrive?)",
          "Der Zug kommt pünktlich an. (The train arrives on time.)"
        ]
      },
      {
        verb: "anrufen",
        translation: "to call (phone)",
        keyPoint: "Making a phone call",
        examples: [
          "Ich rufe dich später an. (I'll call you later.)",
          "Ruf mich morgen an! (Call me tomorrow!)"
        ]
      },
      {
        verb: "anziehen",
        translation: "to put on (clothes)",
        keyPoint: "Getting dressed",
        examples: [
          "Zieh deine Jacke an! (Put on your jacket!)",
          "Ich ziehe mich schnell an. (I'm getting dressed quickly.)"
        ]
      }
    ]
  },
  {
    prefix: "auf",
    description: "up, open",
    verbs: [
      {
        verb: "aufstehen",
        translation: "to get up, to stand up",
        keyPoint: "Rising from sitting/lying position",
        examples: [
          "Ich stehe jeden Tag um 7 Uhr auf. (I get up at 7 every day.)",
          "Steh bitte auf! (Please stand up!)"
        ]
      },
      {
        verb: "aufmachen",
        translation: "to open",
        keyPoint: "Opening something closed",
        examples: [
          "Mach das Fenster auf! (Open the window!)",
          "Die Geschäfte machen um 9 Uhr auf. (The shops open at 9 o'clock.)"
        ]
      },
      {
        verb: "aufräumen",
        translation: "to clean up, to tidy",
        keyPoint: "Organizing and cleaning",
        examples: [
          "Räum dein Zimmer auf! (Clean up your room!)",
          "Wir räumen das Haus auf. (We're tidying up the house.)"
        ]
      },
      {
        verb: "aufhören",
        translation: "to stop, to quit",
        keyPoint: "Ending an activity",
        examples: [
          "Hör auf zu reden! (Stop talking!)",
          "Ich höre um 17 Uhr auf zu arbeiten. (I stop working at 5 PM.)"
        ]
      }
    ]
  },
  {
    prefix: "aus",
    description: "out, off",
    verbs: [
      {
        verb: "ausgehen",
        translation: "to go out",
        keyPoint: "Leaving home for entertainment",
        examples: [
          "Wir gehen heute Abend aus. (We're going out tonight.)",
          "Gehst du oft aus? (Do you go out often?)"
        ]
      },
      {
        verb: "ausmachen",
        translation: "to turn off, to arrange",
        keyPoint: "Switching off or making agreements",
        examples: [
          "Mach das Licht aus! (Turn off the light!)",
          "Wir machen einen Termin aus. (We're arranging an appointment.)"
        ]
      },
      {
        verb: "ausziehen",
        translation: "to take off (clothes), to move out",
        keyPoint: "Removal of clothing or changing residence",
        examples: [
          "Zieh deine Schuhe aus! (Take off your shoes!)",
          "Sie zieht nächsten Monat aus. (She's moving out next month.)"
        ]
      }
    ]
  },
  {
    prefix: "ein",
    description: "in, into",
    verbs: [
      {
        verb: "einkaufen",
        translation: "to shop, to go shopping",
        keyPoint: "Purchasing goods",
        examples: [
          "Ich kaufe im Supermarkt ein. (I shop at the supermarket.)",
          "Gehst du heute einkaufen? (Are you going shopping today?)"
        ]
      },
      {
        verb: "einladen",
        translation: "to invite",
        keyPoint: "Asking someone to join",
        examples: [
          "Ich lade dich zum Essen ein. (I'm inviting you for dinner.)",
          "Wer lädt uns ein? (Who is inviting us?)"
        ]
      },
      {
        verb: "einschlafen",
        translation: "to fall asleep",
        keyPoint: "Transition to sleep",
        examples: [
          "Ich kann nicht einschlafen. (I can't fall asleep.)",
          "Das Baby schläft schnell ein. (The baby falls asleep quickly.)"
        ]
      }
    ]
  },
  {
    prefix: "mit",
    description: "with, along",
    verbs: [
      {
        verb: "mitkommen",
        translation: "to come along",
        keyPoint: "Accompanying someone",
        examples: [
          "Kommst du mit? (Are you coming along?)",
          "Ich komme gerne mit. (I'd like to come along.)"
        ]
      },
      {
        verb: "mitbringen",
        translation: "to bring along",
        keyPoint: "Bringing something when going somewhere",
        examples: [
          "Bring bitte Wein mit! (Please bring wine along!)",
          "Was soll ich mitbringen? (What should I bring?)"
        ]
      },
      {
        verb: "mitmachen",
        translation: "to participate, to join in",
        keyPoint: "Taking part in activities",
        examples: [
          "Machst du mit? (Are you participating?)",
          "Alle machen bei dem Spiel mit. (Everyone is joining in the game.)"
        ]
      }
    ]
  },
  {
    prefix: "vor",
    description: "before, in front",
    verbs: [
      {
        verb: "vorstellen",
        translation: "to introduce, to imagine",
        keyPoint: "Presenting someone or picturing something",
        examples: [
          "Darf ich mich vorstellen? (May I introduce myself?)",
          "Ich kann mir das nicht vorstellen. (I can't imagine that.)"
        ]
      },
      {
        verb: "vorbereiten",
        translation: "to prepare",
        keyPoint: "Getting ready in advance",
        examples: [
          "Ich bereite das Essen vor. (I'm preparing the food.)",
          "Bereitest du dich auf die Prüfung vor? (Are you preparing for the exam?)"
        ]
      }
    ]
  },
  {
    prefix: "zu",
    description: "to, closed",
    verbs: [
      {
        verb: "zumachen",
        translation: "to close, to shut",
        keyPoint: "Closing something open",
        examples: [
          "Mach die Tür zu! (Close the door!)",
          "Das Geschäft macht um 18 Uhr zu. (The shop closes at 6 PM.)"
        ]
      },
      {
        verb: "zuhören",
        translation: "to listen",
        keyPoint: "Paying attention to sounds/speech",
        examples: [
          "Hör mir zu! (Listen to me!)",
          "Die Schüler hören dem Lehrer zu. (The students are listening to the teacher.)"
        ]
      }
    ]
  }
];
