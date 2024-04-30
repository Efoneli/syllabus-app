import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

interface Coursedetail {
  id: number;
  title: string;
  body: string;
}

export default function CourseDetail() {
  const router = useRouter();
  const { id } = useParams(); // Get the course ID from the router query params
  const [Coursedetail, setCoursedetail] = useState<Coursedetail | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Coursedetail>(
          `http://localhost:3030/coursedetails/${id}`
        );
        setCoursedetail(response.data);
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (!Coursedetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 px-4">
      <h1>{Coursedetail.title}</h1>
      <p>{Coursedetail.body}</p>
    </div>
  );
}
