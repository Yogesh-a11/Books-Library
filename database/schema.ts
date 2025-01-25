
import { integer, date, varchar , text, boolean, pgTable, uuid, pgEnum, timestamp } from "drizzle-orm/pg-core";

export const STATUS_ENUM = pgEnum('status', ['PENDING', 'APPROVED', 'REJECTED']);
export const ROLE_ENUM = pgEnum('role', ['ADMIN', 'USER']);
export const BORROW_STATUS_ENUM = pgEnum('borrow_status', ['BORROWED', 'RETURNED']);

export const users = pgTable( "users", {
    id: uuid('id').notNull().primaryKey().defaultRandom().unique(),
    fullName: varchar("full_name").notNull(),
    email: text("email").notNull(),
    universityId: varchar("university_id").notNull().unique(),
    password: text("password").notNull(),
    universityCard: text("university_card").notNull(),
    status: STATUS_ENUM('status').default("PENDING"),
    role: ROLE_ENUM('role').default("USER"),
    lastActivityDate: date('last_activity_date').defaultNow(),
    createdAt: timestamp('created_at', {withTimezone: true}).defaultNow(),
})