// CourseDetailsPage.tsx
import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Course {
  id: number;
  title: string;
  description: string;
  prerequisites: string;
}

export default function CourseDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get<Course>(
          `http://localhost:3030/courses/${id}`
        );
        setCourse(response.data);
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    };

    if (id) {
      fetchCourse();
    }
  }, [id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>hello from content </h1>
    </>
    // <div className="p-4 px-4">
    //   <h1 className="text-start text-4xl pb-4">{course.title}</h1>
    //   <p className="p-2 text-lg">{course.description}</p>
    //   <p className="pt-6 text-sm">Pre-requisite: {course.prerequisites}</p>
    // </div>
  );
}
