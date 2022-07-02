import { Vote } from "src/entity/vote.entity";
import Mysql from '../mysql';

export const voteRepository = Mysql.getRepository(Vote);