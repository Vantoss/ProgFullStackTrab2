import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Conta{
    @PrimaryGeneratedColumn()
    id?: number;
    @Column()
    tipo?: string;
    @Column()
    prazo?: Date
    @Column("decimal")
    valor?: number;
}