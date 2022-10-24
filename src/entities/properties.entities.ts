import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";

import { Schedules } from "./shedule.entities";

import { Category } from "./categories.entities";

import { Address } from "./adress.entities";

@Entity("properties")
class Property {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ default: false })
  sold: boolean;
  @Column({ type: "decimal", precision: 12, scale: 2 })
  value: number;
  @Column()
  size: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @ManyToOne(() => Category, (category) => category.property)
  categoryId: Category;
  @OneToMany(() => Schedules, (Schedules) => Schedules.propertieId)
  Schedules: Schedules;
  @OneToOne(() => Address, { eager: true })
  @JoinColumn()
  addressId: Address;
}

export { Property };
