"use client";

import { useEffect, useState } from "react";
import axios from "axios"; // Import axios

interface Course {
  id: number;
  title: string;
  description: string;
}

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [newCourse, setNewCourse] = useState<string>("");

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
          title: newCourse,
          description: "New Course Description",
        }
      );
      setCourses([...courses, response.data]);
      setNewCourse("");
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  return (
    <div className="p-4 px-4">
      <div>
        <input
          type="text"
          placeholder="Add a course here"
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
          className="text-gray-600 p-2 rounded-l-md"
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
            <h3 className="p-6 text-2xl text-center">{course.title}</h3>
            <p className="p-4 text-lg text-center">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
