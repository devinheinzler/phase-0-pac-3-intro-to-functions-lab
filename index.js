function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate (string) {
    var deaf = "I can't hear you!";
    var heard = "YES INDEED!";
    var love = "I would love to!";
    if (string.toLowerCase(string) === string) {
        return deaf;
    }
    else if (string.toUpperCase(string) === string) {
        return heard;
    }
    else if ("Let\'s have dinner together!" === string) {
        return love;
    }
}