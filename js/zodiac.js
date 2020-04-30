let signs = [
    {
        x: function(r) {
            return 0;
        },
        y: function(r) {
            return -((r * 0.8));
        },
        name: "aries",
        dates: "21 March - 19 April",
        horoscope: "Your toaster knows more than it's letting on.",
        link: "https://en.wikipedia.org/wiki/Aries_(astrology)",
        html: "&#9800;",
        src: "img/zodiac/aries.png"
        //"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Aries.svg/20px-Aries.svg.png"
    },
    {
        x: function(r) {
            return (Math.cos(2 * (Math.PI/6))) * (r * 0.8);
        },
        y: function(r) {
            return -(Math.sin(2 * (Math.PI/6))) * (r * 0.8);
        },
        name: "taurus",
        dates: "20 April - 20 May",
        horoscope: "I spilled ranch dressing on the crystal ball again.",
        link: "https://en.wikipedia.org/wiki/Taurus_(astrology)",
        html: "&#9801;",
        src: "img/zodiac/taurus.png"
        //"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Taurus.svg/20px-Taurus.svg.png"
    },
    {
        x: function(r) {
            return (Math.cos(1 * (Math.PI/6))) * (r * 0.8);
        },
        y: function(r) {
            return -(Math.sin(1 * (Math.PI/6))) * (r * 0.8);
        },
        name: "gemini",
        dates: "21 May - 20 June",
        horoscope: "For some reason, I was expecting twins.",
        link: "https://en.wikipedia.org/wiki/Gemini_(astrology)",
        html: "&#9802;",
        src: "img/zodiac/gemini.png"
        //"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Gemini.svg/20px-Gemini.svg.png"
    },
    {
        x: function(r) {
            return (r * 0.8);
        },
        y: function(r) {
            return 0;
        },
        name: "cancer",
        dates: "21 June - 22 July",
        horoscope: "Bad luck. The, uh... spirits... just left.",
        link: "https://en.wikipedia.org/wiki/Cancer_(astrology)",
        html: "&#9803;",
        src: "img/zodiac/cancer.png"
        //"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Cancer.svg/20px-Cancer.svg.png"
    },
    {
        x: function(r) {
            return (Math.cos(1 * (Math.PI/6))) * (r * 0.8);
        },
        y: function(r) {
            return (Math.sin(1 * (Math.PI/6))) * (r * 0.8);
        },
        name: "leo",
        dates: "23 July - 22 August",
        horoscope: "It starts with a J. Is it a J name? K? L? M? N, o, p...",
        link: "https://en.wikipedia.org/wiki/Leo_(astrology)",
        html: "&#9804;",
        src: "img/zodiac/leo.png"
        //"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Leo.svg/20px-Leo.svg.png"
    },
    {
        x: function(r) {
            return (Math.cos(2 * (Math.PI/6))) * (r * 0.8);
        },
        y: function(r) {
            return (Math.sin(2 * (Math.PI/6))) * (r * 0.8);
        },
        name: "virgo",
        dates: "23 August - 22 September",
        horoscope: "I think I need to consult the handbook again.",
        link: "https://en.wikipedia.org/wiki/Virgo_(astrology)",
        html: "&#9805;",
        src: "img/zodiac/virgo.png"
        //"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Virgo.svg/20px-Virgo.svg.png"
    },
    {
        x: function(r) {
            return 0;
        },
        y: function(r) {
            return (r * 0.8);
        },
        name: "libra",
        dates: "23 September - 22 October",
        horoscope: "Reply hazy. Ask again later.",
        link: "https://en.wikipedia.org/wiki/Libra_(astrology)",
        html: "&#9806;",
        src: "img/zodiac/libra.png"
        //"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Libra.svg/20px-Libra.svg.png"
    },
    {
        x: function(r) {
            return -(Math.cos(2 * (Math.PI/6))) * (r * 0.8);
        },
        y: function(r) {
            return (Math.sin(2 * (Math.PI/6))) * (r * 0.8);
        },
        name: "scorpio",
        dates: "23 October - 21 November",
        horoscope: "42. Sorry, what was the question?",
        link: "https://en.wikipedia.org/wiki/Scorpio_(astrology)",
        html: "&#9807;",
        src: "img/zodiac/scorpio.png"
        //"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Scorpio.svg/20px-Scorpio.svg.png"
    },
    {
        x: function(r) {
            return -(Math.cos(1 * (Math.PI/6))) * (r * 0.8);
        },
        y: function(r) {
            return (Math.sin(1 * (Math.PI/6))) * (r * 0.8);
        },
        name: "sagittarius",
        dates: "22 November - 21 December",
        horoscope: "You will encounter a stranger. Wait, that's just me.",
        link: "https://en.wikipedia.org/wiki/Sagittarius_(astrology)",
        html: "&#9808;",
        src: "img/zodiac/sagittarius.png"
        //"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Sagittarius.svg/20px-Sagittarius.svg.png"
    },
    {
        x: function(r) {
            return -(r * 0.8);
        },
        y: function(r) {
            return 0;
        },
        name: "capricorn",
        dates: "22 December - 19 January",
        horoscope: "3 of Clubs. Oh, wait, you didn't pick a card...",
        link: "https://en.wikipedia.org/wiki/Capricorn_(astrology)",
        html: "&#9809;",
        src: "img/zodiac/capricorn.png"
        //"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Capricorn.svg/20px-Capricorn.svg.png"
    },
    {
        x: function(r) {
            return -(Math.cos(1 * (Math.PI/6))) * (r * 0.8);
        },
        y: function(r) {
            return -(Math.sin(1 * (Math.PI/6))) * (r * 0.8);
        },
        name: "aquarius",
        dates: "20 January - 18 February",
        horoscope: "If I told you, it would spoil the surprise.",
        link: "https://en.wikipedia.org/wiki/Aquarius_(astrology)",
        html: "&#9810;",
        src: "img/zodiac/aquarius.png"
        //"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Aquarius.svg/20px-Aquarius.svg.png"
    },
    {
        x: function(r) {
            return -(Math.cos(2 * (Math.PI/6))) * (r * 0.8);
        },
        y: function(r) {
            return -(Math.sin(2 * (Math.PI/6))) * (r * 0.8);
        },
        name: "pisces",
        dates: "19 February - 20 March",
        horoscope: "Crossword puzzle is on the back.",
        link: "https://en.wikipedia.org/wiki/Pisces_(astrology)",
        html: "&#9811;",
        src: "img/zodiac/pisces.png"
        //"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Pisces.svg/20px-Pisces.svg.png"
    }
];

