5. Runtime State
What does the engine actually hold while the simulation is running?

This deserves its own category because it's subtly different from representation.
Current world state
Entity state
Spatial state
Temporal state
Active events
Queues
Derived state
Caches
Snapshots
LOD representations
Simulation metadata
Random/seed state
I'd especially distinguish static world data from runtime state in your project.
Your JSON might say:
"This faction exists and has these characteristics."
Runtime state might say:
"This faction currently controls these locations, has accumulated X resources, and has these 37 active events."