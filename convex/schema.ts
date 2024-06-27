import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  sport_specifics: defineTable({
    value: v.string(),
    label: v.string(),
  }),
});
