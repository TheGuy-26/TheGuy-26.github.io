export const translations = {
  en: {
      opening_line: "I am a 4th-semester student at Saarland University with hands-on experience in software development and programming projects.",
      skills: "Skills",
      projects: "My Programming Projects",
      project_list: {
          concurrent: "Agent-Based Virus Simulation",
          bde: "Social Network with Reputation System",
          sys1: "Hardware Design with Chisel – Bit Manipulation and RISC-V Extension",
          sys2: "System Programming and Exception Handling on RISC-V",
          prog1: "MiniOCaml – Interpreter for a Functional Language",
          election_software: "School Election Management System",
      },
      project_descriptions: {
          conc: "In this proejct we developed an agent-based simulation model to predict the spread of the fictional Pincer Pox virus. The system models individual agents moving in a 2D grid, each with infection states (susceptible, infected, infectious, recovered). It simulates behavior such as movement, coughing, breathing, and virus transmission within a defined radius.\n\n"+
              "To improve performance, we parallelized the simulation using spatial partitioning (patches with padding). Each patch is simulated independently for several ticks before synchronizing with neighboring patches, ensuring deterministic results while minimizing communication overhead. This approach enables efficient and scalable concurrent simulations.",
          bde: "In this project, we developed a proof-of-concept social network that integrates a skill-based reputation system called Fame Profiles, where users’ expertise and credibility influence their interactions on the platform. Starting from an existing Django-based application, we implemented logic to prevent users from posting content in areas where they " +
              "hold negative fame and designed an automated system to update users’ fame based on the truthfulness of their posts—lowering their reputation, adding negative fame, or banning them entirely for repeated misinformation. We also introduced expertise-based communities, where only highly reputable users (Super Pro and above) can join, and ensured members " +
              "are automatically removed if their fame drops. " +
              "\n\n" +
              "Additionally, we created APIs to identify users with negative expertise (bullshitters), compute similarity scores between users based on their fame profiles, and display this information through new interactive views in the frontend. This project combines concepts from social network design, reputation systems, and ethical data engineering, showcasing how " +
              "expertise, accountability, and content moderation can be embedded into online platforms.",
          sys1: "The project was divided into two main parts. In the first part, we implemented various bit-manipulation circuits, " +
              "including a Leading Zero Counter, Generalized Reverse, Generalized Shuffle, and Sequential Rotater, following the RISC-V Bit-Manipulation (RV32B) extension. These modules were designed to perform efficient bit-level operations often used in cryptography, data encoding, and processor optimization.\n\n" +
              "In the second part, we extended a modular RISC-V processor to support additional functionalities. This included implementing function call instructions (JAL and JALR), load operations, and advanced bit-manipulation and permutation instructions such as GREV, SHFL, and ROR. Furthermore, we developed an efficient permutation code generator capable of producing optimized " +
              "instruction sequences to realize arbitrary bit permutations.",
          sys2: "The project involved implementing fundamental exception handling routines, system calls, and scheduling mechanisms within a simulated RISC-V environment.\n" +
              "In the first part, we developed system calls for handling input/output operations, such as printing individual characters and strings to a terminal using the RISC-V exception handling mechanism. Building on this, we implemented a simplified interactive drawing program, Paint 0.1, which allowed users to control a pixel-based cursor on a 32×32 display using " +
              "keyboard inputs, change colors dynamically, and interact with memory-mapped I/O devices.\n\n" +
              "Subsequent tasks focused on process management and scheduling. We implemented a periodic process switch between two non-cooperative programs using timer interrupts and round-robin scheduling. Finally, we extended this functionality to support process creation, termination, and Shortest Time to Completion First (STCF) scheduling for up to eight concurrent processes. ",
          ocaml: "The project involved implementing key components of a functional language pipeline, including lexing, parsing, type checking, and evaluation.\n\n" +
              "The lexer transformed input strings into tokens representing language constructs such as functions, recursive bindings, and operators. The parser then generated an abstract syntax tree (AST) by recognizing expressions, function definitions, applications, and recursive let bindings. Both recursive-descent and precedence parsing techniques were explored, " +
              "and the use of parser generators like Menhir was introduced to automate grammar handling and ambiguity resolution.\n\n" +
              "Following syntactic analysis, the type checker enforced static typing rules for function applications, lambda abstractions, and recursive definitions. Finally, the evaluation phase executed the expressions by simulating closures, variable bindings, and recursive calls in an environment model.",
          election: "The School Election Management System is a JavaFX-based desktop application developed as a hobby project to streamline the process of conducting school elections. It allows administrators to register voters, manage candidates, and handle multiple election positions within a single interface. The software enables secure vote casting and automatically " +
              "calculates and displays election results once voting concludes. \n\n" +
              "All election data, including voter records and results, are stored in an SQL database, ensuring accuracy and persistence across sessions. The project was designed with a focus on both usability and learning, providing practical experience with JavaFX for GUI development, SQL for database integration, and core object-oriented programming principles in Java.",
      }
  },

  ge: {
    opening_line: "Ich bin Student im 4. Semester an der Universität des Saarlandes und habe praktische Erfahrung in Softwareentwicklung und Programmierprojekten.",
    skills: "Fähigkeiten",
    projects: "Meine Programmierprojekte",
    project_list: {
        concurrent: "Agentenbasierte Virus-Simulation",
        bde: "Soziales Netzwerk mit Reputationssystem",
        sys1: "Hardware-Design mit Chisel – Bit-Manipulation und RISC-V-Erweiterung",
        sys2: "Systemprogrammierung und Ausnahmebehandlung auf RISC-V",
        prog1: "MiniOCaml – Interpreter für funktionale Sprache",
        election_software: "School Election Management System",
    },
      project_descriptions: {
          conc: "In diesem Projekt haben wir ein agentenbasiertes Simulationsmodell entwickelt, um die Ausbreitung des fiktiven Virus Pincer Pox vorherzusagen. Das System modelliert einzelne Agenten, die sich auf einem 2D-Raster bewegen und verschiedene Infektionszustände haben (empfänglich, infiziert, ansteckend, genesen). Es simuliert Verhalten wie Bewegung, Husten, Atmen und die Virusübertragung in einem bestimmten Radius.\n\n" +
              "Zur Leistungssteigerung haben wir die Simulation durch räumliche Aufteilung (Bereiche mit Pufferzonen) parallelisiert. Jeder Bereich wird für mehrere Zeitschritte unabhängig simuliert, bevor er sich mit benachbarten Bereichen synchronisiert. Dadurch bleiben die Ergebnisse deterministisch, während der Kommunikationsaufwand gering bleibt. Dieser Ansatz ermöglicht effiziente und skalierbare parallele Simulationen.",

          bde: "In diesem Projekt haben wir ein Konzept für ein soziales Netzwerk mit einem fähigkeitsbasierten Reputationssystem namens Fame Profiles entwickelt. Dabei beeinflussen die Expertise und Glaubwürdigkeit der Nutzer ihre Interaktionen auf der Plattform. Aufbauend auf einer bestehenden Django-Anwendung haben wir eine Logik implementiert, die verhindert, dass Nutzer Inhalte in Bereichen posten, in denen sie negative Bewertungen haben. Außerdem haben wir ein automatisches System entwickelt, das den Ruf der Nutzer je nach Wahrheitsgehalt ihrer Beiträge anpasst – durch das Senken des Rufs, das Hinzufügen negativer Bewertungen oder Sperrungen bei wiederholter Falschinformation.\n\n" +
              "Zusätzlich haben wir APIs erstellt, um Nutzer mit negativer Expertise zu erkennen, Ähnlichkeitswerte zwischen Nutzern anhand ihrer Fame Profile zu berechnen und diese Daten über interaktive Ansichten im Frontend anzuzeigen. Dieses Projekt verbindet Konzepte aus sozialer Netzwerktechnik, Reputationssystemen und ethischer Datenverarbeitung und zeigt, wie Expertise, Verantwortung und Inhaltsmoderation in Online-Plattformen integriert werden können.",

          sys1: "Das Projekt bestand aus zwei Hauptteilen. Im ersten Teil haben wir verschiedene Bit-Manipulationsschaltungen implementiert, darunter einen Leading Zero Counter, Generalized Reverse, Generalized Shuffle und Sequential Rotater – basierend auf der RISC-V Bit-Manipulation (RV32B) Erweiterung. Diese Module führen effiziente Bit-Operationen aus, die häufig in Kryptographie, Datenkodierung und Prozessoroptimierung verwendet werden.\n\n" +
              "Im zweiten Teil haben wir einen modularen RISC-V-Prozessor erweitert, um zusätzliche Funktionen zu unterstützen. Dazu gehörten Funktionsaufrufe (JAL und JALR), Ladeoperationen und erweiterte Bit- und Permutationsbefehle wie GREV, SHFL und ROR. Außerdem haben wir einen effizienten Permutations-Codegenerator entwickelt, der optimierte Befehlsfolgen zur Umsetzung beliebiger Bit-Permutationen erzeugt.",

          sys2: "Das Projekt umfasste die Implementierung grundlegender Ausnahmebehandlungsroutinen, Systemaufrufe und Scheduling-Mechanismen in einer simulierten RISC-V-Umgebung.\n" +
              "Im ersten Teil wurden Systemaufrufe für Ein- und Ausgabevorgänge entwickelt, z. B. zum Ausgeben einzelner Zeichen und Zeichenketten auf einem Terminal über den Ausnahmebehandlungsmechanismus von RISC-V. Darauf aufbauend wurde ein einfaches interaktives Zeichenprogramm namens Paint 0.1 implementiert, mit dem Benutzer einen pixelbasierten Cursor auf einem 32×32-Bildschirm mithilfe der Tastatur steuern, Farben ändern und mit speicherabbildeten I/O-Geräten interagieren konnten.\n\n" +
              "Spätere Aufgaben befassten sich mit Prozessverwaltung und Scheduling. Wir implementierten einen periodischen Prozesswechsel zwischen zwei Programmen mithilfe von Timer-Interrupts und Round-Robin-Scheduling. Schließlich erweiterten wir die Funktionalität um die Prozess-Erstellung, Beendigung und STCF-Scheduling (Shortest Time to Completion First) für bis zu acht gleichzeitige Prozesse.",

          ocaml: "Das Projekt umfasste die Implementierung der wichtigsten Komponenten einer funktionalen Sprachpipeline, einschließlich Lexing, Parsing, Typprüfung und Auswertung.\n\n" +
              "Der Lexer wandelte Eingabestrings in Token um, die Sprachkonstrukte wie Funktionen, rekursive Bindungen und Operatoren darstellen. Der Parser erzeugte anschließend einen abstrakten Syntaxbaum (AST), indem er Ausdrücke, Funktionsdefinitionen, Anwendungen und rekursive let-Bindungen erkannte. Sowohl rekursives Abstiegparsing als auch Präzedenzparsing wurden verwendet, und der Einsatz von Parser-Generatoren wie Menhir wurde eingeführt, um Grammatikverarbeitung und Ambiguitäten zu automatisieren.\n\n" +
              "Nach der syntaktischen Analyse überprüfte der Typprüfer die statischen Typregeln für Funktionsanwendungen, Lambda-Abstraktionen und rekursive Definitionen. Schließlich führte die Auswertungsphase die Ausdrücke aus, indem sie Closures, Variablenbindungen und rekursive Aufrufe in einem Umgebungsmodell simulierte.",

          election: "Das School Election Management System ist eine JavaFX-basierte Desktop-Anwendung, die als Hobbyprojekt entwickelt wurde, um den Ablauf von Schulwahlen zu vereinfachen. Administratoren können Wähler registrieren, Kandidaten verwalten und mehrere Wahlpositionen über eine gemeinsame Benutzeroberfläche organisieren. Die Software ermöglicht sicheres Abstimmen und berechnet sowie zeigt die Wahlergebnisse automatisch nach Abschluss der Abstimmung an.\n\n" +
              "Alle Wahldaten, einschließlich Wählerlisten und Ergebnisse, werden in einer SQL-Datenbank gespeichert, was Genauigkeit und Beständigkeit über mehrere Sitzungen hinweg gewährleistet. Das Projekt wurde mit Fokus auf Benutzerfreundlichkeit und Lernen entwickelt und bot praktische Erfahrungen mit JavaFX für GUI-Entwicklung, SQL-Integration und objektorientierter Programmierung in Java.",
      }
  }
};