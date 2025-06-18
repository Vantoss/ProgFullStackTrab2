import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Despesa{
    @PrimaryGeneratedColumn()
    id?: number;
    @Column()
    tipo?: string;
    @Column()
    data?: Date;
    @Column("decimal")
    valor?: number;
}