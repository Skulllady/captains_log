'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Notes', [
      {
        title: 'Klingon civil war',
        content: "Captain's log, Stardate 45020.4. We have arrived at Starbase 234, where I have taken the opportunity to make a proposal to Fleet Admiral Shanthi. Captain's log, Stardate 45021.3. Convincing Starfleet Command to establish a blockade was relatively painless. Implementing that plan is proving more troublesome.",
        img: 'https://static.wikia.nocookie.net/memoryalpha/images/0/07/Qo%27noS_burns.jpg/revision/latest?cb=20170111094604&path-prefix=en',
        userId: 1,
        notebookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Tamarian incident',
        content: "Captain's log, Stardate 45047.2. The Enterprise is en route to the uninhabited El-Adrel system. Its location is near the territory occupied by an enigmatic race known as 'The Children of Tama.'",
        img: 'https://static.wikia.nocookie.net/memoryalpha/images/2/20/Dathon.jpg/revision/latest?cb=20190331221712&path-prefix=en',
        userId: 1,
        notebookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Bajoran terrorist incident',
        content: "Captain's log, stardate 45076.3. We have arrived at Lya Station Alpha with survivors from Solarion IV. Admiral Kennelly has rendezvoused to discuss the Bajoran terrorist attack. Captain's log, supplemental. We are approaching the Valo system on the outskirts of Cardassian territory, where many Bajorans have resettled. Captain's log, supplemental. I read about the achievements of the ancient Bajoran civilization in my fifth-grade reader. They were architects and artists, builders and philosophers when Humans were not yet standing erect. Now I see how history has rewarded them. Captain's log: Stardate 45077.8. Keeve Falor has kept his promise and directed us toward the third moon of Valo I, where we will meet tomorrow with the terrorist leader Orta. Captain's log, supplemental. I have become convinced that we are somehow involved in a conspiracy. I am hopeful the purpose behind it will be revealed in the next few hours.",
        img: 'https://static.wikia.nocookie.net/memoryalpha/images/6/66/Guinan_and_Ro_Laren_%282368%29.jpg/revision/latest?cb=20190403023734&path-prefix=en',
        userId: 1,
        notebookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Crystalline Entity incident',
        content: "Captain's log, Stardate 45122.3. We have notified Starfleet Command of our intention to pursue and investigate the Crystalline Entity. To that end, we have been joined by Doctor Kila Marr, a xenologist who has made studying the Entity her life's work. Captain's log, Stardate 45125.7. An away team, led by Commander Riker, has conducted a thorough survey of the alien ship Kallisko and has returned to the Enterprise to report. Captain's log, Stardate 45129.2. We are still in pursuit of the Crystalline Entity. Data and Dr. Marr are prepared to attempt communication with the being when we intercept it. I will admit to some uncertainty about the prospect; it could prove to be a scientific triumph or a catastrophe.",
        img: 'https://static.wikia.nocookie.net/memoryalpha/images/5/56/Crystalline_entity_above_Melona_IV%2C_remastered.png/revision/latest?cb=20190403003841&path-prefix=en',
        userId: 1,
        notebookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Quantum Filament incident',
        content: "Captain's Log, Stardate 45156.1. Our mission to Mudor V has been completed and since our next assignment will not begin for several days, we are enjoying a welcome respite from our duties. Captain's log, supplemental. We are en route to Starbase 67, to undergo repairs. Life aboard the Enterprise is slowly returning to normal.",
        img: 'https://static.wikia.nocookie.net/memoryalpha/images/1/17/5x05_Disaster_title_card.jpg/revision/latest?cb=20160711014659&path-prefix=en',
        userId: 1,
        notebookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Ktarian game incident',
        content: "Captain's log, Stardate 45208.2. Commander Riker has rejoined the Enterprise from Risa. And we are on our way to an uncharted area called the Phoenix Cluster. We are all anticipating this historic first look at the region. Captain's log, supplemental. We have arrived at the Phoenix Cluster, but it will take us several hours to determine the best possible location from which to conduct our survey. Commander Data's condition remains unchanged, with no further indication as to the cause of his collapse. Captain's log, Stardate 45212.1. We have delivered the Ktarian vessel to Starbase 82. We are now on a course to rendezvous with the starship Merrimac, which will transport Wesley Crusher back to Starfleet Academy.",
        img: 'https://static.wikia.nocookie.net/memoryalpha/images/6/66/Ktarian_game_graphics.jpg/revision/latest?cb=20140805154646&path-prefix=en',
        userId: 1,
        notebookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Romulan incident',
        content: "Captain's log, Stardate 45233.1. Our terraforming mission to Doraf I has been canceled and the Enterprise recalled to Starbase 234. Fleet Admiral Brackett would not discuss the matter on subspace for reasons she said would soon be clear. Captain's log, Stardate 45236.4. As I study the intelligence reports on Ambassador Spock's disappearance, I cannot help but feel a deeper, more personal concern about this mission, for I know this man through his father. It was barely a year ago that I shared a mind meld with the Vulcan Sarek… now we must meet again as I attempt to find an explanation for his son's actions. Captain's log, Stardate 45240.1. To cross the Neutral Zone, I will require a cloaked ship. To that end, I have set a course for the Klingon homeworld. After all we did for Gowron during the recent war, I am certain he will be happy to return a favor.",
        img: 'https://static.wikia.nocookie.net/memoryalpha/images/a/ae/Picard_and_Data_on_Romulus.jpg/revision/latest?cb=20180312062459&path-prefix=en',
        userId: 1,
        notebookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Time Traveler incident',
        content: "Captain's log, Stardate 45349.1. The Enterprise is on its way to Penthara IV where a type C asteroid has struck an unpopulated continent. The resulting dust cloud could very well create a phenomenon not unlike the nuclear winters of 21st century Earth. Commander La Forge has begun work on a plan that would counteract the devastation. Captain's log, Stardate 45350.3. We have arrived at Penthara IV and can see for ourselves the atmospheric devastation caused by the asteroid's impact. Captain's log, supplemental. While Doctor Moseley takes La Forge's plan to the leaders of the colony, I find myself weighing the potential consequences of a more philosophical issue. Captain's log, Stardate 45351.9. Doctor Moseley has met with the colony leaders, who all agree they are willing to take the risk.",
        img: 'https://static.wikia.nocookie.net/memoryalpha/images/1/19/Penthara_IV_frozen.jpg/revision/latest?cb=20050817094140&path-prefix=en',
        userId: 1,
        notebookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The soliton wave incident',
        content: "Captain's log, Stardate 45376.3. We are approaching the planet Bilana III where a new method of propulsion known as the soliton wave is being developed. The Enterprise has been asked to participate in one of the first tests of this new technology.",
        img: 'https://static.wikia.nocookie.net/memoryalpha/images/6/63/Soliton_wave.jpg/revision/latest?cb=20120103201556&path-prefix=en',
        userId: 1,
        notebookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The SS Vico incident',
        content: " Captain's log, Stardate 45397.3. Two days ago, Starbase 514 lost contact with the research vessel Vico, which was sent to explore the interior of a black cluster. We are en route to investigate. Captain's log, supplemental. A young boy, shielded from our initial sensor scans, has been discovered hidden beneath a fallen beam. The degree of damage to the Vico is making our rescue attempt difficult. Captain's Log, supplemental. A thorough search of the Vico has revealed no additional survivors. We have begun the process of counseling the boy with regard to the tragedy.",
        img: '',
        userId: 1,
        notebookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Ullian incident',
        content: "Captain's log, Stardate 45429.3. While on a mapping survey, we are conveying a delegation of Ullians to Kaldra IV. These telepathic historians conduct their research by retrieving long-forgotten memories. Captain's log, Stardate 45430.9. Counselor Troi has fallen into a deep coma. After a thorough examination, Doctor Crusher has been unable to find signs of illness or infection. Captain's log, Stardate 45433.2. We have set a course for Starbase 440 where the Ullians will disembark and return home. Captain's log, Stardate 45435.8. Dr. Crusher and Commander Riker regained consciousness while we were en route to the Ullian homeworld. The slow process of their recovery has begun.",
        img: 'https://static.wikia.nocookie.net/memoryalpha/images/3/3d/Jev.jpg/revision/latest?cb=20190403034815&path-prefix=en',
        userId: 1,
        notebookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Moab IV incident',
        content: "Captain's log, Stardate 45470.1. The Enterprise has been diverted to the Moab sector to track a stellar core fragment from a disintegrated neutron star. Our science teams have been asked to monitor the planetary disruptions it may cause. Captain's log, supplemental. Commander La Forge and Hannah Bates have spent three days trying to find a way to adjust the path of the core fragment. If they do not succeed in the next 48 hours, we will need to begin evacuation. Captain's Log, supplemental. The Enterprise has moved to a parallel course with core fragment. We must adjust its trajectory by a minimum of 1.2 degrees to ensure the colony's safety. Captain's Log, supplemental. The stellar core fragment has passed safely out of the Moab system. The colony was shaken by powerful tremors, but fortunately there were no injuries, and only minor damage was reported.",
        img: 'https://static.wikia.nocookie.net/memoryalpha/images/9/94/Genome_Colony.jpg/revision/latest?cb=20180302231211&path-prefix=en',
        userId: 1,
        notebookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Lysian incident',
        content: "Captain's log, Stardate 45494.2. We are investigating a series of subspace signals that may indicate intelligent life in the Epsilon Silar system. We are within sensor range. Captain's log, supplemental. We are on a course to Starbase 301. Doctor Crusher has been working steadily, and has restored the memories of most of the crew.",
        img: 'https://static.wikia.nocookie.net/memoryalpha/images/a/a6/Satarran.jpg/revision/latest?cb=20120115181903&path-prefix=en',
        userId: 1,
        notebookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Ux-Mal criminals incident',
        content: "Captain's log, Stardate 45571.2. We are going into orbit around an unexplored M class moon of Mab-Bu VI. Though the moon was reported to be uninhabited, we have picked up a weak distress call. Captain's log, supplemental. Following an aborted attempt to take control of the bridge, Counselor Troi, Mister Data, and Chief O'Brien have seized Ten Forward. Captain's log, Stardate 45572.1. Dr. Crusher has examined Troi, Data, and O'Brien. There seem to be no residual effects from their experience.",
        img: 'https://static.wikia.nocookie.net/memoryalpha/images/9/90/Troi_and_Data_taken_over_by_Ux-Mal_criminals.jpg/revision/latest?cb=20190325044822&path-prefix=en',
        userId: 1,
        notebookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Worf's broken back",
        content: "Captain's log, Stardate 45587.3. Lieutenant Worf has been removed from active duty following a severe injury. Although a neurospecialist has arrived, Doctor Crusher believes his paralysis may be permanent.",
        img: 'https://static.wikia.nocookie.net/memoryalpha/images/8/82/Worf%27s_death.jpg/revision/latest?cb=20120128192101&path-prefix=en',
        userId: 1,
        notebookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "The J'naii incident",
        content: "Captain's log, Stardate 45614.6. We have been contacted by an androgynous race called the J'naii to investigate the mysterious disappearance of one of their shuttlecraft. Captain's log, supplemental. The sudden disappearance of our probe suggests that we may have found the first instance of what is called null space – an anomaly which, until now, had been only theoretical. Commander Riker has been working around the clock with a team of J'naii specialists to formalize this hypothesis. Captain's log, Stardate 45616.3. Commander Riker and the J'naii pilot have set out to chart the null space pocket. If they are successful, we can then proceed with a rescue attempt. Captain's log, Stardate 45620.4. In the hope that a detailed map of the null space will prevent the loss of other ships, we remain in orbit of J'naii, charting the anomaly.",
        img: 'https://static.wikia.nocookie.net/memoryalpha/images/a/a9/Soren.jpg/revision/latest?cb=20190323015439&path-prefix=en',
        userId: 1,
        notebookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The time loop',
        content: "Captain's log, Stardate 45652.1. The Enterprise has entered an area of space known as the Typhon Expanse. We are the first Starfleet vessel to chart this unexplored region.",
        img: 'https://static.wikia.nocookie.net/memoryalpha/images/c/cc/USS_Enterprise-D_explodes%2C_2368-HD.jpg/revision/latest?cb=20140518163118&path-prefix=en',
        userId: 1,
        notebookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Kolvoord Starburst incident',
        content: "Captain's log, Stardate 45703.9. We are en route to Earth, where it will be my pleasant duty to deliver this year's commencement address at Starfleet Academy. I'm also looking forward to seeing Wesley Crusher again. His flight team will perform a demonstration near Saturn that will be transmitted to the graduation ceremonies.",
        img: 'https://static.wikia.nocookie.net/memoryalpha/images/f/fa/Wesleys_desktop_model.jpg/revision/latest?cb=20120204174728&path-prefix=en',
        userId: 1,
        notebookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Lwaxana Troi's wedding",
        content: "Captain's log, Stardate 45733.6. Temporary repairs to the ship have been completed. Our attention now turns to matters of a more festive nature.",
        img: 'https://static.wikia.nocookie.net/memoryalpha/images/c/c4/Parallax_colony_mud_bath.jpg/revision/latest?cb=20180109060443&path-prefix=en',
        userId: 1,
        notebookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Valtese-Kirosian peace treaty',
        content: "Captain's log, Stardate 45761.3. In an effort to bring an end to their centuries-long war, Krios and Valt Minor have agreed to a Ceremony of Reconciliation, to be held aboard the Enterprise at a point mid-way between their two systems. Captain's log, Stardate 45766.1. We have reached the designated coordinates for the conference and await the arrival of Chancellor Alrik. Captain's log, supplemental. The Ferengi have been dispatched via shuttle to Starbase 117. What charges will be brought against them depends on whether or not Ambassador Briam recovers.",
        img: 'https://static.wikia.nocookie.net/memoryalpha/images/0/04/Kamala_and_Picard.jpg/revision/latest?cb=20180319183054&path-prefix=en',
        userId: 1,
        notebookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The FGC 47 nebula',
        content: "Captain's log, Stardate 45852.1. The Enterprise has arrived at FGC 47 – a nebula which has formed around a neutron star. We are eager to investigate this unique formation.",
        img: 'https://static.wikia.nocookie.net/memoryalpha/images/8/8b/Isabella.jpg/revision/latest?cb=20190318113944&path-prefix=en',
        userId: 1,
        notebookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Hugh of Borg',
        content: "Captain's log, Stardate 45854.2. The Enterprise is charting six star systems that make up the Argolis Cluster, an area being considered for colonization.",
        img: 'https://static.wikia.nocookie.net/memoryalpha/images/e/ed/Hugh_body.jpg/revision/latest?cb=20200227180730&path-prefix=en',
        userId: 1,
        notebookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Kataan probe',
        content: "Captain's log, Stardate 45944.1. Following a magnetic wave survey of the Parvenium system, we have detected an object which we cannot immediately identify.",
        img: 'https://static.wikia.nocookie.net/memoryalpha/images/5/5c/Picard_playing_Ressikan_Flute.jpg/revision/latest?cb=20120208015651&path-prefix=en',
        userId: 1,
        notebookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Devidian incident',
        content: "Captain's Log, Stardate 45959.1. The Enterprise has been recalled to Sector 001 on a priority mission. All we have been told is that evidence has been discovered indicating the presence of extraterrestrials on Earth five centuries ago. Captain's log, Stardate 45960.2. We have transported the materials discovered in the cavern back to the ship for analysis. I wish I could be as dispassionate about the implications as my second officer. Captain's Log, supplemental. Close range sensor analysis has yielded no further trace of Commander Data. Despite the emotional repercussions of the crew, I must move this mission forward. Captain's Log, Stardate 45965.3. An away team has beamed to the surface with a device which may enable them to phase shift into the alien world.",
        img: 'https://static.wikia.nocookie.net/memoryalpha/images/9/91/Guinan_and_Data_%281893%29.jpg/revision/latest?cb=20180314041530&path-prefix=en',
        userId: 1,
        notebookId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Notes', null, {});
  }
};
