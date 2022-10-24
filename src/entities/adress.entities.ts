import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Property } from "./properties.entities";

@Entity("addresses")
class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ length: 60 })
  district: string;
  @Column({ length: 8 })
  zipCode: string;
  @Column({ length: 60, nullable: true })
  number: string;
  @Column({ length: 60 })
  city: string;
  @Column({ length: 2 })
  state: string;
}

export { Address };
