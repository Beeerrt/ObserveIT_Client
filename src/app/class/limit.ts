export class limits{
    maxTemperatur: String;
    minTemperatur: String;
    maxIncline: String;
    minIncline: String;
    maxHumidity: String;
    minHumidity: String;
    maxBrightness: String;
    minBrightness: String;
    
    constructor(maxTemperatur?: String, minTemperatur?: String, maxIncline?: String,
        minIncline?: String, maxHumidity?: String, minHumidity?:String,maxBrightness?:String,
        minBrightness?: String){

        this.maxTemperatur = maxTemperatur;
        this.minTemperatur = minTemperatur;
        this.maxIncline = maxIncline;
        this.minIncline = minIncline;
        this.maxHumidity = maxHumidity;
        this.minHumidity = minHumidity;
        this.maxBrightness = maxBrightness;
        this.minBrightness = minBrightness;

    }
}