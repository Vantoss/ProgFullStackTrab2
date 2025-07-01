import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Lancamentos{
    @PrimaryGeneratedColumn()
    id?: number;
    @ManyToOne(() => User, (user) => user.lancamentos)
    usuario?: User;
    @Column()
    nome?: string;
    @Column()
    categoria?: string;
    @Column()
    prazo?: Date
    @Column("decimal")
    valor?: number;
}