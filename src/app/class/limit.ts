export class limits{
    maxTemperatur: String;
    minTemperatur: String;
    maxIncline: String;
    minIncline: String;
    maxHumidity: String;
    minHumidity: String;
    maxBrightness: String;
    minBrightness: String;
    batterylevel: String;
    
/**
 * Creates an instance of limits.
 * @param {String} [maxTemperatur] 
 * @param {String} [minTemperatur] 
 * @param {String} [maxIncline] 
 * @param {String} [minIncline] 
 * @param {String} [maxHumidity] 
 * @param {String} [minHumidity] 
 * @param {String} [maxBrightness] 
 * @param {String} [minBrightness] 
 * @param {String} [batterylevel] 
 * @memberof limits
 */
constructor(maxTemperatur?: String, minTemperatur?: String, maxIncline?: String,
        minIncline?: String, maxHumidity?: String, minHumidity?:String,maxBrightness?:String,
        minBrightness?: String, batterylevel?: String){

        this.maxTemperatur = maxTemperatur;
        this.minTemperatur = minTemperatur;
        this.maxIncline = maxIncline;
        this.minIncline = minIncline;
        this.maxHumidity = maxHumidity;
        this.minHumidity = minHumidity;
        this.maxBrightness = maxBrightness;
        this.minBrightness = minBrightness;
        this.batterylevel = batterylevel;

    }
}