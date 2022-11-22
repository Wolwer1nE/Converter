let unit = new Array();
let coef = new Array();

unit[0] = new Array("Метр (м)", "Сантиметр (см)", "Километр (км)", "Милиметр (мм)");
coef[0] = new Array(1, .01, 1000, .001);

unit[1] = new Array("Рубль", "Доллар", "Евро", "Южноафриканские рэнды", "Армянские драмы");
coef[1] = new Array(1, 61.6175, 60.9216, 3.38084, 0.1570690);


function getData(unit, coef) {
    let data = []
    for (var i = 0; i < unit.length; i++) {
        var obj = {};
        obj.name = unit[i];
        obj.coef = coef[i];
        data.push(obj)
    }
    return data;
};

describe("2 massives into one object with keys and values", () => {
    test("Convert massives to object", () => {
        const output = [
            {
                "name": "Метр (м)",
                "coef": 1
            },
            {
                "name": "Сантиметр (см)",
                "coef": 0.01
            },
            {
                "name": "Километр (км)",
                "coef": 1000
            },
            {
                "name": "Милиметр (мм)",
                "coef": 0.001
            }
        ];

        expect(getData(unit[0], coef[0])).toEqual(output);

    });
});

function ConvertFromTo(propIndex, sourceIndex, sourceValue, targetIndex) {
    let sourceFactor = coef[propIndex][sourceIndex];
    let targetFactor = coef[propIndex][targetIndex];
    let result = sourceValue;

    result = result * sourceFactor;
    result = result / targetFactor;
    
    return result;
}

describe("Converter himself", () => {
    test("Convert unit", () => {
        const output = 0.003;

        expect(ConvertFromTo(0, 0, 3 ,2)).toEqual(output);

    });
});