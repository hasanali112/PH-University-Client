import { z } from "zod";

export const academicSemesterSchema = z.object({
  name: z.string({
    required_error: "Please Selece a name",
  }),
  year: z.string({
    required_error: "Please Selece a year",
  }),
  startMonth: z.string({
    required_error: "Please Selece a start month",
  }),
  endMonth: z.string({
    required_error: "Please Selece a end month",
  }),
});
