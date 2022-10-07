let mape = new Map([[2, 4], [4, 8]]);
mape.forEach(mapfn);
function mapfn(key, value, callingMap) {
    console.log(key + '->' + value);
    console.log(mape === callingMap);
}
//# sourceMappingURL=foreach.js.map