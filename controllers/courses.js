const courses = [
  { id: 1, name: "HTML", price: 100 },
  { id: 2, name: "CSS", price: 100 },
  { id: 3, name: "JS", price: 200 },
];

const get_all_courses = (req, res) => {
  res.status(200).json({
    message: "succsess",
    data: courses,
  });
};

const get_one_courses = (req, res) => {
  const { courseId } = req.params; // elly mktob fy el link ba3d course

  const course = courses.find(({ id }) => id == courseId);

  if (course) {
    res.status(200).json({
      message: "course found",
      data: course,
    });
  } else {
    res.status(404).json({
      message: "invalid course id",
      data: null,
    });
  }
};

const add_new_course = (req, res) => {
  const check = courses.some(({ name }) => name == req.body.name);
  if (!check) {
    res.status(201).json({
      message: "course added",
      data: courses, //e7na m3mlna4 el function elly t3ml add l course
    });
  } else {
    res.status(404).json({
      message: "course already exist",
      data: null,
    });
  }
};

module.exports = {
  get_all_courses,
  get_one_courses,
  add_new_course,
};
