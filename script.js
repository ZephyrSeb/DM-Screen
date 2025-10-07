var overlayActive = false;

function CancelClick() {
    if (overlayActive) {
        overlayActive = false;
        document.getElementById("overlay").innerHTML = "";
    }
}

function OnClick(string) {
    if (!overlayActive) {
        if (string == "attack") document.getElementById("overlay").innerHTML = `<div class='red_table'><table><tr><td><h1>Attack</h1></td></tr><tr><td><div class='white_table'>
        <p>When you take the Attack action, you can make one attack roll with a weapon or an Unarmed Strike.</p>
        <p><b><i>Equipping and Unequipping Weapons.</i></b> You can either equip or unequip one weapon when you make an attack as part of this action. You do so either before or after the attack. If you equip a weapon before an attack, you don't need to use it for that attack. Equipping a weapon includes drawing it from a sheath or picking it up. Unequipping a weapon includes sheathing, stowing, or dropping it.</p>
        <p><b><i>Moving between Attacks.</i></b> If you move on your turn and have a feature, such as Extra Attack, that gives you more than one attack as part of the Attack action, you can use some or all of that movement to move between those attacks.</p>
        </div></td></tr></div>`;
        
        if (string == "dash") document.getElementById("overlay").innerHTML = `<div class='red_table'><table><tr><td><h1>Dash</h1></td></tr><tr><td><div class='white_table'>
        <p>When you take the Dash action, you gain extra movement for the current turn. The increase equals your Speed after applying any modifiers. With a Speed of 30 feet, for example, you can move up to 60 feet on your turn if you Dash. If your Speed of 30 feet is reduced to 15 feet, you can move up to 30 feet this turn if you Dash.</p>
        <p>If you have a special speed, such as a Fly Speed or Swim Speed, you can use that speed instead of your Speed when you take this action. You choose which speed to use each time you take it.</p>
        </div></td></tr></div>`;

        if (string == "disengage") document.getElementById("overlay").innerHTML = `<div class='red_table'><table><tr><td><h1>Disengage</h1></td></tr><tr><td><div class='white_table'>
        <p>If you take the Disengage action, your movement doesn't provoke Opportunity Attacks for the rest of the current turn.</p>
        </div></td></tr></div>`;

        if (string == "dodge") document.getElementById("overlay").innerHTML = `<div class='red_table'><table><tr><td><h1>Dodge</h1></td></tr><tr><td><div class='white_table'>
        <p>If you take the Dodge action, you gain the following benefits: until the start of your next turn, any attack roll made against you has Disadvantage if you can see the attacker, and you make Dexterity saving throws with Advantage.</p>
        <p>You lose these benefits if you have the Incapacitated condition or if your Speed is 0.</p>
        </div></td></tr></div>`;

        if (string == "help") document.getElementById("overlay").innerHTML = `<div class='red_table'><table><tr><td><h1>Help</h1></td></tr><tr><td><div class='white_table'>
        <p>When you take the Help action, you do one of the following.</p>
        <p><b><i>Assist an Ability Check.</i></b> Choose one of your skill or tool proficiencies and one ally who is near enough for you to assist verbally or physically when they make an ability check. That ally has Advantage on the next ability check they make with the chosen skill or tool. This benefit expires if the ally doesn't use it before the start of your next turn. The DM has final say on whether your assistance is possible.</p>
        <p><b><i>Assist an Attack Roll.</i></b> You momentarily distract an enemy within 5 feet of you, giving Advantage to the next attack roll by one of your allies against that enemy. This benefit expires at the start of your next turn.</p>
        </div></td></tr></div>`;

        if (string == "hide") document.getElementById("overlay").innerHTML = `<div class='red_table'><table><tr><td><h1>Hide</h1></td></tr><tr><td><div class='white_table'>
        <p>With the Hide action, you try to conceal yourself. To do so, you must succeed on a DC 15 Dexterity (Stealth) check while you're Heavily Obscured or behind Three-Quarters Cover or Total Cover, and you must be out of any enemy's line of sight; if you can see a creature, you can discern whether it can see you.</p>
        <p>On a successful check, you have the Invisible condition. Make note of your check's total, which is the DC for a creature to find you with a Wisdom (Perception) check.</p>
        <p>The condition ends on you immediately after any of the following occurs: you make a sound louder than a whisper, an enemy finds you, you make an attack roll, or you cast a spell with a Verbal component.</p>
        </div></td></tr></div>`;

        if (string == "influence") document.getElementById("overlay").innerHTML = `<div class='red_table'><table><tr><td><h1>Influence</h1></td></tr><tr><td><div class='white_table'>
        <p>With the Influence action, you urge a monster to do something. Describe or roleplay how you're communicating with the monster. Are you trying to deceive, intimidate, amuse, or gently persuade? The DM then determines whether the monster feels willing, unwilling, or hesitant due to your interaction; this determination establishes whether an ability check is necessary, as explained below.</p>
        <p><b><i>Willing.</i></b> If your urging aligns with the monster's desires, no ability check is necessary; the monster fulfills your request in a way it prefers.</p>
        <p><b><i>Unwilling.</i></b> If your urging is repugnant to the monster or counter to its alignment, no ability check is necessary; it doesn't comply.</p>
        <p><b><i>Hesitant.</i></b> If you urge the monster to do something that it is hesitant to do, you must make an ability check, which is affected by the monster's attitude: Indifferent, Friendly, or Hostile, each of which is defined in this glossary. The Influence Checks table suggests which ability check to make based on how you're interacting with the monster. The DM chooses the check, which has a default DC equal to 15 or the monster's Intelligence score, whichever is higher. On a successful check, the monster does as urged. On a failed check, you must wait 24 hours (or a duration set by the DM) before urging it in the same way again.</p>
        <p><b>Influence Checks</b></p>
        <table class="striped"><tr><td><b>Ability Check</b></td><td><b>Interaction</b></td></tr>
        <tr><td>Charisma (Deception)</td><td>Deceiving a monster that understands you</td></tr>
        <tr><td>Charisma (Intimidation)</td><td>Intimidating a monster</td></tr>
        <tr><td>Charisma (Performance)</td><td>Amusing a monster</td></tr>
        <tr><td>Charisma (Persuasion)</td><td>Persuading a monster that understands you</td></tr>
        <tr><td>Wisdom (Animal Handling)</td><td>Gentry coaxing a Beast of Monstrosity</td></tr></table>
        </div></td></tr></div>`;

        if (string == "magic") document.getElementById("overlay").innerHTML = `<div class='red_table'><table><tr><td><h1>Magic</h1></td></tr><tr><td><div class='white_table'>
        <p>When you take the Magic action, you cast a spell that has a casting time of an action or use a feature or magic item that requires a Magic action to be activated.</p>
        <p>If you cast a spell that has a casting time of 1 minute or longer, you must take the Magic action on each turn of that casting, and you must maintain Concentration while you do so. If your Concentration is broken, the spell fails, but you don't expend a spell slot.</p>
        </div></td></tr></div>`;

        if (string == "ready") document.getElementById("overlay").innerHTML = `<div class='red_table'><table><tr><td><h1>Ready</h1></td></tr><tr><td><div class='white_table'>
        <p>You take the Ready action to wait for a particular circumstance before you act. To do so, you take this action on your turn, which lets you act by taking a Reaction before the start of your next turn.</p>
        <p>First, you decide what perceivable circumstance will trigger your Reaction. Then, you choose the action you will take in response to that trigger, or you choose to move up to your Speed in response to it. Examples include "If the cultist steps on the trapdoor, I'll pull the lever that opens it," and "If the zombie steps next to me, I move away."</p>
        <p>When the trigger occurs, you can either take your Reaction right after the trigger finishes or ignore the trigger.</p>
        <p>When you Ready a spell, you cast it as normal (expending any resources used to cast it) but hold its energy, which you release with your Reaction when the trigger occurs. To be readied, a spell must have a casting time of an action, and holding on to the spell's magic requires Concentration, which you can maintain up to the start of your next turn. If your Concentration is broken, the spell dissipates without taking effect.</p>
        </div></td></tr></div>`;

        if (string == "search") document.getElementById("overlay").innerHTML = `<div class='red_table'><table><tr><td><h1>Search</h1></td></tr><tr><td><div class='white_table'>
        <p>When you take the Search action, you make a Wisdom check to discern something that isn't obvious. The Search table suggests which skills are applicable when you take this action, depending on what you're trying to detect.</p>
        <table class="striped"><tr><td><b>Skill</b></td><td><b>Thing to Detect</b></td></tr>
        <tr><td>Insight</td><td>Crature's state of mind</td></tr>
        <tr><td>Medicine</td><td>Creature's ailment or cause of death</td></tr>
        <tr><td>Perception</td><td>Concealed creature or object</td></tr>
        <tr><td>Survival</td><td>Tracks or food</td></tr></table>
        </div></td></tr></div>`;

        if (string == "study") document.getElementById("overlay").innerHTML = `<div class='red_table'><table><tr><td><h1>Study</h1></td></tr><tr><td><div class='white_table'>
        <p>When you take the Study action, you make an Intelligence check to study your memory, a book, a clue, or another source of knowledge and call to mind an important piece of information about it.</p>
        <p>The Areas of Knowledge table suggests which skills are applicable to various areas of knowledge.</p>
        <p><b>Areas of Knowledge</b></p>
        <table class="striped"><tr><td><b>Skill</b></td><td><b>Areas</b></td></tr>
        <tr><td>Arcana</td><td>Spells, magic items, eldritch symbols, magical traditions, planes of existence, and certain creatures (Aberrations, Constructs, Elementals, Fey, and Monstrosities)</td></tr>
        <tr><td>History</td><td>Historic events and people, ancient civilizations, wars, and certain creatures (Giants and Humanoids)</td></tr>
        <tr><td>Investigation</td><td>Traps, ciphers, riddles, and gadgetry</td></tr>
        <tr><td>Nature</td><td>Terrain, flora, weather, and certain creatures (Beasts, Dragons, Oozes, and Plants)</td></tr>
        <tr><td>Religion</td><td>Deities, religious hierarchies and rites, holy symbols, cults, and certain creatures (Celestials, Fiends, and Undead)</td></tr></table>
        </div></td></tr></div>`;

        if (string == "utilize") document.getElementById("overlay").innerHTML = `<div class='red_table'><table><tr><td><h1>Utilize</h1></td></tr><tr><td><div class='white_table'>
        <p>You normally interact with an object while doing something else, such as when you draw a sword as part of the Attack action. When an object requires an action for its use, you take the Utilize action.</p>
        </div></td></tr></div>`;

        if (string == "unarmed-strike") document.getElementById("overlay").innerHTML = `<div class='red_table'><table><tr><td><h1>Utilize</h1></td></tr><tr><td><div class='white_table'>
        <p>Instead of using a weapon to make a melee attack, you can use a punch, kick, head-butt, or similar forceful blow. In game terms, this is an Unarmed Strike—a melee attack that involves you using your body to damage, grapple, or shove a target within 5 feet of you.</p>
        <p>Whenever you use your Unarmed Strike, choose one of the following options for its effect.</p>
        <p><b><i>Damage.</i></b> You make an attack roll against the target. Your bonus to the roll equals your Strength modifier plus your Proficiency Bonus. On a hit, the target takes Bludgeoning damage equal to 1 plus your Strength modifier.</p>
        <p><b><i>Grapple.</i></b> The target must succeed on a Strength or Dexterity saving throw (it chooses which), or it has the Grappled condition. The DC for the saving throw and any escape attempts equals 8 plus your Strength modifier and Proficiency Bonus. This grapple is possible only if the target is no more than one size larger than you and if you have a hand free to grab it.</p>
        <p><b><i>Shove.</i></b> The target must succeed on a Strength or Dexterity saving throw (it chooses which), or you either push it 5 feet away or cause it to have the Prone condition. The DC for the saving throw equals 8 plus your Strength modifier and Proficiency Bonus. This shove is possible only if the target is no more than one size larger than you.</p>
        </div></td></tr></div>`;
        
        if (string == "improvised-weapon") document.getElementById("overlay").innerHTML = `<div class='red_table'><table><tr><td><h1>Utilize</h1></td></tr><tr><td><div class='white_table'>
        <p>An improvised weapon is an object wielded as a makeshift weapon, such as broken glass, a table leg, or a frying pan. A Simple or Martial weapon also counts as an improvised weapon if it's wielded in a way contrary to its design; if you use a Ranged weapon to make a melee attack or throw a Melee weapon that lacks the Thrown property, the weapon counts as an improvised weapon. An improvised weapon follows the rules below.</p>
        <p><b><i>Proficiency.</i></b> Don't add your Proficiency Bonus to attack rolls with an improvised weapon.</p>
        <p><b><i>Damage.</i></b> On a hit, the weapon deals ld4 damage of a type the DM thinks is appropriate for the object.</p>
        <p><b><i>Range.</i></b> If you throw the weapon, it has a normal range of 20 feet and a long range of 60 feet.</p>
        <p><b><i>Weapon Equivalents.</i></b> If an improvised weapon resembles a Simple or Martial weapon, the DM may say it functions as that weapon and uses that weapon's rules. For example, the DM could treat a table leg as a Club.</p>
        </div></td></tr></div>`;

        if (string == "blinded") document.getElementById("overlay").innerHTML = `<div class='black_table'><table><tr><td><h1>Blinded</h1></td></tr><tr><td><div class='white_table'>
        <p><i>You can't see</i></p>
        <br>
        <p>While you have the Blinded condition, you experience the following effects.</p>
        <hr>
        <p><b><i>Can't See.</i></b> You can't see and automatically fail any ability check that requires sight.</p>
        <p><b><i>Attacks Affected.</i></b> Attack rolls against you have Advantage, and your attack rolls have Disadvantage.</p>
        <hr>
        <p><i>Can be cured by Lesser Restoration</i></p>
        </div></td></tr></div>`;

        if (string == "burned") document.getElementById("overlay").innerHTML = `<div class='black_table'><table><tr><td><h1>Burned</h1></td></tr><tr><td><div class='white_table'>
        <p><i>You have suffered burns</i></p>
        <br>
        <p>While you have the Burned condition, you experience the following effects.</p>
        <hr>
        <p><b><i>Take Increased Damage.</i></b> Whenever you take damage, you take an additional 1d4 damage.</p>
        <p><b><i>Concentration Affected.</i></b> You have disadvantage on saving throws made to maintain concentration.</p>
        <hr>
        <p><i>Can be cured by Elemental Restoration</i></p>
        </div></td></tr></div>`;

        if (string == "charmed") document.getElementById("overlay").innerHTML = `<div class='black_table'><table><tr><td><h1>Charmed</h1></td></tr><tr><td><div class='white_table'>
        <p><i>You've been charmed by a creature</i></p>
        <br>
        <p>While you have the Deafened condition, you experience the following effects.</p>
        <hr>
        <p><b><i>Can't Harm the Charmer.</i></b> You can't attack the charmer or target the charmer with damaging abilities or magical effects.</p>
        <p><b><i>Social Advantage.</i></b> The charmer has Advantage on any ability check to interact with you socially.</p>
        <hr>
        <p><i>Can be cured by Greater Restoration</i></p>
        </div></td></tr></div>`;

        if (string == "deafened") document.getElementById("overlay").innerHTML = `<div class='black_table'><table><tr><td><h1>Deafened</h1></td></tr><tr><td><div class='white_table'>
        <p><i>You can't hear</i></p>
        <br>
        <p>While you have the Deafened condition, you experience the following effect.</p>
        <hr>
        <p><b><i>Can't Hear.</i></b> You can't hear and automatically fail any ability check that requires hearing.</p>
        <hr>
        <p><i>Can be cured by Lesser Restoration</i></p>
        </div></td></tr></div>`;

        if (string == "dizzy") document.getElementById("overlay").innerHTML = `<div class='black_table'><table><tr><td><h1>Dizzy</h1></td></tr><tr><td><div class='white_table'>
        <p><i>You are dizzy or lightheaded</i></p>
        <br>
        <p>While you have the Dizzy condition, you experience the following effects.</p>
        <hr>
        <p><b><i>Head Spinning.</i></b> You have disadvantage on attack rolls and saving throws using your Strength or Dexterity.</p>
        <p><b><i>Staggered.</i></b> Your movement speed is halved.</p>
        <hr>
        <p><i>Can be cured by Lesser Restoration</i></p>
        </div></td></tr></div>`;

        if (string == "enlightened") document.getElementById("overlay").innerHTML = `<div class='black_table'><table><tr><td><h1>Enlightened</h1></td></tr><tr><td><div class='white_table'>
        <p><i>You have had a stroke of luck</i></p>
        <br>
        <p>While you have the Enlightened condition, you experience the following effects.</p>
        <hr>
        <p><b><i>Inspired.</i></b> You have advantage on ability checks.</p>
        <p><b><i>Lucky.</i></b> Whenever you roll a 1 on an attack roll, ability check, or saving throw, you may treat it as if you rolled a 10.</p>
        </div></td></tr></div>`;

        if (string == "exhaustion") document.getElementById("overlay").innerHTML = `<div class='black_table'><table><tr><td><h1>Exhaustion</h1></td></tr><tr><td><div class='white_table'>
        <p><i>You've overexerted yourself</i></p>
        <br>
        <p>While you have the Exhaustion condition, you experience the following effects.</p>
        <hr>
        <p><b><i>Exhaustion Levels.</i></b> This condition is cumulative. Each time you receive it, you gain 1 Exhaustion level. You die if your Exhaustion level is 6.</p>
        <p><b><i>D20 Tests Affected.</i></b> When you make a D20 Test, the roll is reduced by 2 times your Exhaustion level.</p>
        <p><b><i>Speed Reduced.</i></b> Your Speed is reduced by a number of feet equal to 5 times your Exhaustion level.</p>
        <p><b><i>Removing Exhaustion Levels.</i></b> Finishing a Long Rest removes 1 of your Exhaustion levels. When your Exhaustion level reaches 0, the condition ends.</p>
        <hr>
        <p><i>Can be cured by Greater Restoration</i></p>
        </div></td></tr></div>`;

        if (string == "forget") document.getElementById("overlay").innerHTML = `<div class='black_table'><table><tr><td><h1>Forget</h1></td></tr><tr><td><div class='white_table'>
        <p><i>You are suffering memory loss or fatigue</i></p>
        <br>
        <p>While you have the Forget condition, you experience the following effects.</p>
        <hr>
        <p><b><i>Ability Checks and Attack Rolls Affected.</i></b> You have disadvantage on attack rolls and ability checks.</p>
        <p><b><i>Magic Action Disabled.</i></b> You can't take Magic actions.</p>
        <hr>
        <p><i>Can be cured by Lesser Restoration</i></p>
        </div></td></tr></div>`;

        if (string == "frightened") document.getElementById("overlay").innerHTML = `<div class='black_table'><table><tr><td><h1>Frightened</h1></td></tr><tr><td><div class='white_table'>
        <p><i>You're scared of a creature</i></p>
        <br>
        <p>While you have the Frightened condition, you experience the following effects.</p>
        <hr>
        <p><b><i>Ability Checks and Attacks Affected.</i></b> You have Disadvantage on ability checks and attack rolls while the source of fear is within line of sight.</p>
        <p><b><i>Can't Approach.</i></b> You can't willingly move closer to the source of fear.</p>
        </div></td></tr></div>`;

        if (string == "frozen") document.getElementById("overlay").innerHTML = `<div class='black_table'><table><tr><td><h1>Freezing</h1></td></tr><tr><td><div class='white_table'>
        <p><i>You are freezing cold</i></p>
        <br>
        <p>While you have the Freezing condition, you experience the following effects.</p>
        <hr>
        <p><b><i>Actions Affected.</i></b> During your turn, you can only take an action or a bonus action, but not both.</p>
        <p><b><i>Number of Attacks Affected.</i></b> If you take the Attack or Spellsling actions, you can only make half as many attacks as normal, rounded down (minimum of one).</p>
        <p><b><i>Saving Throws Affected.</i></b> You have disadvantage on Constitution saving throws.</p>
        <p><b><i>Speed Reduced.</i></b> Your Speed is halved.</p>
        <p><b><i>Warming Fire.</i></b> The condition ends if you take fire damage.</p>
        <hr>
        <p><i>Can be cured by Elemental Restoration</i></p>
        </div></td></tr></div>`;

        if (string == "grappled") document.getElementById("overlay").innerHTML = `<div class='black_table'><table><tr><td><h1>Grappled</h1></td></tr><tr><td><div class='white_table'>
        <p><i>You've been grabbed by a creature</i></p>
        <br>
        <p>While you have the Grappled condition, you experience the following effects.</p>
        <hr>
        <p><b><i>Speed 0.</i></b> Your Speed is 0 and can't increase.</p>
        <p><b><i>Attacks Affected.</i></b> You have Disadvantage on attack rolls against any target other than the grappler.</p>
        <p><b><i>Movable.</i></b> The grappler can drag or carry you when it moves, but every foot of movement costs it 1 extra foot unless you are Tiny or two or more sizes smaller than it.</p>
        </div></td></tr></div>`;

        if (string == "haunted") document.getElementById("overlay").innerHTML = `<div class='black_table'><table><tr><td><h1>Haunted</h1></td></tr><tr><td><div class='white_table'>
        <p><i>You are being haunted or followed</i></p>
        <br>
        <p>While you have the Haunted condition, you experience the following effects as long as the source of your haunting is within 120 feet of you.</p>
        <hr>
        <p><b><i></i></b> You have disadvantage on attack rolls and ability checks.</p>
        <p><b><i></i></b> You gain no benefits from taking a long rest.</p>
        <hr>
        <p><i>Can be cured by Greater Restoration</i></p>
        </div></td></tr></div>`;

        if (string == "incapacitated") document.getElementById("overlay").innerHTML = `<div class='black_table'><table><tr><td><h1>Incapacitated</h1></td></tr><tr><td><div class='white_table'>
        <p><i>You can't take actions or reactions</i></p>
        <br>
        <p>While you have the Incapacitated condition, you experience the following effects.</p>
        <hr>
        <p><b><i>Inactive.</i></b> You can't take any action, Bonus Action, or Reaction.</p>
        <p><b><i>No Concentration.</i></b> Your Concentration is broken.</p>
        <p><b><i>Speechless.</i></b> You can't speak.</p>
        <p><b><i>Surprised.</i></b> If you're Incapacitated when you roll Initiative, you have Disadvantage on the roll.</p>
        </div></td></tr></div>`;

        if (string == "infested") document.getElementById("overlay").innerHTML = `<div class='black_table'><table><tr><td><h1>Infested</h1></td></tr><tr><td><div class='white_table'>
        <p><i>Insects or parasites have swarmed over you</i></p>
        <br>
        <p>While you have the Infested condition, you experience the following effects.</p>
        <hr>
        <p><b><i>Attack Rolls Affected.</i></b> You have disadvantage on attack rolls.</p>
        <p><b><i>Can't Concentrate.</i></b> You can't concentrate.</p>
        <hr>
        <p><i>Can be cured by Lesser Restoration</i></p>
        </div></td></tr></div>`;

        if (string == "invisible") document.getElementById("overlay").innerHTML = `<div class='black_table'><table><tr><td><h1>Invisible</h1></td></tr><tr><td><div class='white_table'>
        <p><i>You can't be seen</i></p>
        <br>
        <p>While you have the Invisible condition, you experience the following effects.</p>
        <hr>
        <p><b><i>Surprise.</i></b> If you're Invisible when you roll Initiative, you have Advantage on the roll.</p>
        <p><b><i>Concealed.</i></b> You aren't affected by any effect that requires its target to be seen unless the effect's creator can somehow see you. Any equipment you are wearing or carrying is also concealed.</p>
        <p><b><i>Attacks Affected.</i></b> Attack rolls against you have Disadvantage, and your attack rolls have Advantage. If a creature can somehow see you, you don't gain this benefit against that creature.</p>
        </div></td></tr></div>`;

        if (string == "paralyzed") document.getElementById("overlay").innerHTML = `<div class='black_table'><table><tr><td><h1>Paralyzed</h1></td></tr><tr><td><div class='white_table'>
        <p><i>You can't move</i></p>
        <br>
        <p>While you have the Paralyzed condition, you experience the following effects.</p>
        <hr>
        <p><b><i>Incapacitated.</i></b> You have the Incapacitated condition.</p>
        <p><b><i>Speed 0.</i></b> Your Speed is 0 and can't increase.</p>
        <p><b><i>Saving Throws Affected.</i></b> You automatically fail Strength and Dexterity saving throws.</p>
        <p><b><i>Attacks Affected.</i></b> Attack rolls against you have Advantage.</p>
        <p><b><i>Automatic Critical Hits.</i></b> Any attack roll that hits you is a Critical Hit if the attacker is within 5 feet of you.</p>
        <hr>
        <p><i>Can be cured by Lesser Restoration</i></p>
        </div></td></tr></div>`;

        if (string == "petrified") document.getElementById("overlay").innerHTML = `<div class='black_table'><table><tr><td><h1>Petrified</h1></td></tr><tr><td><div class='white_table'>
        <p><i>You've been turned to stone</i></p>
        <br>
        <p>While you have the Petrified condition, you experience the following effects.</p>
        <hr>
        <p><b><i>Turned to Inanimate Substance.</i></b> You are transformed, along with any nonmagical objects you are wearing and carrying, into a solid inanimate substance (usually stone). Your weight increases by a factor of ten, and you cease aging.</p>
        <p><b><i>Incapacitated.</i></b> You have the Incapacitated condition.</p>
        <p><b><i>Speed 0.</i></b> Your Speed is 0 and can't increase.</p>
        <p><b><i>Attacks Affected.</i></b> Attack rolls against you have Advantage.</p>
        <p><b><i>Saving Throws Affected.</i></b> You automatically fail Strength and Dexterity saving throws.</p>
        <p><b><i>Resist Damage.</i></b> You have Resistance to all damage.</p>
        <p><b><i>Poison Immunity.</i></b> You have Immunity to the Poisoned condition.</p>
        <hr>
        <p><i>Can be cured by Greater Restoration</i></p>
        </div></td></tr></div>`;

        if (string == "poisoned") document.getElementById("overlay").innerHTML = `<div class='black_table'><table><tr><td><h1>Poisoned</h1></td></tr><tr><td><div class='white_table'>
        <p><i>You have been afflicted with poison</i></p>
        <br>
        <p>While you have the Poisoned condition, you experience the following effect.</p>
        <hr>
        <p><b><i>Ability Checks and Attacks Affected.</i></b> You have Disadvantage on attack rolls and ability checks.</p>
        <hr>
        <p><i>Can be cured by Lesser Restoration</i></p>
        </div></td></tr></div>`;

        if (string == "prone") document.getElementById("overlay").innerHTML = `<div class='black_table'><table><tr><td><h1>Prone</h1></td></tr><tr><td><div class='white_table'>
        <p><i>You have been knocked over</i></p>
        <br>
        <p>While you have the Prone condition, you experience the following effects.</p>
        <hr>
        <p><b><i>Restricted Movement.</i></b> Your only movement options are to crawl or to spend an amount of movement equal to half your Speed (round down) to right yourself and thereby end the condition. If your Speed is 0, you can't right yourself.</p>
        <p><b><i>Attacks Affected.</i></b> You have Disadvantage on attack rolls. An attack roll against you has Advantage if the attacker is within 5 feet of you. Otherwise, that attack roll has Disadvantage.</p>
        </div></td></tr></div>`;

        if (string == "restrained") document.getElementById("overlay").innerHTML = `<div class='black_table'><table><tr><td><h1>Restrained</h1></td></tr><tr><td><div class='white_table'>
        <p><i>You are restrained</i></p>
        <br>
        <p>While you have the Restrained condition, you experience the following effects.</p>
        <hr>
        <p><b><i>Speed 0.</i></b> Your Speed is 0 and can't increase.</p>
        <p><b><i>Attacks Affected.</i></b> Attack rolls against you have Advantage, and your attack rolls have Disadvantage.</p>
        <p>Saving Throws Affected. You have Disadvantage on Dexterity saving throws.</p>
        </div></td></tr></div>`;

        if (string == "shocked") document.getElementById("overlay").innerHTML = `<div class='black_table'><table><tr><td><h1>Shocked</h1></td></tr><tr><td><div class='white_table'>
        <p><i>You are stunned by electricity, temporarily disarming you</i></p>
        <br>
        <p>While you have the Shocked condition, you experience the following effects.</p>
        <hr>
        <p><b><i>Weapons Affected.</i></b> When you make an attack with a weapon, roll a d6. On a 2 or less, the attack automatically misses.</p>
        <p><b><i>Magic Affected.</i></b> You can't take the Magic action to use a magic item or cast a spell with a material component.</p>
        <p><b><i>Items Disabled.</i></b> You can't take the Utilize action.</p>
        <p><b><i>Opportunity Attacks Affected.</i></b> You can't make opportunity attacks.</p>
        <hr>
        <p><i>Can be cured by Elemental Restoration</i></p>
        </div></td></tr></div>`;

        if (string == "stunned") document.getElementById("overlay").innerHTML = `<div class='black_table'><table><tr><td><h1>Stunned</h1></td></tr><tr><td><div class='white_table'>
        <p><i>You can't take actions</i></p>
        <br>
        <p>While you have the Stunned condition, you experience the following effects.</p>
        <hr>
        <p><b><i>Incapacitated.</i></b> You have the Incapacitated condition.</p>
        <p><b><i>Saving Throws Affected.</i></b> You automatically fail Strength and Dexterity saving throws.</p>
        <p><b><i>Attacks Affected.</i></b> Attack rolls against you have Advantage.</p>
        </div></td></tr></div>`;

        if (string == "badly-poisoned") document.getElementById("overlay").innerHTML = `<div class='black_table'><table><tr><td><h1>Badly Poisoned</h1></td></tr><tr><td><div class='white_table'>
        <p><i>You are badly poisoned</i></p>
        <br>
        <p>While you have the Badly Poisoned condition, you experience the following effects.</p>
        <hr>
        <p><b><i>Poisoned.</i></b> You have the Poisoned condition.</p>
        <p><b><i>Ability Checks and Attack Rolls Affected.</i></b> You can't have advantage on attack rolls or ability checks.</p>
        <hr>
        <p><i>Can be cured by Lesser Restoration</i></p>
        </div></td></tr></div>`;

        if (string == "unconscious") document.getElementById("overlay").innerHTML = `<div class='black_table'><table><tr><td><h1>Unconscious</h1></td></tr><tr><td><div class='white_table'>
        <p><i>You have been knocked out</i></p>
        <br>
        <p>While you have the Unconscious condition, you experience the following effects.</p>
        <hr>
        <p><b><i>Inert.</i></b> You have the Incapacitated and Prone conditions, and you drop whatever you're holding. When this condition ends, you remain Prone.</p>
        <p><b><i>Speed 0.</i></b> Your Speed is 0 and can't increase.</p>
        <p><b><i>Attacks Affected.</i></b> Attack rolls against you have Advantage.</p>
        <p><b><i>Saving Throws Affected.</i></b> You automatically fail Strength and Dexterity saving throws.</p>
        <p><b><i>Automatic Critical Hits.</i></b> Any attack roll that hits you is a Critical Hit if the attacker is within 5 feet of you.</p>
        <p><b><i>Unaware.</i></b> You're unaware of your surroundings.</p>
        </div></td></tr></div>`;

        if (string == "wounded") document.getElementById("overlay").innerHTML = `<div class='black_table'><table><tr><td><h1>Wounded</h1></td></tr><tr><td><div class='white_table'>
        <p><i>You are bleeding uncontrollably</i></p>
        <br>
        <p>While you have the Wounded condition, you experience the following effects.</p>
        <hr>
        <p><b><i>Can't Regain Hit Points.</i></b> You cannot regain hit points.</p>
        <p><b><i>Automatic Critical Hits.</i></b> Any attack that hits you is a critical hit if the attacker is within 5 feet of you.</p>
        <hr>
        <p><i>Can be cured by Lesser Restoration</i></p>
        </div></td></tr></div>`;

        if (string == "burning") document.getElementById("overlay").innerHTML = `<div class='blue_table'><table><tr><td><h1>Burning</h1></td></tr><tr><td><div class='white_table'>
        <p><i>You are on fire</i></p>
        <br>
        <p>A burning creature or object takes 1d4 Fire damage at the start of each of its turns. As an action, you can extinguish fire on yourself by giving yourself the Prone condition and rolling on the ground. The fire also goes out if it is doused, submerged, or suffocated.</p>
        </div></td></tr></div>`;

        if (string == "dehydration") document.getElementById("overlay").innerHTML = `<div class='blue_table'><table><tr><td><h1>Dehydration</h1></td></tr><tr><td><div class='white_table'>
        <p><i>You are starved of water</i></p>
        <br>
        <p>A creature requires an amount of water per day based on its size, as shown in the Water Needs per Day table. A creature that drinks less than half the required water for a day gains 1 Exhaustion level at the day's end. Exhaustion caused by dehydration can't be removed until the creature drinks the full amount of water required for a day.</p>
        <table class="striped"><tr><td><b>Size</b></td><td><b>Water</b></td></tr>
        <tr><td>Tiny</td><td>1/4 gallon</td></tr>
        <tr><td>Small</td><td>1 gallon</td></tr>
        <tr><td>Medium</td><td>1 gallon</td></tr>
        <tr><td>Large</td><td>4 gallons</td></tr>
        <tr><td>Huge</td><td>16 gallons</td></tr>
        <tr><td>Gargantuan</td><td>64 gallons</td></tr></table>
        </div></td></tr></div>`;

        if (string == "falling") document.getElementById("overlay").innerHTML = `<div class='blue_table'><table><tr><td><h1>Falling</h1></td></tr><tr><td><div class='white_table'>
        <p><i>You are falling</i></p>
        <br>
        <p>A creature that falls takes 1d6 Bludgeoning damage at the end of the fall for every 10 feet it fell, to a maximum of 20d6. When the creature lands, it has the Prone condition unless it avoids taking any damage from the fall.</p>
        <p>A creature that falls into water or another liquid can use its Reaction to make a DC 15 Strength (Athletics) or Dexterity (Acrobatics) check to hit the surface head or feet first. On a successful check, any damage resulting from the fall is halved.</p>
        </div></td></tr></div>`;

        if (string == "malnutrition") document.getElementById("overlay").innerHTML = `<div class='blue_table'><table><tr><td><h1>Malnutrition</h1></td></tr><tr><td><div class='white_table'>
        <p><i>You are starved of food</i></p>
        <br>
        <p>A creature needs an amount of food per day based on its size, as shown in the Food Needs per Day table. A creature that eats but consumes less than half the required food for a day must succeed on a DC 10 Constitution saving throw or gain 1 Exhaustion level at the day's end. A creature that eats nothing for 5 days automatically gains 1 Exhaustion level at the end of the fifth day as well as an additional level at the end of each subsequent day without food.</p>
        <p>Exhaustion caused by malnutrition can't be removed until the creature eats the full amount of food required for a day.</p>
        <table class="striped"><tr><td><b>Size</b></td><td><b>Food</b></td></tr>
        <tr><td>Tiny</td><td>1/4 pound</td></tr>
        <tr><td>Small</td><td>1 pound</td></tr>
        <tr><td>Medium</td><td>1 pound</td></tr>
        <tr><td>Large</td><td>4 pounds</td></tr>
        <tr><td>Huge</td><td>16 pounds</td></tr>
        <tr><td>Gargantuan</td><td>64 pounds</td></tr></table>
        </div></td></tr></div>`;

        if (string == "suffocation") document.getElementById("overlay").innerHTML = `<div class='blue_table'><table><tr><td><h1>Suffocation</h1></td></tr><tr><td><div class='white_table'>
        <p><i>You are unable to breath</i></p>
        <br>
        <p>A creature can hold its breath for a number of minutes equal to 1 plus its Constitution modifier (minimum of 30 seconds) before suffocation begins. When a creature runs out of breath or is choking, it gains 1 Exhaustion level at the end of each of its turns. When a creature can breathe again, it removes all levels of Exhaustion it gained from suffocating.</p>
        </div></td></tr></div>`;

        if (string == "half-cover") document.getElementById("overlay").innerHTML = `<div class='green_table'><table><tr><td><h1>Half Cover</h1></td></tr><tr><td><div class='white_table'>
        <p>A creature behind half cover gets +2 to AC and Dexterity to saving throws.</p>
        </div></td></tr></div>`;

        if (string == "three-quarters-cover") document.getElementById("overlay").innerHTML = `<div class='green_table'><table><tr><td><h1>Three-Quarters Cover</h1></td></tr><tr><td><div class='white_table'>
        <p>A creature behind three-quarters cover gets +5 to AC and Dexterity to saving throws.</p>
        </div></td></tr></div>`;

        if (string == "total-cover") document.getElementById("overlay").innerHTML = `<div class='green_table'><table><tr><td><h1>Total Cover</h1></td></tr><tr><td><div class='white_table'>
        <p>A creature behind total cover can't be targeted directly.</p>
        </div></td></tr></div>`;

        if (string == "bright-light") document.getElementById("overlay").innerHTML = `<div class='green_table'><table><tr><td><h1>Bright Light</h1></td></tr><tr><td><div class='white_table'>
        <p>Bright Light is normal illumination.</p>
        </div></td></tr></div>`;

        if (string == "dim-light") document.getElementById("overlay").innerHTML = `<div class='green_table'><table><tr><td><h1>Dim Light</h1></td></tr><tr><td><div class='white_table'>
        <p>An area with Dim Light is Lightly Obscured.</p>
        </div></td></tr></div>`;

        if (string == "darkness") document.getElementById("overlay").innerHTML = `<div class='green_table'><table><tr><td><h1>Darkness</h1></td></tr><tr><td><div class='white_table'>
        <p>An area of Darkness is Heavily Obscured.</p>
        </div></td></tr></div>`;

        if (string == "lightly-obscured") document.getElementById("overlay").innerHTML = `<div class='green_table'><table><tr><td><h1>Lightly Obscured</h1></td></tr><tr><td><div class='white_table'>
        <p>You have Disadvantage on Wisdom (Perception) checks to see something in a Lightly Obscured space.</p>
        </div></td></tr></div>`;

        if (string == "heavily-obscured") document.getElementById("overlay").innerHTML = `<div class='green_table'><table><tr><td><h1>Heavily Obscured</h1></td></tr><tr><td><div class='white_table'>
        <p>You have the Blinded condition while trying to see something in a Heavily Obscured space.</p>
        </div></td></tr></div>`;

        if (string == "darkvision") document.getElementById("overlay").innerHTML = `<div class='green_table'><table><tr><td><h1>Darkvision</h1></td></tr><tr><td><div class='white_table'>
        <p>If you have Darkvision, you can see in Dim Light within a specified range as if it were Bright Light and in Darkness within that range as if it were Dim Light. You discern colors in that Darkness only as shades of gray.</p>
        </div></td></tr></div>`;

        if (string == "blindsight") document.getElementById("overlay").innerHTML = `<div class='green_table'><table><tr><td><h1>Blindsight</h1></td></tr><tr><td><div class='white_table'>
        <p>If you have Blindsight, you can see within a specific range without relying on physical sight. Within that range, you can see anything that isn't behind Total Cover even if you have the Blinded condition or are in Darkness. Moreover, in that range, you can see something that has the Invisible condition.</p>
        </div></td></tr></div>`;

        if (string == "truesight") document.getElementById("overlay").innerHTML = `<div class='green_table'><table><tr><td><h1>Truesight</h1></td></tr><tr><td><div class='white_table'>
        <p>If you have Truesight, your vision is enhanced within a specified range. Within that range, your vision pierces through the following:</p>
        <p><b><i>Darkness.</i></b> You can see in normal and magical Darkness.</p>
        <p><b><i>Invisibility.</i></b> You see creatures and objects that have the Invisible condition.</p>
        <p><b><i>Visual Illusions.</i></b> Visual illusions appear transparent to you, and you automatically succeed on saving throws against them.</p>
        <p><b><i>Transformations.</i></b> You discern the true form of any creature or object you see that has been transformed by magic.</p>
        <p><b><i>Ethereal Plane.</i></b> You see into the Ethereal Plane.</p>
        </div></td></tr></div>`;

        if (string == "tremorsense") document.getElementById("overlay").innerHTML = `<div class='green_table'><table><tr><td><h1>Tremorsense</h1></td></tr><tr><td><div class='white_table'>
        <p>A creature with Tremorsense can pinpoint the location of creatures and moving objects within a specific range, provided that the creature with Tremorsense and anything it is detecting are both in contact with the same surface (such as the ground, a wall, or a ceiling) or the same liquid.
Tremorsense can't detect creatures or objects in the air, and it doesn't count as a form of sight.</p>
        </div></td></tr></div>`;

        if (string == "difficult-terrain") document.getElementById("overlay").innerHTML = `<div class='blue_table'><table><tr><td><h1>Difficult Terrain</h1></td></tr><tr><td><div class='white_table'>
        <p>If a space is Difficult Terrain, every foot of movement in that space costs 1 extra foot. For example, moving 5 feet through Difficult Terrain costs 10 feet of movement. Difficult Terrain isn't cumulative; either a space is Difficult Terrain or it isn't.</p>
        <p>A space is Difficult Terrain if the space contains any of the following or something similar:</p>
        <p>&bull; A creature that isn't Tiny or your ally</p>
        <p>&bull; Furniture that is sized for creatures of your size or larger</p>
        <p>&bull; Heavy snow, ice, rubble, or undergrowth</p>
        <p>&bull; Liquid that's between shin- and waist-deep</p>
        <p>&bull; A narrow opening sized for a creature one size smaller than you</p>
        <p>&bull; A slope of 20 degrees or more</p>
        </div></td></tr></div>`;

        if (string == "underwater-combat") document.getElementById("overlay").innerHTML = `<div class='blue_table'><table><tr><td><h1>Underwater Combat</h1></td></tr><tr><td><div class='white_table'>
        <p>A fight underwater follows these rules.</p>
        <p><b><i>Impeded Weapons.</i></b> When making a melee attack roll with a weapon underwater, a creature that lacks a Swim Speed has Disadvantage on the attack roll unless the weapon deals Piercing damage.</p>
        <p>A ranged attack roll with a weapon underwater automatically misses a target beyond the weapon's normal range, and the attack roll has Disadvantage against a target within normal range.</p>
        <p><b><i>Fire Resistance.</i></b> Anything underwater has Resistance to Fire damage.</p>
        </div></td></tr></div>`;

        if (string == "fast-travel") document.getElementById("overlay").innerHTML = `<div class='blue_table'><table><tr><td><h1>Fast Pace</h1></td></tr><tr><td><div class='white_table'>
        <p>While travelling at a fast pace, an adventuring party has the following effects.</p>
        <p><b><i>Movement Speed.</i></b> The party moves at 400 feet/minute, 4 miles/hour, or 30 miles/day.</p>
        <p><b><i>Disadvantage.</i></b> A fast pace imposes Disadvantage on Wisdom (Perception or Survival) and Dexterity (Stealth) checks.</p>
        </div></td></tr></div>`;

        if (string == "normal-travel") document.getElementById("overlay").innerHTML = `<div class='blue_table'><table><tr><td><h1>Normal Pace</h1></td></tr><tr><td><div class='white_table'>
        <p>While travelling at a normal pace, an adventuring party has the following effects.</p>
        <p><b><i>Movement Speed.</i></b> The party moves at 300 feet/minute, 3 miles/hour, or 24 miles/day.</p>
        <p><b><i>Disadvantage.</i></b> A normal pace imposes Disadvantage on Dexterity (Stealth) checks.</p>
        </div></td></tr></div>`;

        if (string == "slow-travel") document.getElementById("overlay").innerHTML = `<div class='blue_table'><table><tr><td><h1>Slow Pace</h1></td></tr><tr><td><div class='white_table'>
        <p>While travelling at a slow pace, an adventuring party has the following effects.</p>
        <p><b><i>Movement Speed.</i></b> The party moves at 200 feet/minute, 2 miles/hour, or 18 miles/day.</p>
        <p><b><i>Disadvantage.</i></b> A slow pace grants Advantage on Wisdom (Perception or Survival) checks.</p>
        </div></td></tr></div>`;

        
        setTimeout(setOverlayActive, 1);
    }
}

function setOverlayActive() {
    overlayActive = true;
}