import { z } from "zod";
import { ISuperhero } from "./interface";

const SuperheroSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  superPower: z.string().nonempty({ message: "Superpower is required" }),
  humilityScore: z
    .number()
    .min(1, { message: "Humility score must be at least 1" })
    .max(10, { message: "Humility score must be at most 10" }),
});

export function validateSuperHero(params: Omit<ISuperhero, "id">) {
  const result = SuperheroSchema.safeParse(params);
  if (!result.success) {
    return {
      message: result.error.errors.map((err) => err.message).join(", "),
    };
  }
}
