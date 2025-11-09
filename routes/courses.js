const { json } = require("body-parser");
const express = require("express");
const { get_all_courses, get_one_courses ,add_new_course } = require("../controllers/courses");
const courseAuth = require("../middleware/courseAuth");

const router = express.Router();

router.get("/", get_all_courses);

router.get("/:courseId", get_one_courses);

router.post("/",courseAuth,add_new_course );

// router.get("/", get_all_courses).post("/",add_new_course ); // tare2a tanya ll e5tsar


module.exports = router;
