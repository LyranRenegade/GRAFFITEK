> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.


## TEXTBASED
*no images needed for gameplay-loop, maybe some scripted ones for fluff*

### (UI) multiple consoles 

- event output that enables response [important, center of screen [EXTERNAL WORLD]]
- event log of notifications / [will revert to random 'status' reports if queue is empty] [INTERNAL WORLD] [smaller panel, more to the side, but it's always there.]
- input line where player can type short messages, they are generally for purposes of creating fluff text [so irrelevant for gameplay, like naming stuff]
*(of course there's options here we can and will explore later with player-commands)* 

### (UI) user-interaction 

there's no clicking needed in this game, everything can be done by the keyboard. At any moment all the available actions have a checkbox icon somewhere in the ui with an unique alhpanumeric char in it, which pressed on the keyboard will invoke that action.

*TECH: hierarchical model of actions (grouping complex actions so we can use the same keys a lot*

# UI 

## PANEL MODEL 

we refuse to operate if screen too small [make a popup], otherwise:
- [ ] divide available screen in 4 x 4 rectangular areas of same size. These are the spaces where our panels can reside in
- [ ] define 13 panels, 12 of which can take up the space of one of our 16 areas, 1 of which is 4 times as big (2x2) [for the main textpanel]
- [ ] create automatic ordering where any panel can swap location with any other [with some constraints and autofill for the big one]
(so player can create his own layout, ofc we'll add colors as well)

## VISUAL DATA 
*We strive for lots of emptiness and space, buttons should be subtle and (re)appear sometimes with scrambled labels, so meaning is NOT derived from labels EXCEPT for the fact that they remain consistent OR when changing, change according to game-rules. [So player can memorize them more easily]. Numeric data is presented more exact (cool-downs, expiration timers), we use a 3-DIGIT SYSTEM EVERYWHERE. So if it's 0 it'll be 000. For labels we use datamodels and scrambling-level. So the datamodel gives us various options to choose from as functionality goes [random] and the optional scrambling level will obfuscate letters. So as we're always using 5 Alphanumerical+ characters, max scrambling level 5 will alter all letters.] 

> GAMEPLAY: everything changes all the time but very slowly [entropy], all user-impulses will slowly degradate to 0 when user is not interacting. [Still there will be (dormant)movement]. Player has a few concerns, will very slowly lose 'continuity' (ability to exist in this form, so 'game over' or now everything will go backwards or something), this is mostly a very steady counter downwards, 

### VISUALLY 



## PANELS 

### MAINPANEL (2x2)
Event-info

### PANEL w USERDATA
- this panel shows the **CONTINUITY** of the player, *it is represented as small circles (balls of life) either being filled or not [any order], initially there are 5 such circles and they are all filled, during gameplay other such balls of life (BOL) can be acquired if others were lost so never over 5. [Visually also 'dead' circles are still drawn but very dark or something)] Constitution dropping occurs over all the filled circles a player has, fading the fill to 0 [black enpty circle], when 2 or more circles are empty one of them will disappear as well [with a timer, not mentioned in ui, like 10 minutes]. So as these circles can also fill up at times any loss of a whole circle is semi-permanent. When the last circle is empty that one will also fadeout to dark-purple or whatever [10 minutes] and the the player will DIE/TRANSCEND/whoknows. (So, one of 5 levels of 'continuity' can be influenced during gameplay (health,vitality,chi,sanity,prana,etc, at random tags will be added)) [each ball has 1000 points and at default loses 1/ballnumber each hour]*
- **ATTENTION** is another parameter that is like direct currency for event-participation, it replenishes slowly over time and actions can be pursued that increases that rate.[like sleeping, resting, resetting, again random tags for this mechanic], it consists of *3 parameters, make continuity similar, so 3 balls fill fading out then outline fading to dark color. Fillcolor is also dependent on growth [green], [diminishing normal/fast], opacity represents strenght [again 0-999], so in the same fashion as continuity we have 3-dimensions of attention, in this case it replenishes over time naturally and fast 
- **RESONANCE** an indication of how much your vibing with THIS part of the universe, again same visual, there's 3 circles, each representing a different abstract dimension of this property. So resonance will be calculated by 




# TECHNICAL #
- all stat changing needs to go through an event-log filter.
So the userdata panel has keys that will print info about that particular meter.
- all [visual] values are capped at 1000 which has a special meaning, 999 and less will just mean that [as it's is drawn as fixed digits with 000's in need be (so fixed interface in that regards, and very consistent even tho all numbers can represent wildly different things)]


# PLANNING

Phase	Time	Goal
🧱 1. Skeleton	1–2 weeks	Browser app, project structure, game loop
🎲 2. Deterministic universe	2 weeks	Seed, random system, clock, coordinates
📦 3. Data engine	3–4 weeks	Definitions, schemas, registry, references, validation
🌌 4. First universe	2–3 weeks	Zones, entities, effects, actions, events
⚙️ 5. Simulation core	3–4 weeks	State, scheduling, cooldowns, lifespans, event system
🔭 6. Spatial/LOD system	3–5 weeks	7D space, proximity, simulation bubbles, coarse→fine
📝 7. Narrative layer	3–4 weeks	Observations, descriptions, language scrambling
⌨️ 8. Actual UI	3–4 weeks	4×4 layout, panels, keyboard action system
🛠️ 9. Editor v1	4–6 weeks	Create/edit/validate definitions
🌱 10. CONTENT EXPLOSION	ongoing	Fill the universe
🧬 11. Editor v2	4–8 weeks	Make it foolproof + contributor-friendly
🌍 12. Multiplayer/contributor universe	later	Let other humans add things







const anchors = generateAnchors(seed, 10000);

function circularDistance(a, b) {
    const d = Math.abs(a - b);
    return Math.min(d, 1000 - d);
}

function distance(a, b) {
    let sum = 0;

    for (let i = 0; i < 7; i++) {
        const d = circularDistance(a[i], b[i]);
        sum += d * d;
    }

    return Math.sqrt(sum);
}



