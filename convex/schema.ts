import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  sport_specifics: defineTable({
    value: v.string(),
    label: v.string(),
  }),
  users: defineTable({
    username: v.string(),
    password: v.string(),
    sportType: v.optional(v.string()),
  }),
});
