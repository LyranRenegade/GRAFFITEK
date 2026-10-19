# DATAMODEL

### UNIVERSE-SIZE

*all values between 000-999, avoid negatives when possible [especially for ui], universe is 7Dx1000 units. Each the locations is homogenous for gameplay purposes but can be imagined as having 1000 meters in each direction [so 1 dimension is 1000 * 1000 m (^7 is a lot of space)]. So more granular details will be simulated by taking into account size/scale parameter that governs probability.
So e.g. a mosquito can be existing at one such locations and can have size/scale = 0.01 [which is a cm], so location knows it will have to multiply its 'presence' by 0.01.*



## PLAYER / NPC STATE

*Running variables that determine the game-state on top of the state of the universe.*
- *NPC's can exist that follow the same rules as the player, they can be a subclass from ENTITIES*

### Continuity

*general idea of being able to exist, can be split up in mutliple parameters, in general will start at max and slowly decline, will not easily be replenishable, events can drastically affect it negatively. Buffer size is huge but some kind of 'death/end' is inevitable in the long run [or is it?]*

Continuity / coherence / integrity / existence / persistence
mathematical actions:
- add, subtract, change max / min, temporary regeneration


### Attention

*can be facetted perhaps, in general a 'currency' that expands and regenerates quickly, max-cap can increase/decrease under game conditions. determines the ability to interact with environment in an active/creative way*

Attention → observation → information → agency
spending:
- inspect something [with more detail]
- follow an agent
- observe an event
- remember something
- establish a connection
- intervene

### Perception

7D array of [0-1] that tells us how much activities in that dimension are perceived/evaluated by the ENTITY

### Mobility

7D array of [0-1] that tells us how able the ENTITY is in navigating corresponding dimension. [so 1=max means only ENTITY-intention is taken into account when travelling in that dimension [so 1=100% unaffected vs [0=100% affected/steerless]]]
Actual max-speed/acceleration is a function of attention spend. 

So for example, a low-density entity with 'normal' mobility. Would have [0.5,0.5,0.2,0,0,0,0]. So if it wants to move in D1-3 it can, FLOW operating in D1-2 will only affect it for 50%, D3 will affect it 80%. It can't move of it's own volition in d4-7. [but flow could drag him there] 

### Memory

*abstract 'inventory' resource system. the holds references to persistent relationships, discoveries, patterns, identities, locations.
so like traditional RPG inventory-management we have a CAPACITY [that can change], Memories have a lifespan that can be extended by spending ATTENTION. (think sunless seas, abstract collector's items like 'a tall tale')

[But the player doesn't necessarily see that structure.
They see:
You remember the place.
or perhaps:
Something about the blue thing feels familiar.
Now you have a really interesting maintenance question:
What do I remember?
And because the underlying data model is open-ended, memory can become absurdly sophisticated later.
You could eventually have:
memories
beliefs
discovered laws
relationships
associations
maps
identities
prophecies
false memories
contradictions
]

so we could make memory require attention maintenance. With max-maintenance there will be no decay.
fields can manipulate memory-loss/retainment
memories are accrued and lost spontaneously due to game events
memory list can be huge, decay may be dependent on size + capacity
memories can collapse/combine into other ones
UI: we're not showing indidual MEMORIES listed on screen, we indicate: size, capacity, freshness something like that

### Resonance

*ability to vibe with stuff around it, so idea is that this only exists in relationships. [connection/coupling.]
A base resonance can be calculated just by comparing data-fields and their values. [Maybe we make it even more esoteric by just comparing mathematical patterns, so 2 very different things [different data-fields] can have the same mathematical distribution]
we can do both, so purely mathematical resonance, and resonance based on pure similarity. So high resonance means [entities] experience reality in a connected way [potentially without awareness/perception of it, which is determined by the [7d] PERCEPTIONS involved]. There can be various types of resonance
- victim vs  














## FIELDS

*fields governs game-mechanics at any give spot*
Minimal parameters:
- type: FIELD
- subtype: field_whatever
- location [7d]
- scale [7d]




### FLOW field

*continues, mathematical, determines currents of the universe, attractors/repulsors*

examples:
- black hole [heavy attractor]
- explosion [repulsor]

#### PROBABILITY field

probability fields for EVENTs that can affect:
- continuity,
- attention






















