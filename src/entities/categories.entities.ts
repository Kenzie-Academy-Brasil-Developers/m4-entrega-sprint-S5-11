import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ length: 60 })
  name: string;
}

export { Category };
