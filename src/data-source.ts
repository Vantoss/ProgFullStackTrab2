import { DataSource } from "typeorm";
import { Despesa } from "./model/Despesa";
import { Conta } from "./model/Conta";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "financasfs",
    synchronize: true,
    logging: true,
    entities: [Despesa, Conta],
    subscribers: [],
    migrations: [],
})