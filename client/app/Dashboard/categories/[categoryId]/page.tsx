'use client'
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Course {
  id: number;
  title: string;
  prerequisites: string;
  imageUrl: string;
  description: string;
  categoryId: number;
  courseId: number;
}

export default function CategoryDetails({ params }: {
  params: { categoryId: string }
}) {
  const router = useRouter();
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const categories = [
          { id: 1, name: 'frontend' },
          { id: 2, name: 'backend' },
          { id: 3, name: 'mobile' },
        ];
        const category = categories.find(cat => cat.name === params.categoryId);

        if (!category) {
          console.error("Category not found");
          return;
        }

        const categoryId = category.id;

        const response = await axios.get<Course[]>(`http://localhost:3030/courses?categoryId=${categoryId}`);
        
        const filteredCourses = response.data.filter(course => course.categoryId === categoryId);
        setCourses(filteredCourses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }

    fetchCategoryData();
  }, [params.categoryId]);

  const handleCourseChange = (course: Course) => {
    // console.log(course)
    router.push(`/dashboard/categories/${params.categoryId}/courses/${course.id}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">{params.categoryId.toUpperCase()}</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="border rounded-md p-6 flex flex-col items-center justify-center hover:scale-105">
            <button onClick={() => handleCourseChange(course)} className="">
              <img src={course.imageUrl} alt={course.title} height={200} width={200} className="" />
              <h2 className="text-xl text-white font-semibold mb-2">{course.title}</h2> 
              <p className="text-gray-700">{course.prerequisites}</p>
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
