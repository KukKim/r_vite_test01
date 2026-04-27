import { useState, useEffect } from "react";
import { fetchProjectsItems } from "../features/firebase";
import type { Project } from "../types/project";

export default function useProjectItems() {
  const [projectItems, setProjectItems] = useState<Project[]>([]);
  useEffect(() => {
    fetchProjectsItems().then((items) => {
      setProjectItems(items);
    });
  }, []);

  return { projectItems, setProjectItems };
}
