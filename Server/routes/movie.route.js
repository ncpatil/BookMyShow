const express = require("express");
const Movie = require("../Models/movie.model.js");

const movieRouter = express.Router();

movieRouter.post("/add-movie", async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    await newMovie.save();
    res.send({
      success: true,
      message: "new movie has been added successfully",
    });
  } catch (error) {
    res.send({
      success: false,
      message: "movie couldnt be added",
    });
  }
});

movieRouter.put("/update-movie/", async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.body.movieId, req.body);
    res.send({
      success: true,
      message: "the movie has been updated",
    });
  } catch (error) {
    res.send({
      success: false,
      message: "server error",
    });
  }
});

movieRouter.delete("/delete-movie/:id", async (req, res) => {
  try {
    const movieId = req.params.id;
    const movie = await Movie.findByIdAndDelete(movieId, req.body);
    res.send({
      success: true,
      message: "the movie has been updated",
    });
  } catch (error) {
    res.send({
      success: false,
      message: "server error",
    });
  }
});

movieRouter.get("/all-movies", async (req, res) => {
  try {
    const allMovie = await Movie.find();
    res.send({
      success: true,
      message: "All movies have been fetched",
      data: allMovie,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "server error",
    });
  }
});

movieRouter.get("/:id", async (req, res) => {
  try {
    const movieId = req.params.id;
    const movie = await Movie.findById(movieId);
    res.send({
      success: true,
      message: "the movie has been updated",
      data: movie,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "server error",
    });
  }
});

module.exports = movieRouter;
