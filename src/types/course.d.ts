export interface Course {
  course_id: string;
  img_url: "/course1.png" | "/course2.png" | "/course3.png";
  title: string;
  semester: string; //format 2022/Intl 2nd semester, yyyy/Intl 1st or 2nd semester
  professor: string;
  expire_in: string; //format dd/mm/yyyy
  status: "evaluated" | "not-evaluate";
}
