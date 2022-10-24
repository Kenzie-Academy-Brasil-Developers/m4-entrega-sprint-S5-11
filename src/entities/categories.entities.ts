import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Property } from "./properties.entities";

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ length: 60, unique: true })
  name: string;
  @OneToMany(() => Property, (property) => property.categoryId)
  property: Property[];
}

export { Category };
