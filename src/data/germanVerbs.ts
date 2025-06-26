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

// Import all verb categories
import { additionalVerbGroups } from "./germanVerbsExtension";
import { additionalVerbGroups2 } from "./germanVerbsExtension2";
import { additionalVerbGroups3 } from "./germanVerbsExtension3";
import { germanNonSeparableVerbs } from "./germanNonSeparableVerbs";
import { germanModalVerbs } from "./germanModalVerbs";
import { germanIrregularVerbs } from "./germanIrregularVerbs";
import { germanReflexiveVerbs } from "./germanReflexiveVerbs";
import { germanRegularVerbs } from "./germanRegularVerbs";

// Original separable verb groups that were already in the file
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
          "Ich bringe dich heim. (I'm bringing you home.)",
        ],
      },
      {
        verb: "heimfahren",
        translation: "to drive home",
        keyPoint: "Traveling home by vehicle",
        examples: [
          "Fahr heim! (Drive home!)",
          "Wir fahren spät heim. (We're driving home late.)",
        ],
      },
      {
        verb: "heimkommen",
        translation: "to come home",
        keyPoint: "Arriving at home",
        examples: [
          "Komm gut heim! (Get home safely!)",
          "Wann kommst du heim? (When are you coming home?)",
        ],
      },
      {
        verb: "heimgehen",
        translation: "to go home",
        keyPoint: "Walking home",
        examples: [
          "Ich gehe jetzt heim. (I'm going home now.)",
          "Es ist Zeit heimzugehen. (It's time to go home.)",
        ],
      },
      {
        verb: "heimreisen",
        translation: "to travel home",
        keyPoint: "Making a journey home",
        examples: [
          "Wir reisen morgen heim. (We're traveling home tomorrow.)",
          "Die Heimreise war angenehm. (The journey home was pleasant.)",
        ],
      },
      {
        verb: "heimkehren",
        translation: "to return home",
        keyPoint: "Coming back home",
        examples: [
          "Er kehrt nach Jahren heim. (He returns home after years.)",
          "Die Soldaten kehrten heim. (The soldiers returned home.)",
        ],
      },
      {
        verb: "heimschicken",
        translation: "to send home",
        keyPoint: "Sending someone home",
        examples: [
          "Der Lehrer schickt ihn heim. (The teacher sends him home.)",
          "Kranke Kinder wurden heimgeschickt. (Sick children were sent home.)",
        ],
      },
      {
        verb: "heimführen",
        translation: "to lead home",
        keyPoint: "Guiding someone home",
        examples: [
          "Ich führe dich heim. (I'll lead you home.)",
          "Der Hund führte uns heim. (The dog led us home.)",
        ],
      },
      {
        verb: "heimbegleiten",
        translation: "to accompany home",
        keyPoint: "Going with someone to their home",
        examples: [
          "Ich begleite dich heim. (I'll accompany you home.)",
          "Sie wurde sicher heimbegleitet. (She was safely accompanied home.)",
        ],
      },
      {
        verb: "heimtragen",
        translation: "to carry home",
        keyPoint: "Carrying something home",
        examples: [
          "Trag die Einkäufe heim! (Carry the groceries home!)",
          "Er trägt das Paket heim. (He carries the package home.)",
        ],
      },
      {
        verb: "heimholen",
        translation: "to fetch home",
        keyPoint: "Going to get and bring home",
        examples: [
          "Ich hole dich heim. (I'll fetch you home.)",
          "Die Kinder wurden heimgeholt. (The children were fetched home.)",
        ],
      },
      {
        verb: "heimlaufen",
        translation: "to run home",
        keyPoint: "Running to get home",
        examples: [
          "Das Kind läuft schnell heim. (The child runs home quickly.)",
          "Ich bin heimgelaufen. (I ran home.)",
        ],
      },
      {
        verb: "heimfliegen",
        translation: "to fly home",
        keyPoint: "Flying back home",
        examples: [
          "Wir fliegen morgen heim. (We're flying home tomorrow.)",
          "Die Vögel fliegen heim. (The birds are flying home.)",
        ],
      },
      {
        verb: "heimrufen",
        translation: "to call home",
        keyPoint: "Summoning someone home",
        examples: [
          "Die Mutter ruft die Kinder heim. (The mother calls the children home.)",
          "Er wurde dringend heimgerufen. (He was urgently called home.)",
        ],
      },
      {
        verb: "heimschleichen",
        translation: "to sneak home",
        keyPoint: "Going home quietly/secretly",
        examples: [
          "Er schleicht spät heim. (He sneaks home late.)",
          "Das Kind schlich heimlich heim. (The child snuck home secretly.)",
        ],
      },
      {
        verb: "heimwinken",
        translation: "to wave home",
        keyPoint: "Waving someone toward home",
        examples: [
          "Sie winkt ihn heim. (She waves him home.)",
          "Der Vater winkte die Familie heim. (The father waved the family home.)",
        ],
      },
      {
        verb: "heimliefern",
        translation: "to deliver home",
        keyPoint: "Bringing something to someone's home",
        examples: [
          "Wir liefern das Paket heim. (We deliver the package home.)",
          "Das Essen wurde heimgeliefert. (The food was delivered home.)",
        ],
      },
      {
        verb: "heimsenden",
        translation: "to send home",
        keyPoint: "Dispatching someone home",
        examples: [
          "Die Schule sendet kranke Kinder heim. (The school sends sick children home.)",
          "Der Arbeiter wurde heimgesendet. (The worker was sent home.)",
        ],
      },
      {
        verb: "heimfahren",
        translation: "to take home",
        keyPoint: "Transporting someone home",
        examples: [
          "Ich fahre dich heim. (I'll take you home.)",
          "Der Bus fährt uns heim. (The bus takes us home.)",
        ],
      },
      {
        verb: "heimziehen",
        translation: "to move back home",
        keyPoint: "Returning to live at home",
        examples: [
          "Nach dem Studium zieht er heim. (After university, he moves back home.)",
          "Sie ist zu ihren Eltern heimgezogen. (She moved back home to her parents.)",
        ],
      },
      {
        verb: "heimarbeiten",
        translation: "to work from home",
        keyPoint: "Working at home",
        examples: [
          "Ich arbeite heute heim. (I'm working from home today.)",
          "Viele Leute arbeiten jetzt heim. (Many people now work from home.)",
        ],
      },
      {
        verb: "heimdenken",
        translation: "to think of home",
        keyPoint: "Having thoughts about home",
        examples: [
          "Er denkt oft heim. (He often thinks of home.)",
          "An die Familie wurde heimgedacht. (Thoughts went to the family at home.)",
        ],
      },
      {
        verb: "heimsehnen",
        translation: "to long for home",
        keyPoint: "Feeling homesick",
        examples: [
          "Sie sehnt sich heim. (She longs for home.)",
          "Nach der Heimat wurde sich gesehnt. (There was longing for the homeland.)",
        ],
      },
      {
        verb: "heimwollen",
        translation: "to want to go home",
        keyPoint: "Desiring to return home",
        examples: [
          "Das Kind will heim. (The child wants to go home.)",
          "Alle wollten nach dem langen Tag heim. (Everyone wanted to go home after the long day.)",
        ],
      },
      {
        verb: "heimdürfen",
        translation: "to be allowed to go home",
        keyPoint: "Having permission to go home",
        examples: [
          "Darf ich heim? (May I go home?)",
          "Die Kinder durften früh heim. (The children were allowed to go home early.)",
        ],
      },
      {
        verb: "heimsollen",
        translation: "to be supposed to go home",
        keyPoint: "Being expected to go home",
        examples: [
          "Du sollst heim! (You're supposed to go home!)",
          "Die Patienten sollten heim. (The patients were supposed to go home.)",
        ],
      },
      {
        verb: "heimmüssen",
        translation: "to have to go home",
        keyPoint: "Being required to go home",
        examples: [
          "Ich muss jetzt heim. (I have to go home now.)",
          "Die Kinder mussten früh heim. (The children had to go home early.)",
        ],
      },
      {
        verb: "heimkönnen",
        translation: "to be able to go home",
        keyPoint: "Having the ability to go home",
        examples: [
          "Kann ich heim? (Can I go home?)",
          "Endlich konnten sie heim. (Finally they could go home.)",
        ],
      },
      {
        verb: "heimbleiben",
        translation: "to stay home",
        keyPoint: "Remaining at home",
        examples: [
          "Heute bleibe ich heim. (Today I'm staying home.)",
          "Kranke Kinder sollten heimbleiben. (Sick children should stay home.)",
        ],
      },
      {
        verb: "heimleben",
        translation: "to live at home",
        keyPoint: "Residing at home",
        examples: [
          "Er lebt noch heim. (He still lives at home.)",
          "Viele junge Erwachsene leben heim. (Many young adults live at home.)",
        ],
      },
      {
        verb: "heimwohnen",
        translation: "to live at home",
        keyPoint: "Residing in one's family home",
        examples: [
          "Sie wohnt noch heim. (She still lives at home.)",
          "Nach der Scheidung wohnt er wieder heim. (After the divorce, he lives at home again.)",
        ],
      },
      {
        verb: "heimessen",
        translation: "to eat at home",
        keyPoint: "Having meals at home",
        examples: [
          "Wir essen heute heim. (We're eating at home today.)",
          "Die Familie isst gerne heim. (The family likes to eat at home.)",
        ],
      },
      {
        verb: "heimschlafen",
        translation: "to sleep at home",
        keyPoint: "Spending the night at home",
        examples: [
          "Ich schlafe heute heim. (I'm sleeping at home tonight.)",
          "Das Kind schläft gern heim. (The child likes to sleep at home.)",
        ],
      },
      {
        verb: "heimfeiern",
        translation: "to celebrate at home",
        keyPoint: "Having a celebration at home",
        examples: [
          "Wir feiern heim. (We're celebrating at home.)",
          "Der Geburtstag wurde heim gefeiert. (The birthday was celebrated at home.)",
        ],
      },
      {
        verb: "heimspielen",
        translation: "to play at home",
        keyPoint: "Playing games at home",
        examples: [
          "Die Kinder spielen heim. (The children are playing at home.)",
          "Das Team spielt heim. (The team is playing at home.)",
        ],
      },
      {
        verb: "heimlernen",
        translation: "to study at home",
        keyPoint: "Learning from home",
        examples: [
          "Die Schüler lernen heim. (The students are studying at home.)",
          "Online wird viel heim gelernt. (A lot is studied from home online.)",
        ],
      },
      {
        verb: "heimüben",
        translation: "to practice at home",
        keyPoint: "Practicing skills at home",
        examples: [
          "Sie übt Klavier heim. (She practices piano at home.)",
          "Die Präsentation wurde heim geübt. (The presentation was practiced at home.)",
        ],
      },
      {
        verb: "heimlesen",
        translation: "to read at home",
        keyPoint: "Reading while at home",
        examples: [
          "Ich lese gern heim. (I like to read at home.)",
          "Das Buch wurde heim gelesen. (The book was read at home.)",
        ],
      },
      {
        verb: "heimschreiben",
        translation: "to write at home",
        keyPoint: "Writing while at home",
        examples: [
          "Sie schreibt heim. (She writes at home.)",
          "Der Brief wurde heim geschrieben. (The letter was written at home.)",
        ],
      },
      {
        verb: "heimkochen",
        translation: "to cook at home",
        keyPoint: "Preparing food at home",
        examples: [
          "Wir kochen heute heim. (We're cooking at home today.)",
          "Das Essen wurde heim gekocht. (The food was cooked at home.)",
        ],
      },
      {
        verb: "heimbacken",
        translation: "to bake at home",
        keyPoint: "Baking at home",
        examples: [
          "Sie bäckt Kuchen heim. (She bakes cake at home.)",
          "Das Brot wurde heim gebacken. (The bread was baked at home.)",
        ],
      },
      {
        verb: "heimputzen",
        translation: "to clean at home",
        keyPoint: "Cleaning one's home",
        examples: [
          "Ich putze heim. (I'm cleaning at home.)",
          "Das Haus wurde gründlich heim geputzt. (The house was thoroughly cleaned.)",
        ],
      },
      {
        verb: "heimwaschen",
        translation: "to wash at home",
        keyPoint: "Doing laundry at home",
        examples: [
          "Sie wäscht heim. (She does laundry at home.)",
          "Die Wäsche wurde heim gewaschen. (The laundry was washed at home.)",
        ],
      },
      {
        verb: "heimbügeln",
        translation: "to iron at home",
        keyPoint: "Ironing clothes at home",
        examples: [
          "Sie bügelt heim. (She irons at home.)",
          "Die Hemden wurden heim gebügelt. (The shirts were ironed at home.)",
        ],
      },
      {
        verb: "heimreparieren",
        translation: "to repair at home",
        keyPoint: "Fixing things at home",
        examples: [
          "Er repariert das Auto heim. (He repairs the car at home.)",
          "Das Fahrrad wurde heim repariert. (The bicycle was repaired at home.)",
        ],
      },
      {
        verb: "heimbauen",
        translation: "to build at home",
        keyPoint: "Construction work at home",
        examples: [
          "Er baut das Regal heim. (He builds the shelf at home.)",
          "Das Baumhaus wurde heim gebaut. (The treehouse was built at home.)",
        ],
      },
      {
        verb: "heimgärtnern",
        translation: "to garden at home",
        keyPoint: "Gardening at one's residence",
        examples: [
          "Sie gärtnert gern heim. (She likes to garden at home.)",
          "Die Blumen wurden heim gegärtnert. (The flowers were gardened at home.)",
        ],
      },
      {
        verb: "heimpflegen",
        translation: "to care for at home",
        keyPoint: "Providing care at home",
        examples: [
          "Sie pflegt ihre Mutter heim. (She cares for her mother at home.)",
          "Der Patient wurde heim gepflegt. (The patient was cared for at home.)",
        ],
      },
      {
        verb: "heimheilen",
        translation: "to heal at home",
        keyPoint: "Recovering at home",
        examples: [
          "Die Wunde heilt heim. (The wound heals at home.)",
          "Er heilte nach der Operation heim. (He healed at home after surgery.)",
        ],
      },
      {
        verb: "heimmeditieren",
        translation: "to meditate at home",
        keyPoint: "Practicing meditation at home",
        examples: [
          "Sie meditiert jeden Tag heim. (She meditates at home every day.)",
          "Die Entspannung wurde heim meditiert. (Relaxation was meditated at home.)",
        ],
      },
      {
        verb: "heimsingen",
        translation: "to sing at home",
        keyPoint: "Singing while at home",
        examples: [
          "Die Familie singt gern heim. (The family likes to sing at home.)",
          "Weihnachtslieder wurden heim gesungen. (Christmas songs were sung at home.)",
        ],
      },
      {
        verb: "heimtanzen",
        translation: "to dance at home",
        keyPoint: "Dancing in one's home",
        examples: [
          "Sie tanzt gern heim. (She likes to dance at home.)",
          "Zur Musik wurde heim getanzt. (Dancing was done at home to music.)",
        ],
      },
      {
        verb: "heimmalen",
        translation: "to paint at home",
        keyPoint: "Creating art at home",
        examples: [
          "Sie malt schöne Bilder heim. (She paints beautiful pictures at home.)",
          "Das Porträt wurde heim gemalt. (The portrait was painted at home.)",
        ],
      },
      {
        verb: "heimzeichnen",
        translation: "to draw at home",
        keyPoint: "Creating drawings at home",
        examples: [
          "Er zeichnet Comics heim. (He draws comics at home.)",
          "Die Skizze wurde heim gezeichnet. (The sketch was drawn at home.)",
        ],
      },
      {
        verb: "heimnähen",
        translation: "to sew at home",
        keyPoint: "Sewing at home",
        examples: [
          "Sie näht ihre Kleider heim. (She sews her clothes at home.)",
          "Der Vorhang wurde heim genäht. (The curtain was sewn at home.)",
        ],
      },
      {
        verb: "heimstricken",
        translation: "to knit at home",
        keyPoint: "Knitting at home",
        examples: [
          "Oma strickt Pullover heim. (Grandma knits sweaters at home.)",
          "Der Schal wurde heim gestrickt. (The scarf was knitted at home.)",
        ],
      },
      {
        verb: "heimhäkeln",
        translation: "to crochet at home",
        keyPoint: "Crocheting at home",
        examples: [
          "Sie häkelt Decken heim. (She crochets blankets at home.)",
          "Die Mütze wurde heim gehäkelt. (The hat was crocheted at home.)",
        ],
      },
      {
        verb: "heimbasteln",
        translation: "to craft at home",
        keyPoint: "Making crafts at home",
        examples: [
          "Die Kinder basteln heim. (The children craft at home.)",
          "Die Dekoration wurde heim gebastelt. (The decoration was crafted at home.)",
        ],
      },
      {
        verb: "heimwerken",
        translation: "to do DIY at home",
        keyPoint: "Doing home improvement projects",
        examples: [
          "Er werkt gern heim. (He likes to do DIY at home.)",
          "Das Projekt wurde heim gewerkt. (The project was DIYed at home.)",
        ],
      },
      {
        verb: "heimsammeln",
        translation: "to collect at home",
        keyPoint: "Building collections at home",
        examples: [
          "Er sammelt Münzen heim. (He collects coins at home.)",
          "Die Briefmarken wurden heim gesammelt. (The stamps were collected at home.)",
        ],
      },
      {
        verb: "heimfotografieren",
        translation: "to photograph at home",
        keyPoint: "Taking photos at home",
        examples: [
          "Sie fotografiert ihre Familie heim. (She photographs her family at home.)",
          "Das Porträt wurde heim fotografiert. (The portrait was photographed at home.)",
        ],
      },
      {
        verb: "heimfilmen",
        translation: "to film at home",
        keyPoint: "Making videos at home",
        examples: [
          "Sie filmt Tutorials heim. (She films tutorials at home.)",
          "Der Film wurde heim gefilmt. (The movie was filmed at home.)",
        ],
      },
      {
        verb: "heimfinden",
        translation: "to find one's way home",
        keyPoint: "Navigating back home",
        examples: [
          "Findest du heim? (Can you find your way home?)",
          "Der Hund findet immer heim. (The dog always finds its way home.)",
        ],
      },
    ],
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
          "Der Chef bittet mich her. (The boss is asking me to come.)",
        ],
      },
      {
        verb: "herbringen",
        translation: "to bring here",
        keyPoint: "Bringing something to the speaker",
        examples: [
          "Bring das Buch her! (Bring the book here!)",
          "Ich bringe dir das Werkzeug her. (I'm bringing you the tool.)",
        ],
      },
      {
        verb: "hereilen",
        translation: "to hurry here",
        keyPoint: "Coming quickly to the speaker",
        examples: [
          "Eile her! (Hurry here!)",
          "Er eilt herbei. (He's hurrying over.)",
        ],
      },
      {
        verb: "herfahren",
        translation: "to drive here",
        keyPoint: "Driving toward the speaker",
        examples: [
          "Fahr her! (Drive here!)",
          "Wann fährst du her? (When are you driving here?)",
        ],
      },
      {
        verb: "herfinden",
        translation: "to find one's way here",
        keyPoint: "Navigating to the speaker",
        examples: [
          "Findest du her? (Can you find your way here?)",
          "Ich finde nicht her. (I can't find my way here.)",
        ],
      },
      {
        verb: "herholen",
        translation: "to fetch, to get",
        keyPoint: "Going to get something/someone",
        examples: [
          "Hol das Auto her! (Go get the car!)",
          "Ich hole den Arzt her. (I'm getting the doctor.)",
        ],
      },
      {
        verb: "herkommen",
        translation: "to come here",
        keyPoint: "Moving toward the speaker",
        examples: [
          "Komm her! (Come here!)",
          "Wo kommst du her? (Where do you come from?)",
        ],
      },
      {
        verb: "herkriegen",
        translation: "to get here, to manage to bring",
        keyPoint: "Successfully bringing something",
        examples: [
          "Kriegst du das her? (Can you get that here?)",
          "Ich kriege das Auto nicht her. (I can't get the car here.)",
        ],
      },
      {
        verb: "hernehmen",
        translation: "to take from, to get from somewhere",
        keyPoint: "Obtaining from a source",
        examples: [
          "Wo nimmst du das her? (Where do you get that from?)",
          "Nimm es vom Regal her! (Take it from the shelf!)",
        ],
      },
      {
        verb: "herrufen",
        translation: "to call here",
        keyPoint: "Summoning someone to come",
        examples: [
          "Ruf ihn her! (Call him here!)",
          "Der Chef ruft mich her. (The boss is calling me over.)",
        ],
      },
      {
        verb: "herschauen",
        translation: "to look here",
        keyPoint: "Directing attention here",
        examples: [
          "Schau her! (Look here!)",
          "Alle schauen her. (Everyone is looking here.)",
        ],
      },
      {
        verb: "herstellen",
        translation: "to produce, to manufacture",
        keyPoint: "Creating or making something",
        examples: [
          "Stell das Produkt her! (Manufacture the product!)",
          "Wir stellen Autos her. (We manufacture cars.)",
        ],
      },
      {
        verb: "herlocken",
        translation: "to lure here",
        keyPoint: "Attracting someone to come",
        examples: [
          "Lock den Hund her! (Lure the dog here!)",
          "Das Futter lockt die Vögel her. (The food lures the birds here.)",
        ],
      },
      {
        verb: "herführen",
        translation: "to lead here",
        keyPoint: "Guiding someone to this place",
        examples: [
          "Führ ihn her! (Lead him here!)",
          "Der Weg führt uns her. (The path leads us here.)",
        ],
      },
      {
        verb: "hersenden",
        translation: "to send here",
        keyPoint: "Dispatching someone to this location",
        examples: [
          "Send den Brief her! (Send the letter here!)",
          "Die Firma sendet einen Techniker her. (The company is sending a technician here.)",
        ],
      },
      {
        verb: "herbeordern",
        translation: "to order here",
        keyPoint: "Commanding someone to come",
        examples: [
          "Beordere ihn her! (Order him here!)",
          "Der Chef beordert mich her. (The boss orders me here.)",
        ],
      },
      {
        verb: "herlotsen",
        translation: "to guide here",
        keyPoint: "Directing someone's movement here",
        examples: [
          "Lotse das Schiff her! (Guide the ship here!)",
          "Der Turm lotst die Flugzeuge her. (The tower guides the planes here.)",
        ],
      },
      {
        verb: "herwinken",
        translation: "to wave here",
        keyPoint: "Signaling someone to come",
        examples: [
          "Wink ihn her! (Wave him over!)",
          "Sie winkt mich her. (She waves me over.)",
        ],
      },
      {
        verb: "herziehen",
        translation: "to pull here, to move here",
        keyPoint: "Dragging or relocating to this place",
        examples: [
          "Zieh den Stuhl her! (Pull the chair here!)",
          "Wir ziehen nächstes Jahr her. (We're moving here next year.)",
        ],
      },
      {
        verb: "herbeieilen",
        translation: "to hurry over",
        keyPoint: "Rushing to come here",
        examples: [
          "Eile herbei! (Hurry over!)",
          "Der Arzt eilt herbei. (The doctor hurries over.)",
        ],
      },
      {
        verb: "herbeikommen",
        translation: "to come over",
        keyPoint: "Approaching this location",
        examples: [
          "Komm herbei! (Come over!)",
          "Die Hilfe kommt herbei. (Help is coming over.)",
        ],
      },
      {
        verb: "herbeilaufen",
        translation: "to run over",
        keyPoint: "Running to this location",
        examples: [
          "Lauf herbei! (Run over!)",
          "Das Kind läuft herbei. (The child runs over.)",
        ],
      },
      {
        verb: "herbeiholen",
        translation: "to fetch here",
        keyPoint: "Going to get and bring here",
        examples: [
          "Hol Hilfe herbei! (Go get help!)",
          "Ich hole den Arzt herbei. (I'm fetching the doctor.)",
        ],
      },
      {
        verb: "herbeirufen",
        translation: "to call over",
        keyPoint: "Summoning someone to come",
        examples: [
          "Ruf ihn herbei! (Call him over!)",
          "Sie ruft die Kinder herbei. (She calls the children over.)",
        ],
      },
      {
        verb: "herbeiführen",
        translation: "to bring about",
        keyPoint: "Causing something to happen",
        examples: [
          "Führ eine Lösung herbei! (Bring about a solution!)",
          "Das führt Probleme herbei. (That brings about problems.)",
        ],
      },
      {
        verb: "herbeischaffen",
        translation: "to procure",
        keyPoint: "Obtaining and bringing here",
        examples: [
          "Schaff Geld herbei! (Procure money!)",
          "Wir schaffen die nötigen Mittel herbei. (We procure the necessary means.)",
        ],
      },
      {
        verb: "herbeiwünschen",
        translation: "to wish here",
        keyPoint: "Desiring someone's presence",
        examples: [
          "Ich wünsche dich herbei. (I wish you were here.)",
          "Sie wünscht sich Hilfe herbei. (She wishes for help to come.)",
        ],
      },
      {
        verb: "herbeizaubern",
        translation: "to conjure up",
        keyPoint: "Creating something as if by magic",
        examples: [
          "Zauber eine Lösung herbei! (Conjure up a solution!)",
          "Sie zaubert immer etwas Leckeres herbei. (She always conjures up something delicious.)",
        ],
      },
    ],
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
          "Ich blicke zum Fenster hin. (I'm looking toward the window.)",
        ],
      },
      {
        verb: "hinbringen",
        translation: "to take there",
        keyPoint: "Bringing something away from speaker",
        examples: [
          "Bring das hin! (Take that there!)",
          "Ich bringe dich zum Bahnhof hin. (I'm taking you to the station.)",
        ],
      },
      {
        verb: "hinfahren",
        translation: "to drive there",
        keyPoint: "Driving away from speaker",
        examples: [
          "Fahr hin! (Drive there!)",
          "Wir fahren zum See hin. (We're driving to the lake.)",
        ],
      },
      {
        verb: "hinfallen",
        translation: "to fall down",
        keyPoint: "Falling to the ground",
        examples: [
          "Fall nicht hin! (Don't fall down!)",
          "Das Kind ist hingefallen. (The child fell down.)",
        ],
      },
      {
        verb: "hinfliegen",
        translation: "to fly there",
        keyPoint: "Flying away from speaker",
        examples: [
          "Flieg hin! (Fly there!)",
          "Wir fliegen nach Paris hin. (We're flying to Paris.)",
        ],
      },
      {
        verb: "hingehen",
        translation: "to go there",
        keyPoint: "Walking away from speaker",
        examples: [
          "Geh hin! (Go there!)",
          "Ich gehe zum Arzt hin. (I'm going to the doctor.)",
        ],
      },
      {
        verb: "hingucken",
        translation: "to look there",
        keyPoint: "Looking away from speaker",
        examples: ["Guck hin! (Look there!)", "Guck nicht hin! (Don't look!)"],
      },
      {
        verb: "hinhauen",
        translation: "to hit, to work out",
        keyPoint: "Striking or succeeding",
        examples: [
          "Hau nicht hin! (Don't hit!)",
          "Das haut hin. (That works out.)",
        ],
      },
      {
        verb: "hinhören",
        translation: "to listen",
        keyPoint: "Paying attention to sounds",
        examples: [
          "Hör hin! (Listen!)",
          "Ich höre zur Musik hin. (I'm listening to the music.)",
        ],
      },
      {
        verb: "hinknien",
        translation: "to kneel down",
        keyPoint: "Getting on one's knees",
        examples: [
          "Knie hin! (Kneel down!)",
          "Er kniet vor dem Altar hin. (He kneels down before the altar.)",
        ],
      },
      {
        verb: "hinkommen",
        translation: "to get there, to manage",
        keyPoint: "Reaching a destination or succeeding",
        examples: [
          "Kommst du hin? (Can you get there?)",
          "Ich komme mit dem Geld hin. (I manage with the money.)",
        ],
      },
      {
        verb: "hinkriegen",
        translation: "to manage, to get done",
        keyPoint: "Successfully completing something",
        examples: [
          "Kriegst du das hin? (Can you manage that?)",
          "Ich kriege das Problem hin. (I'll get the problem sorted.)",
        ],
      },
      {
        verb: "hinlaufen",
        translation: "to run there",
        keyPoint: "Running away from speaker",
        examples: [
          "Lauf hin! (Run there!)",
          "Ich laufe zum Geschäft hin. (I'm running to the store.)",
        ],
      },
      {
        verb: "hinnehmen",
        translation: "to accept, to put up with",
        keyPoint: "Accepting something reluctantly",
        examples: [
          "Nimm es hin! (Accept it!)",
          "Ich nehme die Kritik hin. (I accept the criticism.)",
        ],
      },
      {
        verb: "hinrennen",
        translation: "to run there quickly",
        keyPoint: "Running rapidly away from speaker",
        examples: [
          "Renn hin! (Run there!)",
          "Er rennt zum Unfallort hin. (He's running to the accident site.)",
        ],
      },
      {
        verb: "hinschicken",
        translation: "to send there",
        keyPoint: "Making someone go somewhere",
        examples: [
          "Schick ihn hin! (Send him there!)",
          "Ich schicke dich zum Arzt hin. (I'm sending you to the doctor.)",
        ],
      },
      {
        verb: "hinschmeißen",
        translation: "to throw down, to quit",
        keyPoint: "Throwing something or giving up",
        examples: [
          "Schmeiß das nicht hin! (Don't throw that down!)",
          "Er schmeißt den Job hin. (He's quitting the job.)",
        ],
      },
      {
        verb: "hinsehen",
        translation: "to look there",
        keyPoint: "Looking in a specific direction",
        examples: [
          "Sieh hin! (Look there!)",
          "Ich sehe zum Bildschirm hin. (I'm looking at the screen.)",
        ],
      },
      {
        verb: "hinsetzen",
        translation: "to sit down",
        keyPoint: "Taking a seated position",
        examples: [
          "Setz dich hin! (Sit down!)",
          "Ich setze mich auf den Stuhl hin. (I'm sitting down on the chair.)",
        ],
      },
      {
        verb: "hintragen",
        translation: "to carry there",
        keyPoint: "Carrying something away from speaker",
        examples: [
          "Trag das hin! (Carry that there!)",
          "Ich trage den Koffer zur Tür hin. (I'm carrying the suitcase to the door.)",
        ],
      },
      {
        verb: "hinweisen",
        translation: "to point out, to refer to",
        keyPoint: "Indicating or directing attention",
        examples: [
          "Weise darauf hin! (Point that out!)",
          "Ich weise auf den Fehler hin. (I'm pointing out the error.)",
        ],
      },
      {
        verb: "hinwerfen",
        translation: "to throw down",
        keyPoint: "Throwing something to the ground",
        examples: [
          "Wirf das nicht hin! (Don't throw that down!)",
          "Er wirft die Jacke hin. (He throws down the jacket.)",
        ],
      },
      {
        verb: "hinziehen",
        translation: "to drag there, to be drawn to",
        keyPoint: "Pulling toward a place or attraction",
        examples: [
          "Zieh das hin! (Drag that there!)",
          "Es zieht mich zur Natur hin. (I'm drawn to nature.)",
        ],
      },
    ],
  },
];

// Combine ALL verb categories - comprehensive B2+ level German verb database (1000+ verbs)
export const germanSeparableVerbs: VerbGroup[] = [
  // ...originalVerbGroups,
  ...additionalVerbGroups,
  ...additionalVerbGroups2,
  ...additionalVerbGroups3,
  ...germanNonSeparableVerbs,
  ...germanModalVerbs,
  ...germanIrregularVerbs,
  ...germanReflexiveVerbs,
  ...germanRegularVerbs,
];
