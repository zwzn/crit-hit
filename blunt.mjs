const effects = {
    'arm': [
        "Your weapon smashes into your opponent's fingers, numbing them. He suffers a penalty of -10% to his WS until the end of his next turn.",
        "Your weapon smashes into your opponent's hand, forcing him to make a Challenging (-10%) WP test to avoid dropping what he is holding in that hand.",
        "Your weapon smashes into your opponent's elbow, sending a shock of pain down his arm, forcing him to make a Hard (-20%) T test to avoid dropping what he is holding in that hand. In addition the arm will count as useless for two turns.",
        "Your weapon smashes into your opponent's biceps muscle,bruising it to the bone, forcing him to make a Very Hard (-30%) T test to avoid dropping what he is holding in that hand. In addition, his SB for that arm is halved (rounding down) for d10 turns.",
        "Your weapon smashes into your opponent's shoulder, bruising it badly. Anything held in that hand is dropped and your opponent is at half SB and a penalty of -20% to his WS for any attacks or parries made by that arm for the duration of the battle.",
        "Your blow smashes your opponent's hand, fracturing some of the bones between wrist and fingers. The hand is useless until the bones have healed in d10/2 weeks and he will then suffer a penalty of -10% to WS tests or tests requiring fine manipulation performed with that hand afterward due to improperly set bones unless a successful Heal test has been made to reset them the first week. Magical healing will automatically do this, as well as speeding up the healing process, ignoring the longer time required.",
        "Your weapon fractures your opponent's wrist, making the hand hang loosely at an odd angle. He will have to make a Hard (-20%) WP test or be stunned by the pain for d10/2 turns. Healing is as per #6 above, although also requiring a good splint or cast.",
        "Your weapon smashes into your opponent's forearm, fracturing the bones with a satisfying snap. He is stunned for d10 turns by the intense pain. The arm is useless until healed as per #7 above, except that the Heal test is Hard (-20%).",
        "Your blow smashes into your opponent's shoulder, fracturing the collarbone and dislocating the arm from its socket. Your opponent is stunned for d10 turns and must make a successful T test to remain standing, suffering a penalty of -20% to all tests due to the excruciating pain for the remainder of the battle. The arm is useless until popped back into place by a successful Heal test but your opponent will still suffer a penalty of -20% to any WS andS tests made using that arm until it has healed in d10/2 weeks.",
        "Your weapon crushes your opponent's elbow, smashing the joint and leaving the lower arm hanging from it with a disturbing amount of mobility. Your opponent is helpless with pain for d10 rounds. The arm will be useless until the bones have knitted in d10 weeks. Only magical healing will restore the full function of the arm, which will otherwise suffer a penalty of -10% to all WS, S and Ag tests in which it is used due to stiffness and damaged nerves, assuming it is cared for with a successful Hard (-20%) Heal test. If the damage is left untended by mundane or magical healing the badly healed joint raises the penalty to -20%.",
        "The bone of your opponent's upper arm breaks into several pieces with a loud crack that echoes across the battlefield. He is helpless with pain for d10 turns. Nerves and an artery are damaged by the sharp fragments, requiring magical healing to restore function or else the arm will have to be amputated or suffer gangrene within d10 days. This will be fatal within another d10 days unless successful magical healing is provided, still leaving the arm almost totally paralysed and useless.",
        "Your blow smashes into your opponent's shoulder, tearing and crushing the nerves that supply the arm. No amount of magical or mundane healing can restore function, leaving the arm hanging useless and paralysed from the shoulder by atrophying muscles and shredded tendons. Your opponent must make a Hard (-20%) T test or fall unconscious from the shock, being stunned for d10 turns and then suffering a penalty of -20% to all tests for the duration of the battle even if he makes the test.",
        "Your weapon practically tears your opponent's arm from its socket, leaving it dangling by torn muscle and tendons, bleeding heavily. Your opponent falls unconscious from shock and dies within 2d10 turns from loss of blood and massive traumatic shock unless magical healing is applied to at least partly mend the torn tissues, still leaving the arm useless and paralysed.",
        "Your weapon shatters your opponent's shoulder from the side, driving shards of bone into the ribcage, piercing the lung and nicking the heart. Your opponent coughs up bright arterial blood before he slumps to the ground and dies inevitably in d10/2 turns.",
        "Your weapon completely demolishes your opponent's shoulder before driving on and shattering the ribcage. Your opponent is hurled sideways and crumples to the ground, twitches once and never moves again.",
    ],
    'body': [
        "Your weapon punches your opponent in the belly, momentarily winding him. He loses a half- action while recovering.",
        "Your weapon contuses one of your opponent’s ribs. He suffers –10 % to his WS until the end of his next turn.",
        "You connect solidly and squarely with your opponent’s solar plexus, driving his breath from his body. He cannot attack next turn and suffers a penalty of –20 % to any parryuntil the end of that turn.",
        "Your blow glances against your opponent’s groin, forcing him to make an immediate Very Hard(-30 %) T test to avoid spending until the end of his next turn helpless, puking his guts out. If female or otherwise non - equipped in the scrotal department the test is only Challenging(-10 %) and failure causes only stunning.",
        "Your blow contuses several of the ribs underneath your opponent’s arm. His WS is reduced by –20 % for the next d10 / 2 turns.",
        "Your weapon crashes into your opponent’s side, damaging his spleen, causing slow internal bleeding as that organ’s tough membranous covering tries to contain the steady leakage of blood. Your opponent suffers no ill effects during the remainder of this battle apart from being stunned until the end of his next turn, but he will have to make a Hard(-20 %) T test after the battle or suffer a cumulative –5 % to his WS, BS, Ag and S each hour. If he receives magical healing before any of those characteristics reaches zero his life will be saved, otherwise he will fall unconscious and die within the next 2d10hours. A surgical operation to remove the damaged spleen is also possible, although it will require a successfulHeal test with the Surgery Talent. Failure will result in the death of the patient. If successful, he’ll still have to pass a Hard(-20 %) T test or contract a lethal infection, dying within d10 / 2 days unless a successful Shallyan Cure Disease spell is preformed. Without a spleen, his immune system will have been weakened, making him suffer a penalty of –10 % to resist infections in the future.",
        "Your blow breaks several ribs, stunning your opponent until the end of his next turn. He will also suffer a penalty of –20 % to all actions as he gasps for breath and guards his ribs, until his W characteristic has been healed up to Lightly Wounded.",
        "Your blow connects solidly with your opponent’s hip, fracturing one wing of the pelvis - bone. He falls immediately to the ground and counts as helpless from the pain until he can pass a Hard(-20 %) T test, getting one roll each turn. He will then suffer a penalty of –10 % on hisWS for the remainder of the battle and his M will be reduced by –2 and all Dodge Blow tests will count as Hard(-20 %) until his W characteristic has been fully restored.",
        "Your weapon crashes into your opponent’s sternum, temporarily causing paralysis of his breathing musculature and cardiac arrhythmia as his hearts starts beating irregularly. He is helpless until the end of his next turn and will then have to pass a T test or his heart will simply stop, killing him. If he passes the T test he will simply be stunned for d10 / 2 turns before recovering his breath and normal heartbeat.",
        "Your blow shatters ribs, pushing splinters into internal organs, causing internal bleeding and a 50 % chance of a collapsed lung. If that happens your opponent will suffer a penalty of –20 % to all tests before collapsing unconscious after d10 / 2 turns and dying after an additional d10 / 2 turns. Only magical healing can save his life. If his lungs survive intact he’ll still suffer a penalty of –20 % to all tests until his ribcage has healed in four weeks.",
        "Your blow shatters your opponent’s shoulder - blade, causing a penalty of –20 % to all tests until his W characteristic has been fully restored. In addition there is a50 % chance of the blow also having glanced into his spine, causing spinal injury and resulting in total paralysis from the waist down. If your opponent passes a Challenging(-10 %) T test the paralysis was caused only by swelling from a cracked vertebra and he will recover from his paralysis in d10 / 2 weeks.",
        "Your opponent is hit squarely between his shoulder - blades as he twists to avoid your blow, fracturing his spine. He falls immediately to the ground, paralysed from the waist down. He must make a Hard(-20 %) WP test each turn to stay conscious. After falling unconscious he must make a Challenging(-10 %) T test or die before regaining consciousness. If he survives he will remain paralysed, as not even magical healing can restore him, and will gain one extra IP and be plagued by constant nightmares, reliving the moment of his trauma.",
        "Your blow hits your opponent’s breastbone with a mighty crack, fracturing and compressing it against the heart. Unbeknownst to your opponent, the shearing force has partly torn the aorta away from the heart, causing the pericardial sack surrounding the heart to fill up with blood, preventing it from beating properly. He will suffer a cumulative penalty of –15 % to his WS, BS, Ag and S each turn as his heart can no longer beat within the rapidly filling pericardium. When any of those characteristics reaches zero he will collapse dead. No mundane or magical healing can save him.",
        "Your blow drives pieces of your opponent’s breastbone and ribs into his lungs and heart, causing frothy blood to erupt from his mouth as he staggers backward and collapses. Death is inevitable within one turn.",
        "Your blow smashes your weapon straight through the front of your opponent’s ribcage, caving it in and killing him instantly. On your next turn you must take a half - action and pass either an S or Ag test to withdraw your weapon from your fallen foe’s chest cavity.",
    ],
    'head': [
        "Your weapon glances off the side of your opponent’s head, making a ringing noise and reducing his next attack or parry by a penalty of –10 %.",
        "Your blow glances off your opponent’s cheekbone, making him lose one attack or free parry on his next turn and giving him a black eye.",
        "Your weapon glances off the bridge of your opponent’s nose, making him see bright flashes and his eyes water. All his WS tests during the next d10 / 2 turns will count as Challenging (-10 %).",
        "Your weapon smashes into the meat of your opponent’s neck, straining the large neck muscles. All his WS tests during the next d10 / 2 turns will count as Hard (-20 %).",
        "Your weapon lands a solid blow on the side of your opponent’s head, bursting his eardrum, making a small rivulet of blood run down his neck. He will be stunned until the end of his next turn and will suffer a penalty of –20 % to all hearing - based Perception tests until the eardrum has resealed itself in d10 / 2 weeks.",
        "Your blow connects to your opponent’s head with a sickening thud. Concussed, he falls to the ground, counting as helpless until he can make a Hard(-20 %) T test to regain full consciousness, starting to roll during his next turn, re - rolling each turn until he succeeds. For the rest of this battle he will suffer a –10 % penalty to his WS, BS and Ag due to dizziness and nausea. He must also make a Challenging(-10 %) test or suffer short - term amnesia, not remembering a thing about the battle or how he ended up in it.",
        "Your weapon fractures your opponent’s nose, stunning him until the end of his next turn as he sees bright flashes and spits blood. On his next turn after that he must pass a Challenging(-10 %) T test to recover, re - rolling each turn until he succeeds. There is a 50 % chance that the nose will be so smashed it reduces his Fel by d10 % unless magically healed or set with a successful Heal test by someone with the Surgery Talent.",
        "Your blow crashes into your opponent’s skull, stunning him until the end of his next turn. On his next turn after that he must pass a Hard(-20 %) T test to recover, re - rolling each turn until he succeeds. The blow has fractured his skull, causing a splinter of bone to press into his brain and starting a slow bleeding between the brain and the skull that will keep expanding, eventually killing him unless pressure is relieved. He’ll suffer a cumulative penalty of –5 % to his WS, BS, Ag, Int and Fel every two hours, falling into a coma when any of those characteristics reaches zero, dying within another d10 / 2 days. The only effective cure is a procedure called trepanation, which involves removing a piece of the skull by drilling or boring into it, thus relieving the pressure and allowing access to remove the splinter. This requires at least one hour and a Challenging(-10 %) Heal test with theSurgery Talent. If successful, a metal plate of some kind, usually a silver coin that has been hammered flat and polished, is used to cover the hole, nailed directly to the surrounding bone and then covered with a flap of the scalp. If already in a coma, your opponent will then wake up in another d10 / 2 days, otherwise regaining his lost characteristics at a rate of 5 % per day. Failure will still relieve the pressure but causes brain damage, reducing WS, BS, Ag, Int and Fel by –10 % permanently. Regardless of outcome, your opponent will have to pass a Challenging(-10 %) T test immediately after the surgery or contract a serious infection, killing him within d10 days unless a successful Shallyan Cure Disease spell is performed.",
        "Your weapon breaks your opponent’s jaw. He counts as stunned until the end of his next turn and then suffers a penalty of –20 % to his WS and BS for the remainder of the battle due to the pain. The jaw will have to be wired or otherwise tightly shut until knitted together in d10 / 2 weeks, forcing your opponent to eat through a straw until then. There is also 50 % risk that he’ll have lost several teeth, in which case his Fel will be reduced by - 5 % unless he already had missing or unsightly teeth(GM’s call).",
        "Your weapon crashes into your opponent’s larynx at the top of the windpipe, causing a spasmed airway. He gasps for breath, suffering a cumulative penalty of –10 % to his WS, BS, Ag and S each turn until he makes a Challenging(-10 %) T test to immediately regain the lost characteristics points, rolling at the start of each turn. If any of the characteristics reaches zero he falls unconscious from lack of air. If not making his roll within another TB turns he dies from lack of air.",
        "Your weapon crushed the bony orbit surrounding your opponent’s eyeball, causing a blow - out fracture, pushing bone splinters into the sinus and trapping some of the muscles controlling eye movement. He counts as stunned until the end of his next turn. On his next turn after that he must pass a Challenging(-10 %) T test to recover, re - rolling each turn until he succeeds. Unless magical healing is received within d10 days the eye will be effectively lost and he must reduce any BS or sight - based Perception test by half, including any bonus from Talents such as Excellent Vision or Sharpshooter.",
        "Your blow tears loose your opponent’s jaw. He must make an immediate Challenging(-10 %) T test or fall unconscious. If successful, he can only stumble around and try to hold his dangling jaw in place, counting as helpless for the duration of the battle. If he survives, either a Challenging(-10 %) Heal test with the Surgery Talent or magical healing is needed reattach the jaw. It must be done within d10 / 2 days, otherwise necessitating amputation of the whole lower jaw. Apart from looking absolutely hideous and being forced to feed only on liquids and losing all speech, your opponent must also reduce his Fel by –30 %.",
        "Your weapon smashes into the junction between head and neck, breaking your opponent’s spine. He falls unconscious and will die within d10 / 2 hours from loss of air due to damage to the breathing centre in the upper part of the spinal cord. Magical healing can save his life but will be Hard(-20 %) and will still leave him paralysed from the neck down and gains him d10 / 2 IP due to the horrible experience of being paralysed and helpless while slowly suffocating to death.",
        "Your weapon hits your opponent in the forehead and shatters his skull like an eggshell. He immediately falls to the ground and spends the remainder of his life(d10 rounds) twitching and jerking.",
        "Your weapon smashes into your opponent’s head and bursts it like a melon, spattering you with blood and grey matter. His death is immediate",
    ],
    'leg': [
        "Your weapon glances off your opponent's knee, sending him off balance. He’ll suffer a penalty of –10% to his WS until the end of his next turn. If he survives the battle his knee will always ache 24 hours before a storm.",
        "Your weapon glances off your opponent's hip, forcing him to pass a Challenging (-10%) Ag test to avoid falling unceremoniously on his rump.",
        "Your weapon strikes the side of your opponent's knee, twisting it inward. He'll suffer a penalty of - 20 % to his WS until the end of his next turn as he tries to avoid putting any weight on that leg.",
        "Your weapon glances off your opponent's shin, forcing him to pass a Hard (-20%) WP test or drop everything and count as helpless until the end of his next turn as he jumps around on one leg, grasping it with both hands. Passing the test will result in him suffering a penalty of -20% to his WS until the end of his next turn as he staggers and gasps from the pain.",
        "Your blow badly bruises your opponent's thigh, driving him to his knees, counting as having fallen to the ground. M is reduced by -1 and any Dodge Blow and WS tests willcount as Challenging (-10%) until the end of the battle.",
        "Your blow crashes into your opponent's hip, chipping one wing of the pelvis and felling him to the ground. Due to the pain he'll suffer a penalty of - 20 % to his WS and unable to rise for d10 / 2 turns.",
        "Your weapon smashes your opponent's great toe, squashing it almost flat. All WS and Dodge Blow tests will count as Hard (-20%) until the end of the battle. His M will be reduced by -1 and any Dodge Blow tests will continue to be counted as Challenging (-10%) until the toe has healed in two weeks.",
        "Your blow crushes your opponent's foot, fracturing several of the bones between ankle and toes. He falls to the ground and will be unable to put any weight on that foot and thus to rise for the duration of the battle. He'll be effectively one - legged until the bones have healed in four weeks. He must then make a Challenging(-10 %) T test or suffer a permanent - 1 reduction to his M due to the bones not setting properly. Magical healing performed before the bones have healed will negate the need for this test.",
        "Your blow shatters your opponent's ankle, felling him to the ground and making the foot stand out from the lower leg at a strange angle. He’ll be screaming and helpless for d10/2 turns unless he can pass a Hard (-20%) WP test, in which case he'll only count as stunned rather than helpless. He’ll be unable to put any weight on the foot until it has healed in four weeks. Unless the ankle is set correctly by a successful Heal test, it’ll heal crooked, causing a penalty of –1 to M and making all Dodge Blow tests count as Challenging (-10 %) ever after.",
        "Your blow smashes your opponent's shin, shattering the shinbone into several fragments and breaking the fibula, the outer of the two long bones in the lower leg, as well, fragments piercing through the skin. Your opponent falls to the ground, helpless and blind with pain for d10 turns, then suffering a penalty of –10% to all tests for the remainder of the battle. He'll be unable to rise afterwards and will have to pass a Hard(-20 %) T test or suffer infection in the open fracture within d10 days, causing death in another d10 days unless amputation is performed. A successful Shallyan Cure Disease spell will save his life but the leg will remain useless unless magically healed, which will require a Hard(-20 %) spell test due to the mess of bone shards, damaged nerves and blood vessels inside the leg.",
        "Your blow shatters your opponent's kneecap. He falls helpless to the ground, clutching his injury as his throaty screams echo across the battlefield for d10 turns and will then be unable to rise and suffers a penalty of -20% to all tests for the remainder of the battle. Unless magical healing is provided he'll be at - 2 to his M and counting all Dodge Blow tests as Hard (-20 %) for the rest of his life due to a bad limp and stiffness of the joint.",
        "Your blow connects solidly with the middle of your opponent's leg. With an audible popping sound, the knee bends the wrong way, large ligaments in the knee severed. Your opponent falls to the ground, helpless from pain for the rest of the battle, and must make a Hard (-20%) WP test each turn or fall unconscious. Only magical healing, which will count as Very Hard (-30%), will restore function of the knee. Otherwise he'll be at half M for the rest of his life due to a seriously unstable knee joint, counting all his Dodge Blow tests as Very Hard(-30 %).",
        "Your weapon smashes into your opponent's thigh, fracturing the thighbone and lacerating the femoral artery. Your opponent falls unconscious in an undignified heap onthe ground as his leg visibly swells up and goes purple before your eyes. Death will occur unless a tourniquet (requiring two full turns and a successful Heal test) or magical healing is provided within 2d10 turns and even that will not save the leg which will have to be amputated or the patient will die from massive gangrene in the bloodless leg, regardless of any magical healing.",
        "Your weapon smashes into your opponent's hip, breaking the thighbone near the joint. The sharp end of the bone lacerates the large artery and tears out from the skin as your opponent falls, a white spear of bone sticking out from his hip. He immediately falls unconscious and expires inevitably in a spreading pool of blood within d10/2 turns.",
        "Your weapon smashes your opponent's pelvis, causing major trauma to nerves and major arteries. He crumples to the ground in a moaning heap and dies inevitably from shock and bleeding within one turn.",
    ]
}

export default effects
