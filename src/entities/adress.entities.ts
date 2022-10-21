import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Property } from "./properties.entities";

@Entity("addresses")
class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ length: 60 })
  district: string;
  @Column({ length: 120 })
  zipCode: string;
  @Column({ length: 60 })
  number: string;
  @Column({ length: 60 })
  city: string;
  @Column({ length: 60 })
  state: string;
  @OneToOne(() => Property, (Property) => Property.addressId)
  Property: Property;
}

export { Address };
