var eyeColor;
(function (eyeColor) {
    eyeColor[eyeColor["brown"] = 1] = "brown";
    eyeColor[eyeColor["black"] = 5] = "black";
    eyeColor[eyeColor["blue"] = 10] = "blue";
})(eyeColor || (eyeColor = {}));
let myEye = eyeColor.brown;
console.log(myEye);
console.log(eyeColor[myEye]);
//# sourceMappingURL=enum.js.map