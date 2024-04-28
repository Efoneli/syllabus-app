// 'use client'

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useRouter, useParams } from 'next/navigation';

// interface Course {
//     id: number;
//     title: string;
//     description: string;
//   }

// export default function CourseDetails() {
//   const router = useRouter();
//   const { id } = useParams();
//   const [course, setCourse] = useState<Course | undefined>(undefined);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const getCourse = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3030/courses/${id}`);
//         setCourse(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     if (id) {
//       getCourse();
//     }
//   }, [id]);

//   if (loading) {
//     return <p>loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <>
//       {course ? (
//         <>
//           <h3>{course.title}</h3>
//           <p>{course.description}</p>
//           <p>Prerequisites: {course.prerequisites}</p>
//         </>
//       ) : (
//         <p>No course data available</p>
//       )}
//     </>
//   );
// }


import React from 'react'

function [id]() {
  return (
    <div>hello</div>
  )
}

export default [id]
