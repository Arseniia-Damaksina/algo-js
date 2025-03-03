const earthYearInSeconds = 31557600;
const orbitalPeriods = {
    Mercury: 0.2408467,
    Venus: 0.61519276,
    Earth: 1.0,
    Mars: 1.8808158,
    Jupiter: 11.862615
};

const countSpaceAge = (ageInSeconds, planet) => {
    const ageInEarthYears = ageInSeconds / earthYearInSeconds;
    const ageOnOtherPlanet = parseFloat((ageInEarthYears / orbitalPeriods[planet]).toFixed(2));

    return ageOnOtherPlanet;
}

console.log(`Your age on Earth: ${countSpaceAge(1000000000, 'Earth')}`);
console.log(`Your age on Mercury: ${countSpaceAge(1000000000, 'Mercury')}`);
console.log(`Your age on Jupiter: ${countSpaceAge(1000000000, 'Jupiter')}`);
