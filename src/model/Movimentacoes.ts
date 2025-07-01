import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Movimentacoes{
    @PrimaryGeneratedColumn()
    id?: number;
    @ManyToOne(() => User, (user) => user.movimentacoes)
    usuario?: User;
    @Column()
    nome?: string;
    @Column()
    categoria?: string;
    @Column()
    data?: Date;
    @Column("decimal")
    valor?: number;
    @Column()
    tipo?: string;
}