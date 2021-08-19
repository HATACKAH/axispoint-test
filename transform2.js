const obj = JSON.parse(`
{
    "result": {
        "total": [
            {
                "date": "2020-07-29",
                "quantity": 392,
                "price": 19322
            },
            {
                "date": "2020-07-30",
                "quantity": 437,
                "price": 19356
            },
            {
                "date": "2020-07-31",
                "quantity": 337,
                "price": 11168
            },
            {
                "date": "2020-08-01",
                "quantity": 179,
                "price": 9590
            },
            {
                "date": "2020-08-02",
                "quantity": 269,
                "price": 10368
            },
            {
                "date": "2020-08-03",
                "quantity": 253,
                "price": 7433
            },
            {
                "date": "2020-08-04",
                "quantity": 147,
                "price": 6778
            }
        ],
        "table_1": [
            {
                "date": "2020-07-29",
                "quantity": 368,
                "price": 1816
            },
            {
                "date": "2020-07-30",
                "quantity": 407,
                "price": -3684
            },
            {
                "date": "2020-07-31",
                "quantity": 324,
                "price": 0
            },
            {
                "date": "2020-08-01",
                "quantity": 169,
                "price": 1147
            },
            {
                "date": "2020-08-02",
                "quantity": 259,
                "price": 3060
            },
            {
                "date": "2020-08-03",
                "quantity": 242,
                "price": 70
            },
            {
                "date": "2020-08-04",
                "quantity": 140,
                "price": 515
            }
        ],
        "table_2": [
            {
                "date": "2020-07-29",
                "quantity": 24,
                "price": 17506
            },
            {
                "date": "2020-07-30",
                "quantity": 30,
                "price": 23040
            },
            {
                "date": "2020-07-31",
                "quantity": 13,
                "price": 11168
            },
            {
                "date": "2020-08-01",
                "quantity": 10,
                "price": 8443
            },
            {
                "date": "2020-08-02",
                "quantity": 10,
                "price": 7308
            },
            {
                "date": "2020-08-03",
                "quantity": 11,
                "price": 7363
            },
            {
                "date": "2020-08-04",
                "quantity": 7,
                "price": 6263
            }
        ]
    }
}`);

// Первый вариант

const transformedObject = Object
    .entries(obj.result)
    .map(([table, arr]) => ({
        table,
        dates: arr.map(x => x.date),
        quantities: arr.map(x => x.quantity),
        prices: arr.map(x => x.price),
    }));

console.log(transformedObject);

// Второй вариант

// const transformedObject = Object
//     .entries(obj.result)
//     .flatMap(([table, arr]) =>
//         arr.reduce((acc, val) => ({
//             table,
//             dates: [...acc.dates, val.date],
//             quantities: [...acc.quantities, val.quantity],
//             prices: [...acc.prices, val.price],
//         }), {
//             table,
//             dates: [],
//             quantities: [],
//             prices: [],
//         })
// );
// console.log(transformedObject);
