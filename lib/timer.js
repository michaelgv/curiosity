var timer = {
    hourEquals: function (number) {
        if ( typeof number !== 'undefined' && number !== '' && typeof number === 'string' ) {
            var time = (new Date).toLocaleTimeString();
            var splitTime = time.split(":");
            var hoursHand = splitTime[0];
            if(hoursHand === number) {
                return true;
            }
            return false;
        }
        return false;
    },
    minutesEqual: function (number) {
        if ( typeof number !== 'undefined' && number !== '' && typeof number === 'string' ) {
            var time = (new Date).toLocaleTimeString();
            var splitTime = time.split(":");
            var minutesHand = splitTime[1];
            if(minutesHand === number) {
                return true;
            }
            return false;
        }
        return false;
    },
    secondsEqual: function (number) {
        if ( typeof number !== 'undefined' && number !== '' && typeof number === 'string' ) {
            var time = (new Date).toLocaleTimeString();
            var splitTime = time.split(":");
            var secondsHand = splitTime[2];
            if(secondsHand === number) {
                return true;
            }
            return false;
        }
        return false;
    }
};

module.exports = timer;