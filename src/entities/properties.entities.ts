import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
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
  @Column({ precision: 12, scale: 2 })
  value: number;
  @Column({ type: "integer" })
  size: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @ManyToOne(() => Category)
  categoryId: Category[];
  @OneToMany(() => Schedules, (Schedules) => Schedules.propertyId)
  Schedules: Schedules;
  @OneToOne(() => Address)
  addressId: Address;
}

export { Property };
