const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const User = require("../models/userModel");
const Workout = require("../models/workoutModel");
const workouts = require("./data/workouts.js");

let token = null;

beforeAll(async () => {
  await User.deleteMany({});
  const result = await api
    .post("/api/user/signup")
    .send({ email: "mattiv@matti.fi", password: "R3g5T7#gh" });
  token = result.body.token;
});

describe("when there is initially some workouts saved", () => {
  beforeEach(async () => {
    await Workout.deleteMany({});
    await api
      .post("/api/workouts")
      .set("Authorization", "bearer " + token)
      .send(workouts[0])
      .send(workouts[1]);
  });

  test("Workouts are returned as json", async () => {
    await api
      .get("/api/workouts")
      .set("Authorization", "bearer " + token)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  test("New workout added successfully", async () => {
    const newWorkout = {
      title: "testworkout",
      reps: 10,
      load: 100,
    };
    await api
      .post("/api/workouts")
      .set("Authorization", "bearer " + token)
      .send(newWorkout)
      .expect(201);
  });
  test("New workout deleted successfully", async () => {
    // create a new workout
    const newWorkout = {
      title: "testworkout",
      reps: 10,
      load: 100,
    };
    // post the new workout
    const response = await api
      .post("/api/workouts")
      .set("Authorization", "bearer " + token)
      .send(newWorkout)
      .expect(201);
    // delete the new workout
    await api
      .delete("/api/workouts/" + response.body._id)
      .set("Authorization", "bearer " + token)
      .send({ id: response.body._id })
      .expect(200);
  });
  test("New workout updated successfully", async () => {
    // create a new workout
    const newWorkout = {
      title: "testworkout",
      reps: 10,
      load: 100,
    };
    // post the new workout
    const response = await api
      .post("/api/workouts")
      .set("Authorization", "bearer " + token)
      .send(newWorkout)
      .expect(201);
    // update the new workout
    await api
      .patch("/api/workouts/" + response.body._id)
      .set("Authorization", "bearer " + token)
      .send({ id: response.body._id, title: "testworkout2", reps: 20, load: 200 })
      .expect(200);
  });
  test("Single workout returned successfully", async () => {
    // create a new workout
    const newWorkout = {
      title: "testworkout",
      reps: 10,
      load: 100,
    };
    // post the new workout
    const response = await api
      .post("/api/workouts")
      .set("Authorization", "bearer " + token)
      .send(newWorkout)
      .expect(201);
    // get the new workout
    await api
      .get("/api/workouts/" + response.body._id)
      .set("Authorization", "bearer " + token)
      .send({ id: response.body._id })
      .expect(200);
  });
});

afterAll(() => {
  mongoose.connection.close();
});
