describe('raceResults', function () {
  const race = ['Tom', 'Margaret', 'Allison', 'David', 'Pierre'];
  const results = {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  };

  it('should accept a single array and return an object with keys: first, second, thid, and rest', function() {
    expect(raceResults(race)).toEqual(results);
  });
});