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

// Import additional verb groups
import { additionalVerbGroups } from './germanVerbsExtension';
import { additionalVerbGroups2 } from './germanVerbsExtension2';
import { additionalVerbGroups3 } from './germanVerbsExtension3';

// Original verb groups that were already in the file
const originalVerbGroups: VerbGroup[] = [
  {
    prefix: "heim",
    description: "home, homeward",
    verbs: [
      {
        verb: "heimbringen",
        translation: "to bring home",
        keyPoint: "Taking someone/something home",
        examples: [
          "Bring das Kind heim! (Bring the child home!)",
          "Ich bringe dich heim. (I'm bringing you home.)"
        ]
      },
      {
        verb: "heimfahren",
        translation: "to drive home",
        keyPoint: "Traveling home by vehicle",
        examples: [
          "Fahr heim! (Drive home!)",
          "Wir fahren spät heim. (We're driving home late.)"
        ]
      },
      {
        verb: "heimfinden",
        translation: "to find one's way home",
        keyPoint: "Navigating back home",
        examples: [
          "Findest du heim? (Can you find your way home?)",
          "Der Hund findet immer heim. (The dog always finds its way home.)"
        ]
      },
      {
        verb: "heimgehen",
        translation: "to go home",
        keyPoint: "Walking home",
        examples: [
          "Geh heim! (Go home!)",
          "Es ist Zeit heimzugehen. (It's time to go home.)"
        ]
      },
      {
        verb: "heimkehren",
        translation: "to return home",
        keyPoint: "Coming back home after absence",
        examples: [
          "Kehr heim! (Return home!)",
          "Die Soldaten kehren heim. (The soldiers are returning home.)"
        ]
      },
      {
        verb: "heimkommen",
        translation: "to come home",
        keyPoint: "Arriving at home",
        examples: [
          "Komm bald heim! (Come home soon!)",
          "Wann kommst du heim? (When are you coming home?)"
        ]
      },
      {
        verb: "heimreisen",
        translation: "to travel home",
        keyPoint: "Journeying back home",
        examples: [
          "Reise sicher heim! (Travel home safely!)",
          "Wir reisen morgen heim. (We're traveling home tomorrow.)"
        ]
      },
      {
        verb: "heimschicken",
        translation: "to send home",
        keyPoint: "Making someone go home",
        examples: [
          "Schick das kranke Kind heim! (Send the sick child home!)",
          "Der Lehrer schickt uns heim. (The teacher is sending us home.)"
        ]
      }
    ]
  },
  {
    prefix: "her",
    description: "here, toward speaker",
    verbs: [
      {
        verb: "herbitten",
        translation: "to ask to come here",
        keyPoint: "Requesting someone to come",
        examples: [
          "Bitte ihn her! (Ask him to come here!)",
          "Der Chef bittet mich her. (The boss is asking me to come.)"
        ]
      },
      {
        verb: "herbringen",
        translation: "to bring here",
        keyPoint: "Bringing something to the speaker",
        examples: [
          "Bring das Buch her! (Bring the book here!)",
          "Ich bringe dir das Werkzeug her. (I'm bringing you the tool.)"
        ]
      },
      {
        verb: "hereilen",
        translation: "to hurry here",
        keyPoint: "Coming quickly to the speaker",
        examples: [
          "Eile her! (Hurry here!)",
          "Er eilt herbei. (He's hurrying over.)"
        ]
      },
      {
        verb: "herfahren",
        translation: "to drive here",
        keyPoint: "Driving toward the speaker",
        examples: [
          "Fahr her! (Drive here!)",
          "Wann fährst du her? (When are you driving here?)"
        ]
      },
      {
        verb: "herfinden",
        translation: "to find one's way here",
        keyPoint: "Navigating to the speaker",
        examples: [
          "Findest du her? (Can you find your way here?)",
          "Ich finde nicht her. (I can't find my way here.)"
        ]
      },
      {
        verb: "herholen",
        translation: "to fetch, to get",
        keyPoint: "Going to get something/someone",
        examples: [
          "Hol das Auto her! (Go get the car!)",
          "Ich hole den Arzt her. (I'm getting the doctor.)"
        ]
      },
      {
        verb: "herkommen",
        translation: "to come here",
        keyPoint: "Moving toward the speaker",
        examples: [
          "Komm her! (Come here!)",
          "Wo kommst du her? (Where do you come from?)"
        ]
      },
      {
        verb: "herkriegen",
        translation: "to get here, to manage to bring",
        keyPoint: "Successfully bringing something",
        examples: [
          "Kriegst du das her? (Can you get that here?)",
          "Ich kriege das Auto nicht her. (I can't get the car here.)"
        ]
      },
      {
        verb: "hernehmen",
        translation: "to take from, to get from somewhere",
        keyPoint: "Obtaining from a source",
        examples: [
          "Wo nimmst du das her? (Where do you get that from?)",
          "Nimm es vom Regal her! (Take it from the shelf!)"
        ]
      },
      {
        verb: "herrufen",
        translation: "to call here",
        keyPoint: "Summoning someone to come",
        examples: [
          "Ruf ihn her! (Call him here!)",
          "Der Chef ruft mich her. (The boss is calling me over.)"
        ]
      },
      {
        verb: "herschauen",
        translation: "to look here",
        keyPoint: "Directing attention here",
        examples: [
          "Schau her! (Look here!)",
          "Alle schauen her. (Everyone is looking here.)"
        ]
      },
      {
        verb: "herstellen",
        translation: "to produce, to manufacture",
        keyPoint: "Creating or making something",
        examples: [
          "Stell das Produkt her! (Manufacture the product!)",
          "Wir stellen Autos her. (We manufacture cars.)"
        ]
      }
    ]
  },
  {
    prefix: "hin",
    description: "there, away from speaker",
    verbs: [
      {
        verb: "hinblicken",
        translation: "to look there",
        keyPoint: "Directing gaze away from speaker",
        examples: [
          "Blick dorthin! (Look there!)",
          "Ich blicke zum Fenster hin. (I'm looking toward the window.)"
        ]
      },
      {
        verb: "hinbringen",
        translation: "to take there",
        keyPoint: "Bringing something away from speaker",
        examples: [
          "Bring das hin! (Take that there!)",
          "Ich bringe dich zum Bahnhof hin. (I'm taking you to the station.)"
        ]
      },
      {
        verb: "hinfahren",
        translation: "to drive there",
        keyPoint: "Driving away from speaker",
        examples: [
          "Fahr hin! (Drive there!)",
          "Wir fahren zum See hin. (We're driving to the lake.)"
        ]
      },
      {
        verb: "hinfallen",
        translation: "to fall down",
        keyPoint: "Falling to the ground",
        examples: [
          "Fall nicht hin! (Don't fall down!)",
          "Das Kind ist hingefallen. (The child fell down.)"
        ]
      },
      {
        verb: "hinfliegen",
        translation: "to fly there",
        keyPoint: "Flying away from speaker",
        examples: [
          "Flieg hin! (Fly there!)",
          "Wir fliegen nach Paris hin. (We're flying to Paris.)"
        ]
      },
      {
        verb: "hingehen",
        translation: "to go there",
        keyPoint: "Walking away from speaker",
        examples: [
          "Geh hin! (Go there!)",
          "Ich gehe zum Arzt hin. (I'm going to the doctor.)"
        ]
      },
      {
        verb: "hingucken",
        translation: "to look there",
        keyPoint: "Looking away from speaker",
        examples: [
          "Guck hin! (Look there!)",
          "Guck nicht hin! (Don't look!)"
        ]
      },
      {
        verb: "hinhauen",
        translation: "to hit, to work out",
        keyPoint: "Striking or succeeding",
        examples: [
          "Hau nicht hin! (Don't hit!)",
          "Das haut hin. (That works out.)"
        ]
      },
      {
        verb: "hinhören",
        translation: "to listen",
        keyPoint: "Paying attention to sounds",
        examples: [
          "Hör hin! (Listen!)",
          "Ich höre zur Musik hin. (I'm listening to the music.)"
        ]
      },
      {
        verb: "hinknien",
        translation: "to kneel down",
        keyPoint: "Getting on one's knees",
        examples: [
          "Knie hin! (Kneel down!)",
          "Er kniet vor dem Altar hin. (He kneels down before the altar.)"
        ]
      },
      {
        verb: "hinkommen",
        translation: "to get there, to manage",
        keyPoint: "Reaching a destination or succeeding",
        examples: [
          "Kommst du hin? (Can you get there?)",
          "Ich komme mit dem Geld hin. (I manage with the money.)"
        ]
      },
      {
        verb: "hinkriegen",
        translation: "to manage, to get done",
        keyPoint: "Successfully completing something",
        examples: [
          "Kriegst du das hin? (Can you manage that?)",
          "Ich kriege das Problem hin. (I'll get the problem sorted.)"
        ]
      },
      {
        verb: "hinlaufen",
        translation: "to run there",
        keyPoint: "Running away from speaker",
        examples: [
          "Lauf hin! (Run there!)",
          "Ich laufe zum Geschäft hin. (I'm running to the store.)"
        ]
      },
      {
        verb: "hinnehmen",
        translation: "to accept, to put up with",
        keyPoint: "Accepting something reluctantly",
        examples: [
          "Nimm es hin! (Accept it!)",
          "Ich nehme die Kritik hin. (I accept the criticism.)"
        ]
      },
      {
        verb: "hinrennen",
        translation: "to run there quickly",
        keyPoint: "Running rapidly away from speaker",
        examples: [
          "Renn hin! (Run there!)",
          "Er rennt zum Unfallort hin. (He's running to the accident site.)"
        ]
      },
      {
        verb: "hinschicken",
        translation: "to send there",
        keyPoint: "Making someone go somewhere",
        examples: [
          "Schick ihn hin! (Send him there!)",
          "Ich schicke dich zum Arzt hin. (I'm sending you to the doctor.)"
        ]
      },
      {
        verb: "hinschmeißen",
        translation: "to throw down, to quit",
        keyPoint: "Throwing something or giving up",
        examples: [
          "Schmeiß das nicht hin! (Don't throw that down!)",
          "Er schmeißt den Job hin. (He's quitting the job.)"
        ]
      },
      {
        verb: "hinsehen",
        translation: "to look there",
        keyPoint: "Looking in a specific direction",
        examples: [
          "Sieh hin! (Look there!)",
          "Ich sehe zum Bildschirm hin. (I'm looking at the screen.)"
        ]
      },
      {
        verb: "hinsetzen",
        translation: "to sit down",
        keyPoint: "Taking a seated position",
        examples: [
          "Setz dich hin! (Sit down!)",
          "Ich setze mich auf den Stuhl hin. (I'm sitting down on the chair.)"
        ]
      },
      {
        verb: "hintragen",
        translation: "to carry there",
        keyPoint: "Carrying something away from speaker",
        examples: [
          "Trag das hin! (Carry that there!)",
          "Ich trage den Koffer zur Tür hin. (I'm carrying the suitcase to the door.)"
        ]
      },
      {
        verb: "hinweisen",
        translation: "to point out, to refer to",
        keyPoint: "Indicating or directing attention",
        examples: [
          "Weise darauf hin! (Point that out!)",
          "Ich weise auf den Fehler hin. (I'm pointing out the error.)"
        ]
      },
      {
        verb: "hinwerfen",
        translation: "to throw down",
        keyPoint: "Throwing something to the ground",
        examples: [
          "Wirf das nicht hin! (Don't throw that down!)",
          "Er wirft die Jacke hin. (He throws down the jacket.)"
        ]
      },
      {
        verb: "hinziehen",
        translation: "to drag there, to be drawn to",
        keyPoint: "Pulling toward a place or attraction",
        examples: [
          "Zieh das hin! (Drag that there!)",
          "Es zieht mich zur Natur hin. (I'm drawn to nature.)"
        ]
      }
    ]
  }
];

// Combine all verb groups
export const germanSeparableVerbs: VerbGroup[] = [
  ...originalVerbGroups,
  ...additionalVerbGroups,
  ...additionalVerbGroups2,
  ...additionalVerbGroups3
];
