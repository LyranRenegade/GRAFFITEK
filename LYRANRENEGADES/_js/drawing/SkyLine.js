
//WIP [Work In Progress?]



SKYLINETYPE_CITY = "city";
//blocky, with windows

SKYLINETYPE_MOUNTAIN = "mountain";
//jagged

SKYLINETYPE_FLOW = "flow";
//smooth

SKYLINETYPE_STRAIGTH = "straigth";
//easy


var SkyLine = function ( zlevel, type, color, detail, height ) {
    
    //associate with a certain z-level [unique]
    this.zlevel = zlevel;
    
    //see: types above
    this.type = type;
    
    //just a fixed color
    this.color = color;
    
    //detail-level 0 = min, 100 = max, also, randomness
    this.detail = detail;
    
    //height 0 = flat horizon, 100% = max
    this.height = height;
    
    /*
     * GENERATES SKYLINE-DATA [points]
     * 
     */
    
    this.POINTS = [];
    
    
};


