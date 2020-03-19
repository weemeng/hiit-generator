import { generateWorkout } from "../functions/WorkoutGenerator";

describe("Generate", () => {
  it("should return an exercise array when called", () => {
    const exerciseArray = generateWorkout(900, "upper body", 30);
    console.log(exerciseArray);
    expect(exerciseArray).toHaveLength(6);
  });
});
