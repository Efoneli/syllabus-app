'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";

interface Topic {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  docsUrl: string;
  courseId: number;
  videoUrl: string;
}

export default function CourseDetail({
  params,
}: {
  params: {
    categoryId: string;
    courseId: string;
  };
}) {
  const [topic, setTopic] = useState<Topic>({});

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        console.log(params.courseId)
        const response = await axios.get<Topic[]>(       
          `http://localhost:3030/topics/${params.courseId}`
        );
        console.log(response.data)
        setTopic(response.data);
      } catch (error) {
        console.log(error, "error");
      }
    };

    fetchTopics();
  }, [params.courseId]);

  return (
    <div className="p-6 max-w-sm">
        <div>        
              <h2 className="text-3xl font-semibold mb-2">{topic?.title}</h2>
          <div>
            <p className="text-gray-700">{topic?.content}</p>
            <img
              src={topic?.imageUrl}
              alt={topic?.title}
              className=""
            />
            <div className="mt-4">
              <a
                href={topic?.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold hover:underline"
              >
                {topic?.docsUrl}
              </a>
              <br />
              <iframe
                src={topic?.videoUrl}
                width={1000}
                height={500}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
              >
                Video Tutorial
              </iframe>
            </div>
          </div>
        </div>
    </div>
  );
}
