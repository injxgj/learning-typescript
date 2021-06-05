type Heroes = 'Hulk' | 'Capt' | 'Thor';
type HeroAges = { [K in Heroes]: number }; // javascript에 for in 구문과 유사

const ages: HeroAges = {
    Hulk: 100,
    Capt: 120,
    Thor: 23
}