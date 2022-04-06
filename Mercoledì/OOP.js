class Logger {

    name = new String;
    data = new data;

    constructor() {}

    /**
     * 
     * @param {*} name 
     * @param {*} data 
     */
    constructor(name, data) {
        this.name = name;
        this.data = data;
    }

    setup(...options) {
        [...options].forEach(o >= {

        })
    }



    /**
     * 
     * @param {*} message 
     */
    info(message) { console.info(message) }
        /**
         * 
         * @param {*} message 
         */
    info(message) { console.debug(message) }
        /**
         * 
         * @param {*} message 
         */
    info(message) { console.warm(message) }
        /**
         * 
         * @param {*} message 
         */
    info(message) { console.error(message) }

}
const L = new Logger()
L.data = new Date('2022', '04', '06'
        L.info(L.Date)