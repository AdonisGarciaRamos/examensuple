var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Personaje = /** @class */ (function () {
    function Personaje() {
    }
    Personaje.prototype.ObtenerNombre = function () {
        return "Personaje";
    };
    return Personaje;
}());
var Goku = /** @class */ (function (_super) {
    __extends(Goku, _super);
    function Goku() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Goku.prototype.ObtenerNombre = function () {
        return "Goku";
    };
    return Goku;
}(Personaje));
var Vegeta = /** @class */ (function (_super) {
    __extends(Vegeta, _super);
    function Vegeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Vegeta.prototype.ObtenerNombre = function () {
        return "Vegeta";
    };
    return Vegeta;
}(Personaje));
var Gohan = /** @class */ (function (_super) {
    __extends(Gohan, _super);
    function Gohan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gohan.prototype.ObtenerNombre = function () {
        return "Gohan";
    };
    return Gohan;
}(Personaje));
var Trunks = /** @class */ (function (_super) {
    __extends(Trunks, _super);
    function Trunks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Trunks.prototype.ObtenerNombre = function () {
        return "Trunks";
    };
    return Trunks;
}(Personaje));
var Fusion = /** @class */ (function (_super) {
    __extends(Fusion, _super);
    function Fusion(personaje1, personaje2) {
        var _this = _super.call(this) || this;
        _this.personaje1 = personaje1;
        _this.personaje2 = personaje2;
        return _this;
    }
    return Fusion;
}(Personaje));
var Gogeta = /** @class */ (function (_super) {
    __extends(Gogeta, _super);
    function Gogeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gogeta.prototype.ObtenerNombre = function () {
        return "".concat(this.personaje1.ObtenerNombre(), " + ").concat(this.personaje2.ObtenerNombre(), " = Gogeta");
    };
    return Gogeta;
}(Fusion));
var Gotenks = /** @class */ (function (_super) {
    __extends(Gotenks, _super);
    function Gotenks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gotenks.prototype.ObtenerNombre = function () {
        return "".concat(this.personaje1.ObtenerNombre(), " + ").concat(this.personaje2.ObtenerNombre(), " = Gotenks");
    };
    return Gotenks;
}(Fusion));
function main() {
    var goku = new Goku();
    var vegeta = new Vegeta();
    var gohan = new Gohan();
    var trunks = new Trunks();
    var gogeta = new Gogeta(goku, vegeta);
    var gotenks = new Gotenks(gohan, trunks);
    console.log(gogeta.ObtenerNombre());
    console.log(gotenks.ObtenerNombre());
}
main();
