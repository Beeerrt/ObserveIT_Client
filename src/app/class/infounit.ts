export class infounit{
    nodeid: Number;
    date: Date;
    temperatur: String;
    incline: String;
    humidity: String;
    brightness: String;
    positon: String;
    
    constructor(nodeid?: Number, date?: Date, temperatur?: String,
        incline?: String, humidity?: String, brightness?:String,positon?:String){

        this.nodeid = nodeid;
        this.date = date;
        this.temperatur = temperatur;
        this.incline = incline;
        this.humidity = humidity;
        this.brightness = brightness;
        this.positon = positon || "N/A";

    }
}