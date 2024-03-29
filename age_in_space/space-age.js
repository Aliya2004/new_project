export const age = (planet, ageInSeconds) => {
  const planetsAge = {
    earth: 1,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  };

  const ageInYears = ageInSeconds / (365.25 * 24 * 60 * 60);
  const ageOnPlanet = ageInYears / planetsAge[planet];

  return parseFloat(ageOnPlanet.toFixed(2));
};

const ageOnEarth = age('earth', 1000000000);
console.log(ageOnEarth);
