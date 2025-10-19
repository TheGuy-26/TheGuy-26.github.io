export const translations = {
  en: {
      opening_line: "I am a 4th-semester student at Saarland University with hands-on experience in software development and programming projects.",
      projects: "My Programming Projects",
      concurrent: "Concurrent Virus Spread Simulation",
      bde: "Mini Social Media Platform",
      sys1: "Digital Circuit Design",
      sys2: "Simple Operating System and Paint Application",
      prog1: "Mini OCaml Compiler",
      election_software: "School Election Management Software",
      more: "and more...",
      project_descriptions: {
          conc: "Developed an agent-based simulation model to predict the spread of the fictional Pincer Pox virus. The system models individual agents moving in a 2D grid, each with infection states (susceptible, infected, infectious, recovered). It simulates behavior such as movement, coughing, breathing, and virus transmission within a defined radius.\n\n"+
              "To improve performance, we parallelized the simulation using spatial partitioning (patches with padding). Each patch is simulated independently for several ticks before synchronizing with neighboring patches, ensuring deterministic results while minimizing communication overhead. This approach enables efficient and scalable concurrent simulations.",
          bde: "In this project, we developed a proof-of-concept social network that integrates a skill-based reputation system called Fame Profiles, where users’ expertise and credibility influence their interactions on the platform. Starting from an existing Django-based application, we implemented logic to prevent users from posting content in areas where they " +
              "hold negative fame and designed an automated system to update users’ fame based on the truthfulness of their posts—lowering their reputation, adding negative fame, or banning them entirely for repeated misinformation. We also introduced expertise-based communities, where only highly reputable users (Super Pro and above) can join, and ensured members " +
              "are automatically removed if their fame drops. " +
              "\n\n" +
              "Additionally, we created APIs to identify users with negative expertise (bullshitters), compute similarity scores between users based on their fame profiles, and display this information through new interactive views in the frontend. This project combines concepts from social network design, reputation systems, and ethical data engineering, showcasing how " +
              "expertise, accountability, and content moderation can be embedded into online platforms.",
          sys1: "The Hardware Design with Chisel – RISC-V Bit-Manipulation and Processor Extension project, developed as part of System Architecture SS 2025, focused on designing and extending hardware modules using Chisel, a Scala-based hardware description language. The project was divided into two main parts. In the first part, we implemented various bit-manipulation circuits, " +
              "including a Leading Zero Counter, Generalized Reverse, Generalized Shuffle, and Sequential Rotater, following the RISC-V Bit-Manipulation (RV32B) extension. These modules were designed to perform efficient bit-level operations often used in cryptography, data encoding, and processor optimization.\n\n" +
              "In the second part, we extended a modular RISC-V processor to support additional functionalities. This included implementing function call instructions (JAL and JALR), load operations, and advanced bit-manipulation and permutation instructions such as GREV, SHFL, and ROR. Furthermore, we developed an efficient permutation code generator capable of producing optimized " +
              "instruction sequences to realize arbitrary bit permutations. This project provided deep hands-on experience with digital circuit design, processor architecture, and instruction set extensions while using tools like SBT, GitLab, and VS Code for development and testing.",
          sys2: "The System Programming and Exception Handling project, completed as part of System Architecture SS 2025, focused on low-level system programming and operating system concepts using RISC-V assembly. The project involved implementing fundamental exception handling routines, system calls, and scheduling mechanisms within a simulated RISC-V environment.\n" +
              "In the first part, we developed system calls for handling input/output operations, such as printing individual characters and strings to a terminal using the RISC-V exception handling mechanism. Building on this, we implemented a simplified interactive drawing program, Paint 0.1, which allowed users to control a pixel-based cursor on a 32×32 display using " +
              "keyboard inputs, change colors dynamically, and interact with memory-mapped I/O devices.\n\n" +
              "Subsequent tasks focused on process management and scheduling. We implemented a periodic process switch between two non-cooperative programs using timer interrupts and round-robin scheduling. Finally, we extended this functionality to support process creation, termination, and Shortest Time to Completion First (STCF) scheduling for up to eight concurrent processes. " +
              "This project provided extensive experience with RISC-V assembly, exception handling, system calls, process control blocks, and interrupt-driven scheduling, deepening my understanding of low-level operating system mechanisms and hardware-software interaction.",
          ocaml: "The MiniOCaml project, completed as part of Programming 1 – Winter Semester 2023/24 at Saarland University, focused on building a simplified interpreter for the OCaml programming language. The project involved implementing key components of a functional language pipeline, including lexing, parsing, type checking, and evaluation.\n\n" +
              "The lexer transformed input strings into tokens representing language constructs such as functions, recursive bindings, and operators. The parser then generated an abstract syntax tree (AST) by recognizing expressions, function definitions, applications, and recursive let bindings. Both recursive-descent and precedence parsing techniques were explored, " +
              "and the use of parser generators like Menhir was introduced to automate grammar handling and ambiguity resolution.\n\n" +
              "Following syntactic analysis, the type checker enforced static typing rules for function applications, lambda abstractions, and recursive definitions. Finally, the evaluation phase executed the expressions by simulating closures, variable bindings, and recursive calls in an environment model.",
          election: "An election software",
      }
  },

  ge: {
    opening_line: "Ich bin Student im 4. Semester an der Universität des Saarlandes und habe praktische Erfahrung in Softwareentwicklung und Programmierprojekten.",
    projects: "Meine Programmierprojekte",
    concurrent: "Simulation der gleichzeitigen Virusausbreitung",
    bde: "Mini-Soziale-Medien-Plattform",
    sys1: "Digitale Schaltungsentwicklung",
    sys2: "Einfaches Betriebssystem und Zeichenanwendung",
    prog1: "Mini-OCaml-Compiler",
    election_software: "Software für Schulwahlen",
    more: "und mehr...",
    project_descriptions: {
          conc: "Made a concurrent virus simulation in rust",
          bde: "A simple social media project made in Django",
          sys1: "Made simple circuits designs",
          sys2: "Made a simple OS and paint program",
          ocaml: "Made a simple compiler",
          election: "An election software",
    }
  }
};