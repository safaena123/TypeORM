import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    _id: number;

    @Column()
    name: String;

    @Column()
    price: number;

} 
