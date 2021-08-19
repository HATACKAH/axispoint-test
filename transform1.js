const obj = JSON.parse(`
{
    "result": {
        "categories": {
            "Аксессуары": [
                "Рюкзаки",
                "Сумки",
                "Часы наручные"
            ],
            "Белье": [
                "Боди",
                "Бордшорты",
                "Бюстгальтеры",
                "Бюстье",
                "Колготки",
                "Лифы для купальника",
                "Монокини",
                "Носки",
                "Плавки",
                "Пояса для чулок",
                "Раздельные купальники",
                "Слитные купальники",
                "Трусы"
            ],
            "Белье для малышей": [
                "Носки для малышей"
            ],
            "Красота": [
                "Щетки косметические"
            ],
            "Одежда": [
                "Блузки",
                "Блузки-боди",
                "Бомберы",
                "Брюки",
                "Ветровки",
                "Водолазки",
                "Джеггинсы",
                "Джемперы",
                "Джинсы",
                "Жакеты",
                "Жилеты",
                "Капри",
                "Кардиганы",
                "Комбинезоны",
                "Костюмы",
                "Косухи",
                "Кофты",
                "Куртки",
                "Леггинсы",
                "Лонгсливы",
                "Ночные сорочки",
                "Пальто",
                "Парки",
                "Пиджаки",
                "Пижамы",
                "Платья",
                "Плащи",
                "Пуловеры",
                "Пуховики",
                "Рубашки",
                "Сарафаны",
                "Свитеры",
                "Свитшоты",
                "Толстовки",
                "Топы",
                "Туники",
                "Футболки",
                "Футболки-поло",
                "Халаты домашние",
                "Худи",
                "Шорты",
                "Юбки"
            ]
        }
    }
}`);

const categories = obj.result.categories;

const createIdGenerator = (() => {
    let id = -1;
    return () => ++id;
});

const generateParentId = createIdGenerator();
const generateChildId = createIdGenerator();

const transformedObject = Object
    .entries(categories)
    .map(([parent_label, arr]) => {
        const parent_value = generateParentId();
        return {
            parent_value,
            parent_label,
            children: arr.map(product => ({
                children_value: generateChildId(),
                children_label: product,
                parent_key: parent_value,
            }))
        }
    });

console.log(JSON.stringify(transformedObject, null, 4));
