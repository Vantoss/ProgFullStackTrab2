import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Movimentacoes } from "./Movimentacoes";
import { Lancamentos } from "./Lancamentos";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id?: number;
    @Column()
    nome?: string;
    @Column()
    senha?: string;
    @OneToMany(() => Movimentacoes, (movi) => movi.usuario)
    movimentacoes?: Movimentacoes[]
    @OneToMany(() => Lancamentos, (lanc) => lanc.usuario)
    lancamentos?: Lancamentos[]
}