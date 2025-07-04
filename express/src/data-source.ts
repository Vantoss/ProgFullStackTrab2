import { DataSource } from "typeorm";
import { Movimentacoes } from "./model/Movimentacoes";
import { Lancamentos } from "./model/Lancamentos";
import { User } from "./model/User";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "financasfs",
    synchronize: true,
    logging: true,
    entities: [User, Movimentacoes, Lancamentos],
    subscribers: [],
    migrations: [],
})