for (x = 0; x < signs.length; x++) {
    signs[x].image = new Image();
    signs[x].image.src = signs[x].src;
}

function drawZodiac(ctx, x, y, _radius, color) {
    radius = (_radius < 200? 200: _radius);
    ctx.translate(x, y);
    ctx.beginPath();    
    ctx.fillStyle = color;
    ctx.fill();
    
    ctx.font = radius * 0.036 + "px Arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (let num = 0; num < 12; num++) {
        // Draw sign
        ctx.drawImage(signs[num].image, signs[num].x(radius) - (signs[num].image.width/2), signs[num].y(radius) - (signs[num].image.height/2));

        /* binding circle 
        ctx.beginPath();
        ctx.arc(signs[num].x(radius), signs[num].y(radius), 40, 0, 2 * Math.PI, false);
        ctx.strokeStyle = '#003300';
        ctx.stroke();
        */

        // draw label
        if (radius * 0.036 > 10) {
            ctx.fillText(signs[num].name, signs[num].x(radius), signs[num].y(radius) + 24);
            ctx.font = radius * 0.024 + "px Arial";
            ctx.fillText(signs[num].dates, signs[num].x(radius), signs[num].y(radius) + 48);
        }
        ctx.font = radius * 0.036 + "px Arial";
                 
    }
    ctx.translate(-x, -y);

}

function displayHoroscope(e) {
    ctx = canv.getContext("2d")    
    ctx.drawImage(signs[signSelection(e)].image, (canv.width/2) - (signs[signSelection(e)].image.width), canv.height/3 - signs[signSelection(e)].image.height - 48, (signs[signSelection(e)].image.width) * 2, (signs[signSelection(e)].image.height) * 2);
    ctx.font = radius * 0.072 + "px Arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText(signs[signSelection(e)].name, (canv.width/2), canv.height/3 + (signs[signSelection(e)].image.height * 2) - 24);
    ctx.font = radius * 0.048 + "px Arial";
    ctx.fillText(signs[signSelection(e)].dates, (canv.width/2), canv.height/3 + (signs[signSelection(e)].image.height * 2) + 14);
    ctx.font = radius * 0.056 + "px Arial";
    ctx.fillText(signs[signSelection(e)].horoscope, (canv.width/2), canv.height/3 + (signs[signSelection(e)].image.height * 2) + 100);
    ctx.font = radius * 0.036 + "px Arial";
}

function distBetweenPoints(x1, y1, x2, y2) {

    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

}

function slopeOfLine(x1, y1, x2, y2) {

    return ((y2, - y1) / (x2 - x1));

}

function angleBetweenPoints(x1, y1, x2, y2) {

    return -Math.atan2(y2 - y1, x2 - x1);

}

function signSelection(e) {
    let msEvt = e;
    
    //measure the distance from the mouse to each of the star signs
    let distances = [];
    for (i = 0; i < signs.length; i++) {
        distances[i] = distBetweenPoints((canv.width/2) + signs[i].x((canv.width>canv.height?canv.height/2:canv.width/2)), (canv.height/2) + signs[i].y((canv.width>canv.height?canv.height/2:canv.width/2)), msEvt.offsetX, msEvt.offsetY);
    }
    return distances.indexOf(Math.min(...distances));
}