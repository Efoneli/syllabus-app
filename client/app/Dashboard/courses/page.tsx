'use client'

import { useEffect, useState } from "react";
import axios from "axios";

interface Course {
  id: number;
  title: string;
  description: string;
  prerequisites: string;
}

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [newCourseTitle, setNewCourseTitle] = useState<string>("");
  const [newCourseDescription, setNewCourseDescription] = useState<string>("");
  const [newCoursePrerequisites, setNewCoursePrerequisites] =
    useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Course[]>(
          "http://localhost:3030/courses"
        );
        setCourses(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddCourse = async () => {
    try {
      const response = await axios.post<Course>(
        "http://localhost:3030/courses",
        {
          title: newCourseTitle,
          description: newCourseDescription,
          prerequisites: newCoursePrerequisites,
        }
      );

      const newCourseData: Course = response.data;
      setCourses([...courses, newCourseData]);
      setNewCourseTitle("");
      setNewCourseDescription("");
      setNewCoursePrerequisites("");
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  const handleDeleteCourse = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3030/courses/${id}`);
      setCourses(courses.filter((course) => course.id !== id));
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  // const handleEditCourse = async (id: number) => {
  //   try {
  //     const updatedCourseData: Partial<Course> = {
  //       title: newCourseTitle,
  //       description: newCourseDescription,
  //       prerequisites: newCoursePrerequisites,
  //     };

  //     await axios.patch(`http://localhost:3030/courses/${id}`, updatedCourseData);

  //     // Optionally, you can fetch the updated course list after editing
  //     const updatedCourses = await axios.get<Course[]>("http://localhost:3030/courses");
  //     setCourses(updatedCourses.data);

  //     setNewCourseTitle("");
  //     setNewCourseDescription("");
  //     setNewCoursePrerequisites("");
  //   } catch (error) {
  //     console.error("Error editing course:", error);
  //   }
  // };

  return (
    <div className="p-4 px-4">
      <div className="flex flex-col md:flex-row">
        <input
          type="text"
          placeholder="Course Title"
          value={newCourseTitle}
          onChange={(e) => setNewCourseTitle(e.target.value)}
          className="text-gray-600 p-2 mx-3 rounded-l-md"
        />
        <input
          type="text"
          placeholder="Course Description"
          value={newCourseDescription}
          onChange={(e) => setNewCourseDescription(e.target.value)}
          className="text-gray-600 p-2"
        />
        <input
          type="text"
          placeholder="Course Prerequisites"
          value={newCoursePrerequisites}
          onChange={(e) => setNewCoursePrerequisites(e.target.value)}
          className="text-gray-600 p-2 mx-2 rounded-r-md"
        />
        <button
          onClick={handleAddCourse}
          className="bg-green-300 p-2 text-white"
        >
          Add a course
        </button>
      </div>
      <h1 className="text-start text-4xl pb-4">List of available courses</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border-2 border-r-gray-100 rounded-md p-6 mx-auto hover:scale-105"
          >
            <div>
              {/* <button
                onClick={() => handleEditCourse(course.id)}
                className="bg-green-500 text-white p-1 rounded text-end"
              >
                Edit
              </button> */}

              <button
                onClick={() => handleDeleteCourse(course.id)}
                className="bg-red-500 text-white p-1 rounded text-end"
              >
                Delete
              </button>
            </div>

            <h3 className="p-3 text-3xl text-center">{course.title}</h3>
            <p className="p-2 text-lg text-center">{course.description}</p>
            <p className="pt-6 text-sm text-center">
              Pre-requisite: {course.prerequisites}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
