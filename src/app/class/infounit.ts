export class infounit{
    nodeid: Number;
    date: Date;
    temperatur: String;
    incline: String;
    humidity: String;
    brightness: String;
    level: String;
    positon: String;
    
    /**
     * Creates an instance of infounit.
     * @param {Number} [nodeid] 
     * @param {Date} [date] 
     * @param {String} [temperatur] 
     * @param {String} [incline] 
     * @param {String} [humidity] 
     * @param {String} [brightness] 
     * @param {String} [positon] 
     * @param {String} [level] 
     * @memberof infounit
     */
    constructor(nodeid?: Number, date?: Date, temperatur?: String,
        incline?: String, humidity?: String, brightness?:String,positon?:String,
        level?:String){

        this.nodeid = nodeid;
        this.date = date;
        this.temperatur = temperatur;
        this.incline = incline;
        this.humidity = humidity;
        this.brightness = brightness;
        this.level = level;
        this.positon = positon || "N/A";

    }
}