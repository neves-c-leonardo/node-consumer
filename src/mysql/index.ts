import 'reflect-metadata';
import { DataSource, TreeRepository } from 'typeorm';
import { Candidate } from 'src/entity/candidate.entity';
import { Vote } from 'src/entity/vote.entity';
import configs from 'src/configs';

const AppDataSource = new DataSource({
  ...(configs.mysql as any),
  synchronize: true,
  entities: [Candidate, Vote],
  migrations: [],
  subscribers: []
})

AppDataSource.initialize()
  .then(() => {
    console.log('MYSQL conectado com sucesso');
  }).catch((error) => {
    console.error('Falha ao acessar o MYSQL');
    console.error(error);
  })

export default AppDataSource;