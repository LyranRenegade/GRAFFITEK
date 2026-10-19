7. Engine API
How does everything else interact with the engine?

Read state
Modify state
Create/delete entities
Add relationships
Trigger events
Advance simulation
Query spatial data
Subscribe to events
Save/load
Data editing
Debugging / inspection
And importantly, your data editor sounds like a major consumer of this API.

Distinguish between 2 things:
### game engine 

[while playing, there's options to alter domain model but also protected by the engine so to say, as it is narratively fit and with limitations]



### domain model editor, handy tool to autofill, edit, reference, edit.

In here we want a field-visualiser:
given a 7d array (0-999) we can plot in 3d or 2d space. 2 or 3 dimensions while ignoring all the others.
So we can visualise any 2 or any 3 of the dimensions.  [CANDIDATE]

