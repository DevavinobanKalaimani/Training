let obj2 = {
    locality: "Chennai",
    invoke: function () {
        let slide = this;
        setTimeout(function () { console.log(slide.locality); }, 1000);
    }
};
obj2.invoke();
//--------------------
let obj3 = {
    locality: "Chennai",
    invoke: function () {
        setTimeout(() => { console.log(this.locality); }, 1000);
    }
};
obj3.invoke();
//# sourceMappingURL=this.js.map