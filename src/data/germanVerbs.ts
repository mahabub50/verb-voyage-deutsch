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
        verb: "abfragen",
        translation: "to query, to test",
        keyPoint: "Testing knowledge or requesting information",
        examples: [
          "Der Lehrer fragt die Vokabeln ab. (The teacher is testing the vocabulary.)",
          "Ich frage die Daten ab. (I'm querying the data.)"
        ]
      },
      {
        verb: "abgeben",
        translation: "to hand in, to submit",
        keyPoint: "Delivering or surrendering something",
        examples: [
          "Gib deine Hausaufgaben ab! (Hand in your homework!)",
          "Er gibt seinen Pass ab. (He's handing over his passport.)"
        ]
      },
      {
        verb: "abgewöhnen",
        translation: "to break a habit, to wean off",
        keyPoint: "Stopping a regular behavior",
        examples: [
          "Ich gewöhne mir das Rauchen ab. (I'm quitting smoking.)",
          "Sie gewöhnt dem Kind das Daumenlutschen ab. (She's breaking the child's thumb-sucking habit.)"
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
        verb: "ablesen",
        translation: "to read off, to read from",
        keyPoint: "Reading information from a source",
        examples: [
          "Lies die Temperatur ab! (Read off the temperature!)",
          "Er liest die Zahlen vom Bildschirm ab. (He's reading the numbers from the screen.)"
        ]
      },
      {
        verb: "abmachen",
        translation: "to arrange, to agree on",
        keyPoint: "Making an arrangement or deal",
        examples: [
          "Wir machen einen Termin ab. (We're arranging an appointment.)",
          "Das haben wir so abgemacht. (That's what we agreed on.)"
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
      },
      {
        verb: "abschalten",
        translation: "to switch off, to relax",
        keyPoint: "Turning off or mentally disconnecting",
        examples: [
          "Schalte das Licht ab! (Switch off the light!)",
          "Ich kann nicht abschalten. (I can't relax/switch off.)"
        ]
      },
      {
        verb: "abschicken",
        translation: "to send off, to dispatch",
        keyPoint: "Sending something away",
        examples: [
          "Schick den Brief ab! (Send off the letter!)",
          "Wann schickst du die Bewerbung ab? (When are you sending off the application?)"
        ]
      },
      {
        verb: "abschließen",
        translation: "to lock, to conclude",
        keyPoint: "Completing or securing something",
        examples: [
          "Schließ die Tür ab! (Lock the door!)",
          "Wir schließen das Projekt ab. (We're concluding the project.)"
        ]
      },
      {
        verb: "abstellen",
        translation: "to turn off, to park",
        keyPoint: "Stopping or positioning something",
        examples: [
          "Stell den Motor ab! (Turn off the engine!)",
          "Wo kann ich mein Auto abstellen? (Where can I park my car?)"
        ]
      },
      {
        verb: "abstimmen",
        translation: "to vote, to coordinate",
        keyPoint: "Making decisions or coordinating",
        examples: [
          "Wir stimmen über den Vorschlag ab. (We're voting on the proposal.)",
          "Stimm dich mit mir ab! (Coordinate with me!)"
        ]
      },
      {
        verb: "abtrocknen",
        translation: "to dry off, to wipe dry",
        keyPoint: "Removing moisture",
        examples: [
          "Trockne dich ab! (Dry yourself off!)",
          "Ich trockne das Geschirr ab. (I'm drying the dishes.)"
        ]
      },
      {
        verb: "abwarten",
        translation: "to wait and see",
        keyPoint: "Waiting for something to happen",
        examples: [
          "Warten wir ab! (Let's wait and see!)",
          "Ich warte das Ergebnis ab. (I'm waiting for the result.)"
        ]
      },
      {
        verb: "abwechseln",
        translation: "to alternate, to take turns",
        keyPoint: "Taking turns or varying",
        examples: [
          "Wir wechseln uns ab. (We take turns.)",
          "Die Jahreszeiten wechseln ab. (The seasons alternate.)"
        ]
      }
    ]
  },
  {
    prefix: "an",
    description: "on, at, to",
    verbs: [
      {
        verb: "anbieten",
        translation: "to offer",
        keyPoint: "Presenting something for consideration",
        examples: [
          "Ich biete dir meine Hilfe an. (I'm offering you my help.)",
          "Was bietest du an? (What are you offering?)"
        ]
      },
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
        verb: "anfassen",
        translation: "to touch, to grab",
        keyPoint: "Physical contact with hands",
        examples: [
          "Fass das nicht an! (Don't touch that!)",
          "Fass mich nicht an! (Don't touch me!)"
        ]
      },
      {
        verb: "angeben",
        translation: "to show off, to state",
        keyPoint: "Providing information or boasting",
        examples: [
          "Gib deine Adresse an! (State your address!)",
          "Er gibt immer an. (He always shows off.)"
        ]
      },
      {
        verb: "angehen",
        translation: "to approach, to concern",
        keyPoint: "Starting or being relevant to someone",
        examples: [
          "Das geht dich nichts an. (That's none of your business.)",
          "Wir gehen das Problem an. (We're tackling the problem.)"
        ]
      },
      {
        verb: "angewöhnen",
        translation: "to develop a habit",
        keyPoint: "Acquiring a new behavior",
        examples: [
          "Gewöhn dir das an! (Get into that habit!)",
          "Ich gewöhne mir das Lesen an. (I'm developing a reading habit.)"
        ]
      },
      {
        verb: "angreifen",
        translation: "to attack",
        keyPoint: "Physical or verbal assault",
        examples: [
          "Der Hund greift an. (The dog is attacking.)",
          "Sie greifen uns an. (They're attacking us.)"
        ]
      },
      {
        verb: "angucken",
        translation: "to look at",
        keyPoint: "Directing one's gaze",
        examples: [
          "Guck mich an! (Look at me!)",
          "Guckst du den Film an? (Are you watching the movie?)"
        ]
      },
      {
        verb: "anhaben",
        translation: "to wear, to have on",
        keyPoint: "Wearing clothing",
        examples: [
          "Was hast du an? (What are you wearing?)",
          "Ich habe einen Mantel an. (I'm wearing a coat.)"
        ]
      },
      {
        verb: "anklopfen",
        translation: "to knock",
        keyPoint: "Knocking on a door",
        examples: [
          "Klopf an der Tür an! (Knock on the door!)",
          "Jemand klopft an. (Someone is knocking.)"
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
        verb: "anlassen",
        translation: "to start (engine), to keep on",
        keyPoint: "Starting machinery or keeping clothing on",
        examples: [
          "Lass den Motor an! (Start the engine!)",
          "Lass die Jacke an! (Keep the jacket on!)"
        ]
      },
      {
        verb: "anmachen",
        translation: "to turn on, to light",
        keyPoint: "Activating or igniting something",
        examples: [
          "Mach das Licht an! (Turn on the light!)",
          "Mach das Feuer an! (Light the fire!)"
        ]
      },
      {
        verb: "anmalen",
        translation: "to paint",
        keyPoint: "Applying paint to something",
        examples: [
          "Mal die Wand an! (Paint the wall!)",
          "Das Haus ist neu angemalt. (The house is newly painted.)"
        ]
      },
      {
        verb: "anmelden",
        translation: "to register, to sign up",
        keyPoint: "Official registration",
        examples: [
          "Melde dich beim Kurs an! (Sign up for the course!)",
          "Ich melde mich bei der Polizei an. (I'm registering with the police.)"
        ]
      },
      {
        verb: "annehmen",
        translation: "to accept, to assume",
        keyPoint: "Accepting or supposing something",
        examples: [
          "Nimmst du das Angebot an? (Are you accepting the offer?)",
          "Ich nehme an, dass er kommt. (I assume he's coming.)"
        ]
      },
      {
        verb: "anprobieren",
        translation: "to try on",
        keyPoint: "Testing clothes for fit",
        examples: [
          "Probier das Kleid an! (Try on the dress!)",
          "Kann ich das anprobieren? (Can I try this on?)"
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
        verb: "anschalten",
        translation: "to switch on",
        keyPoint: "Activating electrical devices",
        examples: [
          "Schalte den Computer an! (Switch on the computer!)",
          "Das Radio ist angeschaltet. (The radio is switched on.)"
        ]
      },
      {
        verb: "anschauen",
        translation: "to look at, to watch",
        keyPoint: "Viewing something attentively",
        examples: [
          "Schau dir das an! (Look at this!)",
          "Wir schauen uns den Film an. (We're watching the movie.)"
        ]
      },
      {
        verb: "ansehen",
        translation: "to look at, to regard",
        keyPoint: "Visual examination or consideration",
        examples: [
          "Sieh mich an! (Look at me!)",
          "Das sehe ich anders an. (I see that differently.)"
        ]
      },
      {
        verb: "ansprechen",
        translation: "to address, to appeal to",
        keyPoint: "Speaking to someone or attracting",
        examples: [
          "Sprich ihn an! (Address him/Speak to him!)",
          "Das spricht mich an. (That appeals to me.)"
        ]
      },
      {
        verb: "anstehen",
        translation: "to queue, to be pending",
        keyPoint: "Waiting in line or being due",
        examples: [
          "Wir stehen an der Kasse an. (We're queuing at the checkout.)",
          "Die Entscheidung steht an. (The decision is pending.)"
        ]
      },
      {
        verb: "ansteigen",
        translation: "to rise, to increase",
        keyPoint: "Going up or increasing",
        examples: [
          "Die Preise steigen an. (Prices are rising.)",
          "Der Weg steigt steil an. (The path rises steeply.)"
        ]
      },
      {
        verb: "anwachsen",
        translation: "to grow, to increase",
        keyPoint: "Gradual increase in size",
        examples: [
          "Die Bevölkerung wächst an. (The population is growing.)",
          "Meine Sammlung wächst an. (My collection is growing.)"
        ]
      },
      {
        verb: "anwenden",
        translation: "to apply, to use",
        keyPoint: "Putting something into practice",
        examples: [
          "Wende diese Regel an! (Apply this rule!)",
          "Ich wende die Methode an. (I'm using the method.)"
        ]
      },
      {
        verb: "anzeigen",
        translation: "to report, to display",
        keyPoint: "Showing or reporting something",
        examples: [
          "Zeige den Diebstahl an! (Report the theft!)",
          "Das Display zeigt die Zeit an. (The display shows the time.)"
        ]
      },
      {
        verb: "anziehen",
        translation: "to put on (clothes), to attract",
        keyPoint: "Getting dressed or drawing something closer",
        examples: [
          "Zieh deine Jacke an! (Put on your jacket!)",
          "Magnete ziehen Eisen an. (Magnets attract iron.)"
        ]
      }
    ]
  },
  {
    prefix: "auf",
    description: "up, open",
    verbs: [
      {
        verb: "aufatmen",
        translation: "to breathe a sigh of relief",
        keyPoint: "Feeling relief after stress",
        examples: [
          "Nach der Prüfung konnte ich aufatmen. (After the exam I could breathe a sigh of relief.)",
          "Alle atmeten auf. (Everyone breathed a sigh of relief.)"
        ]
      },
      {
        verb: "aufbauen",
        translation: "to build, to set up",
        keyPoint: "Constructing or establishing something",
        examples: [
          "Wir bauen das Zelt auf. (We're setting up the tent.)",
          "Er baut ein Geschäft auf. (He's building up a business.)"
        ]
      },
      {
        verb: "aufbleiben",
        translation: "to stay up, to remain open",
        keyPoint: "Not going to sleep or staying open",
        examples: [
          "Ich bleibe heute lange auf. (I'm staying up late today.)",
          "Das Geschäft bleibt bis 22 Uhr auf. (The shop stays open until 10 PM.)"
        ]
      },
      {
        verb: "aufblicken",
        translation: "to look up",
        keyPoint: "Directing gaze upward",
        examples: [
          "Blick vom Buch auf! (Look up from the book!)",
          "Sie blickt zu den Sternen auf. (She's looking up at the stars.)"
        ]
      },
      {
        verb: "aufessen",
        translation: "to eat up, to finish eating",
        keyPoint: "Consuming all food",
        examples: [
          "Iss dein Gemüse auf! (Eat up your vegetables!)",
          "Hast du alles aufgegessen? (Did you eat everything up?)"
        ]
      },
      {
        verb: "auffordern",
        translation: "to ask, to demand",
        keyPoint: "Requesting or demanding action",
        examples: [
          "Ich fordere dich auf zu gehen. (I'm asking you to leave.)",
          "Der Richter fordert Ruhe auf. (The judge demands silence.)"
        ]
      },
      {
        verb: "aufführen",
        translation: "to perform, to behave",
        keyPoint: "Presenting or conducting oneself",
        examples: [
          "Wir führen ein Theaterstück auf. (We're performing a play.)",
          "Wie führt er sich auf? (How is he behaving?)"
        ]
      },
      {
        verb: "aufgeben",
        translation: "to give up, to post",
        keyPoint: "Surrendering or mailing something",
        examples: [
          "Gib nicht auf! (Don't give up!)",
          "Ich gebe den Brief auf. (I'm posting the letter.)"
        ]
      },
      {
        verb: "aufgehen",
        translation: "to rise, to open",
        keyPoint: "Something opening or becoming clear",
        examples: [
          "Die Sonne geht auf. (The sun is rising.)",
          "Die Rechnung geht auf. (The calculation works out.)"
        ]
      },
      {
        verb: "aufhaben",
        translation: "to have on, to have homework",
        keyPoint: "Wearing something or having tasks",
        examples: [
          "Hast du einen Hut auf? (Are you wearing a hat?)",
          "Wir haben Mathe auf. (We have math homework.)"
        ]
      },
      {
        verb: "aufhalten",
        translation: "to stop, to delay",
        keyPoint: "Preventing or delaying something",
        examples: [
          "Halt den Dieb auf! (Stop the thief!)",
          "Das hält uns auf. (That's delaying us.)"
        ]
      },
      {
        verb: "aufhängen",
        translation: "to hang up",
        keyPoint: "Hanging something up",
        examples: [
          "Häng deine Jacke auf! (Hang up your jacket!)",
          "Ich hänge das Bild auf. (I'm hanging up the picture.)"
        ]
      },
      {
        verb: "aufheben",
        translation: "to pick up, to save",
        keyPoint: "Lifting or preserving something",
        examples: [
          "Heb das Papier auf! (Pick up the paper!)",
          "Ich hebe das für dich auf. (I'm saving that for you.)"
        ]
      },
      {
        verb: "aufklären",
        translation: "to clear up, to enlighten",
        keyPoint: "Explaining or solving something",
        examples: [
          "Kläre das Missverständnis auf! (Clear up the misunderstanding!)",
          "Der Fall wurde aufgeklärt. (The case was solved.)"
        ]
      },
      {
        verb: "auflassen",
        translation: "to leave open",
        keyPoint: "Keeping something open",
        examples: [
          "Lass die Tür auf! (Leave the door open!)",
          "Das Fenster ist aufgelassen. (The window is left open.)"
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
        verb: "aufregen",
        translation: "to upset, to get excited",
        keyPoint: "Causing or feeling agitation",
        examples: [
          "Reg dich nicht auf! (Don't get upset!)",
          "Das regt mich auf. (That upsets me.)"
        ]
      },
      {
        verb: "aufschreiben",
        translation: "to write down",
        keyPoint: "Recording information in writing",
        examples: [
          "Schreib die Nummer auf! (Write down the number!)",
          "Ich schreibe alles auf. (I'm writing everything down.)"
        ]
      },
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
        verb: "auftauchen",
        translation: "to surface, to appear",
        keyPoint: "Emerging or becoming visible",
        examples: [
          "Der Taucher taucht auf. (The diver is surfacing.)",
          "Plötzlich tauchte er auf. (Suddenly he appeared.)"
        ]
      },
      {
        verb: "auftreten",
        translation: "to appear, to perform",
        keyPoint: "Making an appearance or presentation",
        examples: [
          "Er tritt als Sänger auf. (He performs as a singer.)",
          "Probleme treten auf. (Problems are occurring.)"
        ]
      },
      {
        verb: "aufwachen",
        translation: "to wake up",
        keyPoint: "Transitioning from sleep to wakefulness",
        examples: [
          "Ich wache um 6 Uhr auf. (I wake up at 6 o'clock.)",
          "Wach auf! (Wake up!)"
        ]
      },
      {
        verb: "aufwachsen",
        translation: "to grow up",
        keyPoint: "Developing from child to adult",
        examples: [
          "Ich wachse in Berlin auf. (I'm growing up in Berlin.)",
          "Kinder wachsen schnell auf. (Children grow up quickly.)"
        ]
      },
      {
        verb: "aufwecken",
        translation: "to wake up (someone)",
        keyPoint: "Causing someone to wake",
        examples: [
          "Weck mich um 7 Uhr auf! (Wake me up at 7 o'clock!)",
          "Der Lärm weckt mich auf. (The noise wakes me up.)"
        ]
      },
      {
        verb: "aufwischen",
        translation: "to wipe up, to mop",
        keyPoint: "Cleaning liquid spills",
        examples: [
          "Wisch das Wasser auf! (Wipe up the water!)",
          "Ich wische den Boden auf. (I'm mopping the floor.)"
        ]
      }
    ]
  },
  {
    prefix: "aus",
    description: "out, off",
    verbs: [
      {
        verb: "ausatmen",
        translation: "to exhale, to breathe out",
        keyPoint: "Expelling air from lungs",
        examples: [
          "Atme langsam aus! (Breathe out slowly!)",
          "Beim Entspannen atmet man tief aus. (When relaxing, one breathes out deeply.)"
        ]
      },
      {
        verb: "ausbilden",
        translation: "to train, to educate",
        keyPoint: "Providing professional training",
        examples: [
          "Wir bilden junge Leute aus. (We train young people.)",
          "Er wird zum Mechaniker ausgebildet. (He's being trained as a mechanic.)"
        ]
      },
      {
        verb: "ausbleiben",
        translation: "to fail to appear, to stay away",
        keyPoint: "Not happening or not coming",
        examples: [
          "Der Regen bleibt aus. (The rain isn't coming.)",
          "Er bleibt vom Meeting aus. (He's staying away from the meeting.)"
        ]
      },
      {
        verb: "ausdenken",
        translation: "to think up, to invent",
        keyPoint: "Creating ideas or solutions",
        examples: [
          "Denk dir eine Geschichte aus! (Think up a story!)",
          "Das habe ich mir ausgedacht. (I thought that up.)"
        ]
      },
      {
        verb: "ausdrucken",
        translation: "to print out",
        keyPoint: "Creating physical copies",
        examples: [
          "Druck das Dokument aus! (Print out the document!)",
          "Ich drucke die Fotos aus. (I'm printing out the photos.)"
        ]
      },
      {
        verb: "ausfallen",
        translation: "to be cancelled, to fall out",
        keyPoint: "Not taking place or losing something",
        examples: [
          "Der Unterricht fällt aus. (The class is cancelled.)",
          "Mir fallen die Haare aus. (My hair is falling out.)"
        ]
      },
      {
        verb: "ausfragen",
        translation: "to question thoroughly",
        keyPoint: "Intensive questioning",
        examples: [
          "Die Polizei fragt ihn aus. (The police are questioning him thoroughly.)",
          "Frag mich nicht so aus! (Don't question me so intensively!)"
        ]
      },
      {
        verb: "ausgeben",
        translation: "to spend, to give out",
        keyPoint: "Spending money or distributing",
        examples: [
          "Gib nicht so viel Geld aus! (Don't spend so much money!)",
          "Der Lehrer gibt die Bücher aus. (The teacher is giving out the books.)"
        ]
      },
      {
        verb: "ausgehen",
        translation: "to go out",
        keyPoint: "Leaving home for entertainment or ending",
        examples: [
          "Wir gehen heute Abend aus. (We're going out tonight.)",
          "Das Licht geht aus. (The light goes out.)"
        ]
      },
      {
        verb: "auskennen",
        translation: "to know one's way around",
        keyPoint: "Being familiar with a place or topic",
        examples: [
          "Kennst du dich hier aus? (Do you know your way around here?)",
          "Ich kenne mich mit Computern aus. (I know about computers.)"
        ]
      },
      {
        verb: "auslachen",
        translation: "to laugh at, to mock",
        keyPoint: "Ridiculing someone",
        examples: [
          "Lach mich nicht aus! (Don't laugh at me!)",
          "Die Kinder lachen ihn aus. (The children are mocking him.)"
        ]
      },
      {
        verb: "ausleben",
        translation: "to live out, to express fully",
        keyPoint: "Fully experiencing or expressing",
        examples: [
          "Leb deine Träume aus! (Live out your dreams!)",
          "Er lebt sich in der Kunst aus. (He expresses himself fully in art.)"
        ]
      },
      {
        verb: "ausleihen",
        translation: "to lend out, to borrow",
        keyPoint: "Temporary lending or borrowing",
        examples: [
          "Leihst du mir das Buch aus? (Will you lend me the book?)",
          "Ich leihe mir ein Auto aus. (I'm borrowing a car.)"
        ]
      },
      {
        verb: "ausliegen",
        translation: "to be displayed, to lie out",
        keyPoint: "Being available for viewing",
        examples: [
          "Die Zeitschriften liegen aus. (The magazines are displayed.)",
          "Die Dokumente liegen zur Ansicht aus. (The documents are lying out for viewing.)"
        ]
      },
      {
        verb: "auslosen",
        translation: "to draw lots, to raffle",
        keyPoint: "Random selection process",
        examples: [
          "Wir losen den Gewinner aus. (We're drawing lots for the winner.)",
          "Der Preis wird ausgelost. (The prize is being raffled.)"
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
        verb: "ausmalen",
        translation: "to color in, to imagine",
        keyPoint: "Adding color or visualizing",
        examples: [
          "Mal das Bild aus! (Color in the picture!)",
          "Ich male mir die Zukunft aus. (I'm imagining the future.)"
        ]
      },
      {
        verb: "ausnutzen",
        translation: "to take advantage of, to exploit",
        keyPoint: "Using something/someone for benefit",
        examples: [
          "Nutz die Gelegenheit aus! (Take advantage of the opportunity!)",
          "Er nutzt ihre Freundlichkeit aus. (He's exploiting her kindness.)"
        ]
      },
      {
        verb: "ausräumen",
        translation: "to clear out, to empty",
        keyPoint: "Removing contents completely",
        examples: [
          "Räum den Schrank aus! (Clear out the closet!)",
          "Wir räumen das Zimmer aus. (We're emptying the room.)"
        ]
      },
      {
        verb: "ausruhen",
        translation: "to rest, to relax",
        keyPoint: "Taking a break to recover",
        examples: [
          "Ruh dich aus! (Rest!)",
          "Ich ruhe mich nach der Arbeit aus. (I rest after work.)"
        ]
      },
      {
        verb: "ausschalten",
        translation: "to switch off, to eliminate",
        keyPoint: "Deactivating or removing",
        examples: [
          "Schalte das Radio aus! (Switch off the radio!)",
          "Wir schalten den Fehler aus. (We're eliminating the error.)"
        ]
      },
      {
        verb: "ausschlafen",
        translation: "to sleep in, to sleep enough",
        keyPoint: "Getting adequate sleep",
        examples: [
          "Am Sonntag schlafe ich aus. (On Sunday I sleep in.)",
          "Hast du ausgeschlafen? (Did you get enough sleep?)"
        ]
      },
      {
        verb: "ausschließen",
        translation: "to exclude, to lock out",
        keyPoint: "Preventing inclusion or access",
        examples: [
          "Schließ ihn nicht aus! (Don't exclude him!)",
          "Ich habe mich ausgeschlossen. (I've locked myself out.)"
        ]
      },
      {
        verb: "ausschneiden",
        translation: "to cut out",
        keyPoint: "Removing by cutting",
        examples: [
          "Schneid den Artikel aus! (Cut out the article!)",
          "Sie schneidet Bilder aus. (She's cutting out pictures.)"
        ]
      },
      {
        verb: "aussehen",
        translation: "to look, to appear",
        keyPoint: "Visual appearance",
        examples: [
          "Du siehst müde aus. (You look tired.)",
          "Wie sieht das aus? (What does that look like?)"
        ]
      },
      {
        verb: "aussprechen",
        translation: "to pronounce, to express",
        keyPoint: "Articulating words or thoughts",
        examples: [
          "Sprich das Wort richtig aus! (Pronounce the word correctly!)",
          "Ich spreche meine Meinung aus. (I'm expressing my opinion.)"
        ]
      },
      {
        verb: "aussteigen",
        translation: "to get out, to exit",
        keyPoint: "Leaving a vehicle or situation",
        examples: [
          "Steig hier aus! (Get out here!)",
          "Ich steige aus dem Geschäft aus. (I'm exiting the business.)"
        ]
      },
      {
        verb: "ausstellen",
        translation: "to exhibit, to turn off",
        keyPoint: "Displaying or deactivating",
        examples: [
          "Wir stellen die Kunst aus. (We're exhibiting the art.)",
          "Stell das Gerät aus! (Turn off the device!)"
        ]
      },
      {
        verb: "austauschen",
        translation: "to exchange, to replace",
        keyPoint: "Swapping or substituting",
        examples: [
          "Tausch die Batterien aus! (Exchange the batteries!)",
          "Wir tauschen Ideen aus. (We're exchanging ideas.)"
        ]
      },
      {
        verb: "austeilen",
        translation: "to distribute, to deal out",
        keyPoint: "Giving out to multiple people",
        examples: [
          "Teil die Karten aus! (Deal out the cards!)",
          "Der Lehrer teilt die Tests aus. (The teacher is distributing the tests.)"
        ]
      },
      {
        verb: "austrinken",
        translation: "to drink up, to finish drinking",
        keyPoint: "Consuming all liquid",
        examples: [
          "Trink deinen Kaffee aus! (Drink up your coffee!)",
          "Hast du alles ausgetrunken? (Did you finish drinking everything?)"
        ]
      },
      {
        verb: "auswählen",
        translation: "to select, to choose",
        keyPoint: "Making a choice from options",
        examples: [
          "Wähl ein Buch aus! (Select a book!)",
          "Ich wähle das rote Kleid aus. (I'm choosing the red dress.)"
        ]
      },
      {
        verb: "auswandern",
        translation: "to emigrate",
        keyPoint: "Leaving one's country permanently",
        examples: [
          "Sie wandern nach Kanada aus. (They're emigrating to Canada.)",
          "Viele Menschen wanderten aus. (Many people emigrated.)"
        ]
      },
      {
        verb: "auswirken",
        translation: "to affect, to have an impact",
        keyPoint: "Causing effects or consequences",
        examples: [
          "Das wirkt sich negativ aus. (That has a negative impact.)",
          "Wie wirkt sich das aus? (How does that affect things?)"
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
    prefix: "auseinander",
    description: "apart, asunder",
    verbs: [
      {
        verb: "auseinanderfallen",
        translation: "to fall apart",
        keyPoint: "Breaking into pieces",
        examples: [
          "Das Spielzeug fällt auseinander. (The toy is falling apart.)",
          "Die Gruppe fällt auseinander. (The group is falling apart.)"
        ]
      },
      {
        verb: "auseinanderleben",
        translation: "to grow apart",
        keyPoint: "Becoming distant in relationships",
        examples: [
          "Die Freunde leben auseinander. (The friends are growing apart.)",
          "Wir leben seit Jahren auseinander. (We've been growing apart for years.)"
        ]
      },
      {
        verb: "auseinandersetzen",
        translation: "to deal with, to confront",
        keyPoint: "Addressing or confronting issues",
        examples: [
          "Setz dich mit dem Problem auseinander! (Deal with the problem!)",
          "Ich setze mich mit der Kritik auseinander. (I'm confronting the criticism.)"
        ]
      }
    ]
  },
  {
    prefix: "bei",
    description: "with, near, at",
    verbs: [
      {
        verb: "beibringen",
        translation: "to teach, to impart",
        keyPoint: "Teaching skills or knowledge",
        examples: [
          "Bring ihm Schwimmen bei! (Teach him to swim!)",
          "Ich bringe dir Deutsch bei. (I'm teaching you German.)"
        ]
      },
      {
        verb: "beiliegen",
        translation: "to be enclosed, to be included",
        keyPoint: "Being attached or included",
        examples: [
          "Die Rechnung liegt bei. (The bill is enclosed.)",
          "Was liegt dem Brief bei? (What's included with the letter?)"
        ]
      },
      {
        verb: "beisetzen",
        translation: "to bury, to inter",
        keyPoint: "Funeral burial",
        examples: [
          "Er wurde gestern beigesetzt. (He was buried yesterday.)",
          "Die Beisetzung findet morgen statt. (The burial takes place tomorrow.)"
        ]
      },
      {
        verb: "beitragen",
        translation: "to contribute",
        keyPoint: "Adding to something collectively",
        examples: [
          "Trag etwas zur Diskussion bei! (Contribute to the discussion!)",
          "Ich trage zum Erfolg bei. (I'm contributing to the success.)"
        ]
      },
      {
        verb: "beitreten",
        translation: "to join, to become a member",
        keyPoint: "Joining an organization",
        examples: [
          "Tritt dem Verein bei! (Join the club!)",
          "Ich trete der Partei bei. (I'm joining the party.)"
        ]
      }
    ]
  },
  {
    prefix: "da",
    description: "there, here",
    verbs: [
      {
        verb: "dableiben",
        translation: "to stay there, to remain",
        keyPoint: "Staying in a place",
        examples: [
          "Bleib da! (Stay there!)",
          "Ich bleibe zu Hause da. (I'm staying at home.)"
        ]
      },
      {
        verb: "dalassen",
        translation: "to leave there",
        keyPoint: "Leaving something in a place",
        examples: [
          "Lass das Buch da! (Leave the book there!)",
          "Ich lasse meine Tasche da. (I'm leaving my bag there.)"
        ]
      },
      {
        verb: "daliegen",
        translation: "to lie there",
        keyPoint: "Being positioned in a place",
        examples: [
          "Das Buch liegt da. (The book is lying there.)",
          "Warum liegt das da? (Why is that lying there?)"
        ]
      },
      {
        verb: "dasitzen",
        translation: "to sit there",
        keyPoint: "Being seated in a place",
        examples: [
          "Sitz nicht einfach da! (Don't just sit there!)",
          "Er sitzt den ganzen Tag da. (He sits there all day.)"
        ]
      },
      {
        verb: "dastehen",
        translation: "to stand there",
        keyPoint: "Standing in a position",
        examples: [
          "Steh nicht nur da! (Don't just stand there!)",
          "Das Auto steht da. (The car is standing there.)"
        ]
      }
    ]
  },
  {
    prefix: "dar",
    description: "there, forth",
    verbs: [
      {
        verb: "darbieten",
        translation: "to offer, to present",
        keyPoint: "Presenting or providing something",
        examples: [
          "Er bietet eine gute Leistung dar. (He offers a good performance.)",
          "Was bietet die Stadt dar? (What does the city offer?)"
        ]
      },
      {
        verb: "darlegen",
        translation: "to explain, to set forth",
        keyPoint: "Explaining or presenting arguments",
        examples: [
          "Leg deine Meinung dar! (Explain your opinion!)",
          "Ich lege die Fakten dar. (I'm setting forth the facts.)"
        ]
      },
      {
        verb: "darstellen",
        translation: "to represent, to portray",
        keyPoint: "Showing or representing something",
        examples: [
          "Das Bild stellt einen König dar. (The picture portrays a king.)",
          "Stell das Problem dar! (Represent the problem!)"
        ]
      }
    ]
  },
  {
    prefix: "ein",
    description: "in, into",
    verbs: [
      {
        verb: "einatmen",
        translation: "to inhale, to breathe in",
        keyPoint: "Drawing air into lungs",
        examples: [
          "Atme tief ein! (Breathe in deeply!)",
          "Die frische Luft einatmen ist gesund. (Breathing in fresh air is healthy.)"
        ]
      },
      {
        verb: "einbrechen",
        translation: "to break in, to burglarize",
        keyPoint: "Illegal entry or sudden occurrence",
        examples: [
          "Jemand ist eingebrochen. (Someone broke in.)",
          "Die Nacht bricht ein. (Night is falling.)"
        ]
      },
      {
        verb: "einchecken",
        translation: "to check in",
        keyPoint: "Registering arrival",
        examples: [
          "Check im Hotel ein! (Check in at the hotel!)",
          "Wann checkst du ein? (When are you checking in?)"
        ]
      },
      {
        verb: "eincremen",
        translation: "to apply cream, to put lotion on",
        keyPoint: "Applying skincare products",
        examples: [
          "Crem dich ein! (Put lotion on!)",
          "Ich creme mich nach dem Duschen ein. (I apply lotion after showering.)"
        ]
      },
      {
        verb: "eingreifen",
        translation: "to intervene, to step in",
        keyPoint: "Taking action to help or stop something",
        examples: [
          "Greif ein! (Intervene!)",
          "Die Polizei greift ein. (The police are intervening.)"
        ]
      },
      {
        verb: "einhalten",
        translation: "to keep, to observe",
        keyPoint: "Following rules or promises",
        examples: [
          "Halt das Versprechen ein! (Keep the promise!)",
          "Wir halten die Regeln ein. (We observe the rules.)"
        ]
      },
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
        verb: "einloggen",
        translation: "to log in",
        keyPoint: "Accessing computer systems",
        examples: [
          "Logg dich ein! (Log in!)",
          "Ich logge mich in mein Konto ein. (I'm logging into my account.)"
        ]
      },
      {
        verb: "einpacken",
        translation: "to pack, to wrap",
        keyPoint: "Putting items in containers",
        examples: [
          "Pack deine Sachen ein! (Pack your things!)",
          "Ich packe das Geschenk ein. (I'm wrapping the gift.)"
        ]
      },
      {
        verb: "einräumen",
        translation: "to put away, to admit",
        keyPoint: "Organizing or acknowledging",
        examples: [
          "Räum die Bücher ein! (Put the books away!)",
          "Ich räume den Fehler ein. (I admit the mistake.)"
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
      },
      {
        verb: "einsteigen",
        translation: "to get in, to board",
        keyPoint: "Entering a vehicle",
        examples: [
          "Steig ins Auto ein! (Get in the car!)",
          "Alle einsteigen! (All aboard!)"
        ]
      },
      {
        verb: "eintauchen",
        translation: "to dive, to immerse",
        keyPoint: "Going under water or into something",
        examples: [
          "Tauch ins Wasser ein! (Dive into the water!)",
          "Ich tauche in das Buch ein. (I'm immersing myself in the book.)"
        ]
      },
      {
        verb: "eintragen",
        translation: "to enter, to register",
        keyPoint: "Recording information officially",
        examples: [
          "Trag deinen Namen ein! (Enter your name!)",
          "Ich trage mich in die Liste ein. (I'm registering on the list.)"
        ]
      },
      {
        verb: "einziehen",
        translation: "to move in, to collect",
        keyPoint: "Moving to new residence or gathering",
        examples: [
          "Wir ziehen nächste Woche ein. (We're moving in next week.)",
          "Die Bank zieht die Schulden ein. (The bank is collecting the debts.)"
        ]
      }
    ]
  },
  {
    prefix: "empor",
    description: "up, upward",
    verbs: [
      {
        verb: "emporfliegen",
        translation: "to fly up",
        keyPoint: "Flying upward movement",
        examples: [
          "Der Vogel fliegt empor. (The bird flies up.)",
          "Die Rakete fliegt empor. (The rocket flies up.)"
        ]
      },
      {
        verb: "emporklettern",
        translation: "to climb up",
        keyPoint: "Climbing upward",
        examples: [
          "Klettere den Berg empor! (Climb up the mountain!)",
          "Die Katze klettert am Baum empor. (The cat climbs up the tree.)"
        ]
      },
      {
        verb: "emporschauen",
        translation: "to look up",
        keyPoint: "Looking upward",
        examples: [
          "Schau zu den Sternen empor! (Look up at the stars!)",
          "Alle schauen empor. (Everyone looks up.)"
        ]
      }
    ]
  },
  {
    prefix: "entgegen",
    description: "toward, against",
    verbs: [
      {
        verb: "entgegengehen",
        translation: "to go toward, to approach",
        keyPoint: "Moving toward something",
        examples: [
          "Geh ihm entgegen! (Go toward him!)",
          "Wir gehen dem Problem entgegen. (We're approaching the problem.)"
        ]
      },
      {
        verb: "entgegenfahren",
        translation: "to drive toward",
        keyPoint: "Driving in the direction of something",
        examples: [
          "Fahr ihm entgegen! (Drive toward him!)",
          "Das Auto fährt uns entgegen. (The car is driving toward us.)"
        ]
      },
      {
        verb: "entgegenkommen",
        translation: "to come toward, to accommodate",
        keyPoint: "Approaching or making concessions",
        examples: [
          "Er kommt mir entgegen. (He's coming toward me.)",
          "Können Sie mir preislich entgegenkommen? (Can you accommodate me on price?)"
        ]
      },
      {
        verb: "entgegennehmen",
        translation: "to receive, to accept",
        keyPoint: "Accepting something offered",
        examples: [
          "Nimm das Geschenk entgegen! (Accept the gift!)",
          "Ich nehme die Auszeichnung entgegen. (I'm receiving the award.)"
        ]
      },
      {
        verb: "entgegentreten",
        translation: "to confront, to oppose",
        keyPoint: "Facing opposition or challenges",
        examples: [
          "Tritt dem Problem entgegen! (Confront the problem!)",
          "Wir treten der Kritik entgegen. (We're confronting the criticism.)"
        ]
      }
    ]
  },
  {
    prefix: "entlang",
    description: "along",
    verbs: [
      {
        verb: "entlangfahren",
        translation: "to drive along",
        keyPoint: "Driving alongside something",
        examples: [
          "Fahr die Straße entlang! (Drive along the street!)",
          "Wir fahren am Fluss entlang. (We're driving along the river.)"
        ]
      },
      {
        verb: "entlangführen",
        translation: "to lead along",
        keyPoint: "Guiding alongside something",
        examples: [
          "Der Weg führt am See entlang. (The path leads along the lake.)",
          "Führ mich entlang! (Lead me along!)"
        ]
      },
      {
        verb: "entlanggehen",
        translation: "to walk along",
        keyPoint: "Walking alongside something",
        examples: [
          "Geh am Strand entlang! (Walk along the beach!)",
          "Wir gehen die Mauer entlang. (We're walking along the wall.)"
        ]
      },
      {
        verb: "entlangkommen",
        translation: "to come along",
        keyPoint: "Moving alongside while approaching",
        examples: [
          "Komm die Straße entlang! (Come along the street!)",
          "Er kommt am Zaun entlang. (He's coming along the fence.)"
        ]
      },
      {
        verb: "entlanglaufen",
        translation: "to run along",
        keyPoint: "Running alongside something",
        examples: [
          "Lauf den Bach entlang! (Run along the stream!)",
          "Der Hund läuft am Ufer entlang. (The dog runs along the shore.)"
        ]
      }
    ]
  },
  {
    prefix: "entzwei",
    description: "in two, apart",
    verbs: [
      {
        verb: "entzweibrechen",
        translation: "to break in two",
        keyPoint: "Breaking into two pieces",
        examples: [
          "Der Ast bricht entzwei. (The branch breaks in two.)",
          "Das Spielzeug ist entzweigebrochen. (The toy broke in two.)"
        ]
      },
      {
        verb: "entzweigehen",
        translation: "to break, to fall apart",
        keyPoint: "Something breaking apart",
        examples: [
          "Die Vase geht entzwei. (The vase breaks.)",
          "Pass auf, dass nichts entzweigeht! (Be careful that nothing breaks!)"
        ]
      }
    ]
  },
  {
    prefix: "fehl",
    description: "wrong, missing",
    verbs: [
      {
        verb: "fehlinterpretieren",
        translation: "to misinterpret",
        keyPoint: "Understanding incorrectly",
        examples: [
          "Interpretiere das nicht fehl! (Don't misinterpret that!)",
          "Ich habe seine Worte fehlinterpretiert. (I misinterpreted his words.)"
        ]
      },
      {
        verb: "fehlschlagen",
        translation: "to fail, to misfire",
        keyPoint: "Not succeeding as planned",
        examples: [
          "Der Plan schlägt fehl. (The plan fails.)",
          "Alle Versuche schlugen fehl. (All attempts failed.)"
        ]
      }
    ]
  },
  {
    prefix: "fern",
    description: "far, distant",
    verbs: [
      {
        verb: "fernbleiben",
        translation: "to stay away, to be absent",
        keyPoint: "Not attending or participating",
        examples: [
          "Bleib dem Streit fern! (Stay away from the fight!)",
          "Er bleibt der Schule fern. (He's staying away from school.)"
        ]
      },
      {
        verb: "fernsehen",
        translation: "to watch television",
        keyPoint: "Viewing TV programs",
        examples: [
          "Siehst du gern fern? (Do you like watching TV?)",
          "Wir sehen jeden Abend fern. (We watch TV every evening.)"
        ]
      },
      {
        verb: "fernsteuern",
        translation: "to remote control",
        keyPoint: "Controlling from a distance",
        examples: [
          "Steuere das Auto fern! (Remote control the car!)",
          "Das Flugzeug wird ferngesteuert. (The plane is remote controlled.)"
        ]
      }
    ]
  },
  {
    prefix: "fest",
    description: "firm, tight",
    verbs: [
      {
        verb: "festbinden",
        translation: "to tie up, to fasten",
        keyPoint: "Securing with rope or cord",
        examples: [
          "Bind das Boot fest! (Tie up the boat!)",
          "Ich binde das Paket fest. (I'm tying up the package.)"
        ]
      },
      {
        verb: "festdrücken",
        translation: "to press down, to hold firmly",
        keyPoint: "Applying firm pressure",
        examples: [
          "Drück den Knopf fest! (Press the button firmly!)",
          "Drück die Wunde fest! (Press down on the wound!)"
        ]
      },
      {
        verb: "festkleben",
        translation: "to stick, to glue on",
        keyPoint: "Adhering permanently",
        examples: [
          "Kleb das Bild fest! (Stick the picture on!)",
          "Das Etikett klebt fest. (The label sticks firmly.)"
        ]
      },
      {
        verb: "festknoten",
        translation: "to tie a knot, to knot firmly",
        keyPoint: "Making secure knots",
        examples: [
          "Knote das Seil fest! (Tie the rope firmly!)",
          "Der Knoten ist festgeknotet. (The knot is tied firmly.)"
        ]
      },
      {
        verb: "festlegen",
        translation: "to determine, to fix",
        keyPoint: "Making definite decisions",
        examples: [
          "Leg den Termin fest! (Fix the date!)",
          "Wir legen die Regeln fest. (We're determining the rules.)"
        ]
      },
      {
        verb: "festliegen",
        translation: "to be fixed, to be determined",
        keyPoint: "Being definitively set",
        examples: [
          "Der Plan liegt fest. (The plan is fixed.)",
          "Die Preise liegen noch nicht fest. (The prices aren't determined yet.)"
        ]
      },
      {
        verb: "feststellen",
        translation: "to determine, to notice",
        keyPoint: "Discovering or establishing facts",
        examples: [
          "Stell die Wahrheit fest! (Determine the truth!)",
          "Ich stelle einen Fehler fest. (I notice an error.)"
        ]
      }
    ]
  },
  {
    prefix: "fort",
    description: "away, forth",
    verbs: [
      {
        verb: "fortbilden",
        translation: "to continue education, to train further",
        keyPoint: "Ongoing professional development",
        examples: [
          "Bilde dich fort! (Continue your education!)",
          "Ich bilde mich beruflich fort. (I'm continuing my professional education.)"
        ]
      },
      {
        verb: "fortbleiben",
        translation: "to stay away, to remain absent",
        keyPoint: "Continuing to be absent",
        examples: [
          "Bleib nicht so lange fort! (Don't stay away so long!)",
          "Er bleibt von der Arbeit fort. (He stays away from work.)"
        ]
      },
      {
        verb: "fortdauern",
        translation: "to continue, to persist",
        keyPoint: "Ongoing continuation",
        examples: [
          "Der Regen dauert fort. (The rain continues.)",
          "Das Problem dauert fort. (The problem persists.)"
        ]
      },
      {
        verb: "fortfahren",
        translation: "to continue, to drive away",
        keyPoint: "Continuing action or leaving by vehicle",
        examples: [
          "Fahr mit der Arbeit fort! (Continue with the work!)",
          "Das Auto fährt fort. (The car drives away.)"
        ]
      },
      {
        verb: "fortführen",
        translation: "to continue, to carry on",
        keyPoint: "Maintaining ongoing activities",
        examples: [
          "Führ das Gespräch fort! (Continue the conversation!)",
          "Wir führen die Tradition fort. (We're carrying on the tradition.)"
        ]
      },
      {
        verb: "fortkommen",
        translation: "to get away, to make progress",
        keyPoint: "Making advancement or escape",
        examples: [
          "Komm von hier fort! (Get away from here!)",
          "Ich komme gut fort. (I'm making good progress.)"
        ]
      },
      {
        verb: "fortlaufen",
        translation: "to run away",
        keyPoint: "Escaping by running",
        examples: [
          "Lauf nicht fort! (Don't run away!)",
          "Das Kind ist fortgelaufen. (The child ran away.)"
        ]
      },
      {
        verb: "fortnehmen",
        translation: "to take away",
        keyPoint: "Removing something",
        examples: [
          "Nimm das fort! (Take that away!)",
          "Ich nehme den Müll fort. (I'm taking away the trash.)"
        ]
      },
      {
        verb: "fortrennen",
        translation: "to run away quickly",
        keyPoint: "Quick escape by running",
        examples: [
          "Renn nicht fort! (Don't run away!)",
          "Der Dieb rennt fort. (The thief is running away.)"
        ]
      },
      {
        verb: "fortschicken",
        translation: "to send away",
        keyPoint: "Making someone leave",
        examples: [
          "Schick ihn fort! (Send him away!)",
          "Die Eltern schicken das Kind fort. (The parents are sending the child away.)"
        ]
      },
      {
        verb: "fortschreiten",
        translation: "to progress, to advance",
        keyPoint: "Making forward movement",
        examples: [
          "Die Arbeit schreitet fort. (The work is progressing.)",
          "Schreite mit dem Plan fort! (Advance with the plan!)"
        ]
      },
      {
        verb: "fortziehen",
        translation: "to move away, to migrate",
        keyPoint: "Relocating to another place",
        examples: [
          "Zieh nicht fort! (Don't move away!)",
          "Viele Familien ziehen fort. (Many families are moving away.)"
        ]
      }
    ]
  },
  {
    prefix: "frei",
    description: "free, clear",
    verbs: [
      {
        verb: "freigeben",
        translation: "to release, to approve",
        keyPoint: "Allowing access or use",
        examples: [
          "Gib den Weg frei! (Clear the way!)",
          "Der Film wird freigegeben. (The movie is being released.)"
        ]
      },
      {
        verb: "freihaben",
        translation: "to have time off",
        keyPoint: "Being free from work or obligations",
        examples: [
          "Hast du morgen frei? (Do you have tomorrow off?)",
          "Ich habe heute frei. (I have today off.)"
        ]
      },
      {
        verb: "freihalten",
        translation: "to keep free, to reserve",
        keyPoint: "Maintaining availability",
        examples: [
          "Halt den Platz frei! (Keep the seat free!)",
          "Ich halte den Termin frei. (I'm keeping the appointment free.)"
        ]
      },
      {
        verb: "freilassen",
        translation: "to release, to set free",
        keyPoint: "Giving freedom to captives",
        examples: [
          "Lass den Gefangenen frei! (Release the prisoner!)",
          "Die Tiere werden freigelassen. (The animals are being set free.)"
        ]
      },
      {
        verb: "freimachen",
        translation: "to clear, to take time off",
        keyPoint: "Creating free space or time",
        examples: [
          "Mach den Tisch frei! (Clear the table!)",
          "Ich mache mir den Tag frei. (I'm taking the day off.)"
        ]
      },
      {
        verb: "freinehmen",
        translation: "to take time off",
        keyPoint: "Requesting leave from work",
        examples: [
          "Nimm dir frei! (Take time off!)",
          "Ich nehme mir einen Tag frei. (I'm taking a day off.)"
        ]
      },
      {
        verb: "freisprechen",
        translation: "to acquit, to absolve",
        keyPoint: "Declaring innocent in legal context",
        examples: [
          "Das Gericht spricht ihn frei. (The court acquits him.)",
          "Er wurde freigesprochen. (He was acquitted.)"
        ]
      }
    ]
  },
  {
    prefix: "gegen",
    description: "against, counter",
    verbs: [
      {
        verb: "gegenhalten",
        translation: "to hold against, to counter",
        keyPoint: "Providing opposing force or argument",
        examples: [
          "Halt dagegen! (Counter that!)",
          "Ich halte meine Meinung dagegen. (I counter with my opinion.)"
        ]
      },
      {
        verb: "gegenlesen",
        translation: "to proofread, to cross-check",
        keyPoint: "Reading to verify accuracy",
        examples: [
          "Lies den Text gegen! (Proofread the text!)",
          "Kannst du das gegenlesen? (Can you proofread that?)"
        ]
      },
      {
        verb: "gegenrechnen",
        translation: "to offset, to counter-calculate",
        keyPoint: "Balancing accounts or calculations",
        examples: [
          "Rechne die Kosten gegen! (Offset the costs!)",
          "Die Gewinne werden gegengerechnet. (The profits are being offset.)"
        ]
      },
      {
        verb: "gegenzeichnen",
        translation: "to countersign",
        keyPoint: "Adding signature for authorization",
        examples: [
          "Zeichne den Vertrag gegen! (Countersign the contract!)",
          "Der Chef zeichnet alle Dokumente gegen. (The boss countersigns all documents.)"
        ]
      }
    ]
  },
  {
    prefix: "gegenüber",
    description: "opposite, across from",
    verbs: [
      {
        verb: "gegenüberliegen",
        translation: "to lie opposite",
        keyPoint: "Being positioned across from something",
        examples: [
          "Das Haus liegt der Schule gegenüber. (The house lies opposite the school.)",
          "Die Inseln liegen sich gegenüber. (The islands lie opposite each other.)"
        ]
      },
      {
        verb: "gegenübersetzen",
        translation: "to seat opposite, to confront with",
        keyPoint: "Placing in opposing position",
        examples: [
          "Setz dich mir gegenüber! (Sit opposite me!)",
          "Er setzt die Argumente gegenüber. (He confronts with the arguments.)"
        ]
      },
      {
        verb: "gegenübersitzen",
        translation: "to sit opposite",
        keyPoint: "Being seated across from someone",
        examples: [
          "Wir sitzen uns gegenüber. (We sit opposite each other.)",
          "Sitz ihm gegenüber! (Sit opposite him!)"
        ]
      },
      {
        verb: "gegenüberstehen",
        translation: "to stand opposite, to face",
        keyPoint: "Being in opposition or confrontation",
        examples: [
          "Sie stehen sich gegenüber. (They stand opposite each other.)",
          "Ich stehe dem Problem gegenüber. (I face the problem.)"
        ]
      },
      {
        verb: "gegenüberstellen",
        translation: "to confront, to compare",
        keyPoint: "Placing in direct comparison",
        examples: [
          "Stell die Fakten gegenüber! (Compare the facts!)",
          "Die Zeugen werden gegenübergestellt. (The witnesses are being confronted.)"
        ]
      },
      {
        verb: "gegenübertreten",
        translation: "to confront, to face",
        keyPoint: "Approaching to face directly",
        examples: [
          "Tritt ihm gegenüber! (Confront him!)",
          "Ich trete dem Problem gegenüber. (I confront the problem.)"
        ]
      }
    ]
  }
];
